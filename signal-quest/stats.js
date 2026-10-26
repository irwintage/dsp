/* Signal Quest V7.4 - resilient local progress dashboard. */
(()=>{'use strict';
const KEY='signalQuestTrainingStatsV1';
const fresh=()=>({sprint:{sessions:0,answered:0,correct:0,best:0},match:{sessions:0,completed:0,bestTime:null,mastered:[]},builder:{completed:0,mastered:[]}});
let data=fresh();
try {const saved=JSON.parse(localStorage.getItem(KEY)||'{}');for(const k of Object.keys(data))data[k]={...data[k],...(saved[k]||{})};}catch(e){console.warn('Stats: sauvegarde illisible',e)}
for(const k of ['match','builder'])if(!Array.isArray(data[k].mastered))data[k].mastered=[];
function seenCount(){try{const a=JSON.parse(localStorage.getItem('signalSprintSeen')||'[]');return Array.isArray(a)?a.length:0}catch{return 0}}
function render(){
const s=seenCount();const items=[
['questSprintStats','⚡ SIGNAL SPRINT',`${data.sprint.sessions} sessions · ${data.sprint.answered} réponses · ${data.sprint.answered?Math.round(data.sprint.correct/data.sprint.answered*100):0}% de réussite`,s,250,'questions découvertes'],
['questMatchStats','🔗 SYMBOL MATCH',`${data.match.sessions} manches · ${data.match.completed} réussies · record ${data.match.bestTime==null?'—':data.match.bestTime+' s'}`,data.match.mastered.length,100,'associations maîtrisées'],
['questBuilderStats','∑ FORMULA BUILDER',`${data.builder.completed} validations · ${data.builder.mastered.length} formules différentes`,data.builder.mastered.length,50,'formules maîtrisées']];
for(const [id,title,description,count,total,unit] of items){const el=document.getElementById(id);if(!el)continue;const n=Math.max(0,Math.min(total,count));el.replaceChildren();el.classList.add('questStatCard');const head=document.createElement('div');head.className='questStatHead';const label=document.createElement('strong');label.textContent=title;const amount=document.createElement('b');amount.textContent=`${n} / ${total}`;head.append(label,amount);const desc=document.createElement('p');desc.textContent=description;const track=document.createElement('div');track.className='questProgressTrack';track.setAttribute('role','progressbar');track.setAttribute('aria-label',unit);track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax',String(total));track.setAttribute('aria-valuenow',String(n));const fill=document.createElement('i');fill.style.width=`${n/total*100}%`;track.append(fill);const footer=document.createElement('small');footer.textContent=`${Math.round(n/total*100)}% · ${unit}`;el.append(head,desc,track,footer)}
}
function record(kind,p={}){if(kind==='sprint'){data.sprint.sessions++;data.sprint.answered+=Number(p.answered)||0;data.sprint.correct+=Number(p.correct)||0;data.sprint.best=Math.max(data.sprint.best,Number(p.correct)||0)}else if(kind==='match'){data.match.sessions++;if(p.completed){data.match.completed++;if(Number.isFinite(p.time))data.match.bestTime=data.match.bestTime==null?p.time:Math.min(data.match.bestTime,p.time)}for(const id of p.ids||[])if(!data.match.mastered.includes(id))data.match.mastered.push(id)}else if(kind==='builder'){data.builder.completed++;if(p.id!=null&&!data.builder.mastered.includes(p.id))data.builder.mastered.push(p.id)}try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){console.warn('Stats: impossible de sauvegarder',e)}render()}
window.QuestStats={record,render,reset(){data=fresh();try{localStorage.removeItem(KEY)}catch{}render()}};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render,{once:true});else render();
})();
