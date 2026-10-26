/* Visual-only celebrations; no game logic or stored progress is changed. */
(()=>{'use strict';

function celebrate(kind,target){if(!target)return;
 const r=target.getBoundingClientRect();if(!r.width||!r.height)return;
 const x=r.left+r.width/2,y=r.top+r.height/2;
 const layer=document.createElement('div');layer.className='questFxLayer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 const ring=document.createElement('i');ring.className='questFxRing';ring.style.left=x+'px';ring.style.top=y+'px';layer.append(ring);
 const count=kind==='perfect'?36:kind==='level'?26:kind==='match'?22:kind==='formula'?16:kind==='combo'?12:7;
 for(let i=0;i<count;i++){
  const el=document.createElement('i');el.className='questFxSpark';
  const a=2*Math.PI*i/count+Math.random()*.25,dist=(kind==='pair'?32:kind==='combo'?55:90)+Math.random()*75;
  el.style.left=x+'px';el.style.top=y+'px';el.style.setProperty('--dx',Math.cos(a)*dist+'px');el.style.setProperty('--dy',Math.sin(a)*dist+'px');el.style.setProperty('--delay',Math.random()*110+'ms');layer.append(el);
 }
 if(['perfect','level','match'].includes(kind)){
  const label=document.createElement('span');label.className='questFxLabel';label.textContent=kind==='perfect'?'✦ PERFECT ✦':kind==='level'?'✦ LEVEL UP ✦':'✦ MATCH COMPLETE ✦';label.style.left=x+'px';label.style.top=Math.max(42,y-48)+'px';layer.append(label);
 }
 target.classList.remove('questFxGlow');void target.offsetWidth;target.classList.add('questFxGlow');
 setTimeout(()=>{layer.remove();target.classList.remove('questFxGlow')},1300);
}
window.QuestCelebrate=celebrate;
})();
