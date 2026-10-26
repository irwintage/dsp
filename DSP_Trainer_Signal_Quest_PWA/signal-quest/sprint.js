/* Signal Sprint · 50 validated DSP vocabulary entries × 5 learning directions = 250 questions. */
(()=>{'use strict';
const entries=[
['φ','Angle de phase','x(t) = A sin(2πft + φ)','Décalage angulaire dans un cycle sinusoïdal'],
['ω','Pulsation','ω = 2πf','Fréquence exprimée en radians par seconde'],
['f','Fréquence','f = 1/T','Nombre de cycles par seconde'],
['T','Période','T = 1/f','Durée d’un cycle complet'],
['λ','Longueur d’onde','λ = v/f','Distance spatiale correspondant à un cycle de l’onde'],
['v','Vitesse de propagation','v = λf','Distance parcourue par une onde par seconde'],
['A','Amplitude sinusoïdale','x(t) = A sin(ωt)','Valeur de crête dans ce modèle sinusoïdal, avec A ≥ 0'],
['t','Temps continu','x(t)','Variable temporelle d’un signal à temps continu'],
['n','Indice d’échantillon','x[n]','Position entière d’un échantillon dans une suite'],
['x[n]','Signal à temps discret','x[n]','Signal repéré par des indices entiers'],
['x(t)','Signal à temps continu','x(t)','Signal défini sur un temps continu'],
['Fₛ','Fréquence d’échantillonnage','Fₛ = 1/Tₛ','Nombre d’échantillons prélevés par seconde'],
['Tₛ','Période d’échantillonnage','Tₛ = 1/Fₛ','Temps séparant deux échantillons successifs'],
['N','Nombre d’échantillons','N = Fₛ × duration','Nombre d’échantillons sur une durée donnée, sous réserve de la convention de comptage'],
['∑','Sommation','E = ∑ |x[n]|²','Addition de termes sur une plage d’indices'],
['∫','Intégration','∫ x(t) dt','Accumulation d’une grandeur continue'],
['d/dt','Dérivée temporelle','dx(t)/dt','Taux de variation par rapport au temps'],
['Δ','Différence arrière','Δx[n] = x[n] − x[n−1]','Différence entre deux échantillons voisins selon cette convention'],
['|x|','Valeur absolue','|−3| = 3','Valeur non négative d’un nombre réel sans son signe'],
['|x|²','Module au carré','E = ∑ |x[n]|²','Carré du module, toujours non négatif'],
['E','Énergie d’un signal','E = ∑ |x[n]|²','Somme des modules au carré de tous les échantillons'],
['P','Puissance moyenne d’un signal','P = lim(N→∞) (1/(2N+1)) ∑(n=−N…N) |x[n]|²','Moyenne à long terme des modules au carré d’un signal discret'],
['xᵣₘₛ','Valeur efficace (RMS)','xᵣₘₛ = √((1/N)∑(n=0…N−1)x[n]²)','Racine carrée de la moyenne des carrés de N échantillons réels'],
['dB','Décibel','L = 20 log₁₀(A₂/A₁)','Unité logarithmique de rapport ; 20 log₁₀ s’applique à des rapports d’amplitude compatibles'],
['log₁₀','Logarithme décimal','20 log₁₀(A₂/A₁)','Logarithme en base dix'],
['π','Pi','ω = 2πf','Constante du cercle utilisée dans les calculs angulaires'],
['j','Unité imaginaire','j² = −1','Nombre dont le carré vaut −1, noté j en ingénierie'],
['e','Base de l’exponentielle','e^(jφ)','Base de l’exponentielle naturelle'],
['e^(jφ)','Exponentielle complexe unitaire','e^(jφ) = cosφ + j sinφ','Rotation complexe de module un, décrite par l’identité d’Euler'],
['Re{z}','Partie réelle','Re{a + jb} = a','Extraction de la composante réelle d’un nombre complexe'],
['Im{z}','Partie imaginaire','Im{a + jb} = b','Extraction de la composante imaginaire d’un nombre complexe'],
['z*','Conjugué complexe','(a + jb)* = a − jb','Changement du signe de la partie imaginaire'],
['δ[n]','Impulsion unitaire discrète','δ[0] = 1, otherwise 0','Valeur égale à 1 à l’indice zéro et à 0 ailleurs'],
['u[n]','Échelon unitaire discret','u[n] = 1 for n ≥ 0','Signal valant 1 à partir de l’indice zéro et 0 avant'],
['h[n]','Réponse impulsionnelle','y[n] = x[n] * h[n]','Sortie d’un système linéaire invariant pour une impulsion unitaire'],
['*','Opérateur de convolution','y[n] = (x * h)[n]','Convolution de l’entrée et de la réponse impulsionnelle d’un système linéaire invariant'],
['y[n]','Signal de sortie','y[n] = x[n] * h[n]','Résultat produit par un système à temps discret'],
['z⁻¹','Retard unitaire','Y(z) = z⁻¹X(z)','Retard d’un échantillon dans le domaine Z, sous conditions initiales nulles'],
['H(z)','Fonction de transfert en Z','H(z) = Y(z)/X(z)','Rapport sortie/entrée d’un système linéaire invariant, sous conditions initiales nulles'],
['H(eʲω)','Réponse fréquentielle','H(eʲω)','Réponse du système selon la pulsation numérique'],
['X[k]','Coefficient de TFD','X[k] = ∑ x[n]e^(−j2πkn/N)','Coefficient associé à une case fréquentielle de la transformée de Fourier discrète'],
['k','Indice fréquentiel','X[k]','Indice d’une case fréquentielle discrète'],
['FFT','Transformée de Fourier rapide (FFT)','FFT(x[n])','Algorithme efficace pour calculer une transformée de Fourier discrète'],
['fₙ','Fréquence de Nyquist','fₙ = Fₛ/2','Moitié de la fréquence d’échantillonnage pour un échantillonnage uniforme'],
['f꜀','Fréquence de coupure','|H(f꜀)| = |H(passband)|/√2','Fréquence à −3 dB d’amplitude par rapport à la bande passante, selon la convention de demi-puissance'],
['Q','Facteur de qualité d’un filtre','Q = f₀/BW','Rapport de la fréquence centrale à la largeur de bande pour un passe-bande résonant'],
['BW','Largeur de bande','BW = f₂ − f₁','Étendue d’un intervalle de fréquences'],
['f₀','Fréquence centrale','Q = f₀/BW','Fréquence au centre d’une bande ou d’une résonance'],
['τ','Constante de temps','x(t) = e^(−t/τ)','Échelle de temps caractéristique d’une décroissance exponentielle'],
['ρ','Coefficient de corrélation','−1 ≤ ρ ≤ 1','Coefficient de Pearson mesurant la corrélation linéaire']];
const categories=['SYMBOLE → SENS','SENS → SYMBOLE','LIRE UNE FORMULE','RECONNAÎTRE UNE FORMULE','COMPRENDRE LA NOTATION'];
const all=[];
for(let i=0;i<entries.length;i++){
 const e=entries[i];
 all.push({id:i*5,cat:0,q:`Que représente généralement ${e[0]} dans ce contexte DSP ?`,answer:e[1],why:e[3],type:'meaning',entry:i});
 all.push({id:i*5+1,cat:1,q:`Quelle notation représente « ${e[1].toLowerCase()} » ?`,answer:e[0],why:e[3],type:'symbol',entry:i});
 all.push({id:i*5+2,cat:2,q:`Dans ${e[2]}, que représente ${e[0]} ?`,answer:e[1],why:e[3],type:'meaning',entry:i});
 all.push({id:i*5+3,cat:3,q:`Quelle expression illustre « ${e[1].toLowerCase()} » avec ${e[0]} ?`,answer:e[2],why:e[3],type:'formula',entry:i});
 all.push({id:i*5+4,cat:4,q:`Quelle description correspond à ${e[0]} ?`,answer:e[3],why:`${e[0]}: ${e[1]}`,type:'description',entry:i});
}
const $=s=>document.querySelector(s), random=n=>Math.floor(Math.random()*n), shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=random(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const distinct=(type,exclude,entry)=>{const pool=entries.map((e,i)=>({v:type==='meaning'?e[1]:type==='symbol'?e[0]:type==='formula'?e[2]:e[3],i})).filter(o=>o.i!==entry&&o.v!==exclude);return shuffle(pool).filter((o,i,a)=>a.findIndex(z=>z.v===o.v)===i).slice(0,2).map(o=>o.v)};
let seen=new Set();try{seen=new Set(JSON.parse(localStorage.getItem('signalSprintSeen')||'[]').filter(n=>Number.isInteger(n)&&n>=0&&n<250))}catch{}
const coverage=()=>{$('#sprintCoverage').textContent=`${seen.size} / 250 découvertes`};coverage();
let SESSION_LENGTH=10, TOTAL_TIME=150;
const selectLength=$('#sprintLength');
const configure=()=>{SESSION_LENGTH=Number(selectLength.value)||10;TOTAL_TIME=SESSION_LENGTH*15;remaining=TOTAL_TIME;timeUI();$('#sprintWelcomeText').textContent=`${SESSION_LENGTH} questions en ${TOTAL_TIME} secondes maximum. Un sans-faute déclenche une célébration spéciale.`};
let order=[],index=0,correct=0,wrong=0,combo=0,remaining=150,deadline=0,interval=null,advance=null,active=false,locked=false;
const timeUI=()=>{const t=Math.max(0,remaining);$('#sprintClock').textContent=`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;$('#sprintClock').classList.toggle('urgent',t<=10);$('#sprintTimeFill').style.width=`${t/TOTAL_TIME*100}%`;$('#sprintTimeFill').classList.toggle('urgent',t<=10)};
const next=()=>{if(!active)return;if(index>=SESSION_LENGTH){stop();return}const q=all[order[index++]];seen.add(q.id);try{localStorage.setItem('signalSprintSeen',JSON.stringify([...seen]))}catch{}coverage();locked=false;$('#sprintTag').textContent=`${categories[q.cat]} · QUESTION ${correct+wrong+1}`;$('#sprintQuestion').textContent=q.q;$('#sprintFeedback').textContent='';$('#sprintFeedback').className='sprintFeedback';const opts=shuffle([q.answer,...distinct(q.type,q.answer,q.entry)]);const box=$('#sprintAnswers');box.replaceChildren();opts.forEach((option,i)=>{const b=document.createElement('button');b.className='sprintAnswer';const k=document.createElement('kbd');k.textContent=String.fromCharCode(65+i);const label=document.createElement('span');label.textContent=option;b.append(k,label);b.onclick=()=>answer(q,option,b);box.append(b)})};
function confetti(){const box=$('#sprintEnd').getBoundingClientRect();const cx=box.left+box.width/2,cy=box.top+box.height/2;const colors=['#a9f27c','#66dca4','#f9d78b','#edf8ec','#9bcead'];for(let i=0;i<27;i++){const el=document.createElement('i');el.className='confettiPiece';const angle=Math.PI*2*i/27+Math.random()*.3,dist=70+Math.random()*145;el.style.setProperty('--cx',cx+'px');el.style.setProperty('--cy',cy+'px');el.style.setProperty('--dx',Math.cos(angle)*dist+'px');el.style.setProperty('--dy',Math.sin(angle)*dist+85+'px');el.style.setProperty('--rot',(Math.random()*900-450)+'deg');el.style.setProperty('--cc',colors[i%colors.length]);$('#confettiLayer').append(el);setTimeout(()=>el.remove(),2600)}}
function answer(q,value,b){if(!active||locked)return;locked=true;const ok=value===q.answer;correct+=+ok;wrong+=+!ok;combo=ok?combo+1:0;$('#sprintCorrect').textContent=correct;$('#sprintCombo').textContent='×'+combo;if(ok&&combo>0&&combo%5===0)window.QuestCelebrate?.('combo',document.querySelector('#sprintCombo'));[...$('#sprintAnswers').children].forEach(el=>{el.disabled=true;if(el.querySelector('span').textContent===q.answer)el.classList.add('good')});if(!ok)b.classList.add('bad');$('#sprintFeedback').className='sprintFeedback '+(ok?'good':'bad');$('#sprintFeedback').textContent=(ok?'✓ Bonne réponse !':'✕ Bonne réponse indiquée en vert');advance=setTimeout(()=>{if(correct+wrong>=SESSION_LENGTH)stop();else next()},550)}
function stop(){if(!active)return;active=false;clearInterval(interval);clearTimeout(advance);remaining=Math.max(0,Math.ceil((deadline-performance.now())/1000));timeUI();$('#sprintPlaying').classList.add('hidden');$('#sprintEnd').classList.remove('hidden');const total=correct+wrong;window.QuestStats?.record('sprint',{answered:total,correct});$('#sprintResult').textContent=`${correct} / ${SESSION_LENGTH} bonnes réponses`;$('#sprintSummary').textContent=`${total} questions · ${total?Math.round(correct/total*100):0} % de réussite · ${seen.size} / 250 découvertes`;if(total===SESSION_LENGTH&&wrong===0){$('#sprintResult').textContent='✦ SPRINT PARFAIT ✦';$('#sprintEnd').classList.add('perfectVictory');$('#sprintSummary').textContent=`${correct} / ${total} bonnes réponses · 100 % de réussite · ${seen.size} / 250 découvertes`;confetti();window.QuestCelebrate?.("perfect",document.querySelector("#sprintEnd"))}}
function start(){clearInterval(interval);clearTimeout(advance);correct=wrong=combo=index=0;remaining=TOTAL_TIME;active=true;locked=false;$('#sprintCorrect').textContent='0';$('#sprintCombo').textContent='×0';$('#sprintWelcome').classList.add('hidden');$('#sprintEnd').classList.add('hidden');$('#sprintEnd').classList.remove('perfectVictory');$('#sprintPlaying').classList.remove('hidden');order=shuffle(all.map(q=>q.id)).slice(0,SESSION_LENGTH);deadline=performance.now()+TOTAL_TIME*1000;timeUI();next();interval=setInterval(()=>{remaining=Math.max(0,Math.ceil((deadline-performance.now())/1000));timeUI();if(remaining<=0)stop()},100)}
selectLength.addEventListener('change',configure);configure();$('#sprintStart').onclick=start;$('#sprintAgain').onclick=start;
const tabs=[...document.querySelectorAll('.modeTab')];tabs.forEach(tab=>tab.onclick=()=>{const mode=tab.dataset.mode;tabs.forEach(t=>t.classList.toggle('active',t===tab));['map','sprint','match','builder'].forEach(m=>$('#'+m+'Mode').classList.toggle('hidden',m!==mode));if(mode!=='sprint'&&active)stop();if(mode==='map')window.dispatchEvent(new Event('resize'));window.dispatchEvent(new CustomEvent('quest-mode',{detail:{mode}}))});
})();
