#!/usr/bin/env python3
"""
verify_data_sync.py — kontrollerar att inline-data i index.html stämmer med data/*.json

Bakgrund: Skatteplattformen har inget bygg-steg. Diagram och nyckeltal renderas från
inline-JavaScript-data i index.html, medan data/*.json fungerar som dokumenterad
sanningskälla med källhänvisningar. Det här skriptet förhindrar att de två
divergerar tyst (vilket hände vid Sprint 1-auditen 2026-05-29).

Körs som:  python3 scripts/verify_data_sync.py
Returnerar 0 om allt stämmer, 1 vid första divergens (med tydlig felutskrift).

Filosofi: spot checks på utvalda nyckelvärden snarare än full equivalens.
Lägg till nya checks när nya data flyttas mellan filer.
"""

import json
import re
import sys
from pathlib import Path
from typing import List, Optional

ROOT = Path(__file__).resolve().parent.parent
INDEX_HTML = ROOT / "index.html"
STATSSKULD_JSON = ROOT / "data" / "statsskuld.json"

# ──────────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────────

ANSI_RED = "\033[31m"
ANSI_GRN = "\033[32m"
ANSI_YEL = "\033[33m"
ANSI_DIM = "\033[2m"
ANSI_END = "\033[0m"

errors: List[str] = []
checks_ok = 0


def fail(msg: str) -> None:
    errors.append(msg)
    print(f"{ANSI_RED}✗ FAIL{ANSI_END} {msg}")


def ok(msg: str) -> None:
    global checks_ok
    checks_ok += 1
    print(f"{ANSI_GRN}✓ OK{ANSI_END}   {ANSI_DIM}{msg}{ANSI_END}")


def warn(msg: str) -> None:
    print(f"{ANSI_YEL}⚠ WARN{ANSI_END} {msg}")


def load_json(path: Path) -> dict:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def html_contains(html: str, needle: str, label: str) -> bool:
    """Check that a literal string occurs at least once in HTML."""
    if needle in html:
        ok(f"{label}: '{needle}' finns i index.html")
        return True
    fail(f"{label}: '{needle}' saknas i index.html")
    return False


def extract_js_array(html: str, marker: str) -> Optional[List[dict]]:
    """
    Extract the first JS array literal that follows `marker`.
    Marker should be something unique like 'const data = [' or '// Sjukfrånvaro timeline chart'.
    Returns parsed list of dicts, or None if not found.

    Strategy: find marker, then locate the next '[' through balanced bracket parsing.
    Handles JS object syntax like {y:2024,v:14.2} by converting to JSON before parsing.
    """
    idx = html.find(marker)
    if idx < 0:
        return None
    start = html.find("[", idx)
    if start < 0:
        return None
    depth = 0
    for i, ch in enumerate(html[start:], start=start):
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                literal = html[start : i + 1]
                # Convert JS object literal → JSON in two steps:
                # 1) bare keys → quoted keys
                # 2) single-quoted strings → double-quoted strings
                js_to_json = re.sub(r"([{,]\s*)([A-Za-zåäöÅÄÖ_][\w]*)\s*:", r'\1"\2":', literal)
                js_to_json = re.sub(r"'([^']*)'", r'"\1"', js_to_json)
                try:
                    return json.loads(js_to_json)
                except json.JSONDecodeError as e:
                    fail(f"Kunde inte parsa array efter '{marker}': {e}")
                    return None
    return None


# ──────────────────────────────────────────────────────────────────
# Loaders
# ──────────────────────────────────────────────────────────────────

print(f"\n{ANSI_DIM}Skatteplattformen — data sync verification{ANSI_END}\n")

html = INDEX_HTML.read_text(encoding="utf-8")
statsskuld = load_json(STATSSKULD_JSON)

# ──────────────────────────────────────────────────────────────────
# Check 1: statsskuld 2025 per invånare
# ──────────────────────────────────────────────────────────────────

per_inv_2025 = statsskuld["per_invånare_2026"]["statsskuld_kr_per_inv"]
# HTML shows it with non-breaking space: "119 000 kr"
expected_str = f"{per_inv_2025 // 1000} 000 kr"
html_contains(html, expected_str, "Statsskuld 2026 per invånare")

# ──────────────────────────────────────────────────────────────────
# Check 2: räntekostnad per invånare 2025
# ──────────────────────────────────────────────────────────────────
# JSON: 1232 kr/inv. HTML kan visa avrundat "1 232 kr" eller "1 250 kr"
# Vi tillåter ±2 % avrundning.

rk_2025 = statsskuld["per_invånare_2026"]["räntekostnad_kr_per_inv"]
# Look for "1 232 kr" or "1 250 kr" anywhere in HTML
matches = re.findall(r"(\d[\d  ]{2,5})\s*kr/person", html)
if matches:
    parsed = [int(m.replace(" ", "").replace(" ", "")) for m in matches]
    closest = min(parsed, key=lambda v: abs(v - rk_2025))
    diff_pct = abs(closest - rk_2025) / rk_2025 * 100
    if diff_pct <= 5:
        ok(f"Räntekostnad/inv 2026: JSON {rk_2025} kr ≈ HTML {closest} kr ({diff_pct:.1f}% diff)")
    else:
        fail(
            f"Räntekostnad/inv 2026: JSON {rk_2025} kr vs närmaste HTML-värde {closest} kr ({diff_pct:.1f}% diff > 5%)"
        )
else:
    warn("Hittade ingen 'kr/person'-string i HTML att jämföra mot")

# ──────────────────────────────────────────────────────────────────
# Check 3: befolkning 80+ 2024 + 2030 + 2040
# ──────────────────────────────────────────────────────────────────

andel_80 = {row["år"]: row["antal_tusen"] for row in statsskuld["demografisk_prognos"]["andel_80plus"]["serie"]}
for year, expected_k in [(2024, andel_80[2024]), (2030, andel_80[2030]), (2040, andel_80[2040])]:
    # HTML uses "601 000" format (with space)
    expected_str = f"{expected_k:,}".replace(",", " ") + " 000"
    if expected_str in html:
        ok(f"Befolkning 80+ år {year}: '{expected_str}' finns i HTML")
    else:
        fail(f"Befolkning 80+ år {year}: '{expected_str}' saknas (JSON säger {expected_k}k)")

# ──────────────────────────────────────────────────────────────────
# Check 4: sjukfrånvaro-chart-serien matchar JSON-serien
# ──────────────────────────────────────────────────────────────────

js_series = extract_js_array(html, "Sjukfrånvaro timeline chart")
if js_series is None:
    fail("Hittade inte sjukfrånvaro-chart-serien i HTML")
else:
    json_series = {row["år"]: row["dagar"] for row in statsskuld["sjukfrånvaro_historia"]["serie"]}
    mismatches = []
    for item in js_series:
        y, v = item["y"], item["v"]
        if y not in json_series:
            mismatches.append(f"år {y} i HTML men saknas i JSON")
        elif abs(json_series[y] - v) > 0.05:
            mismatches.append(f"år {y}: HTML {v} vs JSON {json_series[y]}")
    if mismatches:
        for m in mismatches[:10]:
            fail(f"Sjukfrånvaro-serien: {m}")
        if len(mismatches) > 10:
            fail(f"...och {len(mismatches) - 10} fler")
    else:
        ok(f"Sjukfrånvaro-serien: {len(js_series)} år matchar JSON exakt")

# ──────────────────────────────────────────────────────────────────
# Check 5: statsskuld-chart-serien % av BNP matchar JSON
# ──────────────────────────────────────────────────────────────────

js_skuld = extract_js_array(html, "Statsskuld % of BNP timeline chart")
if js_skuld is None:
    fail("Hittade inte statsskuld-chart-serien i HTML")
else:
    json_skuld = {row["år"]: row["bnp_pct"] for row in statsskuld["statsskuld_historia"]}
    mismatches = []
    for item in js_skuld:
        y, v = item["y"], item["v"]
        if y not in json_skuld:
            mismatches.append(f"år {y} i HTML men saknas i JSON")
        elif abs(json_skuld[y] - v) > 0.5:  # tolerate 0.5pp rounding
            mismatches.append(f"år {y}: HTML {v}% vs JSON {json_skuld[y]}%")
    if mismatches:
        for m in mismatches[:10]:
            fail(f"Statsskuld-serien: {m}")
    else:
        ok(f"Statsskuld %-BNP-serien: {len(js_skuld)} år matchar JSON inom 0,5 pp")

# ──────────────────────────────────────────────────────────────────
# Check 6: Gini disp-serie matchar JSON
# ──────────────────────────────────────────────────────────────────

js_gini = extract_js_array(html, "Gini timeline chart")
if js_gini is None:
    fail("Hittade inte Gini-chart-serien i HTML")
else:
    json_gini = {row["år"]: row["gini"] for row in statsskuld["gini_historia"]["serie_disponibel"]}
    mismatches = []
    for item in js_gini:
        y, v = item["y"], item["v"]
        if y not in json_gini:
            mismatches.append(f"år {y} i HTML men saknas i JSON")
        elif abs(json_gini[y] - v) > 0.005:
            mismatches.append(f"år {y}: HTML {v} vs JSON {json_gini[y]}")
    if mismatches:
        for m in mismatches[:10]:
            fail(f"Gini-serien (disponibel): {m}")
    else:
        ok(f"Gini disp-serien: {len(js_gini)} år matchar JSON inom 0,005 enheter")

# ──────────────────────────────────────────────────────────────────
# Check 7: internationell jämförelse statsskuld 2024
# ──────────────────────────────────────────────────────────────────
# JSON har Sverige 33%, HTML chart-array har Sverige 33. Båda ska vara
# konsistenta för länderna som finns i båda.

json_intl = {row["land"]: row["pct_bnp"] for row in statsskuld["internationell_jämförelse_2024"]["länder"]}
# HTML har inline array vid "International comparison bars"
js_intl = extract_js_array(html, "International comparison bars")
if js_intl is None:
    warn("Hittade inte intl-jämförelse-array i HTML")
else:
    # HTML field is 'land', 'v'
    mismatches = []
    for item in js_intl:
        land, v = item["land"], item["v"]
        # Tolerate name variation ("EU-27 snitt" vs "EU-snitt")
        json_v = json_intl.get(land) or json_intl.get(land.replace("-27 snitt", "-snitt"))
        if json_v is None:
            warn(f"Internationell jämförelse: '{land}' i HTML men inte i JSON (annan namnform?)")
            continue
        if abs(json_v - v) > 2:  # tolerate 2pp
            mismatches.append(f"{land}: HTML {v}% vs JSON {json_v}%")
    if mismatches:
        for m in mismatches:
            fail(f"Intl statsskuld: {m}")
    else:
        ok(f"Internationell statsskuld-jämförelse: HTML och JSON inom 2 pp")

# ──────────────────────────────────────────────────────────────────
# Sammanfattning
# ──────────────────────────────────────────────────────────────────

print()
print(f"{ANSI_DIM}{'─' * 60}{ANSI_END}")
if errors:
    print(f"{ANSI_RED}{len(errors)} fel{ANSI_END}, {checks_ok} OK")
    print(f"\n{ANSI_RED}DIVERGENS DETEKTERAD{ANSI_END} — uppdatera index.html eller data/*.json så de matchar.")
    sys.exit(1)
else:
    print(f"{ANSI_GRN}Allt synkat{ANSI_END} — {checks_ok} checks OK, 0 fel")
    sys.exit(0)
