// Kontrastmätning (WCAG AA) för Skatteplattformen.
// Klistra in i webbläsarens konsol på sidan (eller kör via devtools). Returnerar antal text-
// element, antal under 4,5:1 (3:1 för stor text) och de vanligaste fallen grupperade per färg.
// Dolda flikar mäts inte; visa dem först med t.ex.
//   document.head.insertAdjacentHTML('beforeend','<style>.ft-panel,.oecd-panel{display:block!important}</style>')
(() => {
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if(!m) return null; const p = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return {r:p[0],g:p[1],b:p[2],a:p.length>3?p[3]:1}; };
  const lum = ({r,g,b}) => { const f = v => { v/=255; return v<=.03928? v/12.92 : Math.pow((v+.055)/1.055,2.4); }; return .2126*f(r)+.7152*f(g)+.0722*f(b); };
  const blend = (fg, bg) => ({r:fg.r*fg.a+bg.r*(1-fg.a), g:fg.g*fg.a+bg.g*(1-fg.a), b:fg.b*fg.a+bg.b*(1-fg.a), a:1});
  function bgOf(el){
    const stack=[]; let e=el;
    while(e && e.nodeType===1){ const cs=getComputedStyle(e); const c=parse(cs.backgroundColor); if(c && c.a>0) stack.push(c); if(cs.backgroundImage!=='none' && !stack.length) return null; e=e.parentElement; }
    let bg={r:255,g:255,b:255,a:1}; for(let i=stack.length-1;i>=0;i--) bg=blend(stack[i],bg); return bg;
  }
  const res={}; let total=0, fails=0;
  const walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen=new Set();
  while(walker.nextNode()){
    const n=walker.currentNode; if(!n.nodeValue.trim()) continue;
    const el=n.parentElement; if(seen.has(el)) continue; seen.add(el);
    if(el.closest('svg,script,style,noscript,[hidden],[aria-hidden="true"]')) continue;
    const cs=getComputedStyle(el); if(cs.visibility==='hidden' || cs.display==='none') continue;
    const r=el.getBoundingClientRect(); if(!r.width || !r.height) continue;
    const bg=bgOf(el); if(!bg) continue;
    let fg=parse(cs.color); if(!fg) continue; fg=blend({...fg, a:fg.a*parseFloat(cs.opacity||1)}, bg);
    const L1=lum(fg), L2=lum(bg), cr=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
    const size=parseFloat(cs.fontSize), bold=parseInt(cs.fontWeight)>=700, large=size>=24||(size>=18.66&&bold);
    total++;
    if(cr < (large?3:4.5)){ fails++; const sec=(el.closest('section[id]')||{}).id||'-'; const k=cs.color+' on '+`rgb(${bg.r|0},${bg.g|0},${bg.b|0})`+' ['+sec+']'; res[k]=res[k]||{n:0,cr:cr.toFixed(2),ex:n.nodeValue.trim().slice(0,40),size}; res[k].n++; }
  }
  const list=Object.entries(res).sort((a,b)=>b[1].n-a[1].n).slice(0,60).map(([k,v])=>`${v.n}× ${v.cr}:1 ${v.size}px ${k} «${v.ex}»`);
  return {total, fails, list};
})()
