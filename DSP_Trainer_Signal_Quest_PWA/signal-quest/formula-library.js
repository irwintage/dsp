/* Formula Library: 50 contextual study sheets sourced from the 50 Formula Builder exercises. */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const descriptions=[
[
['Cycles par seconde','f : fréquence (Hz); T : période (s)','Une période de 0,01 s correspond à 100 Hz.','Ne pas multiplier f par T pour obtenir f.'],
['Durée d’un cycle','T : période (s); f : fréquence (Hz)','Un son à 50 Hz a une période de 0,02 s.','La période est une durée, pas une fréquence.'],
['Convertir une fréquence en pulsation','ω : pulsation (rad/s); f : fréquence (Hz); π : constante pi','À 100 Hz, ω ≈ 628,3 rad/s.','Distinguer rad/s et rad/échantillon.'],
['Calculer la distance parcourue pendant un cycle','λ : longueur d’onde (m); v : vitesse (m/s); f : fréquence (Hz)','Dans l’air à 340 m/s, 170 Hz donne λ = 2 m.','Ne pas confondre longueur d’onde et amplitude.'],
['Relier vitesse, fréquence et longueur d’onde','v : vitesse (m/s); λ : longueur d’onde (m); f : fréquence (Hz)','Une onde de 2 m à 170 Hz se propage à 340 m/s.','Utiliser des unités cohérentes.'],
['Connaître le nombre d’échantillons par seconde','Fₛ : fréquence d’échantillonnage (Hz); Tₛ : intervalle entre échantillons (s)','À 48 kHz, Tₛ ≈ 20,83 µs.','Fₛ ne désigne pas la fréquence de la note jouée.'],
['Trouver le temps entre deux échantillons','Tₛ : période d’échantillonnage (s); Fₛ : échantillons par seconde','À 1 000 Hz, un échantillon toutes les 1 ms.','Convertir les millisecondes en secondes.'],
['Calculer la taille d’un enregistrement','N : nombre d’échantillons; T : durée (s); Fₛ : fréquence d’échantillonnage (Hz)','2 s à 48 kHz représentent 96 000 échantillons par canal.','Ne pas oublier le nombre de canaux pour la taille totale.'],
['Modéliser un son sinusoïdal','x(t) : signal; A : amplitude; ω : pulsation; t : temps; φ : phase initiale','A = 1 et φ = 0 donnent une sinusoïde centrée en zéro.','La phase se mesure en radians dans cette écriture.'],
['Mesurer l’énergie totale d’un signal discret','E : énergie; ∑ : somme sur tous les n; x[n] : échantillon; | |² : module au carré','Pour [1, −2, 1], E = 1 + 4 + 1 = 6.','Ne pas diviser par N : ce serait une moyenne.'],
['Mesurer la puissance moyenne sur une fenêtre','P : puissance moyenne; N : nombre d’échantillons; ∑ : somme; x[n] : échantillon','Pour [1, −2, 1], P = 6/3 = 2.','La fenêtre et ses bornes doivent être définies.'],
['Calculer la valeur efficace','RMS : valeur efficace; N : taille de fenêtre; √ : racine; ∑ : somme','Pour [1, −1], RMS = 1.','Faire la moyenne des carrés avant la racine.'],
['Exprimer un rapport d’amplitudes en décibels','L : niveau relatif (dB); A₂/A₁ : rapport positif d’amplitudes; log₁₀ : logarithme décimal','Un rapport d’amplitude 2 donne ≈ +6,02 dB.','20 log₁₀ convient aux rapports d’amplitude compatibles.'],
['Exprimer un rapport de puissances en décibels','L : niveau relatif (dB); P₂/P₁ : rapport positif de puissances','Doubler la puissance donne ≈ +3,01 dB.','Pour des puissances, utiliser 10 et non 20.'],
['Relier nombres complexes et trigonométrie','eʲφ : exponentielle complexe; j² = −1; φ : angle; cos et sin : fonctions trigonométriques','Pour φ = 0, eʲ⁰ = 1.','Le module de eʲφ vaut 1 si φ est réel.'],
['Définir l’unité imaginaire','j : unité imaginaire, utilisée en électronique','j × j = −1.','j n’est pas une variable temporelle.'],
['Utiliser une identité trigonométrique','θ : angle; sin et cos : fonctions trigonométriques','Pour θ = 0, 0² + 1² = 1.','Les carrés portent sur sin et cos, pas sur θ.'],
['Mesurer la variation entre deux échantillons','Δx[n] : différence arrière; x[n] : valeur actuelle; x[n−1] : précédente','Si x[n] = 5 et x[n−1] = 3, Δx[n] = 2.','L’ordre de soustraction change le signe.'],
['Identifier l’impulsion unitaire discrète','δ[0] : valeur de l’impulsion à l’origine','L’impulsion vaut 1 à n = 0 et 0 ailleurs.','Cette égalité seule ne décrit pas les autres indices.'],
['Localiser une impulsion décalée','δ[n−k] : impulsion déplacée; n : indice; k : position','δ[n−5] vaut 1 à n = 5.','Un signe moins dans n−k décale vers +k.'],
['Trouver la limite de fréquence représentable','fₙ : fréquence de Nyquist (Hz); Fₛ : fréquence d’échantillonnage','À 48 kHz, fₙ = 24 kHz.','Nyquist n’est pas la fréquence d’échantillonnage.'],
['Choisir une fréquence d’échantillonnage idéale','Fₛ : échantillons par seconde; fₘₐₓ : fréquence maximale du signal','Un signal limité à 20 kHz peut être échantillonné à 48 kHz.','En pratique, les filtres anti-repliement exigent une bande de transition.'],
['Convertir une durée en secondes','tₛ : durée en secondes; tₘₛ : durée en millisecondes','250 ms = 0,25 s.','Ne pas multiplier par 1000 dans ce sens.'],
['Vérifier la relation période-fréquence','f : fréquence (Hz); T : période (s)','100 Hz × 0,01 s = 1.','Les unités doivent être Hz et secondes.'],
['Retirer le signe d’un réel négatif','a : nombre réel non négatif; | | : valeur absolue','Si a = 3, |−3| = 3.','Cette expression suppose a ≥ 0.']
],
[
['Calculer la sortie d’un système LTI','y[n] : sortie; x[k] : entrée; h[n−k] : réponse impulsionnelle décalée; ∑ₖ : somme sur k','Pour x = [1, 1] et h = [1, 1], y = [1, 2, 1].','Il faut sommer les produits pour tous les indices utiles.'],
['Exprimer la convolution en notation compacte','x : entrée; h : réponse impulsionnelle; * : convolution; y : sortie','Une impulsion en entrée reproduit h en sortie.','Le symbole * signifie ici convolution, pas multiplication ordinaire.'],
['Passer une suite dans le domaine Z','X(z) : transformée en Z; x[n] : suite; z : variable complexe; ∑ₙ : somme','Pour δ[n], X(z) = 1.','La région de convergence compte.'],
['Décrire un système LTI dans le domaine Z','H(z) : fonction de transfert; Y(z) : sortie; X(z) : entrée','Pour un retard unitaire, H(z) = z⁻¹.','Supposer des conditions initiales nulles.'],
['Retarder une suite d’un échantillon','y[n] : sortie; x[n−1] : entrée précédente','Si x[0] = 1, la sortie retardée vaut 1 à n = 1.','n−1 représente un retard, pas une avance.'],
['Retarder une suite de k échantillons','k : entier positif; n : indice discret; x : entrée','Avec k = 3, y[n] = x[n−3].','Ne pas inverser le signe du décalage.'],
['Obtenir la réponse en fréquence depuis H(z)','H(eʲω) : réponse fréquentielle; ω : pulsation numérique; z : variable complexe','Pour H(z) = z⁻¹, H(eʲω) = e⁻ʲω.','Le cercle unité doit appartenir à la région de convergence.'],
['Décomposer N échantillons en composantes fréquentielles','X[k] : coefficient TFD; x[n] : échantillon; k : case fréquentielle; N : taille TFD; j² = −1','Pour un signal constant x[n] = 1, X[0] = N et les autres cases valent 0.','La somme va de n = 0 à N−1.'],
['Reconstruire un signal depuis sa TFD','x[n] : échantillon; X[k] : coefficient fréquentiel; N : taille TFD','Un seul coefficient DC X[0] = N redonne x[n] = 1.','Le facteur 1/N est dans la transformée inverse ici.'],
['Calculer l’espacement entre cases FFT','Δf : pas fréquentiel (Hz); Fₛ : fréquence d’échantillonnage; N : taille TFD','48 000 / 1024 = 46,875 Hz par case.','Le pas FFT n’est pas nécessairement la résolution physique entre deux sinusoïdes.'],
['Associer une case FFT à une fréquence','fₖ : fréquence de case; k : indice; Fₛ : échantillonnage; N : taille','À 48 kHz avec N = 480, la case k = 10 correspond à 1000 Hz.','Les cases au-dessus de N/2 représentent des fréquences négatives.'],
['Convertir Hz en radians par échantillon','ω : pulsation numérique; f : fréquence (Hz); Fₛ : fréquence d’échantillonnage','À f = Fₛ/4, ω = π/2 rad/échantillon.','Différent de la pulsation analogique 2πf en rad/s.'],
['Mesurer une bande de fréquences','BW : largeur de bande; f₁ : borne basse; f₂ : borne haute','De 200 à 500 Hz, BW = 300 Hz.','Toujours soustraire basse de haute.'],
['Caractériser la sélectivité d’un passe-bande','Q : facteur de qualité; f₀ : fréquence centrale; BW : largeur de bande','f₀ = 1000 Hz et BW = 100 Hz donnent Q = 10.','La définition dépend du type de filtre et de bande.'],
['Repérer le point de demi-puissance','H : réponse fréquentielle; f꜀ : coupure; Aₚ : amplitude de référence; √2 : racine de 2','Si Aₚ = 1, la coupure vaut ≈ 0,707 en amplitude.','−3 dB n’est pas la moitié de l’amplitude.'],
['Comparer un signal à lui-même avec décalage','Rₓₓ[m] : autocorrélation; m : retard; x*[n−m] : conjugué décalé','Pour une impulsion δ[n], Rₓₓ[0] = 1 et les autres retards valent 0.','Le conjugué importe pour les signaux complexes.'],
['Relier énergie temporelle et énergie fréquentielle','x[n] : signal; X[k] : TFD; N : taille; | |² : module au carré','Pour x[n] = 1 sur N points, les deux côtés valent N.','Le facteur 1/N dépend de la convention de TFD.'],
['Calculer la magnitude d’un nombre complexe','z = a + jb; a : partie réelle; b : partie imaginaire; |z| : module','Pour z = 3 + 4j, |z| = 5.','Ne pas confondre module et module au carré.'],
['Former le conjugué complexe','a : partie réelle; b : partie imaginaire; j² = −1','Le conjugué de 2 + 3j est 2 − 3j.','La partie réelle ne change pas.'],
['Relier complexe et module au carré','z* : conjugué; |z|² : module au carré','(3+4j)(3−4j) = 25.','Le résultat est réel et non négatif.'],
['Trouver la période d’une exponentielle discrète','N₀ : période fondamentale; N et M : entiers; PGCD : plus grand commun diviseur','Pour M = 6 et N = 15, N₀ = 15/3 = 5.','Simplifier la fraction M/N avant de conclure.'],
['Calculer le centre géométrique d’une bande','f₀ : fréquence centrale; f₁ et f₂ : bornes positives','Entre 100 et 400 Hz, f₀ = 200 Hz.','Ce n’est pas la moyenne arithmétique 250 Hz.'],
['Décrire une décroissance exponentielle','A : amplitude initiale; t : temps; τ : constante de temps positive','À t = τ, le signal vaut environ 0,368 A.','À t = τ, le signal n’est pas nul.'],
['Exprimer le rapport signal/bruit','SNR : rapport signal/bruit (dB); Pₛ : puissance signal; Pₙ : puissance bruit','Si Pₛ/Pₙ = 100, SNR = 20 dB.','Le coefficient 10 s’applique aux puissances.'],
['Lisser une suite avec trois valeurs successives','y[n] : sortie; x[n], x[n−1], x[n−2] : échantillons courant et passés','Pour trois valeurs [3, 6, 9], la moyenne vaut 6.','Le filtre introduit un lissage et une latence.']
]];
const formulas=window.QuestFormulaBank;
if(!formulas||formulas.length!==2||formulas.some((a,i)=>a.length!==25||descriptions[i].length!==25))return;
let level=0,idx=0;
function render(){const f=formulas[level][idx],d=descriptions[level][idx];$('#libraryLevel').value=String(level);$('#libraryItems').replaceChildren();formulas[level].forEach((item,i)=>{const b=document.createElement('button');b.className='libraryItem'+(i===idx?' active':'');b.textContent=String(i+1).padStart(2,'0')+' · '+item.title;b.onclick=()=>{idx=i;render()};$('#libraryItems').append(b)});const detail=$('#libraryDetail');detail.replaceChildren();const heading=(tag,txt,cls)=>{const el=document.createElement(tag);el.textContent=txt;if(cls)el.className=cls;detail.append(el);return el};heading('div',`FICHE ${String(idx+1).padStart(2,'0')} · NIVEAU ${level+1}`,'kicker');heading('h2',f.title);heading('div',f.tokens.join(' '),'libraryFormula');heading('h3','À quoi ça sert ?');heading('p',d[0]);heading('h3','Les symboles');const ul=document.createElement('ul');d[1].split('; ').forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.append(li)});detail.append(ul);heading('h3','Exemple concret');heading('p',d[2],'libraryExample');heading('h3','Piège classique');heading('p',d[3],'libraryTrap');heading('h3','À retenir');heading('p',f.why)}
function open(l=0,i=0){level=l;idx=i;render();$('#libraryModal').classList.add('open')}
$('#libraryOpen').onclick=()=>open(level,idx);$('#builderStudy').onclick=()=>{const state=window.QuestBuilderState?.();open(state?.level??0,state?.index??0)};$('#libraryClose').onclick=()=>$('#libraryModal').classList.remove('open');$('#libraryLevel').onchange=e=>{level=Number(e.target.value);idx=0;render()};$('#libraryPractice').onclick=()=>{const selectedLevel=level,selectedIndex=idx;$('#libraryModal').classList.remove('open');document.querySelector('[data-mode="builder"]').click();window.QuestBuilderPractice?.(selectedLevel,selectedIndex)};
})();
