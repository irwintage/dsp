/* ==========================================================================
   DSP MATH TRAINER — EPFL BRIDGE
   Version 2

   Objectif :
   Maths fondamentales
        ↓
   Lecture de la notation
        ↓
   Concepts DSP
        ↓
   Expériences Python
        ↓
   Préparation au DSP universitaire / EPFL

   IMPORTANT :
   Le contenu pédagogique est séparé autant que possible du moteur de l'app.
   ========================================================================== */

'use strict';


/* ==========================================================================
   CURRICULUM
   ========================================================================== */

const Curriculum = {

  tracks: [

    {
      id: 'math',
      name: 'Fondations mathématiques',
      shortName: 'Maths',
      description:
        'Construire le langage mathématique nécessaire pour lire les équations DSP.'
    },

    {
      id: 'bridge',
      name: 'Pont vers le DSP',
      shortName: 'DSP',
      description:
        'Transformer les mathématiques en signaux, systèmes et algorithmes.'
    },

    {
      id: 'advanced',
      name: 'DSP universitaire',
      shortName: 'EPFL',
      description:
        'Construire progressivement les concepts rencontrés dans un cursus DSP universitaire.'
    }

  ],


  /* ------------------------------------------------------------------------
     MODULES

     prerequisiteIds :
     modules qu'il vaut mieux comprendre avant celui-ci.

     required :
     true = fondation importante pour notre parcours.

     stage :
     foundation / bridge / university
     ------------------------------------------------------------------------ */

  modules: [

    /* ======================================================================
       PHASE A — FONDATIONS MATHÉMATIQUES
       ====================================================================== */

    {
      id: 'numbers',
      order: 1,
      track: 'math',
      stage: 'foundation',

      title: 'Nombres & opérations',
      shortTitle: 'Nombres',

      description:
        'Lire les nombres, signes et opérations sans ambiguïté.',

      required: true,

      prerequisiteIds: [],

      topics: [
        'nombres positifs et négatifs',
        'addition',
        'soustraction',
        'multiplication',
        'division',
        'parenthèses',
        'priorités des opérations'
      ]
    },


    {
      id: 'fractions',
      order: 2,
      track: 'math',
      stage: 'foundation',

      title: 'Fractions & rapports',
      shortTitle: 'Fractions',

      description:
        'Comprendre une division écrite sous forme de fraction et les rapports entre quantités.',

      required: true,

      prerequisiteIds: [
        'numbers'
      ],

      topics: [
        'numérateur',
        'dénominateur',
        'fractions simples',
        'fractions équivalentes',
        'rapport',
        'division'
      ]
    },


    {
      id: 'powers',
      order: 3,
      track: 'math',
      stage: 'foundation',

      title: 'Puissances & racines',
      shortTitle: 'Puissances',

      description:
        'Comprendre les exposants, carrés, racines et puissances de dix.',

      required: true,

      prerequisiteIds: [
        'numbers'
      ],

      topics: [
        'x²',
        'x³',
        'x⁻¹',
        'racine carrée',
        'puissances de dix',
        'notation scientifique'
      ]
    },


    {
      id: 'algebra',
      order: 4,
      track: 'math',
      stage: 'foundation',

      title: 'Variables & algèbre',
      shortTitle: 'Algèbre',

      description:
        'Lire une variable et comprendre une équation comme une instruction.',

      required: true,

      prerequisiteIds: [
        'numbers',
        'fractions',
        'powers'
      ],

      topics: [
        'variable',
        'constante',
        'égalité',
        'coefficient',
        'expression',
        'équation',
        'isoler une variable'
      ]
    },


    {
      id: 'functions',
      order: 5,
      track: 'math',
      stage: 'foundation',

      title: 'Fonctions & graphiques',
      shortTitle: 'Fonctions',

      description:
        'Comprendre f(x), les axes et la relation entre une formule et sa courbe.',

      required: true,

      prerequisiteIds: [
        'algebra'
      ],

      topics: [
        'x et y',
        'f(x)',
        'entrée et sortie',
        'axes',
        'coordonnées',
        'pente',
        'fonction linéaire',
        'exponentielle',
        'logarithme'
      ]
    },


    {
      id: 'sequences',
      order: 6,
      track: 'math',
      stage: 'foundation',

      title: 'Suites, indices & sommes',
      shortTitle: 'Indices & Σ',

      description:
        'Apprendre à lire x[n], les indices et la notation Σ.',

      required: true,

      prerequisiteIds: [
        'algebra'
      ],

      topics: [
        'suite',
        'indice',
        'n',
        'k',
        'x[n]',
        'x[n−1]',
        'bornes',
        'Σ'
      ]
    },


    {
      id: 'trigonometry',
      order: 7,
      track: 'math',
      stage: 'foundation',

      title: 'Trigonométrie',
      shortTitle: 'Trigonométrie',

      description:
        'Comprendre angle, radians, sinus et cosinus à partir des oscillations.',

      required: true,

      prerequisiteIds: [
        'functions'
      ],

      topics: [
        'angle',
        'degrés',
        'radians',
        'π',
        'cercle trigonométrique',
        'sinus',
        'cosinus',
        'phase'
      ]
    },


    {
      id: 'complex',
      order: 8,
      track: 'math',
      stage: 'foundation',

      title: 'Nombres complexes',
      shortTitle: 'Complexes',

      description:
        'Comprendre j, le plan complexe, magnitude, phase et exponentielle complexe.',

      required: true,

      prerequisiteIds: [
        'trigonometry',
        'powers'
      ],

      topics: [
        'nombre réel',
        'nombre imaginaire',
        'j',
        'a + jb',
        'plan complexe',
        'magnitude',
        'phase',
        'formule d’Euler'
      ]
    },


    {
      id: 'linear_algebra',
      order: 9,
      track: 'math',
      stage: 'foundation',

      title: 'Vecteurs & algèbre linéaire',
      shortTitle: 'Vecteurs',

      description:
        'Construire les bases nécessaires pour comprendre les signaux comme vecteurs.',

      required: true,

      prerequisiteIds: [
        'algebra',
        'sequences'
      ],

      topics: [
        'vecteur',
        'dimension',
        'addition de vecteurs',
        'multiplication par un scalaire',
        'produit scalaire',
        'norme',
        'orthogonalité'
      ]
    },


    {
      id: 'calculus',
      order: 10,
      track: 'math',
      stage: 'foundation',

      title: 'Calcul différentiel & intégral',
      shortTitle: 'Calcul',

      description:
        'Acquérir l’intuition minimale des dérivées et intégrales utiles au traitement du signal.',

      required: true,

      prerequisiteIds: [
        'functions',
        'algebra'
      ],

      topics: [
        'variation',
        'limite',
        'dérivée',
        'pente instantanée',
        'intégrale',
        'aire',
        'accumulation'
      ]
    },


    {
      id: 'probability',
      order: 11,
      track: 'math',
      stage: 'foundation',

      title: 'Probabilités & statistiques',
      shortTitle: 'Probabilités',

      description:
        'Préparer les notions de bruit, puissance, corrélation et processus aléatoires.',

      required: false,

      prerequisiteIds: [
        'algebra',
        'functions',
        'sequences'
      ],

      topics: [
        'moyenne',
        'variance',
        'probabilité',
        'variable aléatoire',
        'espérance',
        'corrélation'
      ]
    },


    /* ======================================================================
       PHASE B — PONT MATHS → DSP
       ====================================================================== */

    {
      id: 'dsp_alphabet',
      order: 12,
      track: 'bridge',
      stage: 'bridge',

      title: 'Alphabet DSP',
      shortTitle: 'Alphabet DSP',

      description:
        'Apprendre à lire les symboles que l’on rencontre dans les équations de traitement du signal.',

      required: true,

      prerequisiteIds: [
        'algebra',
        'sequences'
      ],

      topics: [
        'x[n]',
        'y[n]',
        'X[k]',
        'n',
        'k',
        'Σ',
        'ω',
        'j',
        'z⁻¹',
        'H(z)'
      ]
    },


    {
      id: 'discrete_signals',
      order: 13,
      track: 'bridge',
      stage: 'bridge',

      title: 'Signaux discrets',
      shortTitle: 'Signaux',

      description:
        'Voir un signal numérique comme une suite de valeurs indexées.',

      required: true,

      prerequisiteIds: [
        'dsp_alphabet',
        'sequences'
      ],

      topics: [
        'signal continu',
        'signal discret',
        'sample',
        'index',
        'amplitude',
        'décalage temporel',
        'impulsion'
      ]
    },


    {
      id: 'time_frequency',
      order: 14,
      track: 'bridge',
      stage: 'bridge',

      title: 'Temps, fréquence & échantillonnage',
      shortTitle: 'Temps / fréquence',

      description:
        'Relier Hertz, période, sample rate et fréquence numérique.',

      required: true,

      prerequisiteIds: [
        'fractions',
        'trigonometry',
        'discrete_signals'
      ],

      topics: [
        'Hertz',
        'période',
        'fréquence',
        'sample rate',
        'Nyquist',
        'fréquence angulaire',
        'ω'
      ]
    },


    {
      id: 'systems',
      order: 15,
      track: 'bridge',
      stage: 'bridge',

      title: 'Systèmes & mémoire',
      shortTitle: 'Systèmes',

      description:
        'Comprendre comment une équation décrit un système qui transforme un signal.',

      required: true,

      prerequisiteIds: [
        'discrete_signals',
        'algebra'
      ],

      topics: [
        'entrée',
        'sortie',
        'système',
        'mémoire',
        'feedforward',
        'feedback',
        'équation aux différences'
      ]
    },


    {
      id: 'convolution',
      order: 16,
      track: 'bridge',
      stage: 'bridge',

      title: 'Convolution',
      shortTitle: 'Convolution',

      description:
        'Comprendre la convolution par déplacement, multiplication et addition avant la formule.',

      required: true,

      prerequisiteIds: [
        'sequences',
        'systems'
      ],

      topics: [
        'réponse impulsionnelle',
        'h[n]',
        'décalage',
        'multiplication',
        'somme',
        'convolution'
      ]
    },


    /* ======================================================================
       PHASE C — DSP UNIVERSITAIRE
       ====================================================================== */

    {
      id: 'fourier_foundations',
      order: 17,
      track: 'advanced',
      stage: 'university',

      title: 'Fourier — fondations',
      shortTitle: 'Fourier I',

      description:
        'Comprendre pourquoi un signal peut être décrit à l’aide de composantes sinusoïdales.',

      required: true,

      prerequisiteIds: [
        'trigonometry',
        'complex',
        'linear_algebra',
        'sequences',
        'time_frequency'
      ],

      topics: [
        'sinusoïdes',
        'base',
        'projection',
        'spectre',
        'magnitude',
        'phase',
        'fréquences'
      ]
    },


    {
      id: 'dft',
      order: 18,
      track: 'advanced',
      stage: 'university',

      title: 'DFT & représentation fréquentielle',
      shortTitle: 'DFT',

      description:
        'Comprendre ce que calcule réellement la transformée de Fourier discrète.',

      required: true,

      prerequisiteIds: [
        'fourier_foundations'
      ],

      topics: [
        'DFT',
        'X[k]',
        'bins',
        'résolution fréquentielle',
        'magnitude',
        'phase'
      ]
    },


    {
      id: 'fft',
      order: 19,
      track: 'advanced',
      stage: 'university',

      title: 'FFT, fenêtres & spectrogrammes',
      shortTitle: 'FFT',

      description:
        'Comprendre la FFT comme méthode efficace de calcul de la DFT et apprendre les problèmes pratiques d’analyse spectrale.',

      required: true,

      prerequisiteIds: [
        'dft'
      ],

      topics: [
        'FFT',
        'fenêtrage',
        'spectral leakage',
        'zero padding',
        'STFT',
        'spectrogramme'
      ]
    },


    {
      id: 'fir',
      order: 20,
      track: 'advanced',
      stage: 'university',

      title: 'Filtres FIR',
      shortTitle: 'FIR',

      description:
        'Construire des filtres à partir de délais, coefficients et sommes.',

      required: true,

      prerequisiteIds: [
        'convolution',
        'fourier_foundations'
      ],

      topics: [
        'FIR',
        'coefficients',
        'taps',
        'moving average',
        'réponse impulsionnelle',
        'réponse fréquentielle'
      ]
    },


    {
      id: 'iir',
      order: 21,
      track: 'advanced',
      stage: 'university',

      title: 'Filtres IIR',
      shortTitle: 'IIR',

      description:
        'Comprendre le feedback et les équations aux différences récursives.',

      required: true,

      prerequisiteIds: [
        'systems',
        'fir'
      ],

      topics: [
        'IIR',
        'feedback',
        'récursion',
        'coefficients a et b',
        'stabilité',
        'résonance'
      ]
    },


    {
      id: 'z_transform',
      order: 22,
      track: 'advanced',
      stage: 'university',

      title: 'Transformée en Z',
      shortTitle: 'Transformée Z',

      description:
        'Partir du délai z⁻¹ pour comprendre fonctions de transfert, pôles et zéros.',

      required: true,

      prerequisiteIds: [
        'complex',
        'iir'
      ],

      topics: [
        'z',
        'z⁻¹',
        'H(z)',
        'pôles',
        'zéros',
        'plan z',
        'stabilité'
      ]
    },


    {
      id: 'sampling',
      order: 23,
      track: 'advanced',
      stage: 'university',

      title: 'Sampling & aliasing',
      shortTitle: 'Sampling',

      description:
        'Comprendre précisément ce qui se produit lors de l’échantillonnage et du repliement spectral.',

      required: true,

      prerequisiteIds: [
        'time_frequency',
        'fourier_foundations'
      ],

      topics: [
        'sampling',
        'Nyquist',
        'aliasing',
        'reconstruction',
        'interpolation'
      ]
    },


    {
      id: 'multirate',
      order: 24,
      track: 'advanced',
      stage: 'university',

      title: 'Traitement multirate',
      shortTitle: 'Multirate',

      description:
        'Comprendre changement de fréquence d’échantillonnage, interpolation et décimation.',

      required: false,

      prerequisiteIds: [
        'sampling',
        'fir'
      ],

      topics: [
        'upsampling',
        'downsampling',
        'interpolation',
        'décimation',
        'anti-aliasing'
      ]
    },


    {
      id: 'stochastic_dsp',
      order: 25,
      track: 'advanced',
      stage: 'university',

      title: 'DSP stochastique & adaptatif',
      shortTitle: 'DSP stochastique',

      description:
        'Préparer bruit, autocorrélation, densité spectrale de puissance et filtrage adaptatif.',

      required: false,

      prerequisiteIds: [
        'probability',
        'linear_algebra',
        'fourier_foundations'
      ],

      topics: [
        'processus aléatoire',
        'autocorrélation',
        'PSD',
        'least squares',
        'LMS',
        'filtre adaptatif'
      ]
    },


    {
      id: 'audio_implementation',
      order: 26,
      track: 'advanced',
      stage: 'university',

      title: 'Implémentation DSP audio',
      shortTitle: 'Audio / JUCE',

      description:
        'Passer de l’équation au prototype Python puis à une boucle DSP temps réel.',

      required: false,

      prerequisiteIds: [
        'fir',
        'iir',
        'sampling'
      ],

      topics: [
        'buffer audio',
        'sample loop',
        'état du filtre',
        'temps réel',
        'Python prototype',
        'C++',
        'JUCE'
      ]
    }

  ],


  /* ------------------------------------------------------------------------
     OUTILS
     ------------------------------------------------------------------------ */

  module(id){

    return (
      this.modules.find(
        module =>
          module.id === id
      )
      ||
      null
    );

  },


  byTrack(trackId){

    return this.modules.filter(
      module =>
        module.track === trackId
    );

  },


  prerequisites(moduleId){

    const module =
      this.module(moduleId);


    if(!module){
      return [];
    }


    return module.prerequisiteIds
      .map(
        id =>
          this.module(id)
      )
      .filter(Boolean);

  }

};


/* ==========================================================================
   CONCEPT BASE

   Une notion = une petite unité que l'app peut suivre individuellement.

   mastery :
   chaque concept pourra avoir son propre niveau de maîtrise.
   ========================================================================== */

const ConceptBase = {

  concepts: [

    /* ======================================================================
       NOMBRES / ALGÈBRE
       ====================================================================== */

    {
      id: 'addition',
      module: 'numbers',
      symbol: '+',
      name: 'Addition',

      read:
        'plus',

      meaning:
        'Additionner deux valeurs.',

      audio:
        'Additionner deux signaux correspond à les mixer.',

      mnemonic:
        '+ = mettre ensemble'
    },


    {
      id: 'subtraction',
      module: 'numbers',
      symbol: '−',
      name: 'Soustraction',

      read:
        'moins',

      meaning:
        'Retirer une quantité à une autre.',

      audio:
        'La soustraction peut être vue comme l’addition d’un signal inversé.',

      mnemonic:
        '− = retirer'
    },


    {
      id: 'multiplication',
      module: 'numbers',
      symbol: '×',
      name: 'Multiplication',

      read:
        'fois',

      meaning:
        'Multiplier une valeur par une autre.',

      audio:
        'Multiplier un signal par une constante revient à appliquer un gain.',

      mnemonic:
        '× = gain'
    },


    {
      id: 'division',
      module: 'fractions',
      symbol: '/',
      name: 'Division',

      read:
        'divisé par',

      meaning:
        'Partager une quantité ou exprimer un rapport.',

      audio:
        'Diviser une amplitude par 2 revient à la multiplier par 0,5.',

      mnemonic:
        '/ = partager'
    },


    {
      id: 'square',
      module: 'powers',
      symbol: 'x²',
      name: 'Carré',

      read:
        'x au carré',

      meaning:
        'Multiplier une valeur par elle-même.',

      audio:
        'Le carré apparaît notamment dans les calculs d’énergie et de puissance.',

      mnemonic:
        'x² = x × x'
    },


    {
      id: 'sqrt',
      module: 'powers',
      symbol: '√x',
      name: 'Racine carrée',

      read:
        'racine carrée de x',

      meaning:
        'Nombre qui, multiplié par lui-même, donne x.',

      audio:
        'La racine carrée apparaît par exemple dans le calcul RMS.',

      mnemonic:
        '√ annule le carré'
    },


    {
      id: 'variable',
      module: 'algebra',
      symbol: 'x',
      name: 'Variable',

      read:
        'x',

      meaning:
        'Symbole représentant une valeur qui peut changer.',

      audio:
        'En DSP, x représente très souvent le signal d’entrée.',

      mnemonic:
        'variable = boîte portant un nom'
    },


    {
      id: 'coefficient',
      module: 'algebra',
      symbol: 'a',

      name:
        'Coefficient',

      read:
        'a',

      meaning:
        'Valeur qui multiplie une autre quantité.',

      audio:
        'Les coefficients déterminent le comportement de nombreux filtres.',

      mnemonic:
        'coefficient = réglage multiplicatif'
    },


    {
      id: 'function',
      module: 'functions',
      symbol: 'f(x)',

      name:
        'Fonction',

      read:
        'f de x',

      meaning:
        'Règle qui transforme une entrée x en une sortie.',

      audio:
        'Un effet audio peut être vu comme un système qui transforme une entrée en sortie.',

      mnemonic:
        'entrée → règle → sortie'
    },


    /* ======================================================================
       INDICES / SÉQUENCES
       ====================================================================== */

    {
      id: 'n',
      module: 'sequences',
      symbol: 'n',

      name:
        'Indice n',

      read:
        'n',

      meaning:
        'Indice entier utilisé pour repérer une position dans une séquence.',

      audio:
        'Dans x[n], n indique quel échantillon on regarde.',

      mnemonic:
        'n = numéro'
    },


    {
      id: 'k',
      module: 'sequences',
      symbol: 'k',

      name:
        'Indice k',

      read:
        'k',

      meaning:
        'Autre variable d’indice, souvent utilisée comme compteur dans une somme.',

      audio:
        'k apparaît très souvent dans les sommes, la convolution et la DFT.',

      mnemonic:
        'k = compteur auxiliaire'
    },


    {
      id: 'xn',
      module: 'sequences',
      symbol: 'x[n]',

      name:
        'Valeur indexée',

      read:
        'x au n',

      meaning:
        'Valeur du signal x à l’indice n.',

      audio:
        'C’est l’équivalent conceptuel de lire une case dans un buffer audio.',

      mnemonic:
        'x[n] = prends la case n'
    },


    {
      id: 'xn_minus_1',
      module: 'sequences',
      symbol: 'x[n−1]',

      name:
        'Échantillon précédent',

      read:
        'x au n moins un',

      meaning:
        'Valeur de x située un indice avant n.',

      audio:
        'Dans un traitement sample par sample, cela représente le sample précédent.',

      mnemonic:
        '−1 = recule d’une case'
    },


    {
      id: 'sigma',
      module: 'sequences',
      symbol: 'Σ',

      name:
        'Somme',

      read:
        'sigma',

      meaning:
        'Notation compacte indiquant qu’une addition doit être répétée sur plusieurs indices.',

      audio:
        'On retrouve Σ dans la convolution, la DFT, l’énergie et de nombreux filtres.',

      mnemonic:
        'Σ = boucle qui additionne'
    },


    {
      id: 'infinity',
      module: 'sequences',
      symbol: '∞',

      name:
        'Infini',

      read:
        'infini',

      meaning:
        'Indique qu’une quantité ou une borne n’est pas finie.',

      audio:
        'Certaines définitions théoriques de signaux utilisent des sommes allant vers l’infini.',

      mnemonic:
        '∞ = sans fin'
    },


    /* ======================================================================
       TRIGONOMÉTRIE
       ====================================================================== */

    {
      id: 'pi',
      module: 'trigonometry',
      symbol: 'π',

      name:
        'Pi',

      read:
        'pi',

      meaning:
        'Constante approximativement égale à 3,14159, intimement liée au cercle.',

      audio:
        'π apparaît constamment dans les formules d’oscillateurs et de fréquence angulaire.',

      mnemonic:
        'un tour = 2π radians'
    },


    {
      id: 'theta',
      module: 'trigonometry',
      symbol: 'θ',

      name:
        'Angle theta',

      read:
        'thêta',

      meaning:
        'Lettre souvent utilisée pour représenter un angle.',

      audio:
        'Un angle permet notamment de représenter une phase.',

      mnemonic:
        'θ = angle'
    },


    {
      id: 'omega',
      module: 'trigonometry',
      symbol: 'ω',

      name:
        'Fréquence angulaire',

      read:
        'oméga',

      meaning:
        'Fréquence exprimée sous forme d’angle parcouru par unité de temps.',

      audio:
        'Pour une fréquence f en Hz, on rencontre souvent ω = 2πf.',

      mnemonic:
        'ω = fréquence qui tourne'
    },


    {
      id: 'sine',
      module: 'trigonometry',
      symbol: 'sin',

      name:
        'Sinus',

      read:
        'sinus',

      meaning:
        'Fonction périodique liée à la projection verticale d’un point tournant sur un cercle.',

      audio:
        'Le sinus produit l’oscillation la plus fondamentale en synthèse sonore.',

      mnemonic:
        'rotation → projection → oscillation'
    },


    {
      id: 'cosine',
      module: 'trigonometry',
      symbol: 'cos',

      name:
        'Cosinus',

      read:
        'cosinus',

      meaning:
        'Fonction périodique liée à la projection horizontale d’un point tournant.',

      audio:
        'Sinus et cosinus représentent la même fréquence avec un décalage de phase.',

      mnemonic:
        'cos = autre projection du cercle'
    },


    /* ======================================================================
       COMPLEXES
       ====================================================================== */

    {
      id: 'imaginary_j',
      module: 'complex',
      symbol: 'j',

      name:
        'Unité imaginaire',

      read:
        'j',

      meaning:
        'Nombre défini par j² = −1.',

      audio:
        'En électronique et DSP, on utilise j plutôt que i pour éviter la confusion avec le courant électrique.',

      mnemonic:
        'j² = −1'
    },


    {
      id: 'complex_number',
      module: 'complex',
      symbol: 'a + jb',

      name:
        'Nombre complexe',

      read:
        'a plus j b',

      meaning:
        'Nombre composé d’une partie réelle et d’une partie imaginaire.',

      audio:
        'Les nombres complexes permettent de représenter simultanément magnitude et phase.',

      mnemonic:
        'complexe = réel + imaginaire'
    },


    {
      id: 'magnitude',
      module: 'complex',
      symbol: '|z|',

      name:
        'Magnitude',

      read:
        'module de z',

      meaning:
        'Distance d’un nombre complexe par rapport à l’origine.',

      audio:
        'Dans un spectre complexe, la magnitude représente la force d’une composante.',

      mnemonic:
        '|z| = distance au centre'
    },


    {
      id: 'euler',
      module: 'complex',
      symbol: 'e^(jθ)',

      name:
        'Exponentielle complexe',

      read:
        'e puissance j thêta',

      meaning:
        'Représentation d’une rotation dans le plan complexe.',

      audio:
        'C’est l’un des ponts mathématiques fondamentaux entre rotation, sinus, cosinus et Fourier.',

      mnemonic:
        'e^(jθ) = rotation'
    },


    /* ======================================================================
       DSP
       ====================================================================== */

    {
      id: 'input_signal',
      module: 'dsp_alphabet',
      symbol: 'x[n]',

      name:
        'Signal d’entrée',

      read:
        'x au n',

      meaning:
        'Convention très fréquente pour désigner l’entrée d’un système discret.',

      audio:
        'x[n] peut être le sample entrant dans ton algorithme.',

      mnemonic:
        'x = input'
    },


    {
      id: 'output_signal',
      module: 'dsp_alphabet',
      symbol: 'y[n]',

      name:
        'Signal de sortie',

      read:
        'y au n',

      meaning:
        'Convention très fréquente pour désigner la sortie d’un système discret.',

      audio:
        'y[n] est le sample produit par ton traitement.',

      mnemonic:
        'y = output'
    },


    {
      id: 'frequency_domain',
      module: 'dsp_alphabet',
      symbol: 'X[k]',

      name:
        'Représentation fréquentielle',

      read:
        'X majuscule au k',

      meaning:
        'Notation fréquemment utilisée pour une représentation fréquentielle du signal x.',

      audio:
        'Dans une DFT, k désigne un indice de fréquence.',

      mnemonic:
        'x petit = temps ; X grand = souvent fréquence'
    },


    {
      id: 'unit_delay',
      module: 'systems',
      symbol: 'z⁻¹',

      name:
        'Délai unitaire',

      read:
        'z puissance moins un',

      meaning:
        'Dans les diagrammes et fonctions de transfert DSP, représente un retard d’un échantillon.',

      audio:
        'Conceptuellement : mémoriser le sample et le récupérer au prochain appel.',

      mnemonic:
        'z⁻¹ = un sample dans le passé'
    },


    {
      id: 'transfer_function',
      module: 'z_transform',
      symbol: 'H(z)',

      name:
        'Fonction de transfert',

      read:
        'H de z',

      meaning:
        'Description d’un système dans le domaine Z.',

      audio:
        'Elle permet notamment d’étudier la réponse et la stabilité d’un filtre.',

      mnemonic:
        'H = comportement du système'
    }

  ],


  /* ------------------------------------------------------------------------
     RECHERCHE
     ------------------------------------------------------------------------ */

  concept(id){

    return (
      this.concepts.find(
        concept =>
          concept.id === id
      )
      ||
      null
    );

  },


  byModule(moduleId){

    return this.concepts.filter(
      concept =>
        concept.module === moduleId
    );

  }

};


/* ==========================================================================
   FIN BLOC 1/10

   Le bloc 2 commence avec :

   const VocabularyBase = {
   ========================================================================== */
   /* ==========================================================================
   BLOCK 2/10 — VOCABULAIRE DSP + BIBLIOTHÈQUE DE FORMULES
   ========================================================================== */


/* ==========================================================================
   VOCABULAIRE DSP

   Objectif :
   Ne jamais supposer qu'un mot comme FFT, FIR, buffer ou aliasing est déjà
   compris simplement parce qu'il est courant en audio.

   Chaque terme peut être affiché dans l'onglet "Vocabulaire DSP".
   ========================================================================== */

const VocabularyBase = {

  terms: [

    /* ======================================================================
       SIGNAL
       ====================================================================== */

    {
      id: 'sample',

      term:
        'Sample',

      french:
        'Échantillon',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Une valeur individuelle d’un signal numérique à un instant discret.',

      simple:
        'Une case dans une suite de valeurs audio.',

      notation:
        'x[n]',

      audio:
        'À 48 kHz, une seconde de signal contient 48 000 échantillons.',

      prerequisiteIds: [
        'xn'
      ]
    },


    {
      id: 'signal',

      term:
        'Signal',

      french:
        'Signal',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Une quantité qui varie et transporte de l’information.',

      simple:
        'Une suite de valeurs représentant quelque chose qui évolue.',

      notation:
        'x',

      audio:
        'Une waveform audio est un signal.',

      prerequisiteIds: []
    },


    {
      id: 'discrete_signal',

      term:
        'Discrete-time signal',

      french:
        'Signal à temps discret',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Signal défini uniquement à des indices discrets.',

      simple:
        'On observe le signal case par case plutôt qu’en continu.',

      notation:
        'x[n]',

      audio:
        'Le signal audio numérique manipulé sample par sample est discret.',

      prerequisiteIds: [
        'xn',
        'n'
      ]
    },


    {
      id: 'continuous_signal',

      term:
        'Continuous-time signal',

      french:
        'Signal à temps continu',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Signal défini pour chaque instant continu du temps.',

      simple:
        'Le temps peut prendre toutes les valeurs entre deux instants.',

      notation:
        'x(t)',

      audio:
        'Une tension analogique provenant d’un microphone est modélisée comme un signal continu.',

      prerequisiteIds: [
        'function'
      ]
    },


    {
      id: 'buffer',

      term:
        'Buffer',

      french:
        'Tampon / bloc de données',

      category:
        'programming',

      module:
        'audio_implementation',

      definition:
        'Zone mémoire contenant plusieurs échantillons à traiter.',

      simple:
        'Un tableau rempli de samples.',

      notation:
        'buffer[n]',

      audio:
        'Dans un plugin audio, le moteur fournit souvent des buffers contenant plusieurs samples.',

      prerequisiteIds: [
        'xn'
      ]
    },


    {
      id: 'amplitude',

      term:
        'Amplitude',

      french:
        'Amplitude',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Valeur ou taille instantanée d’un signal.',

      simple:
        'La hauteur verticale de la waveform.',

      notation:
        'x[n]',

      audio:
        'Une amplitude plus grande correspond généralement à un signal plus fort.',

      prerequisiteIds: []
    },


    {
      id: 'impulse',

      term:
        'Impulse',

      french:
        'Impulsion',

      category:
        'signal',

      module:
        'discrete_signals',

      definition:
        'Signal nul partout sauf à un seul indice où il vaut généralement 1.',

      simple:
        'Un seul sample actif.',

      notation:
        'δ[n]',

      audio:
        'L’impulsion permet de révéler le comportement d’un système.',

      prerequisiteIds: [
        'xn'
      ]
    },


    {
      id: 'impulse_response',

      term:
        'Impulse Response',

      french:
        'Réponse impulsionnelle',

      category:
        'system',

      module:
        'convolution',

      definition:
        'Sortie produite par un système lorsqu’on lui envoie une impulsion.',

      simple:
        'La signature complète d’un système LTI.',

      notation:
        'h[n]',

      audio:
        'Une IR de pièce peut être utilisée pour créer une réverbération par convolution.',

      prerequisiteIds: [
        'impulse'
      ]
    },


    /* ======================================================================
       TEMPS / FRÉQUENCE / SAMPLING
       ====================================================================== */

    {
      id: 'frequency',

      term:
        'Frequency',

      french:
        'Fréquence',

      category:
        'timefreq',

      module:
        'time_frequency',

      definition:
        'Nombre de cycles complets effectués par seconde.',

      simple:
        'Combien de fois le motif se répète en une seconde.',

      notation:
        'f',

      unit:
        'Hz',

      audio:
        '440 Hz signifie 440 cycles par seconde.',

      prerequisiteIds: [
        'division'
      ]
    },


    {
      id: 'period',

      term:
        'Period',

      french:
        'Période',

      category:
        'timefreq',

      module:
        'time_frequency',

      definition:
        'Durée nécessaire pour effectuer un cycle complet.',

      simple:
        'Combien de temps dure un tour.',

      notation:
        'T',

      unit:
        's',

      audio:
        'Un signal de 100 Hz possède une période de 0,01 seconde.',

      prerequisiteIds: [
        'frequency'
      ]
    },


    {
      id: 'sample_rate',

      term:
        'Sample rate',

      french:
        'Fréquence d’échantillonnage',

      category:
        'sampling',

      module:
        'time_frequency',

      definition:
        'Nombre d’échantillons mesurés ou produits chaque seconde.',

      simple:
        'Nombre de samples par seconde.',

      notation:
        'fₛ',

      unit:
        'Hz',

      audio:
        '48 kHz signifie 48 000 échantillons par seconde.',

      prerequisiteIds: [
        'sample'
      ]
    },


    {
      id: 'nyquist_frequency',

      term:
        'Nyquist frequency',

      french:
        'Fréquence de Nyquist',

      category:
        'sampling',

      module:
        'sampling',

      definition:
        'Moitié de la fréquence d’échantillonnage.',

      simple:
        'fₛ divisé par 2.',

      notation:
        'fₙ = fₛ / 2',

      audio:
        'Avec 48 kHz, Nyquist vaut 24 kHz.',

      prerequisiteIds: [
        'sample_rate',
        'division'
      ]
    },


    {
      id: 'aliasing',

      term:
        'Aliasing',

      french:
        'Repliement spectral',

      category:
        'sampling',

      module:
        'sampling',

      definition:
        'Apparition de fréquences incorrectes lorsqu’un signal est échantillonné de manière insuffisante.',

      simple:
        'Une fréquence trop haute se replie vers une autre fréquence.',

      notation:
        null,

      audio:
        'Les oscillateurs numériques naïfs et les distorsions peuvent générer de l’aliasing.',

      prerequisiteIds: [
        'nyquist_frequency'
      ]
    },


    {
      id: 'quantization',

      term:
        'Quantization',

      french:
        'Quantification',

      category:
        'sampling',

      module:
        'sampling',

      definition:
        'Approximation d’une amplitude continue par un nombre fini de valeurs possibles.',

      simple:
        'On arrondit l’amplitude vers une grille de valeurs.',

      notation:
        null,

      audio:
        'La profondeur en bits détermine notamment la finesse de cette grille.',

      prerequisiteIds: []
    },


    /* ======================================================================
       SYSTÈMES
       ====================================================================== */

    {
      id: 'system',

      term:
        'System',

      french:
        'Système',

      category:
        'system',

      module:
        'systems',

      definition:
        'Objet mathématique ou algorithmique qui transforme une entrée en sortie.',

      simple:
        'Entrée → traitement → sortie.',

      notation:
        'x[n] → système → y[n]',

      audio:
        'Un filtre, un delay ou une distorsion sont des systèmes audio.',

      prerequisiteIds: [
        'input_signal',
        'output_signal'
      ]
    },


    {
      id: 'state',

      term:
        'State',

      french:
        'État / mémoire interne',

      category:
        'system',

      module:
        'systems',

      definition:
        'Information mémorisée par un système entre deux instants.',

      simple:
        'Ce que le système se rappelle du passé.',

      notation:
        'x[n−1], y[n−1], ...',

      audio:
        'Un filtre IIR doit conserver certaines valeurs précédentes entre deux samples.',

      prerequisiteIds: [
        'xn_minus_1'
      ]
    },


    {
      id: 'feedforward',

      term:
        'Feedforward',

      french:
        'Voie directe',

      category:
        'filter',

      module:
        'fir',

      definition:
        'Calcul utilisant des valeurs d’entrée actuelles ou passées sans réinjecter la sortie.',

      simple:
        'On utilise x, pas la sortie précédente y.',

      notation:
        'b₀x[n] + b₁x[n−1]',

      audio:
        'Les filtres FIR utilisent uniquement une partie feedforward.',

      prerequisiteIds: [
        'xn_minus_1'
      ]
    },


    {
      id: 'feedback',

      term:
        'Feedback',

      french:
        'Rétroaction',

      category:
        'filter',

      module:
        'iir',

      definition:
        'Réinjection d’une sortie précédente dans le calcul de la nouvelle sortie.',

      simple:
        'La sortie revient dans le système.',

      notation:
        'y[n−1]',

      audio:
        'Le feedback produit par exemple résonance, répétitions et comportement récursif.',

      prerequisiteIds: [
        'state'
      ]
    },


    {
      id: 'fir',

      term:
        'FIR',

      french:
        'Finite Impulse Response',

      category:
        'filter',

      module:
        'fir',

      definition:
        'Famille de filtres dont la réponse impulsionnelle devient exactement nulle après un nombre fini d’échantillons.',

      simple:
        'Filtre utilisant une somme finie de valeurs d’entrée retardées.',

      notation:
        'y[n] = Σ bₖx[n−k]',

      audio:
        'Moving average, certains EQ et convolution FIR.',

      prerequisiteIds: [
        'feedforward',
        'convolution'
      ]
    },


    {
      id: 'iir',

      term:
        'IIR',

      french:
        'Infinite Impulse Response',

      category:
        'filter',

      module:
        'iir',

      definition:
        'Famille de filtres récursifs utilisant du feedback et pouvant théoriquement répondre indéfiniment.',

      simple:
        'Filtre qui réutilise ses sorties précédentes.',

      notation:
        'y[n] = ... − a₁y[n−1]',

      audio:
        'De nombreux low-pass et filtres résonants sont implémentés sous forme IIR.',

      prerequisiteIds: [
        'feedback'
      ]
    },


    {
      id: 'difference_equation',

      term:
        'Difference equation',

      french:
        'Équation aux différences',

      category:
        'system',

      module:
        'systems',

      definition:
        'Équation décrivant comment calculer une sortie à partir de valeurs présentes et passées.',

      simple:
        'La recette sample par sample du système.',

      notation:
        'y[n] = b₀x[n] + b₁x[n−1] − a₁y[n−1]',

      audio:
        'C’est très proche du code que l’on écrit dans une boucle DSP.',

      prerequisiteIds: [
        'xn',
        'xn_minus_1'
      ]
    },


    /* ======================================================================
       FOURIER
       ====================================================================== */

    {
      id: 'spectrum',

      term:
        'Spectrum',

      french:
        'Spectre',

      category:
        'fourier',

      module:
        'fourier_foundations',

      definition:
        'Représentation montrant comment l’énergie ou l’amplitude d’un signal se répartit selon les fréquences.',

      simple:
        'Quels ingrédients fréquentiels composent le signal.',

      notation:
        'X',

      audio:
        'Un analyseur spectral affiche une représentation du spectre.',

      prerequisiteIds: [
        'frequency'
      ]
    },


    {
      id: 'dft',

      term:
        'DFT',

      french:
        'Discrete Fourier Transform',

      category:
        'fourier',

      module:
        'dft',

      definition:
        'Transformation mathématique qui convertit un bloc fini de N échantillons en N coefficients fréquentiels complexes.',

      simple:
        'On demande : quelles composantes fréquentielles sont présentes dans ce bloc ?', 

      notation:
        'X[k]',

      audio:
        'Permet notamment d’effectuer une analyse spectrale numérique.',

      prerequisiteIds: [
        'complex_number',
        'sigma',
        'sine'
      ]
    },


    {
      id: 'fft',

      term:
        'FFT',

      french:
        'Fast Fourier Transform',

      category:
        'fourier',

      module:
        'fft',

      definition:
        'Famille d’algorithmes permettant de calculer efficacement une DFT.',

      simple:
        'La FFT n’est pas une transformation différente : c’est une façon rapide de calculer la DFT.',

      notation:
        null,

      audio:
        'Les analyseurs de spectre utilisent très souvent une FFT.',

      prerequisiteIds: [
        'dft'
      ]
    },


    {
      id: 'frequency_bin',

      term:
        'Frequency bin',

      french:
        'Bin fréquentiel',

      category:
        'fourier',

      module:
        'dft',

      definition:
        'Indice fréquentiel individuel dans le résultat d’une DFT.',

      simple:
        'Une case dans le tableau des fréquences.',

      notation:
        'X[k]',

      audio:
        'Chaque valeur k correspond à une fréquence déterminée par k·fₛ/N.',

      prerequisiteIds: [
        'dft'
      ]
    },


    {
      id: 'spectral_leakage',

      term:
        'Spectral leakage',

      french:
        'Fuite spectrale',

      category:
        'fourier',

      module:
        'fft',

      definition:
        'Étalement de l’énergie d’une fréquence sur plusieurs bins dans une analyse DFT.',

      simple:
        'Un pic idéal se répand sur les fréquences voisines.',

      notation:
        null,

      audio:
        'Le fenêtrage permet de contrôler la fuite spectrale.',

      prerequisiteIds: [
        'frequency_bin'
      ]
    },


    {
      id: 'windowing',

      term:
        'Windowing',

      french:
        'Fenêtrage',

      category:
        'fourier',

      module:
        'fft',

      definition:
        'Multiplication d’un bloc de signal par une fonction fenêtre avant l’analyse fréquentielle.',

      simple:
        'On adoucit les bords du bloc avant la FFT.',

      notation:
        'x[n]·w[n]',

      audio:
        'Hann, Hamming et Blackman sont des fenêtres courantes.',

      prerequisiteIds: [
        'spectral_leakage'
      ]
    },


    {
      id: 'stft',

      term:
        'STFT',

      french:
        'Short-Time Fourier Transform',

      category:
        'fourier',

      module:
        'fft',

      definition:
        'Analyse de Fourier effectuée sur une succession de petites fenêtres temporelles.',

      simple:
        'On fait plusieurs FFT successives pour suivre le spectre dans le temps.',

      notation:
        null,

      audio:
        'La STFT est la base de nombreux spectrogrammes.',

      prerequisiteIds: [
        'fft',
        'windowing'
      ]
    },


    {
      id: 'spectrogram',

      term:
        'Spectrogram',

      french:
        'Spectrogramme',

      category:
        'fourier',

      module:
        'fft',

      definition:
        'Visualisation montrant l’évolution du contenu fréquentiel dans le temps.',

      simple:
        'Temps horizontal, fréquence verticale, intensité représentée visuellement.',

      notation:
        null,

      audio:
        'Très utilisé pour observer voix, musique, bruit et événements transitoires.',

      prerequisiteIds: [
        'stft'
      ]
    },


    /* ======================================================================
       Z TRANSFORM
       ====================================================================== */

    {
      id: 'z_transform_term',

      term:
        'Z-transform',

      french:
        'Transformée en Z',

      category:
        'z',

      module:
        'z_transform',

      definition:
        'Transformation mathématique utilisée pour analyser les systèmes discrets et leurs équations aux différences.',

      simple:
        'Un langage très pratique pour étudier les délais et filtres récursifs.',

      notation:
        'X(z), H(z)',

      audio:
        'Elle permet notamment de relier coefficients de filtre, réponse fréquentielle, pôles et stabilité.',

      prerequisiteIds: [
        'difference_equation',
        'complex_number'
      ]
    },


    {
      id: 'pole',

      term:
        'Pole',

      french:
        'Pôle',

      category:
        'z',

      module:
        'z_transform',

      definition:
        'Valeur de z pour laquelle une fonction de transfert devient théoriquement infinie.',

      simple:
        'Un point du plan Z qui influence fortement résonance et stabilité.',

      notation:
        'p',

      audio:
        'Plus un pôle est proche du cercle unité, plus une résonance peut devenir persistante.',

      prerequisiteIds: [
        'transfer_function'
      ]
    },


    {
      id: 'zero',

      term:
        'Zero',

      french:
        'Zéro',

      category:
        'z',

      module:
        'z_transform',

      definition:
        'Valeur de z pour laquelle une fonction de transfert vaut zéro.',

      simple:
        'Un point pouvant annuler certaines composantes du système.',

      notation:
        'z₀',

      audio:
        'Les zéros participent à la forme de la réponse fréquentielle d’un filtre.',

      prerequisiteIds: [
        'transfer_function'
      ]
    },


    {
      id: 'stability',

      term:
        'Stability',

      french:
        'Stabilité',

      category:
        'system',

      module:
        'z_transform',

      definition:
        'Propriété d’un système qui garantit qu’une entrée bornée ne produit pas une sortie qui diverge.',

      simple:
        'Le système ne part pas vers l’infini.',

      notation:
        null,

      audio:
        'Un filtre numérique instable peut produire une amplitude qui explose.',

      prerequisiteIds: [
        'pole'
      ]
    },


    /* ======================================================================
       PROGRAMMATION / AUDIO
       ====================================================================== */

    {
      id: 'realtime',

      term:
        'Real-time processing',

      french:
        'Traitement temps réel',

      category:
        'programming',

      module:
        'audio_implementation',

      definition:
        'Traitement effectué suffisamment rapidement pour que les données audio soient produites sans interruption perceptible.',

      simple:
        'Le calcul doit être terminé avant que le prochain bloc audio arrive.',

      notation:
        null,

      audio:
        'C’est la contrainte fondamentale d’un plugin ou instrument audio interactif.',

      prerequisiteIds: [
        'buffer'
      ]
    }

  ],


  term(id){

    return (
      this.terms.find(
        item =>
          item.id === id
      )
      ||
      null
    );

  },


  byCategory(category){

    return this.terms.filter(
      item =>
        item.category === category
    );

  },


  byModule(moduleId){

    return this.terms.filter(
      item =>
        item.module === moduleId
    );

  }

};


/* ==========================================================================
   FORMULES

   status :
   memorise    → doit devenir familière / presque automatique
   recognize   → savoir l'identifier et la lire
   reference   → comprendre, mais pas nécessaire de réciter
   ========================================================================== */

const FormulaBase = {

  formulas: [

    /* ======================================================================
       MATHS DE BASE
       ====================================================================== */

    {
      id: 'formula_square',

      module:
        'powers',

      name:
        'Carré',

      formula:
        'x² = x × x',

      status:
        'memorise',

      meaning:
        'Mettre une valeur au carré revient à la multiplier par elle-même.',

      variables:
        'x = nombre ou valeur',

      example:
        '4² = 4 × 4 = 16',

      audio:
        'Le carré intervient dans les mesures d’énergie et de puissance.',

      python:
        'x_squared = x ** 2',

      prerequisiteIds: [
        'multiplication'
      ]
    },


    {
      id: 'formula_inverse',

      module:
        'fractions',

      name:
        'Inverse',

      formula:
        'x⁻¹ = 1/x',

      status:
        'recognize',

      meaning:
        'L’exposant −1 appliqué à un nombre signifie prendre son inverse.',

      variables:
        'x ≠ 0',

      example:
        '2⁻¹ = 1/2 = 0.5',

      audio:
        'Attention : le sens de z⁻¹ en DSP sera relié à cette écriture mais interprété via la transformée en Z.',

      python:
        'inverse = 1 / x',

      prerequisiteIds: [
        'division'
      ]
    },


    /* ======================================================================
       TEMPS / FRÉQUENCE
       ====================================================================== */

    {
      id: 'formula_frequency_period',

      module:
        'time_frequency',

      name:
        'Fréquence à partir de la période',

      formula:
        'f = 1/T',

      status:
        'memorise',

      meaning:
        'La fréquence est l’inverse de la durée d’un cycle.',

      variables:
        'f = fréquence en Hz, T = période en secondes',

      example:
        'T = 0.01 s → f = 1 / 0.01 = 100 Hz',

      audio:
        'Un cycle de 10 ms correspond à une fréquence de 100 Hz.',

      python:
        'f = 1 / T',

      prerequisiteIds: [
        'division',
        'period',
        'frequency'
      ]
    },


    {
      id: 'formula_period_frequency',

      module:
        'time_frequency',

      name:
        'Période à partir de la fréquence',

      formula:
        'T = 1/f',

      status:
        'memorise',

      meaning:
        'La durée d’un cycle est l’inverse de la fréquence.',

      variables:
        'T = secondes, f = Hz',

      example:
        'f = 50 Hz → T = 1 / 50 = 0.02 s',

      audio:
        '50 Hz correspond à un cycle toutes les 20 ms.',

      python:
        'T = 1 / f',

      prerequisiteIds: [
        'formula_frequency_period'
      ]
    },


    {
      id: 'formula_angular_frequency',

      module:
        'time_frequency',

      name:
        'Fréquence angulaire',

      formula:
        'ω = 2πf',

      status:
        'memorise',

      meaning:
        'Convertit une fréquence exprimée en cycles par seconde en radians par seconde.',

      variables:
        'ω = rad/s, f = Hz',

      example:
        'f = 100 Hz → ω = 200π rad/s ≈ 628.3 rad/s',

      audio:
        'La fréquence angulaire apparaît naturellement dans l’écriture des oscillateurs.',

      python:
        'omega = 2 * math.pi * f',

      prerequisiteIds: [
        'pi',
        'omega',
        'frequency'
      ]
    },


    {
      id: 'formula_nyquist',

      module:
        'sampling',

      name:
        'Fréquence de Nyquist',

      formula:
        'fN = fₛ / 2',

      status:
        'memorise',

      meaning:
        'La fréquence de Nyquist est égale à la moitié du sample rate.',

      variables:
        'fₛ = sample rate',

      example:
        '48 000 / 2 = 24 000 Hz',

      audio:
        'À 48 kHz, Nyquist vaut 24 kHz.',

      python:
        'f_nyquist = fs / 2',

      prerequisiteIds: [
        'sample_rate'
      ]
    },


    /* ======================================================================
       SIGNAUX
       ====================================================================== */

    {
      id: 'formula_identity_system',

      module:
        'systems',

      name:
        'Système identité',

      formula:
        'y[n] = x[n]',

      status:
        'memorise',

      meaning:
        'Chaque valeur de sortie est égale à la valeur d’entrée correspondante.',

      variables:
        'x = entrée, y = sortie',

      example:
        'x[2] = 0.4 → y[2] = 0.4',

      audio:
        'Le signal traverse le système sans modification.',

      python:
        'y[n] = x[n]',

      prerequisiteIds: [
        'input_signal',
        'output_signal'
      ]
    },


    {
      id: 'formula_gain',

      module:
        'systems',

      name:
        'Gain linéaire',

      formula:
        'y[n] = a·x[n]',

      status:
        'memorise',

      meaning:
        'Chaque échantillon est multiplié par un coefficient a.',

      variables:
        'a = gain linéaire',

      example:
        'a = 0.5, x[n] = 0.8 → y[n] = 0.4',

      audio:
        'C’est l’un des traitements audio les plus simples.',

      python:
        'y = a * x',

      prerequisiteIds: [
        'multiplication',
        'xn'
      ]
    },


    {
      id: 'formula_delay',

      module:
        'systems',

      name:
        'Retard d’un échantillon',

      formula:
        'y[n] = x[n−1]',

      status:
        'memorise',

      meaning:
        'La sortie à l’indice n prend la valeur précédente de l’entrée.',

      variables:
        'n = indice',

      example:
        'x = [3,8,4] → y peut commencer par [0,3,8]',

      audio:
        'C’est un délai d’un seul sample.',

      python:
        'y[n] = x[n - 1]',

      prerequisiteIds: [
        'xn_minus_1'
      ]
    },


    {
      id: 'formula_energy',

      module:
        'discrete_signals',

      name:
        'Énergie d’un signal discret',

      formula:
        'Eₓ = Σ |x[n]|²',

      status:
        'recognize',

      meaning:
        'On additionne les carrés des magnitudes des valeurs du signal.',

      variables:
        'x[n] = valeur du signal',

      example:
        'x = [1, 2, 2] → E = 1 + 4 + 4 = 9',

      audio:
        'Permet de définir mathématiquement l’énergie d’un signal discret.',

      python:
        'E = sum(abs(v)**2 for v in x)',

      prerequisiteIds: [
        'sigma',
        'square'
      ]
    },


    /* ======================================================================
       TRIGONOMÉTRIE / COMPLEXES
       ====================================================================== */

    {
      id: 'formula_sine',

      module:
        'trigonometry',

      name:
        'Sinusoïde continue',

      formula:
        'x(t) = A·sin(2πft + φ)',

      status:
        'recognize',

      meaning:
        'Décrit une oscillation sinusoïdale d’amplitude A, fréquence f et phase φ.',

      variables:
        'A = amplitude, f = fréquence, φ = phase',

      example:
        'A=1, f=440 Hz, φ=0',

      audio:
        'C’est le modèle mathématique classique d’un oscillateur sinusoïdal.',

      python:
        'x = A * math.sin(2 * math.pi * f * t + phase)',

      prerequisiteIds: [
        'sine',
        'pi',
        'frequency'
      ]
    },


    {
      id: 'formula_euler',

      module:
        'complex',

      name:
        'Formule d’Euler',

      formula:
        'e^(jθ) = cos(θ) + j·sin(θ)',

      status:
        'memorise',

      meaning:
        'Une exponentielle complexe représente un point tournant sur le cercle unité.',

      variables:
        'θ = angle en radians',

      example:
        'θ = 0 → e^(j0) = 1',

      audio:
        'Elle relie directement nombres complexes, phase, sinus et Fourier.',

      python:
        'z = cmath.exp(1j * theta)',

      prerequisiteIds: [
        'imaginary_j',
        'sine',
        'cosine'
      ]
    },


    /* ======================================================================
       CONVOLUTION
       ====================================================================== */

    {
      id: 'formula_convolution',

      module:
        'convolution',

      name:
        'Convolution discrète',

      formula:
        'y[n] = Σ x[k]·h[n−k]',

      status:
        'recognize',

      meaning:
        'Pour chaque sortie n, on multiplie et additionne des valeurs décalées de x et h.',

      variables:
        'x = entrée, h = réponse impulsionnelle, k = indice de somme',

      example:
        'L’explication détaillée sera construite visuellement dans le module convolution.',

      audio:
        'Filtres FIR et réverbération par convolution reposent sur cette opération.',

      python:
        'y = np.convolve(x, h)',

      prerequisiteIds: [
        'sigma',
        'impulse_response'
      ]
    },


    /* ======================================================================
       FILTRES
       ====================================================================== */

    {
      id: 'formula_fir',

      module:
        'fir',

      name:
        'Filtre FIR général',

      formula:
        'y[n] = Σ b[k]·x[n−k]',

      status:
        'recognize',

      meaning:
        'La sortie est une somme pondérée de plusieurs valeurs présentes et passées de l’entrée.',

      variables:
        'b[k] = coefficients FIR',

      example:
        'Avec deux coefficients : y[n] = b₀x[n] + b₁x[n−1]',

      audio:
        'Les coefficients définissent la réponse du filtre.',

      python:
        'y[n] = sum(b[k] * x[n-k] for k in range(len(b)))',

      prerequisiteIds: [
        'fir',
        'sigma'
      ]
    },


    {
      id: 'formula_iir_first_order',

      module:
        'iir',

      name:
        'Équation récursive simple',

      formula:
        'y[n] = b₀x[n] − a₁y[n−1]',

      status:
        'recognize',

      meaning:
        'La sortie dépend de l’entrée actuelle et d’une sortie précédente.',

      variables:
        'b₀ = voie directe, a₁ = coefficient récursif',

      example:
        'Le terme y[n−1] introduit la mémoire et le feedback.',

      audio:
        'C’est une structure élémentaire de filtre IIR.',

      python:
        'y[n] = b0*x[n] - a1*y[n-1]',

      prerequisiteIds: [
        'feedback',
        'difference_equation'
      ]
    },


    /* ======================================================================
       FOURIER
       ====================================================================== */

    {
      id: 'formula_dft',

      module:
        'dft',

      name:
        'Transformée de Fourier discrète',

      formula:
        'X[k] = Σ(n=0→N−1) x[n]·e^(−j2πkn/N)',

      status:
        'reference',

      meaning:
        'Pour chaque indice fréquentiel k, on mesure la correspondance entre le signal et une oscillation complexe.',

      variables:
        'N = nombre de samples, n = temps discret, k = fréquence discrète',

      example:
        'On ne cherchera pas à mémoriser cette formule avant d’avoir décodé chacun de ses symboles.',

      audio:
        'La DFT transforme un bloc temporel en coefficients fréquentiels.',

      python:
        'X = np.fft.fft(x)',

      prerequisiteIds: [
        'formula_euler',
        'sigma',
        'frequency_domain'
      ]
    },


    {
      id: 'formula_bin_frequency',

      module:
        'dft',

      name:
        'Fréquence d’un bin DFT',

      formula:
        'fₖ = k·fₛ/N',

      status:
        'memorise',

      meaning:
        'Convertit un indice k de la DFT en fréquence physique.',

      variables:
        'k = bin, fₛ = sample rate, N = taille de DFT',

      example:
        'fₛ=48000, N=48000, k=440 → fₖ=440 Hz',

      audio:
        'Permet de savoir quelle fréquence correspond à un bin FFT.',

      python:
        'frequency = k * fs / N',

      prerequisiteIds: [
        'frequency_bin',
        'sample_rate'
      ]
    },


    /* ======================================================================
       Z
       ====================================================================== */

    {
      id: 'formula_z_transform',

      module:
        'z_transform',

      name:
        'Transformée en Z',

      formula:
        'X(z) = Σ x[n]·z^(−n)',

      status:
        'reference',

      meaning:
        'Représente un signal discret dans le domaine Z.',

      variables:
        'z = variable complexe',

      example:
        'Nous l’introduirons seulement après avoir compris délais et équations aux différences.',

      audio:
        'Le domaine Z est particulièrement utile pour analyser les filtres numériques.',

      python:
        null,

      prerequisiteIds: [
        'complex_number',
        'unit_delay'
      ]
    }

  ],


  formula(id){

    return (
      this.formulas.find(
        formula =>
          formula.id === id
      )
      ||
      null
    );

  },


  byModule(moduleId){

    return this.formulas.filter(
      formula =>
        formula.module === moduleId
    );

  },


  byStatus(status){

    return this.formulas.filter(
      formula =>
        formula.status === status
    );

  }

};


/* ==========================================================================
   COMPATIBILITÉ

   Une partie de l'ancienne interface utilisait ConceptBase.formulas.
   On l'expose ici pour faciliter la transition vers la nouvelle architecture.
   ========================================================================== */

ConceptBase.formulas =
  FormulaBase.formulas;


/* ==========================================================================
   FIN BLOC 2/10

   Bloc 3 :
   QuestionBank — mathématiques fondamentales

   On commencera volontairement TRÈS simple :
   nombres → fractions → puissances → algèbre → fonctions → indices → Σ
   ========================================================================== */
   /* ==========================================================================
   BLOCK 3/10 — QUESTIONS : FONDATIONS MATHÉMATIQUES

   Principe pédagogique :
   - une difficulté nouvelle à la fois
   - calculs simples
   - traduction en langage courant
   - connexion DSP seulement quand elle aide
   - pas de formule avancée prématurée
   ========================================================================== */


/* ==========================================================================
   CONCEPTS MATHS COMPLÉMENTAIRES

   Le bloc 1 contenait les concepts les plus fréquents.
   On ajoute ici quelques concepts nécessaires au suivi individuel.
   ========================================================================== */

ConceptBase.concepts.push(

  {
    id: 'fraction',
    module: 'fractions',
    symbol: 'a/b',
    name: 'Fraction',
    read: 'a sur b',
    meaning:
      'Une fraction représente une division entre un numérateur et un dénominateur.',
    audio:
      'Les rapports et normalisations apparaissent constamment en DSP.',
    mnemonic:
      'barre de fraction = division'
  },

  {
    id: 'scientific_notation',
    module: 'powers',
    symbol: 'a × 10ⁿ',
    name: 'Notation scientifique',
    read: 'a fois dix puissance n',
    meaning:
      'Façon compacte d’écrire des nombres très grands ou très petits.',
    audio:
      'Utile pour lire des durées, fréquences et valeurs numériques très petites.',
    mnemonic:
      '10ⁿ déplace la virgule'
  },

  {
    id: 'equality',
    module: 'algebra',
    symbol: '=',
    name: 'Égalité',
    read: 'est égal à',
    meaning:
      'Indique que les expressions de gauche et de droite représentent la même valeur.',
    audio:
      'Dans une équation DSP, le côté droit décrit comment calculer la sortie à gauche.',
    mnemonic:
      '= : même valeur des deux côtés'
  },

  {
    id: 'vector',
    module: 'linear_algebra',
    symbol: '[x₁, x₂, …]',
    name: 'Vecteur',
    read: 'vecteur x',
    meaning:
      'Liste ordonnée de nombres pouvant être considérée comme un point ou une direction.',
    audio:
      'Un bloc de N samples peut être considéré comme un vecteur de dimension N.',
    mnemonic:
      'vecteur = liste de coordonnées'
  },

  {
    id: 'dot_product',
    module: 'linear_algebra',
    symbol: 'x · y',
    name: 'Produit scalaire',
    read: 'x scalaire y',
    meaning:
      'On multiplie les composantes correspondantes de deux vecteurs puis on additionne les résultats.',
    audio:
      'Cette idée de projection devient importante pour comprendre Fourier.',
    mnemonic:
      'multiplie en face-à-face puis additionne'
  },

  {
    id: 'derivative',
    module: 'calculus',
    symbol: 'dy/dx',
    name: 'Dérivée',
    read: 'd y sur d x',
    meaning:
      'Mesure la vitesse instantanée de variation d’une quantité.',
    audio:
      'Une dérivée permet de décrire comment un signal varie.',
    mnemonic:
      'dérivée = pente instantanée'
  },

  {
    id: 'integral',
    module: 'calculus',
    symbol: '∫',
    name: 'Intégrale',
    read: 'intégrale',
    meaning:
      'Opération d’accumulation continue, souvent interprétée comme une aire.',
    audio:
      'Les intégrales apparaissent naturellement avec les signaux continus.',
    mnemonic:
      'intégrale = accumulation'
  },

  {
    id: 'mean',
    module: 'probability',
    symbol: 'μ',
    name: 'Moyenne',
    read: 'mu',
    meaning:
      'Somme des valeurs divisée par leur nombre.',
    audio:
      'La moyenne intervient dans l’analyse de bruit et de signaux aléatoires.',
    mnemonic:
      'moyenne = somme / nombre de valeurs'
  },

  {
    id: 'variance',
    module: 'probability',
    symbol: 'σ²',
    name: 'Variance',
    read: 'sigma carré',
    meaning:
      'Mesure la dispersion des valeurs autour de leur moyenne.',
    audio:
      'La variance est liée à la puissance de certains signaux aléatoires.',
    mnemonic:
      'variance = à quel point ça s’écarte'
  }

);


/* ==========================================================================
   QUESTIONS MATHÉMATIQUES
   ========================================================================== */

const MathQuestions = [

  /* ========================================================================
     MODULE 1 — NOMBRES & OPÉRATIONS
     ======================================================================== */

  {
    id: 'num_add_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'addition',
    type: 'mcq',

    prompt:
      'Que vaut 3 + 5 ?',

    answers: [
      '8',
      '15',
      '2'
    ],

    correct: 0,

    explain:
      '3 + 5 = 8. Le symbole + signifie simplement additionner.',

    audio:
      'Additionner deux signaux correspond conceptuellement à les mixer.'
  },


  {
    id: 'num_sub_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'subtraction',
    type: 'mcq',

    prompt:
      'Que vaut 9 − 4 ?',

    answers: [
      '13',
      '5',
      '4'
    ],

    correct: 1,

    explain:
      '9 − 4 = 5.',

    audio: null
  },


  {
    id: 'num_mult_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'multiplication',
    type: 'mcq',

    prompt:
      'Que vaut 4 × 3 ?',

    answers: [
      '7',
      '12',
      '43'
    ],

    correct: 1,

    explain:
      '4 × 3 = 12.',

    audio:
      'En DSP, multiplier une valeur audio par une constante correspond notamment à appliquer un gain.'
  },


  {
    id: 'num_div_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'division',
    type: 'mcq',

    prompt:
      'Que vaut 8 ÷ 2 ?',

    answers: [
      '4',
      '6',
      '16'
    ],

    correct: 0,

    explain:
      '8 ÷ 2 = 4.',

    audio: null
  },


  {
    id: 'num_negative_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'subtraction',
    type: 'mcq',

    prompt:
      'Que vaut 3 − 5 ?',

    answers: [
      '2',
      '−2',
      '−8'
    ],

    correct: 1,

    explain:
      'Si on part de 3 et qu’on retire 5, on arrive à −2.',

    audio:
      'Un sample audio peut parfaitement avoir une valeur négative.'
  },


  {
    id: 'num_priority_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'multiplication',
    type: 'mcq',

    prompt:
      'Que vaut 2 + 3 × 4 ?',

    answers: [
      '20',
      '14',
      '24'
    ],

    correct: 1,

    explain:
      'La multiplication est effectuée avant l’addition : 3 × 4 = 12, puis 2 + 12 = 14.',

    audio: null
  },


  {
    id: 'num_parentheses_01',
    module: 'numbers',
    category: 'numbers',
    concept: 'multiplication',
    type: 'mcq',

    prompt:
      'Que vaut (2 + 3) × 4 ?',

    answers: [
      '14',
      '20',
      '24'
    ],

    correct: 1,

    explain:
      'Les parenthèses passent en premier : 2 + 3 = 5, puis 5 × 4 = 20.',

    audio: null
  },


  /* ========================================================================
     MODULE 2 — FRACTIONS
     ======================================================================== */

  {
    id: 'frac_read_01',
    module: 'fractions',
    category: 'fractions',
    concept: 'fraction',
    type: 'mcq',

    formulaDisplay:
      '1 / 2',

    prompt:
      'Que représente cette fraction ?',

    answers: [
      '1 multiplié par 2',
      '1 divisé par 2',
      '1 plus 2'
    ],

    correct: 1,

    explain:
      'La barre de fraction représente une division : 1/2 = 1 ÷ 2.',

    audio: null
  },


  {
    id: 'frac_value_01',
    module: 'fractions',
    category: 'fractions',
    concept: 'fraction',
    type: 'mcq',

    prompt:
      'Que vaut 1/2 sous forme décimale ?',

    answers: [
      '0.5',
      '2',
      '0.2'
    ],

    correct: 0,

    explain:
      '1 ÷ 2 = 0.5.',

    audio:
      'Multiplier un signal par 0.5 revient à diviser son amplitude par deux.'
  },


  {
    id: 'frac_quarter_01',
    module: 'fractions',
    category: 'fractions',
    concept: 'fraction',
    type: 'mcq',

    prompt:
      'Que vaut 1/4 de 8 ?',

    answers: [
      '2',
      '4',
      '8'
    ],

    correct: 0,

    explain:
      '8 × 1/4 = 8 ÷ 4 = 2.',

    audio: null
  },


  {
    id: 'frac_equivalent_01',
    module: 'fractions',
    category: 'fractions',
    concept: 'fraction',
    type: 'mcq',

    prompt:
      'Quelle fraction est équivalente à 1/2 ?',

    answers: [
      '2/4',
      '1/4',
      '2/3'
    ],

    correct: 0,

    explain:
      '2/4 se simplifie en 1/2. Les deux valent 0.5.',

    audio: null
  },


  /* ========================================================================
     MODULE 3 — PUISSANCES & RACINES
     ======================================================================== */

  {
    id: 'pow_square_01',
    module: 'powers',
    category: 'powers',
    concept: 'square',
    type: 'mcq',

    formulaDisplay:
      '3²',

    prompt:
      'Que vaut 3² ?',

    answers: [
      '6',
      '9',
      '3'
    ],

    correct: 1,

    explain:
      '3² signifie 3 × 3, donc 9.',

    audio:
      'Le carré apparaît notamment dans les calculs d’énergie.'
  },


  {
    id: 'pow_square_negative_01',
    module: 'powers',
    category: 'powers',
    concept: 'square',
    type: 'mcq',

    formulaDisplay:
      '(−3)²',

    prompt:
      'Que vaut (−3)² ?',

    answers: [
      '−9',
      '9',
      '6'
    ],

    correct: 1,

    explain:
      '(−3) × (−3) = 9.',

    audio:
      'Mettre l’amplitude au carré rend les valeurs négatives positives.'
  },


  {
    id: 'pow_sqrt_01',
    module: 'powers',
    category: 'powers',
    concept: 'sqrt',
    type: 'mcq',

    formulaDisplay:
      '√16',

    prompt:
      'Que vaut √16 ?',

    answers: [
      '8',
      '4',
      '256'
    ],

    correct: 1,

    explain:
      '4 × 4 = 16, donc √16 = 4.',

    audio: null
  },


  {
    id: 'pow_inverse_01',
    module: 'powers',
    category: 'powers',
    concept: 'division',
    type: 'mcq',

    formulaDisplay:
      '2⁻¹',

    prompt:
      'Que vaut 2⁻¹ ?',

    answers: [
      '−2',
      '1/2',
      '2'
    ],

    correct: 1,

    explain:
      'Pour un nombre non nul, x⁻¹ signifie 1/x. Donc 2⁻¹ = 1/2.',

    audio:
      'Plus tard, z⁻¹ apparaîtra dans un contexte DSP très particulier lié au délai.'
  },


  {
    id: 'pow_scientific_01',
    module: 'powers',
    category: 'powers',
    concept: 'scientific_notation',
    type: 'mcq',

    formulaDisplay:
      '1 × 10³',

    prompt:
      'Que vaut 1 × 10³ ?',

    answers: [
      '100',
      '1000',
      '0.001'
    ],

    correct: 1,

    explain:
      '10³ = 10 × 10 × 10 = 1000.',

    audio: null
  },


  {
    id: 'pow_scientific_02',
    module: 'powers',
    category: 'powers',
    concept: 'scientific_notation',
    type: 'mcq',

    formulaDisplay:
      '1 × 10⁻³',

    prompt:
      'Que vaut 1 × 10⁻³ ?',

    answers: [
      '0.001',
      '1000',
      '−1000'
    ],

    correct: 0,

    explain:
      '10⁻³ = 1/1000 = 0.001.',

    audio:
      '0.001 seconde correspond à 1 milliseconde.'
  },


  /* ========================================================================
     MODULE 4 — ALGÈBRE
     ======================================================================== */

  {
    id: 'alg_variable_01',
    module: 'algebra',
    category: 'algebra',
    concept: 'variable',
    type: 'mcq',

    prompt:
      'Dans x = 5, que représente x ?',

    answers: [
      'Une variable',
      'Une multiplication',
      'Une unité'
    ],

    correct: 0,

    explain:
      'x est le nom d’une variable qui contient ici la valeur 5.',

    audio:
      'Une variable en maths joue un rôle proche d’une variable en programmation.'
  },


  {
    id: 'alg_equality_01',
    module: 'algebra',
    category: 'algebra',
    concept: 'equality',
    type: 'mcq',

    formulaDisplay:
      'y = 2x',

    prompt:
      'Si x = 3, que vaut y ?',

    answers: [
      '5',
      '6',
      '9'
    ],

    correct: 1,

    explain:
      'On remplace x par 3 : y = 2 × 3 = 6.',

    audio: null
  },


  {
    id: 'alg_coefficient_01',
    module: 'algebra',
    category: 'algebra',
    concept: 'coefficient',
    type: 'mcq',

    formulaDisplay:
      'y = 0.5x',

    prompt:
      'Quel est le coefficient qui multiplie x ?',

    answers: [
      'y',
      '0.5',
      'x'
    ],

    correct: 1,

    explain:
      '0.5 est le coefficient placé devant x.',

    audio:
      'En audio, 0.5 peut représenter un gain linéaire.'
  },


  {
    id: 'alg_isolate_01',
    module: 'algebra',
    category: 'algebra',
    concept: 'equality',
    type: 'mcq',

    formulaDisplay:
      'x + 2 = 5',

    prompt:
      'Quelle valeur de x rend cette égalité vraie ?',

    answers: [
      '2',
      '3',
      '7'
    ],

    correct: 1,

    explain:
      '3 + 2 = 5, donc x = 3.',

    audio: null
  },


  {
    id: 'alg_read_01',
    module: 'algebra',
    category: 'algebra',
    concept: 'coefficient',
    type: 'mcq',

    formulaDisplay:
      'y = ax',

    prompt:
      'Comment lire cette expression ?',

    answers: [
      'y est égal à a multiplié par x',
      'y est égal à a plus x',
      'x est toujours égal à y'
    ],

    correct: 0,

    explain:
      'Quand deux symboles sont collés, comme ax, cela signifie généralement a × x.',

    audio:
      'Cette multiplication implicite apparaît constamment dans les équations DSP.'
  },


  /* ========================================================================
     MODULE 5 — FONCTIONS & GRAPHIQUES
     ======================================================================== */

  {
    id: 'func_read_01',
    module: 'functions',
    category: 'functions',
    concept: 'function',
    type: 'mcq',

    formulaDisplay:
      'f(x)',

    prompt:
      'Comment se lit f(x) ?',

    answers: [
      'f multiplié par x',
      'f de x',
      'x divisé par f'
    ],

    correct: 1,

    explain:
      'f(x) se lit « f de x ». Cela représente la sortie de la fonction f pour l’entrée x.',

    audio: null
  },


  {
    id: 'func_eval_01',
    module: 'functions',
    category: 'functions',
    concept: 'function',
    type: 'mcq',

    formulaDisplay:
      'f(x) = 2x',

    prompt:
      'Que vaut f(3) ?',

    answers: [
      '5',
      '6',
      '9'
    ],

    correct: 1,

    explain:
      'f(3) signifie qu’on remplace x par 3 : 2 × 3 = 6.',

    audio: null
  },


  {
    id: 'func_axes_01',
    module: 'functions',
    category: 'functions',
    concept: 'function',
    type: 'mcq',

    prompt:
      'Sur un graphique classique y = f(x), quel axe représente généralement x ?',

    answers: [
      'L’axe horizontal',
      'L’axe vertical',
      'Aucun axe'
    ],

    correct: 0,

    explain:
      'Par convention, x est généralement porté sur l’axe horizontal.',

    audio:
      'Pour un signal, l’axe horizontal représente souvent le temps.'
  },


  {
    id: 'func_linear_01',
    module: 'functions',
    category: 'functions',
    concept: 'coefficient',
    type: 'mcq',

    formulaDisplay:
      'y = 2x',

    prompt:
      'Si x augmente de 1, de combien y augmente-t-il ?',

    answers: [
      '1',
      '2',
      '4'
    ],

    correct: 1,

    explain:
      'Le coefficient 2 indique ici que y augmente de 2 quand x augmente de 1.',

    audio: null
  },


  /* ========================================================================
     MODULE 6 — SUITES, INDICES & SIGMA
     ======================================================================== */

  {
    id: 'seq_index_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'xn',
    type: 'mcq',

    formulaDisplay:
      'x = [3, 8, 4, 6]',

    prompt:
      'Que vaut x[2] si on commence à compter à partir de 0 ?',

    answers: [
      '8',
      '4',
      '6'
    ],

    correct: 1,

    explain:
      'Les indices sont 0, 1, 2, 3. La valeur à l’indice 2 est donc 4.',

    audio:
      'C’est exactement la logique d’un tableau Python ou d’un buffer.'
  },


  {
    id: 'seq_n_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'n',
    type: 'mcq',

    formulaDisplay:
      'x[n]',

    prompt:
      'Que représente n ?',

    answers: [
      'La valeur du signal',
      'L’indice utilisé pour choisir une position',
      'Une fréquence'
    ],

    correct: 1,

    explain:
      'n est l’indice. Il indique quelle valeur de la suite on consulte.',

    audio: null
  },


  {
    id: 'seq_previous_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'xn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'x = [3, 8, 4, 6], n = 3',

    prompt:
      'Que vaut x[n−1] ?',

    answers: [
      '8',
      '4',
      '6'
    ],

    correct: 1,

    explain:
      'n = 3, donc n−1 = 2. x[2] vaut 4.',

    audio:
      'x[n−1] permet d’accéder à une valeur précédente.'
  },


  {
    id: 'seq_sigma_meaning_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'sigma',
    type: 'mcq',

    prompt:
      'Que signifie principalement le symbole Σ ?',

    answers: [
      'Répéter une addition',
      'Calculer une racine',
      'Créer une fréquence'
    ],

    correct: 0,

    explain:
      'Σ indique une sommation : plusieurs termes sont additionnés.',

    audio:
      'Imagine une boucle for qui accumule une valeur.'
  },


  {
    id: 'seq_sigma_calc_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'sigma',
    type: 'mcq',

    formulaDisplay:
      'x = [2, 3, 4]',

    prompt:
      'Que vaut la somme de tous les x[n] ?',

    answers: [
      '9',
      '24',
      '7'
    ],

    correct: 0,

    explain:
      '2 + 3 + 4 = 9.',

    audio: null
  },


  {
    id: 'seq_k_01',
    module: 'sequences',
    category: 'sequences',
    concept: 'k',
    type: 'mcq',

    formulaDisplay:
      'Σ x[k]',

    prompt:
      'Quel rôle joue généralement k ici ?',

    answers: [
      'Indice parcouru pendant la somme',
      'Amplitude maximale',
      'Nombre imaginaire'
    ],

    correct: 0,

    explain:
      'k est simplement l’indice que la somme fait varier.',

    audio:
      'C’est proche d’une variable de boucle en programmation.'
  },


  /* ========================================================================
     MODULE 7 — TRIGONOMÉTRIE
     ======================================================================== */

  {
    id: 'trig_pi_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'pi',
    type: 'mcq',

    prompt:
      'Quelle valeur est la plus proche de π ?',

    answers: [
      '1.57',
      '3.14',
      '6.28'
    ],

    correct: 1,

    explain:
      'π ≈ 3.14159.',

    audio: null
  },


  {
    id: 'trig_turn_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'pi',
    type: 'mcq',

    prompt:
      'Combien de radians représente un tour complet ?',

    answers: [
      'π',
      '2π',
      'π/2'
    ],

    correct: 1,

    explain:
      'Un tour complet correspond à 2π radians.',

    audio:
      'Une oscillation complète peut être vue comme un tour complet.'
  },


  {
    id: 'trig_half_turn_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'theta',
    type: 'mcq',

    prompt:
      'Combien de radians représente 180° ?',

    answers: [
      'π',
      '2π',
      'π/2'
    ],

    correct: 0,

    explain:
      '180° correspond à π radians.',

    audio: null
  },


  {
    id: 'trig_sin_zero_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'sine',
    type: 'mcq',

    formulaDisplay:
      'sin(0)',

    prompt:
      'Que vaut sin(0) ?',

    answers: [
      '0',
      '1',
      '−1'
    ],

    correct: 0,

    explain:
      'sin(0) = 0.',

    audio:
      'Un sinus sans phase commence à zéro.'
  },


  {
    id: 'trig_cos_zero_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'cosine',
    type: 'mcq',

    formulaDisplay:
      'cos(0)',

    prompt:
      'Que vaut cos(0) ?',

    answers: [
      '0',
      '1',
      '−1'
    ],

    correct: 1,

    explain:
      'cos(0) = 1.',

    audio: null
  },


  {
    id: 'trig_omega_01',
    module: 'trigonometry',
    category: 'trigonometry',
    concept: 'omega',
    type: 'mcq',

    prompt:
      'Quelle idée mentale associer à ω ?',

    answers: [
      'Une fréquence exprimée comme une vitesse de rotation',
      'Une valeur absolue',
      'Un nombre de samples'
    ],

    correct: 0,

    explain:
      'ω représente une fréquence angulaire : une vitesse de rotation exprimée en radians.',

    audio:
      'Imagine un point tournant autour d’un cercle.'
  },


  /* ========================================================================
     MODULE 8 — NOMBRES COMPLEXES
     ======================================================================== */

  {
    id: 'complex_j_01',
    module: 'complex',
    category: 'complex',
    concept: 'imaginary_j',
    type: 'mcq',

    formulaDisplay:
      'j² = ?',

    prompt:
      'Que vaut j² ?',

    answers: [
      '1',
      '−1',
      'j'
    ],

    correct: 1,

    explain:
      'Par définition, j² = −1.',

    audio:
      'j est l’unité imaginaire utilisée en DSP et en électronique.'
  },


  {
    id: 'complex_parts_01',
    module: 'complex',
    category: 'complex',
    concept: 'complex_number',
    type: 'mcq',

    formulaDisplay:
      '3 + j4',

    prompt:
      'Quelle est la partie réelle ?',

    answers: [
      '3',
      '4',
      'j'
    ],

    correct: 0,

    explain:
      'Dans 3 + j4, la partie réelle est 3.',

    audio: null
  },


  {
    id: 'complex_parts_02',
    module: 'complex',
    category: 'complex',
    concept: 'complex_number',
    type: 'mcq',

    formulaDisplay:
      '3 + j4',

    prompt:
      'Quelle est la partie imaginaire ?',

    answers: [
      '3',
      '4',
      '7'
    ],

    correct: 1,

    explain:
      'Dans 3 + j4, le coefficient de j est 4.',

    audio: null
  },


  {
    id: 'complex_magnitude_01',
    module: 'complex',
    category: 'complex',
    concept: 'magnitude',
    type: 'mcq',

    formulaDisplay:
      'z = 3 + j4',

    prompt:
      'La magnitude |z| vaut 5. Quelle image mentale correspond le mieux à cette magnitude ?',

    answers: [
      'La distance entre z et l’origine',
      'La partie réelle uniquement',
      'Le nombre de samples'
    ],

    correct: 0,

    explain:
      'La magnitude d’un nombre complexe est sa distance à l’origine du plan complexe.',

    audio:
      'Cette notion devient fondamentale pour lire la magnitude d’un spectre.'
  },


  {
    id: 'complex_euler_01',
    module: 'complex',
    category: 'complex',
    concept: 'euler',
    type: 'mcq',

    formulaDisplay:
      'e^(jθ)',

    prompt:
      'Quelle image mentale associer à cette expression ?',

    answers: [
      'Une rotation dans le plan complexe',
      'Une division entière',
      'Un sample rate'
    ],

    correct: 0,

    explain:
      'e^(jθ) représente une rotation d’angle θ sur le cercle unité.',

    audio:
      'Cette représentation sera essentielle pour Fourier.'
  },


  /* ========================================================================
     MODULE 9 — ALGÈBRE LINÉAIRE
     ======================================================================== */

  {
    id: 'vector_01',
    module: 'linear_algebra',
    category: 'linear_algebra',
    concept: 'vector',
    type: 'mcq',

    formulaDisplay:
      '[2, 5, 1]',

    prompt:
      'Cette liste peut être interprétée comme :',

    answers: [
      'Un vecteur de dimension 3',
      'Une fréquence unique',
      'Une dérivée'
    ],

    correct: 0,

    explain:
      'Il y a trois composantes, donc on peut voir cette liste comme un vecteur de dimension 3.',

    audio:
      'Un bloc de trois samples peut également être vu comme un vecteur de trois valeurs.'
  },


  {
    id: 'vector_scale_01',
    module: 'linear_algebra',
    category: 'linear_algebra',
    concept: 'vector',
    type: 'mcq',

    formulaDisplay:
      '2 × [1, 3]',

    prompt:
      'Quel est le résultat ?',

    answers: [
      '[2, 6]',
      '[3, 5]',
      '[2, 3]'
    ],

    correct: 0,

    explain:
      'On multiplie chaque composante par 2 : [2, 6].',

    audio:
      'Appliquer un gain à plusieurs samples revient à multiplier un vecteur par un scalaire.'
  },


  {
    id: 'dot_product_01',
    module: 'linear_algebra',
    category: 'linear_algebra',
    concept: 'dot_product',
    type: 'mcq',

    formulaDisplay:
      '[1, 2] · [3, 4]',

    prompt:
      'Comment calcule-t-on ce produit scalaire ?',

    answers: [
      '1×3 + 2×4',
      '1+2+3+4',
      '1×2×3×4'
    ],

    correct: 0,

    explain:
      'On multiplie les composantes correspondantes puis on additionne : 1×3 + 2×4.',

    audio:
      'Cette logique de projection sera très importante pour comprendre Fourier.'
  },


  {
    id: 'dot_product_02',
    module: 'linear_algebra',
    category: 'linear_algebra',
    concept: 'dot_product',
    type: 'mcq',

    formulaDisplay:
      '[1, 2] · [3, 4]',

    prompt:
      'Quel est le résultat ?',

    answers: [
      '7',
      '11',
      '24'
    ],

    correct: 1,

    explain:
      '1×3 + 2×4 = 3 + 8 = 11.',

    audio: null
  },


  /* ========================================================================
     MODULE 10 — CALCUL
     ======================================================================== */

  {
    id: 'calc_derivative_01',
    module: 'calculus',
    category: 'calculus',
    concept: 'derivative',
    type: 'mcq',

    prompt:
      'Quelle intuition correspond le mieux à une dérivée ?',

    answers: [
      'Une vitesse de variation instantanée',
      'Une liste de nombres',
      'Une moyenne'
    ],

    correct: 0,

    explain:
      'Une dérivée mesure comment une quantité change localement.',

    audio:
      'Sur un graphique de signal, elle est liée à la pente instantanée.'
  },


  {
    id: 'calc_integral_01',
    module: 'calculus',
    category: 'calculus',
    concept: 'integral',
    type: 'mcq',

    prompt:
      'Quelle intuition correspond le mieux à une intégrale ?',

    answers: [
      'Une accumulation',
      'Une fréquence uniquement',
      'Une racine carrée'
    ],

    correct: 0,

    explain:
      'Une intégrale accumule continuellement de petites contributions.',

    audio:
      'Dans les signaux continus, elle joue souvent le rôle que Σ joue pour les signaux discrets.'
  },


  {
    id: 'calc_sum_vs_integral_01',
    module: 'calculus',
    category: 'calculus',
    concept: 'integral',
    type: 'mcq',

    prompt:
      'Quel parallèle pédagogique est utile pour commencer ?',

    answers: [
      'Σ pour le discret, ∫ pour le continu',
      'Σ et ∫ veulent exactement dire multiplication',
      '∫ représente toujours une fréquence'
    ],

    correct: 0,

    explain:
      'Sans dire qu’ils sont identiques, Σ et ∫ représentent tous deux des idées d’accumulation dans des contextes différents.',

    audio: null
  },


  /* ========================================================================
     MODULE 11 — PROBABILITÉS
     ======================================================================== */

  {
    id: 'prob_mean_01',
    module: 'probability',
    category: 'probability',
    concept: 'mean',
    type: 'mcq',

    formulaDisplay:
      '[2, 4, 6]',

    prompt:
      'Quelle est la moyenne ?',

    answers: [
      '4',
      '12',
      '3'
    ],

    correct: 0,

    explain:
      '(2 + 4 + 6) / 3 = 12 / 3 = 4.',

    audio:
      'La moyenne devient utile pour étudier des signaux aléatoires et du bruit.'
  },


  {
    id: 'prob_variance_01',
    module: 'probability',
    category: 'probability',
    concept: 'variance',
    type: 'mcq',

    prompt:
      'Que cherche principalement à mesurer une variance ?',

    answers: [
      'La dispersion autour de la moyenne',
      'La fréquence de Nyquist',
      'La longueur d’un buffer'
    ],

    correct: 0,

    explain:
      'La variance indique à quel point les valeurs sont dispersées autour de leur moyenne.',

    audio:
      'Cette notion deviendra importante dans le DSP stochastique.'
  }

];


/* ==========================================================================
   OUTILS POUR LES QUESTIONS MATHS
   ========================================================================== */

const MathQuestionBase = {

  all(){

    return MathQuestions.slice();

  },


  byModule(moduleId){

    return MathQuestions.filter(
      question =>
        question.module === moduleId
    );

  },


  byConcept(conceptId){

    return MathQuestions.filter(
      question =>
        question.concept === conceptId
    );

  },


  get(id){

    return (
      MathQuestions.find(
        question =>
          question.id === id
      )
      ||
      null
    );

  }

};


/* ==========================================================================
   FIN BLOC 3/10

   Bloc 4 :
   Questions DSP / pont EPFL

   On ira dans cet ordre :

   Alphabet DSP
   → signaux discrets
   → temps / fréquence
   → systèmes
   → convolution
   → Fourier
   → FIR / IIR
   → sampling
   → transformée en Z

   Aucune grosse formule ne sera demandée avant ses prérequis.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 4/10 — QUESTIONS DSP / PONT VERS LE CURSUS UNIVERSITAIRE

   Progression :
   alphabet DSP
   → signaux discrets
   → temps / fréquence
   → systèmes
   → convolution
   → Fourier
   → DFT / FFT
   → FIR / IIR
   → sampling
   → transformée en Z

   Principe :
   On apprend d'abord à LIRE l'équation.
   On ne demande pas de calcul avancé avant d'avoir appris ses composants.
   ========================================================================== */


/* ==========================================================================
   CONCEPTS DSP COMPLÉMENTAIRES
   ========================================================================== */

ConceptBase.concepts.push(

  {
    id: 'yn_minus_1',
    module: 'systems',
    symbol: 'y[n−1]',
    name: 'Sortie précédente',
    read: 'y au n moins un',
    meaning:
      'Valeur de sortie calculée à l’échantillon précédent.',
    audio:
      'Dans un filtre récursif, cette valeur peut être réinjectée dans le calcul.',
    mnemonic:
      'y[n−1] = ce que le système vient de produire'
  },

  {
    id: 'hn',
    module: 'convolution',
    symbol: 'h[n]',
    name: 'Réponse impulsionnelle',
    read: 'h au n',
    meaning:
      'Notation courante pour représenter la réponse impulsionnelle d’un système.',
    audio:
      'h[n] décrit comment un système LTI répond à une impulsion.',
    mnemonic:
      'h = empreinte du système'
  },

  {
    id: 'sampling_frequency',
    module: 'time_frequency',
    symbol: 'fₛ',
    name: 'Fréquence d’échantillonnage',
    read: 'f indice s',
    meaning:
      'Nombre d’échantillons utilisés chaque seconde.',
    audio:
      '44,1 kHz signifie 44 100 samples par seconde.',
    mnemonic:
      's = sampling'
  },

  {
    id: 'dft_size',
    module: 'dft',
    symbol: 'N',
    name: 'Taille de la DFT',
    read: 'N',
    meaning:
      'Nombre d’échantillons analysés par la DFT.',
    audio:
      'Une FFT de taille 1024 travaille généralement sur 1024 échantillons.',
    mnemonic:
      'N = nombre total'
  },

  {
    id: 'bk',
    module: 'fir',
    symbol: 'b[k]',
    name: 'Coefficient feedforward',
    read: 'b au k',
    meaning:
      'Coefficient appliqué à une valeur d’entrée dans un filtre.',
    audio:
      'Les coefficients b déterminent la contribution des samples d’entrée.',
    mnemonic:
      'b = branche entrée'
  },

  {
    id: 'a1',
    module: 'iir',
    symbol: 'a₁',
    name: 'Coefficient récursif',
    read: 'a un',
    meaning:
      'Coefficient associé à une sortie passée dans certaines conventions de filtres IIR.',
    audio:
      'Il participe au comportement récursif du filtre.',
    mnemonic:
      'a = souvent côté feedback'
  }

);


/* ==========================================================================
   QUESTIONS DSP
   ========================================================================== */

const DSPQuestions = [

  /* ========================================================================
     MODULE 12 — ALPHABET DSP
     ======================================================================== */

  {
    id: 'dsp_alpha_x_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'input_signal',
    type: 'mcq',

    formulaDisplay:
      'x[n]',

    prompt:
      'Dans une équation DSP classique, que représente souvent x[n] ?',

    answers: [
      'La valeur actuelle du signal d’entrée',
      'La fréquence d’échantillonnage',
      'Une sortie précédente'
    ],

    correct: 0,

    explain:
      'x désigne très souvent le signal d’entrée et n indique l’échantillon que l’on regarde.',

    audio:
      'Imagine le sample qui entre actuellement dans ton algorithme.'
  },


  {
    id: 'dsp_alpha_y_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'output_signal',
    type: 'mcq',

    formulaDisplay:
      'y[n]',

    prompt:
      'Que représente souvent y[n] ?',

    answers: [
      'La sortie du système à l’indice n',
      'Le nombre de fréquences',
      'Une constante mathématique'
    ],

    correct: 0,

    explain:
      'y désigne très souvent le signal de sortie.',

    audio:
      'x[n] entre dans l’effet ; y[n] en ressort.'
  },


  {
    id: 'dsp_alpha_read_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'xn',
    type: 'mcq',

    formulaDisplay:
      'x[n]',

    prompt:
      'Comment faut-il d’abord lire cette notation ?',

    answers: [
      'x à l’indice n',
      'x multiplié par n',
      'x divisé par n'
    ],

    correct: 0,

    explain:
      'Les crochets indiquent ici un indice. x[n] signifie : prends la valeur de x située à la position n.',

    audio:
      'C’est très proche de x[n] dans un tableau Python.'
  },


  {
    id: 'dsp_alpha_previous_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'xn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'x[n−1]',

    prompt:
      'Quelle traduction est correcte ?',

    answers: [
      'La valeur d’entrée précédente',
      'La moitié de x',
      'La fréquence précédente'
    ],

    correct: 0,

    explain:
      'n−1 signifie que l’on recule d’une position dans la séquence.',

    audio:
      'En traitement sample par sample : le sample d’entrée précédent.'
  },


  {
    id: 'dsp_alpha_capital_x_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'frequency_domain',
    type: 'mcq',

    formulaDisplay:
      'X[k]',

    prompt:
      'Dans le contexte d’une DFT, que représente généralement X[k] ?',

    answers: [
      'Un coefficient fréquentiel à l’indice k',
      'Le sample temporel précédent',
      'La fréquence d’échantillonnage'
    ],

    correct: 0,

    explain:
      'Dans une DFT, x[n] représente les données temporelles et X[k] les coefficients fréquentiels.',

    audio:
      'Le passage x[n] → X[k] correspond au passage d’un bloc temporel vers sa représentation fréquentielle.'
  },


  {
    id: 'dsp_alpha_sigma_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'sigma',
    type: 'mcq',

    formulaDisplay:
      'Σ',

    prompt:
      'Quelle traduction mentale doit devenir automatique ?',

    answers: [
      'Une boucle qui additionne',
      'Un délai',
      'Une fréquence'
    ],

    correct: 0,

    explain:
      'Σ est une notation compacte pour une somme de plusieurs termes.',

    audio:
      'Pense à une boucle for avec un accumulateur.'
  },


  {
    id: 'dsp_alpha_zdelay_01',
    module: 'dsp_alphabet',
    category: 'alphabet',
    concept: 'unit_delay',
    type: 'mcq',

    formulaDisplay:
      'z⁻¹',

    prompt:
      'Dans les systèmes DSP, quelle association devra progressivement devenir familière ?',

    answers: [
      'Un retard d’un échantillon',
      'Un gain de −1',
      'Une FFT'
    ],

    correct: 0,

    explain:
      'Dans les diagrammes et fonctions de transfert des systèmes discrets, z⁻¹ représente l’opérateur de retard d’un échantillon.',

    audio:
      'Imagine une petite mémoire contenant la valeur précédente.'
  },


  /* ========================================================================
     MODULE 13 — SIGNAUX DISCRETS
     ======================================================================== */

  {
    id: 'sig_sample_01',
    module: 'discrete_signals',
    category: 'signals',
    concept: 'xn',
    type: 'mcq',

    formulaDisplay:
      'x = [0.2, 0.8, −0.3, 0.1]',

    prompt:
      'Combien d’échantillons contient cette séquence ?',

    answers: [
      '3',
      '4',
      '5'
    ],

    correct: 1,

    explain:
      'La liste contient quatre valeurs, donc quatre échantillons.',

    audio:
      'On peut imaginer un minuscule buffer de quatre samples.'
  },


  {
    id: 'sig_sample_value_01',
    module: 'discrete_signals',
    category: 'signals',
    concept: 'xn',
    type: 'mcq',

    formulaDisplay:
      'x = [0.2, 0.8, −0.3, 0.1]',

    prompt:
      'Que vaut x[1] si l’indexation commence à 0 ?',

    answers: [
      '0.2',
      '0.8',
      '−0.3'
    ],

    correct: 1,

    explain:
      'x[0] = 0.2 et x[1] = 0.8.',

    audio:
      'Même logique qu’un tableau Python.'
  },


  {
    id: 'sig_delay_01',
    module: 'discrete_signals',
    category: 'signals',
    concept: 'xn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = x[n−1]',

    prompt:
      'Que fait ce système ?',

    answers: [
      'Il retarde x d’un échantillon',
      'Il double x',
      'Il calcule le spectre'
    ],

    correct: 0,

    explain:
      'La sortie actuelle prend la valeur précédente de l’entrée.',

    audio:
      'C’est le délai numérique élémentaire.'
  },


  {
    id: 'sig_impulse_01',
    module: 'discrete_signals',
    category: 'signals',
    concept: 'xn',
    type: 'mcq',

    formulaDisplay:
      'δ[n] = [1, 0, 0, 0, ...]',

    prompt:
      'Quelle image mentale correspond à cette impulsion simple ?',

    answers: [
      'Un seul sample actif suivi de zéros',
      'Une sinusoïde infinie',
      'Un bruit continu'
    ],

    correct: 0,

    explain:
      'L’impulsion discrète élémentaire vaut 1 à un indice précis et 0 ailleurs.',

    audio:
      'Envoyer une impulsion dans un système permet d’observer sa réponse impulsionnelle.'
  },


  {
    id: 'sig_energy_01',
    module: 'discrete_signals',
    category: 'signals',
    concept: 'square',
    type: 'mcq',

    formulaDisplay:
      'Eₓ = Σ |x[n]|²',

    prompt:
      'Quelle opération générale décrit cette formule ?',

    answers: [
      'Prendre la magnitude de chaque valeur, la mettre au carré, puis tout additionner',
      'Additionner uniquement les valeurs positives',
      'Calculer une fréquence'
    ],

    correct: 0,

    explain:
      'On décompose la formule : x[n] → magnitude → carré → Σ.',

    audio:
      'Le but ici est surtout d’apprendre à lire la formule de gauche à droite.'
  },


  /* ========================================================================
     MODULE 14 — TEMPS / FRÉQUENCE / ÉCHANTILLONNAGE
     ======================================================================== */

  {
    id: 'tf_hz_01',
    module: 'time_frequency',
    category: 'time_frequency',
    concept: 'omega',
    type: 'mcq',

    prompt:
      'Que signifie 100 Hz ?',

    answers: [
      '100 cycles par seconde',
      '100 samples par cycle obligatoirement',
      '100 radians exactement'
    ],

    correct: 0,

    explain:
      'Le Hertz indique un nombre de cycles par seconde.',

    audio:
      'Un oscillateur à 100 Hz effectue 100 cycles en une seconde.'
  },


  {
    id: 'tf_period_01',
    module: 'time_frequency',
    category: 'time_frequency',
    concept: 'division',
    type: 'mcq',

    formulaDisplay:
      'T = 1/f',

    prompt:
      'Quelle est la période d’un signal de 100 Hz ?',

    answers: [
      '0.01 s',
      '1 s',
      '100 s'
    ],

    correct: 0,

    explain:
      'T = 1/100 = 0.01 seconde, soit 10 ms.',

    audio:
      'Une oscillation à 100 Hz recommence toutes les 10 ms.'
  },


  {
    id: 'tf_samplerate_01',
    module: 'time_frequency',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    formulaDisplay:
      'fₛ = 48 000 Hz',

    prompt:
      'Que signifie cette valeur ?',

    answers: [
      '48 000 échantillons par seconde',
      '48 000 oscillateurs',
      '48 000 bits'
    ],

    correct: 0,

    explain:
      'Le sample rate indique combien de valeurs temporelles sont utilisées chaque seconde.',

    audio:
      '48 kHz = 48 000 samples par seconde.'
  },


  {
    id: 'tf_nyquist_01',
    module: 'time_frequency',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    formulaDisplay:
      'fₛ = 48 000 Hz',

    prompt:
      'Quelle est la fréquence de Nyquist correspondante ?',

    answers: [
      '12 000 Hz',
      '24 000 Hz',
      '48 000 Hz'
    ],

    correct: 1,

    explain:
      'Nyquist = fₛ / 2 = 48 000 / 2 = 24 000 Hz.',

    audio: null
  },


  {
    id: 'tf_omega_01',
    module: 'time_frequency',
    category: 'time_frequency',
    concept: 'omega',
    type: 'mcq',

    formulaDisplay:
      'ω = 2πf',

    prompt:
      'Que fait principalement cette relation ?',

    answers: [
      'Elle exprime une fréquence en radians par seconde',
      'Elle divise le sample rate',
      'Elle calcule une amplitude'
    ],

    correct: 0,

    explain:
      'f compte les cycles par seconde ; ω décrit la même vitesse sous forme d’angle parcouru par seconde.',

    audio:
      'C’est particulièrement naturel si l’on imagine un oscillateur comme un point tournant.'
  },


  /* ========================================================================
     MODULE 15 — SYSTÈMES
     ======================================================================== */

  {
    id: 'sys_identity_01',
    module: 'systems',
    category: 'systems',
    concept: 'output_signal',
    type: 'mcq',

    formulaDisplay:
      'y[n] = x[n]',

    prompt:
      'Que fait ce système ?',

    answers: [
      'Il copie l’entrée vers la sortie',
      'Il retarde l’entrée',
      'Il inverse le temps'
    ],

    correct: 0,

    explain:
      'La sortie actuelle est exactement égale à l’entrée actuelle.',

    audio:
      'Aucun traitement : entrée = sortie.'
  },


  {
    id: 'sys_gain_01',
    module: 'systems',
    category: 'systems',
    concept: 'coefficient',
    type: 'mcq',

    formulaDisplay:
      'y[n] = 0.5x[n]',

    prompt:
      'Si x[n] = 0.8, que vaut y[n] ?',

    answers: [
      '0.4',
      '1.3',
      '0.8'
    ],

    correct: 0,

    explain:
      '0.5 × 0.8 = 0.4.',

    audio:
      'C’est simplement un gain linéaire de 0.5.'
  },


  {
    id: 'sys_mix_01',
    module: 'systems',
    category: 'systems',
    concept: 'addition',
    type: 'mcq',

    formulaDisplay:
      'y[n] = x₁[n] + x₂[n]',

    prompt:
      'Quelle opération audio cette équation évoque-t-elle directement ?',

    answers: [
      'Un mixage',
      'Une FFT',
      'Un sample rate'
    ],

    correct: 0,

    explain:
      'Additionner deux signaux produit leur somme.',

    audio:
      'C’est la base mathématique d’un mix.'
  },


  {
    id: 'sys_memory_01',
    module: 'systems',
    category: 'systems',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = x[n] + 0.5y[n−1]',

    prompt:
      'Quel terme montre que le système possède une mémoire ?',

    answers: [
      'x[n]',
      'y[n−1]',
      'y[n]'
    ],

    correct: 1,

    explain:
      'y[n−1] utilise une sortie calculée dans le passé.',

    audio:
      'Le système doit mémoriser sa sortie précédente.'
  },


  {
    id: 'sys_feedback_01',
    module: 'systems',
    category: 'systems',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = x[n] + 0.7y[n−1]',

    prompt:
      'Pourquoi parle-t-on de feedback ?',

    answers: [
      'Parce qu’une ancienne sortie revient dans le calcul',
      'Parce que x est multiplié',
      'Parce qu’il y a des crochets'
    ],

    correct: 0,

    explain:
      'Une partie de la sortie précédente est réinjectée dans le calcul de la nouvelle sortie.',

    audio:
      'C’est la même idée générale que le feedback d’un delay.'
  },


  /* ========================================================================
     MODULE 16 — CONVOLUTION
     ======================================================================== */

  {
    id: 'conv_h_01',
    module: 'convolution',
    category: 'convolution',
    concept: 'hn',
    type: 'mcq',

    formulaDisplay:
      'h[n]',

    prompt:
      'Que représente généralement h[n] dans un système LTI ?',

    answers: [
      'Sa réponse impulsionnelle',
      'Son sample rate',
      'Son nombre de canaux'
    ],

    correct: 0,

    explain:
      'h[n] est la notation conventionnelle de la réponse impulsionnelle.',

    audio:
      'On peut voir h[n] comme l’empreinte temporelle du système.'
  },


  {
    id: 'conv_formula_read_01',
    module: 'convolution',
    category: 'convolution',
    concept: 'sigma',
    type: 'mcq',

    formulaDisplay:
      'y[n] = Σ x[k]h[n−k]',

    prompt:
      'Sans encore effectuer le calcul, quelle description est la plus juste ?',

    answers: [
      'On multiplie des valeurs correspondantes de x et d’une version décalée de h, puis on additionne',
      'On divise chaque sample par h',
      'On calcule directement une FFT'
    ],

    correct: 0,

    explain:
      'La convolution combine décalage, multiplication et sommation.',

    audio:
      'Nous la visualiserons comme une opération glissante avant d’exiger des calculs complexes.'
  },


  {
    id: 'conv_simple_01',
    module: 'convolution',
    category: 'convolution',
    concept: 'hn',
    type: 'mcq',

    formulaDisplay:
      'x = [1, 0], h = [1, 0.5]',

    prompt:
      'Si x est une impulsion simple, quelle sortie attend-on ?',

    answers: [
      '[1, 0.5]',
      '[0.5, 0]',
      '[1, 1]'
    ],

    correct: 0,

    explain:
      'Un système LTI excité par une impulsion produit sa réponse impulsionnelle h.',

    audio:
      'C’est précisément pourquoi les impulse responses sont si utiles.'
  },


  /* ========================================================================
     MODULE 17 — FOURIER : FONDATIONS
     ======================================================================== */

  {
    id: 'fourier_idea_01',
    module: 'fourier_foundations',
    category: 'fourier',
    concept: 'sine',
    type: 'mcq',

    prompt:
      'Quelle intuition est au cœur de l’analyse de Fourier ?',

    answers: [
      'Décrire un signal à l’aide de composantes sinusoïdales / exponentielles complexes',
      'Convertir tous les samples en nombres entiers',
      'Supprimer automatiquement les hautes fréquences'
    ],

    correct: 0,

    explain:
      'Fourier fournit une façon de représenter un signal selon ses composantes fréquentielles.',

    audio:
      'Au lieu de regarder seulement la waveform, on regarde les fréquences qui la composent.'
  },


  {
    id: 'fourier_complex_01',
    module: 'fourier_foundations',
    category: 'fourier',
    concept: 'euler',
    type: 'mcq',

    formulaDisplay:
      'e^(jθ) = cos(θ) + j sin(θ)',

    prompt:
      'Pourquoi cette formule est-elle importante pour Fourier ?',

    answers: [
      'Elle relie rotation complexe, sinus, cosinus et phase',
      'Elle calcule le sample rate',
      'Elle remplace la convolution'
    ],

    correct: 0,

    explain:
      'L’exponentielle complexe fournit une représentation extrêmement pratique des oscillations.',

    audio:
      'On peut imaginer un point tournant dont les projections donnent sinus et cosinus.'
  },


  {
    id: 'fourier_projection_01',
    module: 'fourier_foundations',
    category: 'fourier',
    concept: 'dot_product',
    type: 'mcq',

    prompt:
      'Pourquoi le produit scalaire devient-il utile pour comprendre Fourier ?',

    answers: [
      'Il permet de mesurer la correspondance ou projection entre deux vecteurs',
      'Il transforme automatiquement un FIR en IIR',
      'Il change le sample rate'
    ],

    correct: 0,

    explain:
      'Une intuition utile de Fourier consiste à mesurer combien le signal ressemble à différentes oscillations de référence.',

    audio:
      'On teste en quelque sorte la présence de différentes fréquences.'
  },


  /* ========================================================================
     MODULE 18 — DFT
     ======================================================================== */

  {
    id: 'dft_definition_01',
    module: 'dft',
    category: 'fourier',
    concept: 'frequency_domain',
    type: 'mcq',

    prompt:
      'Que produit une DFT de N échantillons ?',

    answers: [
      'N coefficients complexes indexés par k',
      'Toujours un seul nombre',
      'Un signal analogique'
    ],

    correct: 0,

    explain:
      'Une DFT de taille N produit N coefficients X[k].',

    audio:
      'Ces coefficients décrivent la représentation fréquentielle du bloc.'
  },


  {
    id: 'dft_nk_01',
    module: 'dft',
    category: 'fourier',
    concept: 'dft_size',
    type: 'mcq',

    formulaDisplay:
      'X[k] = Σ(n=0→N−1) x[n]e^(−j2πkn/N)',

    prompt:
      'Dans cette formule, quel symbole indique le nombre total de samples analysés ?',

    answers: [
      'N',
      'j',
      'π'
    ],

    correct: 0,

    explain:
      'N est la taille de la DFT.',

    audio:
      'Par exemple N = 1024 signifie que le bloc analysé contient 1024 samples.'
  },


  {
    id: 'dft_k_01',
    module: 'dft',
    category: 'fourier',
    concept: 'frequency_domain',
    type: 'mcq',

    formulaDisplay:
      'X[k]',

    prompt:
      'Que représente k dans le résultat de la DFT ?',

    answers: [
      'Un indice fréquentiel',
      'Un délai en secondes',
      'Une amplitude d’entrée'
    ],

    correct: 0,

    explain:
      'k sélectionne un coefficient ou bin fréquentiel.',

    audio: null
  },


  {
    id: 'dft_bin_freq_01',
    module: 'dft',
    category: 'fourier',
    concept: 'frequency_domain',
    type: 'mcq',

    formulaDisplay:
      'fₖ = k fₛ / N',

    prompt:
      'Avec fₛ = 48 000 Hz, N = 48 000 et k = 1000, quelle fréquence représente le bin k ?',

    answers: [
      '1000 Hz',
      '48 000 Hz',
      '48 Hz'
    ],

    correct: 0,

    explain:
      '1000 × 48 000 / 48 000 = 1000 Hz.',

    audio:
      'Cette relation permet de convertir un numéro de bin en Hertz.'
  },


  /* ========================================================================
     MODULE 19 — FFT / FENÊTRES
     ======================================================================== */

  {
    id: 'fft_vs_dft_01',
    module: 'fft',
    category: 'fourier',
    concept: 'frequency_domain',
    type: 'mcq',

    prompt:
      'Quelle affirmation est correcte ?',

    answers: [
      'La FFT est une famille d’algorithmes efficaces pour calculer une DFT',
      'La FFT et la DFT n’ont aucun rapport',
      'La FFT est un filtre audio'
    ],

    correct: 0,

    explain:
      'La DFT définit la transformation. FFT désigne des algorithmes permettant de la calculer efficacement.',

    audio:
      'Un analyseur spectral peut utiliser une FFT pour obtenir les coefficients de DFT.'
  },


  {
    id: 'fft_window_01',
    module: 'fft',
    category: 'fourier',
    concept: 'multiplication',
    type: 'mcq',

    formulaDisplay:
      'xw[n] = x[n] · w[n]',

    prompt:
      'Que fait cette opération ?',

    answers: [
      'Elle multiplie le signal par une fenêtre',
      'Elle retarde le signal',
      'Elle double le sample rate'
    ],

    correct: 0,

    explain:
      'Chaque sample x[n] est multiplié par la valeur correspondante de la fenêtre w[n].',

    audio:
      'Les fenêtres servent notamment à contrôler les effets de bord lors d’une analyse DFT.'
  },


  {
    id: 'fft_spectrogram_01',
    module: 'fft',
    category: 'fourier',
    concept: 'frequency_domain',
    type: 'mcq',

    prompt:
      'Quelle idée décrit le mieux un spectrogramme ?',

    answers: [
      'Observer l’évolution du spectre au cours du temps',
      'Afficher uniquement le volume moyen',
      'Afficher uniquement la waveform'
    ],

    correct: 0,

    explain:
      'Un spectrogramme représente le contenu fréquentiel de fenêtres successives dans le temps.',

    audio:
      'C’est une représentation temps-fréquence.'
  },


  /* ========================================================================
     MODULE 20 — FIR
     ======================================================================== */

  {
    id: 'fir_read_01',
    module: 'fir',
    category: 'filters',
    concept: 'bk',
    type: 'mcq',

    formulaDisplay:
      'y[n] = b₀x[n] + b₁x[n−1]',

    prompt:
      'Quelle traduction est correcte ?',

    answers: [
      'La sortie combine l’entrée actuelle et l’entrée précédente, chacune multipliée par un coefficient',
      'La sortie dépend uniquement d’une ancienne sortie',
      'La formule calcule une FFT'
    ],

    correct: 0,

    explain:
      'b₀ multiplie x[n] et b₁ multiplie x[n−1], puis les deux contributions sont additionnées.',

    audio:
      'C’est un petit filtre FIR à deux coefficients.'
  },


  {
    id: 'fir_feedback_01',
    module: 'fir',
    category: 'filters',
    concept: 'bk',
    type: 'mcq',

    formulaDisplay:
      'y[n] = b₀x[n] + b₁x[n−1]',

    prompt:
      'Cette équation contient-elle du feedback ?',

    answers: [
      'Non',
      'Oui, à cause de x[n−1]',
      'Impossible à déterminer'
    ],

    correct: 0,

    explain:
      'Elle utilise seulement des valeurs de l’entrée x. Aucune ancienne sortie y n’est réinjectée.',

    audio:
      'x[n−1] représente de la mémoire, mais pas du feedback de sortie.'
  },


  /* ========================================================================
     MODULE 21 — IIR
     ======================================================================== */

  {
    id: 'iir_feedback_01',
    module: 'iir',
    category: 'filters',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = b₀x[n] − a₁y[n−1]',

    prompt:
      'Quel terme crée la récursion ?',

    answers: [
      'y[n−1]',
      'x[n]',
      'b₀'
    ],

    correct: 0,

    explain:
      'La sortie précédente y[n−1] est réutilisée pour calculer la nouvelle sortie.',

    audio:
      'C’est le principe fondamental du feedback dans un filtre IIR.'
  },


  {
    id: 'iir_full_read_01',
    module: 'iir',
    category: 'filters',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = b₀x[n] + b₁x[n−1] − a₁y[n−1]',

    prompt:
      'Quelle lecture en français est la plus correcte ?',

    answers: [
      'La sortie actuelle combine l’entrée actuelle, l’entrée précédente et la sortie précédente, avec leurs coefficients',
      'La sortie actuelle est toujours égale à l’entrée',
      'La formule représente uniquement une sinusoïde'
    ],

    correct: 0,

    explain:
      'On peut lire l’équation comme une recette : entrée actuelle × b₀ + entrée précédente × b₁ − sortie précédente × a₁.',

    audio:
      'C’est exactement le type d’équation que tu dois progressivement pouvoir traduire en code sample par sample.'
  },


  {
    id: 'iir_code_01',
    module: 'iir',
    category: 'filters',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = b₀x[n] − a₁y[n−1]',

    prompt:
      'Quelle variable faut-il mémoriser entre deux samples pour implémenter cette équation ?',

    answers: [
      'La sortie précédente',
      'π uniquement',
      'Le nombre total de fichiers audio'
    ],

    correct: 0,

    explain:
      'Le prochain calcul aura besoin de y[n−1]. Il faut donc conserver la sortie précédente.',

    audio:
      'En C++ cela correspondra typiquement à une variable d’état.'
  },


  /* ========================================================================
     MODULE 22 — TRANSFORMÉE EN Z
     ======================================================================== */

  {
    id: 'z_delay_01',
    module: 'z_transform',
    category: 'z',
    concept: 'unit_delay',
    type: 'mcq',

    formulaDisplay:
      'z⁻¹',

    prompt:
      'Quelle brique DSP doit être comprise avant d’aborder réellement la transformée en Z ?',

    answers: [
      'Le délai d’un échantillon',
      'La compression MP3',
      'Le MIDI'
    ],

    correct: 0,

    explain:
      'Le lien entre z⁻¹ et le retard d’un échantillon permet de rendre la transformée en Z beaucoup moins abstraite.',

    audio:
      'On partira des équations aux différences avant de parler de pôles.'
  },


  {
    id: 'z_h_01',
    module: 'z_transform',
    category: 'z',
    concept: 'transfer_function',
    type: 'mcq',

    formulaDisplay:
      'H(z)',

    prompt:
      'Que représente H(z) ?',

    answers: [
      'Une fonction de transfert du système dans le domaine Z',
      'Un sample individuel',
      'Le sample rate'
    ],

    correct: 0,

    explain:
      'H(z) décrit le comportement d’un système dans le domaine Z.',

    audio:
      'Cette représentation devient particulièrement utile pour analyser les filtres.'
  },


  {
    id: 'z_pole_01',
    module: 'z_transform',
    category: 'z',
    concept: 'transfer_function',
    type: 'mcq',

    prompt:
      'À quoi les pôles sont-ils notamment liés dans l’étude d’un filtre ?',

    answers: [
      'À son comportement dynamique et à sa stabilité',
      'Au nom du fichier audio',
      'À la profondeur de couleur de l’interface'
    ],

    correct: 0,

    explain:
      'La position des pôles dans le plan Z est fondamentale pour comprendre la stabilité et la réponse du système.',

    audio:
      'Nous ne chercherons pas à manipuler les pôles avant d’avoir compris H(z).'
  },


  /* ========================================================================
     MODULE 23 — SAMPLING / ALIASING
     ======================================================================== */

  {
    id: 'sampling_nyquist_01',
    module: 'sampling',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    formulaDisplay:
      'fₛ = 44 100 Hz',

    prompt:
      'Quelle est la fréquence de Nyquist ?',

    answers: [
      '22 050 Hz',
      '44 100 Hz',
      '88 200 Hz'
    ],

    correct: 0,

    explain:
      'Nyquist = 44 100 / 2 = 22 050 Hz.',

    audio: null
  },


  {
    id: 'sampling_alias_01',
    module: 'sampling',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    prompt:
      'Quelle situation peut produire de l’aliasing ?',

    answers: [
      'Des composantes fréquentielles trop élevées par rapport au sample rate',
      'Une amplitude exactement égale à zéro',
      'L’utilisation d’un tableau Python'
    ],

    correct: 0,

    explain:
      'Lorsqu’une composante dépasse les limites imposées par l’échantillonnage, elle peut apparaître sous une fausse fréquence après échantillonnage.',

    audio:
      'C’est un problème central en synthèse numérique et en traitement non linéaire.'
  },


  /* ========================================================================
     MODULE 24 — MULTIRATE
     ======================================================================== */

  {
    id: 'multirate_down_01',
    module: 'multirate',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    prompt:
      'Que signifie globalement downsampling ?',

    answers: [
      'Réduire la fréquence d’échantillonnage',
      'Augmenter systématiquement le volume',
      'Transformer un FIR en oscillateur'
    ],

    correct: 0,

    explain:
      'Le downsampling réduit le nombre d’échantillons par seconde.',

    audio:
      'Il faut contrôler les fréquences qui deviendraient incompatibles avec le nouveau sample rate.'
  },


  {
    id: 'multirate_up_01',
    module: 'multirate',
    category: 'sampling',
    concept: 'sampling_frequency',
    type: 'mcq',

    prompt:
      'Que signifie globalement upsampling ?',

    answers: [
      'Augmenter la fréquence d’échantillonnage',
      'Supprimer toutes les fréquences aiguës',
      'Calculer une moyenne'
    ],

    correct: 0,

    explain:
      'L’upsampling augmente le nombre d’échantillons par seconde dans la représentation.',

    audio:
      'L’interpolation permet ensuite de reconstruire correctement les valeurs intermédiaires.'
  },


  /* ========================================================================
     MODULE 25 — DSP STOCHASTIQUE
     ======================================================================== */

  {
    id: 'stochastic_mean_01',
    module: 'stochastic_dsp',
    category: 'stochastic',
    concept: 'mean',
    type: 'mcq',

    prompt:
      'Pourquoi les probabilités deviennent-elles utiles en DSP ?',

    answers: [
      'Pour décrire des signaux ou bruits dont les valeurs ne sont pas parfaitement prévisibles',
      'Uniquement pour dessiner une interface',
      'Pour remplacer le sample rate'
    ],

    correct: 0,

    explain:
      'Les modèles probabilistes permettent de caractériser bruit, processus aléatoires et estimation.',

    audio:
      'On ne commencera cette partie qu’après les bases de probabilité.'
  },


  /* ========================================================================
     MODULE 26 — IMPLÉMENTATION AUDIO
     ======================================================================== */

  {
    id: 'impl_formula_code_01',
    module: 'audio_implementation',
    category: 'implementation',
    concept: 'yn_minus_1',
    type: 'mcq',

    formulaDisplay:
      'y[n] = 0.5x[n] + 0.5x[n−1]',

    prompt:
      'Quelle description du code correspondant est la plus juste ?',

    answers: [
      'Pour chaque sample, lire l’entrée actuelle et précédente, les multiplier par 0.5 puis les additionner',
      'Lancer obligatoirement une FFT',
      'Changer le sample rate à chaque sample'
    ],

    correct: 0,

    explain:
      'Une équation aux différences peut être lue comme une suite d’instructions exécutées pour chaque sample.',

    audio:
      'C’est le pont essentiel entre notation mathématique et implémentation C++.'
  },


  {
    id: 'impl_state_01',
    module: 'audio_implementation',
    category: 'implementation',
    concept: 'xn_minus_1',
    type: 'mcq',

    prompt:
      'Pourquoi un algorithme utilisant x[n−1] doit-il conserver un état ?',

    answers: [
      'Parce qu’il doit se souvenir du sample précédent',
      'Parce qu’il doit mémoriser toutes les FFT de l’ordinateur',
      'Parce que n est toujours négatif'
    ],

    correct: 0,

    explain:
      'Une fois le sample précédent passé, il faut l’avoir enregistré quelque part pour pouvoir le réutiliser.',

    audio:
      'C’est exactement ce que nous reproduirons d’abord en Python, puis en C++.'
  }

];


/* ==========================================================================
   BASE DE QUESTIONS DSP
   ========================================================================== */

const DSPQuestionBase = {

  all(){

    return DSPQuestions.slice();

  },


  byModule(moduleId){

    return DSPQuestions.filter(
      question =>
        question.module === moduleId
    );

  },


  byConcept(conceptId){

    return DSPQuestions.filter(
      question =>
        question.concept === conceptId
    );

  },


  get(id){

    return (
      DSPQuestions.find(
        question =>
          question.id === id
      )
      ||
      null
    );

  }

};


/* ==========================================================================
   BANQUE GLOBALE

   À partir de maintenant l'app peut interroger les maths ET le DSP.
   ========================================================================== */

const QuestionBank = {

  all(){

    return [
      ...MathQuestions,
      ...DSPQuestions
    ];

  },


  get(id){

    return (
      this.all().find(
        question =>
          question.id === id
      )
      ||
      null
    );

  },


  byModule(moduleId){

    return this.all().filter(
      question =>
        question.module === moduleId
    );

  },


  byConcept(conceptId){

    return this.all().filter(
      question =>
        question.concept === conceptId
    );

  },


  count(){

    return this.all().length;

  }

};


/* ==========================================================================
   FIN BLOC 4/10

   Bloc 5 :
   GÉNÉRATEUR D'EXERCICES

   Jusqu'ici les questions sont fixes.

   Le bloc 5 permettra de générer automatiquement de nouvelles variantes :

   x = [?, ?, ?, ?]
   → que vaut x[n] ?

   y = ax
   → calculer y

   Σ
   → effectuer une petite somme

   fréquence ↔ période

   sample rate → Nyquist

   gain

   délai

   FIR très simple

   Ainsi tu ne mémoriseras pas simplement les réponses du quiz :
   tu apprendras réellement la mécanique.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 5/10 — GÉNÉRATEURS D'EXERCICES DYNAMIQUES

   Objectif :
   produire de nouvelles valeurs à chaque session.

   Exemple :
   au lieu d'avoir toujours

   x = [3, 8, 4, 6]
   x[2] = ?

   l'application pourra générer :

   x = [7, 1, 9, 3]
   x[1] = ?

   Le concept reste identique, mais les nombres changent.
   ========================================================================== */


/* ==========================================================================
   OUTILS ALÉATOIRES
   ========================================================================== */

const RandomTools = {

  int(min, max){

    return Math.floor(
      Math.random() *
      (max - min + 1)
    ) + min;

  },


  float(min, max, decimals = 2){

    const value =
      Math.random() *
      (max - min)
      +
      min;


    return Number(
      value.toFixed(decimals)
    );

  },


  choice(array){

    if(
      !Array.isArray(array)
      ||
      array.length === 0
    ){
      return null;
    }


    return array[
      this.int(
        0,
        array.length - 1
      )
    ];

  },


  shuffle(array){

    const result =
      array.slice();


    for(
      let i = result.length - 1;
      i > 0;
      i--
    ){

      const j =
        this.int(
          0,
          i
        );


      [
        result[i],
        result[j]
      ]
      =
      [
        result[j],
        result[i]
      ];

    }


    return result;

  },


  uniqueDistractors(
    correct,
    count,
    generator
  ){

    const values =
      new Set();


    let safety = 0;


    while(
      values.size < count
      &&
      safety < 100
    ){

      safety++;


      const value =
        generator();


      if(
        value !== correct
        &&
        !Number.isNaN(value)
      ){

        values.add(
          value
        );

      }

    }


    return [
      ...values
    ];

  },


  mcqFromValues(
    correct,
    distractors
  ){

    const answers =
      this.shuffle([
        correct,
        ...distractors
      ]);


    return {

      answers:
        answers.map(
          value =>
            String(value)
        ),

      correct:
        answers.indexOf(
          correct
        )

    };

  }

};


/* ==========================================================================
   GÉNÉRATEURS
   ========================================================================== */

const QuestionGenerators = {

  /* ========================================================================
     NOMBRES
     ======================================================================== */

  addition(){

    const a =
      RandomTools.int(
        1,
        20
      );


    const b =
      RandomTools.int(
        1,
        20
      );


    const result =
      a + b;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-3,-2,-1,1,2,3]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_add_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'numbers',

      category:
        'numbers',

      concept:
        'addition',

      type:
        'generated',

      formulaDisplay:
        `${a} + ${b}`,

      prompt:
        'Quel est le résultat ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${a} + ${b} = ${result}.`,

      audio:
        'L’addition est aussi l’opération fondamentale du mixage de signaux.'

    };

  },


  multiplication(){

    const a =
      RandomTools.int(
        2,
        10
      );


    const b =
      RandomTools.int(
        2,
        10
      );


    const result =
      a * b;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-6,-4,-2,2,4,6]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_mult_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'numbers',

      category:
        'numbers',

      concept:
        'multiplication',

      type:
        'generated',

      formulaDisplay:
        `${a} × ${b}`,

      prompt:
        'Quel est le résultat ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${a} × ${b} = ${result}.`,

      audio:
        null

    };

  },


  /* ========================================================================
     FRACTIONS
     ======================================================================== */

  fractionOfNumber(){

    const denominators =
      [2, 4, 5];


    const denominator =
      RandomTools.choice(
        denominators
      );


    const multiplier =
      RandomTools.int(
        2,
        6
      );


    const value =
      denominator *
      multiplier;


    const result =
      value /
      denominator;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-2,-1,1,2]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_fraction_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'fractions',

      category:
        'fractions',

      concept:
        'fraction',

      type:
        'generated',

      formulaDisplay:
        `1/${denominator} de ${value}`,

      prompt:
        'Quel est le résultat ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${value} ÷ ${denominator} = ${result}.`,

      audio:
        denominator === 2
          ? 'Diviser l’amplitude par deux revient à appliquer un gain de 0.5.'
          : null

    };

  },


  /* ========================================================================
     PUISSANCES
     ======================================================================== */

  square(){

    const x =
      RandomTools.int(
        2,
        12
      );


    const result =
      x * x;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          RandomTools.choice([
            x * 2,
            result + x,
            result - x
          ])
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_square_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'powers',

      category:
        'powers',

      concept:
        'square',

      type:
        'generated',

      formulaDisplay:
        `${x}²`,

      prompt:
        'Quel est le résultat ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${x}² = ${x} × ${x} = ${result}.`,

      audio:
        'Le carré apparaît notamment dans les formules d’énergie et de puissance.'

    };

  },


  /* ========================================================================
     ALGÈBRE
     ======================================================================== */

  simpleCoefficient(){

    const coefficients =
      [0.5, 2, 3, 4];


    const a =
      RandomTools.choice(
        coefficients
      );


    let x;


    if(
      a === 0.5
    ){

      x =
        RandomTools.choice(
          [2,4,6,8,10,12]
        );

    }else{

      x =
        RandomTools.int(
          1,
          8
        );

    }


    const result =
      a * x;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () => {

          const offset =
            RandomTools.choice(
              [-2,-1,1,2,3]
            );


          return Number(
            (
              result +
              offset
            ).toFixed(2)
          );

        }
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_algebra_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'algebra',

      category:
        'algebra',

      concept:
        'coefficient',

      type:
        'generated',

      formulaDisplay:
        `y = ${a}x`,

      prompt:
        `Si x = ${x}, que vaut y ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `y = ${a} × ${x} = ${result}.`,

      audio:
        'Cette même structure deviendra plus tard y[n] = a·x[n], c’est-à-dire un gain.'

    };

  },


  /* ========================================================================
     FONCTIONS
     ======================================================================== */

  functionEvaluation(){

    const a =
      RandomTools.int(
        1,
        5
      );


    const x =
      RandomTools.int(
        1,
        6
      );


    const result =
      a * x;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-3,-2,-1,1,2,3]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_function_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'functions',

      category:
        'functions',

      concept:
        'function',

      type:
        'generated',

      formulaDisplay:
        `f(x) = ${a}x`,

      prompt:
        `Que vaut f(${x}) ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `On remplace x par ${x} : f(${x}) = ${a} × ${x} = ${result}.`,

      audio:
        null

    };

  },


  /* ========================================================================
     INDICES / SÉQUENCES
     ======================================================================== */

  sequenceIndex(){

    const length =
      RandomTools.int(
        4,
        6
      );


    const values =
      Array.from(
        {length},
        () =>
          RandomTools.int(
            1,
            9
          )
      );


    const index =
      RandomTools.int(
        0,
        length - 1
      );


    const result =
      values[index];


    const distractorsSet =
      new Set();


    const otherValues =
      values.filter(
        (_, i) =>
          i !== index
      );


    while(
      distractorsSet.size < 2
    ){

      const candidate =
        RandomTools.choice(
          otherValues
        );


      if(
        candidate !== result
      ){

        distractorsSet.add(
          candidate
        );

      }


      if(
        distractorsSet.size < 2
        &&
        new Set(values).size < 3
      ){

        distractorsSet.add(
          result +
          RandomTools.choice(
            [-2,-1,1,2]
          )
        );

      }

    }


    const distractors =
      [
        ...distractorsSet
      ].slice(
        0,
        2
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_sequence_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'sequences',

      category:
        'sequences',

      concept:
        'xn',

      type:
        'generated',

      formulaDisplay:
        `x = [${values.join(', ')}]`,

      prompt:
        `Que vaut x[${index}] ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `L’indice ${index} pointe vers la valeur ${result}.`,

      audio:
        'C’est directement comparable à x[index] en Python.'

    };

  },


  previousIndex(){

    const length =
      5;


    const values =
      Array.from(
        {length},
        () =>
          RandomTools.int(
            1,
            9
          )
      );


    const n =
      RandomTools.int(
        1,
        length - 1
      );


    const target =
      n - 1;


    const result =
      values[target];


    const distractorIndexes =
      RandomTools.shuffle(
        [
          ...Array(length).keys()
        ].filter(
          index =>
            index !== target
        )
      );


    const distractors =
      [];


    for(
      const index
      of distractorIndexes
    ){

      const value =
        values[index];


      if(
        value !== result
        &&
        !distractors.includes(value)
      ){

        distractors.push(
          value
        );

      }


      if(
        distractors.length === 2
      ){
        break;
      }

    }


    while(
      distractors.length < 2
    ){

      const value =
        result +
        RandomTools.choice(
          [-2,-1,1,2]
        );


      if(
        value !== result
        &&
        !distractors.includes(value)
      ){

        distractors.push(
          value
        );

      }

    }


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_previous_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'sequences',

      category:
        'sequences',

      concept:
        'xn_minus_1',

      type:
        'generated',

      formulaDisplay:
        `x = [${values.join(', ')}],  n = ${n}`,

      prompt:
        'Que vaut x[n−1] ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `n = ${n}, donc n−1 = ${target}. On cherche x[${target}], qui vaut ${result}.`,

      audio:
        'Tu viens de lire une valeur passée dans une séquence.'

    };

  },


  sigmaSmall(){

    const length =
      RandomTools.int(
        3,
        5
      );


    const values =
      Array.from(
        {length},
        () =>
          RandomTools.int(
            1,
            6
          )
      );


    const result =
      values.reduce(
        (sum, value) =>
          sum + value,
        0
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-4,-3,-2,-1,1,2,3,4]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_sigma_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'sequences',

      category:
        'sequences',

      concept:
        'sigma',

      type:
        'generated',

      formulaDisplay:
        `x = [${values.join(', ')}]`,

      prompt:
        'Que vaut Σ x[n] sur toute cette séquence ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${values.join(' + ')} = ${result}.`,

      audio:
        'Imagine total += x[n] dans une boucle.'

    };

  },


  /* ========================================================================
     VECTEURS
     ======================================================================== */

  dotProduct(){

    const a =
      [
        RandomTools.int(
          1,
          4
        ),
        RandomTools.int(
          1,
          4
        )
      ];


    const b =
      [
        RandomTools.int(
          1,
          4
        ),
        RandomTools.int(
          1,
          4
        )
      ];


    const first =
      a[0] *
      b[0];


    const second =
      a[1] *
      b[1];


    const result =
      first + second;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          result +
          RandomTools.choice(
            [-4,-3,-2,-1,1,2,3,4]
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_dot_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'linear_algebra',

      category:
        'linear_algebra',

      concept:
        'dot_product',

      type:
        'generated',

      formulaDisplay:
        `[${a.join(', ')}] · [${b.join(', ')}]`,

      prompt:
        'Quel est le produit scalaire ?',

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${a[0]}×${b[0]} + ${a[1]}×${b[1]} = ${first} + ${second} = ${result}.`,

      audio:
        'Cette mécanique de multiplication puis sommation deviendra très importante pour Fourier.'

    };

  },


  /* ========================================================================
     TEMPS / FRÉQUENCE
     ======================================================================== */

  frequencyFromPeriod(){

    const periods =
      [
        1,
        0.5,
        0.25,
        0.1,
        0.02,
        0.01
      ];


    const T =
      RandomTools.choice(
        periods
      );


    const result =
      Number(
        (
          1 / T
        ).toFixed(3)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          RandomTools.choice([
            Number(
              (
                result * 2
              ).toFixed(3)
            ),
            Number(
              (
                result / 2
              ).toFixed(3)
            ),
            Number(
              T.toFixed
                ? T.toFixed(3)
                : T
            )
          ])
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_freq_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'time_frequency',

      category:
        'time_frequency',

      concept:
        'division',

      type:
        'generated',

      formulaDisplay:
        'f = 1/T',

      prompt:
        `Si T = ${T} s, quelle est la fréquence ?`,

      answers:
        mcq.answers.map(
          value =>
            `${value} Hz`
        ),

      correct:
        mcq.correct,

      explain:
        `f = 1 / ${T} = ${result} Hz.`,

      audio:
        `Le signal effectue ${result} cycle${result > 1 ? 's' : ''} par seconde.`

    };

  },


  periodFromFrequency(){

    const frequencies =
      [
        1,
        2,
        4,
        10,
        50,
        100,
        200
      ];


    const f =
      RandomTools.choice(
        frequencies
      );


    const result =
      Number(
        (
          1 / f
        ).toFixed(4)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          RandomTools.choice([
            Number(
              (
                result * 2
              ).toFixed(4)
            ),
            Number(
              (
                result / 2
              ).toFixed(4)
            ),
            f
          ])
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_period_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'time_frequency',

      category:
        'time_frequency',

      concept:
        'division',

      type:
        'generated',

      formulaDisplay:
        'T = 1/f',

      prompt:
        `Si f = ${f} Hz, quelle est la période ?`,

      answers:
        mcq.answers.map(
          value =>
            `${value} s`
        ),

      correct:
        mcq.correct,

      explain:
        `T = 1 / ${f} = ${result} seconde${result !== 1 ? 's' : ''}.`,

      audio:
        result < 1
          ? `Cela correspond à ${Number((result * 1000).toFixed(2))} ms par cycle.`
          : null

    };

  },


  nyquist(){

    const rates =
      [
        8000,
        16000,
        32000,
        44100,
        48000,
        88200,
        96000
      ];


    const fs =
      RandomTools.choice(
        rates
      );


    const result =
      fs / 2;


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          RandomTools.choice([
            fs,
            fs / 4,
            fs * 2
          ])
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_nyquist_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'time_frequency',

      category:
        'sampling',

      concept:
        'sampling_frequency',

      type:
        'generated',

      formulaDisplay:
        'fN = fₛ / 2',

      prompt:
        `Si fₛ = ${fs} Hz, quelle est la fréquence de Nyquist ?`,

      answers:
        mcq.answers.map(
          value =>
            `${value} Hz`
        ),

      correct:
        mcq.correct,

      explain:
        `${fs} / 2 = ${result} Hz.`,

      audio:
        'La fréquence de Nyquist vaut toujours la moitié du sample rate.'

    };

  },


  /* ========================================================================
     SYSTÈMES / GAIN
     ======================================================================== */

  dspGain(){

    const gains =
      [
        0.25,
        0.5,
        2,
        3
      ];


    const a =
      RandomTools.choice(
        gains
      );


    const possibleInputs =
      a < 1
        ? [2,4,6,8]
        : [1,2,3,4];


    const x =
      RandomTools.choice(
        possibleInputs
      );


    const result =
      Number(
        (
          a * x
        ).toFixed(3)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          Number(
            (
              result +
              RandomTools.choice(
                [-2,-1,-0.5,0.5,1,2]
              )
            ).toFixed(3)
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_dsp_gain_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'systems',

      category:
        'systems',

      concept:
        'coefficient',

      type:
        'generated',

      formulaDisplay:
        `y[n] = ${a}x[n]`,

      prompt:
        `Si x[n] = ${x}, que vaut y[n] ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `y[n] = ${a} × ${x} = ${result}.`,

      audio:
        a < 1
          ? 'Le signal est atténué.'
          : 'Le signal est amplifié.'

    };

  },


  /* ========================================================================
     FIR SIMPLE
     ======================================================================== */

  firTwoTap(){

    const b0 =
      RandomTools.choice(
        [0.5, 1, 2]
      );


    const b1 =
      RandomTools.choice(
        [0.25, 0.5, 1]
      );


    const xn =
      RandomTools.int(
        1,
        6
      );


    const xn1 =
      RandomTools.int(
        1,
        6
      );


    const term0 =
      b0 * xn;


    const term1 =
      b1 * xn1;


    const result =
      Number(
        (
          term0 +
          term1
        ).toFixed(2)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          Number(
            (
              result +
              RandomTools.choice(
                [-3,-2,-1,1,2,3]
              )
            ).toFixed(2)
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_fir_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'fir',

      category:
        'filters',

      concept:
        'bk',

      type:
        'generated',

      formulaDisplay:
        `y[n] = ${b0}x[n] + ${b1}x[n−1]`,

      prompt:
        `Si x[n] = ${xn} et x[n−1] = ${xn1}, que vaut y[n] ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${b0}×${xn} + ${b1}×${xn1} = ${term0} + ${term1} = ${result}.`,

      audio:
        'Tu viens d’exécuter numériquement une petite équation FIR.'

    };

  },


  /* ========================================================================
     IIR SIMPLE
     ======================================================================== */

  iirFirstOrder(){

    const b0 =
      RandomTools.choice(
        [0.5, 1]
      );


    const feedback =
      RandomTools.choice(
        [0.25, 0.5]
      );


    const xn =
      RandomTools.choice(
        [2,4,6,8]
      );


    const previousY =
      RandomTools.choice(
        [2,4,6]
      );


    /*
      Pour l'exercice pédagogique on utilise :
      y[n] = b0*x[n] + feedback*y[n-1]

      Cela évite pour l'instant de mélanger
      la convention du signe du coefficient a1
      avec le calcul mental.

      La convention y = b*x - a*y sera traitée
      séparément dans le cours.
    */

    const direct =
      b0 * xn;


    const feedbackTerm =
      feedback *
      previousY;


    const result =
      Number(
        (
          direct +
          feedbackTerm
        ).toFixed(2)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          Number(
            (
              result +
              RandomTools.choice(
                [-3,-2,-1,1,2,3]
              )
            ).toFixed(2)
          )
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_iir_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'iir',

      category:
        'filters',

      concept:
        'yn_minus_1',

      type:
        'generated',

      formulaDisplay:
        `y[n] = ${b0}x[n] + ${feedback}y[n−1]`,

      prompt:
        `Si x[n] = ${xn} et y[n−1] = ${previousY}, que vaut y[n] ?`,

      answers:
        mcq.answers,

      correct:
        mcq.correct,

      explain:
        `${b0}×${xn} + ${feedback}×${previousY} = ${direct} + ${feedbackTerm} = ${result}.`,

      audio:
        'La sortie précédente participe au nouveau calcul : c’est la récursion.'

    };

  },


  /* ========================================================================
     DFT : FRÉQUENCE D'UN BIN

     On ne génère PAS encore de calcul complet de DFT.
     ======================================================================== */

  dftBinFrequency(){

    const configs =
      [
        {
          fs: 48000,
          N: 48000
        },
        {
          fs: 44100,
          N: 44100
        },
        {
          fs: 48000,
          N: 24000
        },
        {
          fs: 48000,
          N: 12000
        }
      ];


    const config =
      RandomTools.choice(
        configs
      );


    const k =
      RandomTools.choice(
        [100, 220, 440, 500, 1000]
      );


    const result =
      Number(
        (
          k *
          config.fs /
          config.N
        ).toFixed(2)
      );


    const distractors =
      RandomTools.uniqueDistractors(
        result,
        2,
        () =>
          RandomTools.choice([
            k,
            Number(
              (
                result * 2
              ).toFixed(2)
            ),
            Number(
              (
                result / 2
              ).toFixed(2)
            ),
            config.fs / 2
          ])
      );


    const mcq =
      RandomTools.mcqFromValues(
        result,
        distractors
      );


    return {

      id:
        `gen_bin_${Date.now()}_${Math.random()}`,

      generated:
        true,

      module:
        'dft',

      category:
        'fourier',

      concept:
        'frequency_domain',

      type:
        'generated',

      formulaDisplay:
        'fₖ = k·fₛ/N',

      prompt:
        `Avec k = ${k}, fₛ = ${config.fs} Hz et N = ${config.N}, quelle fréquence correspond au bin k ?`,

      answers:
        mcq.answers.map(
          value =>
            `${value} Hz`
        ),

      correct:
        mcq.correct,

      explain:
        `fₖ = ${k} × ${config.fs} / ${config.N} = ${result} Hz.`,

      audio:
        'Tu convertis simplement un numéro de bin en fréquence physique.'

    };

  }

};


/* ==========================================================================
   ASSOCIATION MODULE → GÉNÉRATEURS

   Certains modules n'ont volontairement AUCUN générateur.

   Exemple :
   complex ou z_transform demandent d'abord surtout de la compréhension,
   pas du calcul aléatoire.
   ========================================================================== */

const GeneratorRegistry = {

  numbers: [
    'addition',
    'multiplication'
  ],

  fractions: [
    'fractionOfNumber'
  ],

  powers: [
    'square'
  ],

  algebra: [
    'simpleCoefficient'
  ],

  functions: [
    'functionEvaluation'
  ],

  sequences: [
    'sequenceIndex',
    'previousIndex',
    'sigmaSmall'
  ],

  linear_algebra: [
    'dotProduct'
  ],

  time_frequency: [
    'frequencyFromPeriod',
    'periodFromFrequency',
    'nyquist'
  ],

  systems: [
    'dspGain'
  ],

  fir: [
    'firTwoTap'
  ],

  iir: [
    'iirFirstOrder'
  ],

  dft: [
    'dftBinFrequency'
  ]

};


/* ==========================================================================
   GÉNÉRER UNE QUESTION POUR UN MODULE
   ========================================================================== */

const GeneratedQuestionBase = {

  availableFor(moduleId){

    return (
      GeneratorRegistry[
        moduleId
      ]
      ||
      []
    );

  },


  canGenerate(moduleId){

    return (
      this.availableFor(
        moduleId
      ).length > 0
    );

  },


  generate(moduleId){

    const names =
      this.availableFor(
        moduleId
      );


    if(
      names.length === 0
    ){

      return null;

    }


    const generatorName =
      RandomTools.choice(
        names
      );


    const generator =
      QuestionGenerators[
        generatorName
      ];


    if(
      typeof generator !==
      'function'
    ){

      console.warn(
        `Générateur introuvable : ${generatorName}`
      );

      return null;

    }


    return generator.call(
      QuestionGenerators
    );

  },


  generateMany(
    moduleId,
    count = 5
  ){

    const questions =
      [];


    for(
      let i = 0;
      i < count;
      i++
    ){

      const question =
        this.generate(
          moduleId
        );


      if(
        question
      ){

        questions.push(
          question
        );

      }

    }


    return questions;

  }

};


/* ==========================================================================
   POOL DE QUESTIONS POUR UNE SESSION

   Mélange :
   - questions fixes
   - questions générées

   Le moteur de quiz du bloc 8 utilisera cette fonction.
   ========================================================================== */

const SessionQuestionPool = {

  forModule(
    moduleId,
    desiredSize = 10
  ){

    const fixed =
      QuestionBank
        .byModule(
          moduleId
        )
        .map(
          question => ({
            ...question
          })
        );


    const dynamic = [];


    if(
      GeneratedQuestionBase.canGenerate(
        moduleId
      )
    ){

      /*
        On produit davantage de questions
        que nécessaire pour avoir du choix.
      */

      dynamic.push(
        ...GeneratedQuestionBase.generateMany(
          moduleId,
          Math.max(
            desiredSize,
            6
          )
        )
      );

    }


    return [
      ...fixed,
      ...dynamic
    ];

  }

};


/* ==========================================================================
   FIN BLOC 5/10

   Bloc 6 :
   PYTHON LABS

   Chaque expérience contiendra :

   - objectif
   - prérequis
   - notation mathématique
   - traduction française
   - prédiction à faire AVANT l'exécution
   - code Python à copier
   - résultat attendu
   - modification à tester
   - connexion audio

   Les premiers labs n'utiliseront même pas NumPy.
   Puis seulement :
   NumPy → Matplotlib → SciPy lorsque cela devient réellement utile.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 6/10 — PYTHON LABS

   Objectif :
   relier chaque notion à une petite expérience concrète dans Python.

   Structure d'un lab :
   - objectif
   - prérequis
   - notation mathématique
   - traduction française
   - prédiction AVANT exécution
   - code Python à copier
   - résultat attendu
   - modification à tester
   - connexion audio

   Les premiers labs utilisent uniquement Python standard.
   NumPy / Matplotlib arrivent progressivement.
   ========================================================================== */


const PythonLabs = [

  /* ========================================================================
     LAB 01 — INDEX
     ======================================================================== */

  {
    id: 'py_01_index',

    order: 1,

    module: 'sequences',

    title:
      'Lire x[n] dans Python',

    difficulty:
      1,

    dependencies:
      [],

    concepts: [
      'xn',
      'n'
    ],

    objective:
      'Comprendre qu’une notation comme x[n] correspond à sélectionner une valeur dans une séquence.',

    notation:
      'x[n]',

    translation:
      'Prendre la valeur de x située à l’indice n.',

    prediction: {
      prompt:
        'Avant de lancer le code : si n = 2, que va afficher x[n] ?',

      options: [
        '8',
        '4',
        '6'
      ],

      correct:
        1,

      explanation:
        'Les indices commencent ici à 0 : x[0]=3, x[1]=8, x[2]=4.'
    },

    code: `x = [3, 8, 4, 6]

n = 2

print("x =", x)
print("n =", n)
print("x[n] =", x[n])`,

    expected:
      'x[n] = 4',

    tryIt:
      'Remplace n = 2 par n = 3. Quelle valeur obtiens-tu ?',

    audio:
      'Un buffer audio est lui aussi une suite de valeurs accessibles par indice.',

    takeaway:
      'x[n] n’est pas une multiplication : c’est une lecture à l’indice n.'
  },


  /* ========================================================================
     LAB 02 — SAMPLE PRÉCÉDENT
     ======================================================================== */

  {
    id: 'py_02_previous',

    order: 2,

    module: 'sequences',

    title:
      'Comprendre x[n−1]',

    difficulty:
      1,

    dependencies:
      [],

    concepts: [
      'xn',
      'xn_minus_1'
    ],

    objective:
      'Voir concrètement ce que signifie reculer d’un échantillon.',

    notation:
      'x[n−1]',

    translation:
      'Prendre la valeur de x située une position avant n.',

    prediction: {
      prompt:
        'Avec n = 2, que va afficher x[n−1] ?',

      options: [
        '3',
        '8',
        '4'
      ],

      correct:
        1,

      explanation:
        'n−1 = 1, donc on lit x[1], qui vaut 8.'
    },

    code: `x = [3, 8, 4, 6]

n = 2

print("x[n] =", x[n])
print("x[n-1] =", x[n - 1])`,

    expected:
      'x[n] = 4 et x[n-1] = 8',

    tryIt:
      'Mets n = 3. Compare x[n] et x[n−1].',

    audio:
      'Cette idée est fondamentale pour les delays et les filtres.',

    takeaway:
      'Le −1 agit sur l’indice : il fait reculer d’une case.'
  },


  /* ========================================================================
     LAB 03 — BOUCLE / SIGMA
     ======================================================================== */

  {
    id: 'py_03_sigma',

    order: 3,

    module: 'sequences',

    title:
      'Voir Σ comme une boucle',

    difficulty:
      1,

    dependencies:
      [],

    concepts: [
      'sigma',
      'n'
    ],

    objective:
      'Faire le lien entre une sommation mathématique et une boucle Python.',

    notation:
      'Σ x[n]',

    translation:
      'Parcourir les valeurs de x et les additionner.',

    prediction: {
      prompt:
        'Quelle somme obtiendras-tu avec x = [2, 3, 4] ?',

      options: [
        '7',
        '9',
        '24'
      ],

      correct:
        1,

      explanation:
        '2 + 3 + 4 = 9.'
    },

    code: `x = [2, 3, 4]

total = 0

for n in range(len(x)):
    total = total + x[n]

print("Somme =", total)`,

    expected:
      'Somme = 9',

    tryIt:
      'Ajoute une quatrième valeur, par exemple 5, puis relance le script.',

    audio:
      'Beaucoup de formules DSP utilisent Σ. En code, cela devient souvent une boucle.',

    takeaway:
      'Σ = répétition + addition.'
  },


  /* ========================================================================
     LAB 04 — GAIN
     ======================================================================== */

  {
    id: 'py_04_gain',

    order: 4,

    module: 'systems',

    title:
      'Une équation DSP devient du code',

    difficulty:
      1,

    dependencies:
      [],

    concepts: [
      'coefficient',
      'input_signal',
      'output_signal'
    ],

    objective:
      'Traduire y[n] = a·x[n] en instructions Python.',

    notation:
      'y[n] = a·x[n]',

    translation:
      'La sortie est l’entrée multipliée par un coefficient.',

    prediction: {
      prompt:
        'Si x = 8 et a = 0.5, que vaut y ?',

      options: [
        '4',
        '8.5',
        '16'
      ],

      correct:
        0,

      explanation:
        '0.5 × 8 = 4.'
    },

    code: `x = 8
a = 0.5

y = a * x

print("x =", x)
print("gain =", a)
print("y =", y)`,

    expected:
      'y = 4.0',

    tryIt:
      'Remplace a = 0.5 par a = 2. Que se passe-t-il ?',

    audio:
      'C’est exactement un gain linéaire.',

    takeaway:
      'Multiplier x par une constante revient à appliquer un gain.'
  },


  /* ========================================================================
     LAB 05 — FILTRE FIR SIMPLE
     ======================================================================== */

  {
    id: 'py_05_fir',

    order: 5,

    module: 'fir',

    title:
      'Premier petit filtre FIR',

    difficulty:
      2,

    dependencies:
      [],

    concepts: [
      'xn',
      'xn_minus_1',
      'bk'
    ],

    objective:
      'Calculer une équation utilisant le sample actuel et précédent.',

    notation:
      'y[n] = 0.5x[n] + 0.5x[n−1]',

    translation:
      'Faire la moyenne entre le sample actuel et le sample précédent.',

    prediction: {
      prompt:
        'Si x[n] = 6 et x[n−1] = 2, que vaut y[n] ?',

      options: [
        '3',
        '4',
        '8'
      ],

      correct:
        1,

      explanation:
        '0.5×6 + 0.5×2 = 3 + 1 = 4.'
    },

    code: `current_x = 6
previous_x = 2

b0 = 0.5
b1 = 0.5

y = b0 * current_x + b1 * previous_x

print("y =", y)`,

    expected:
      'y = 4.0',

    tryIt:
      'Change les coefficients : b0 = 0.8 et b1 = 0.2.',

    audio:
      'Cette structure ressemble à un moving average très court.',

    takeaway:
      'Une équation de filtre peut être lue comme une recette de calcul.'
  },


  /* ========================================================================
     LAB 06 — MÉMOIRE D'UN FILTRE
     ======================================================================== */

  {
    id: 'py_06_state',

    order: 6,

    module: 'systems',

    title:
      'Comprendre la mémoire d’un système',

    difficulty:
      2,

    dependencies:
      [],

    concepts: [
      'xn_minus_1',
      'yn_minus_1'
    ],

    objective:
      'Voir pourquoi un algorithme DSP doit conserver certaines valeurs entre deux calculs.',

    notation:
      'y[n] = x[n] + 0.5y[n−1]',

    translation:
      'La nouvelle sortie utilise l’entrée actuelle et l’ancienne sortie.',

    prediction: {
      prompt:
        'Si x[n] = 1 et y[n−1] = 2, que vaut y[n] ?',

      options: [
        '1',
        '2',
        '3'
      ],

      correct:
        1,

      explanation:
        '1 + 0.5×2 = 2.'
    },

    code: `x = 1
previous_y = 2

y = x + 0.5 * previous_y

print("ancienne sortie =", previous_y)
print("nouvelle sortie =", y)`,

    expected:
      'nouvelle sortie = 2.0',

    tryIt:
      'Remplace previous_y par 4 et prédis le résultat avant d’exécuter.',

    audio:
      'Le feedback et les filtres IIR dépendent précisément de ce type de mémoire.',

    takeaway:
      'Le système doit mémoriser y[n−1] pour calculer y[n].'
  },


  /* ========================================================================
     LAB 07 — PREMIÈRE SINUSOÏDE EN PYTHON STANDARD
     ======================================================================== */

  {
    id: 'py_07_sine_values',

    order: 7,

    module: 'trigonometry',

    title:
      'Calculer quelques valeurs d’un sinus',

    difficulty:
      2,

    dependencies:
      [],

    concepts: [
      'sine',
      'pi'
    ],

    objective:
      'Observer numériquement quelques positions fondamentales d’un sinus.',

    notation:
      'sin(θ)',

    translation:
      'Calculer la valeur du sinus pour un angle θ.',

    prediction: {
      prompt:
        'Que vaut environ sin(π/2) ?',

      options: [
        '0',
        '1',
        '−1'
      ],

      correct:
        1,

      explanation:
        'π/2 correspond à 90°, où le sinus vaut 1.'
    },

    code: `import math

print("sin(0) =", math.sin(0))
print("sin(pi/2) =", math.sin(math.pi / 2))
print("sin(pi) =", math.sin(math.pi))
print("sin(3pi/2) =", math.sin(3 * math.pi / 2))
print("sin(2pi) =", math.sin(2 * math.pi))`,

    expected:
      'Tu obtiendras approximativement 0, 1, 0, −1, 0.',

    tryIt:
      'Ajoute math.sin(math.pi / 4).',

    audio:
      'Ces valeurs correspondent à différentes phases d’un oscillateur sinus.',

    takeaway:
      'Le sinus transforme une position angulaire en valeur oscillante.'
  },


  /* ========================================================================
     LAB 08 — NOMBRES COMPLEXES
     ======================================================================== */

  {
    id: 'py_08_complex',

    order: 8,

    module: 'complex',

    title:
      'Créer un nombre complexe',

    difficulty:
      2,

    dependencies:
      [],

    concepts: [
      'imaginary_j',
      'complex_number',
      'magnitude'
    ],

    objective:
      'Manipuler directement un nombre complexe dans Python.',

    notation:
      'z = 3 + j4',

    translation:
      'Nombre complexe avec une partie réelle 3 et une partie imaginaire 4.',

    prediction: {
      prompt:
        'Quelle magnitude possède 3 + j4 ?',

      options: [
        '4',
        '5',
        '7'
      ],

      correct:
        1,

      explanation:
        'La magnitude vaut √(3² + 4²) = 5.'
    },

    code: `z = 3 + 4j

print("z =", z)
print("partie réelle =", z.real)
print("partie imaginaire =", z.imag)
print("magnitude =", abs(z))`,

    expected:
      'partie réelle = 3, partie imaginaire = 4, magnitude = 5',

    tryIt:
      'Teste z = 1 + 1j puis regarde sa magnitude.',

    audio:
      'Magnitude et phase deviennent fondamentales dans Fourier.',

    takeaway:
      'Python utilise 1j pour représenter l’unité imaginaire.'
  },


  /* ========================================================================
     LAB 09 — INSTALLATION NUMPY / MATPLOTLIB
     ======================================================================== */

  {
    id: 'py_09_setup_numpy',

    order: 9,

    module: 'time_frequency',

    title:
      'Préparer Python pour le DSP visuel',

    difficulty:
      1,

    dependencies:
      [],

    concepts: [],

    objective:
      'Installer les deux bibliothèques dont nous aurons besoin pour générer et visualiser des signaux.',

    notation:
      null,

    translation:
      null,

    prediction: null,

    code: `# À taper dans le terminal VS Code, PAS dans le fichier Python :

py -m pip install numpy matplotlib`,

    expected:
      'Le terminal doit terminer l’installation sans erreur majeure.',

    tryIt:
      'Ensuite crée un nouveau fichier Python et teste : import numpy as np',

    audio:
      'NumPy facilite les calculs sur des buffers ; Matplotlib permet de visualiser waveform et spectre.',

    takeaway:
      'À partir de ce point, Python devient un vrai petit laboratoire DSP.'
  },


  /* ========================================================================
     LAB 10 — SINUSOÏDE + GRAPHIQUE
     ======================================================================== */

  {
    id: 'py_10_plot_sine',

    order: 10,

    module: 'time_frequency',

    title:
      'Générer et afficher une sinusoïde',

    difficulty:
      2,

    dependencies: [
      'numpy',
      'matplotlib'
    ],

    concepts: [
      'sine',
      'frequency',
      'sampling_frequency'
    ],

    objective:
      'Relier fréquence, sample rate, indices et waveform.',

    notation:
      'x[n] = sin(2πfn/fₛ)',

    translation:
      'Calculer une valeur de sinus pour chaque indice n.',

    prediction: {
      prompt:
        'Si tu remplaces f = 5 par f = 10, que devrait-il se passer ?',

      options: [
        'La courbe oscillera deux fois plus vite',
        'La courbe deviendra plate',
        'Le sample rate sera divisé par deux'
      ],

      correct:
        0,

      explanation:
        'Doubler la fréquence double le nombre de cycles sur une même durée.'
    },

    code: `import numpy as np
import matplotlib.pyplot as plt

fs = 1000
f = 5
duration = 1

n = np.arange(fs * duration)

x = np.sin(2 * np.pi * f * n / fs)

plt.plot(n / fs, x)
plt.xlabel("Temps (s)")
plt.ylabel("Amplitude")
plt.title("Sinusoïde")
plt.grid()
plt.show()`,

    expected:
      'Une fenêtre Matplotlib s’ouvre avec une sinusoïde de 5 cycles sur une seconde.',

    tryIt:
      'Teste successivement f = 2, f = 10 et f = 50.',

    audio:
      'Tu construis littéralement un oscillateur numérique à partir de sa formule.',

    takeaway:
      'La formule mathématique devient une waveform visible.'
  },


  /* ========================================================================
     LAB 11 — RETARD VISUEL
     ======================================================================== */

  {
    id: 'py_11_delay_plot',

    order: 11,

    module: 'systems',

    title:
      'Visualiser x[n] et x[n−1]',

    difficulty:
      2,

    dependencies: [
      'numpy',
      'matplotlib'
    ],

    concepts: [
      'xn',
      'xn_minus_1'
    ],

    objective:
      'Voir graphiquement le décalage d’un échantillon.',

    notation:
      'y[n] = x[n−1]',

    translation:
      'Décaler le signal d’une case vers la droite.',

    prediction: {
      prompt:
        'Où va apparaître la valeur x[0] dans y ?',

      options: [
        'y[0]',
        'y[1]',
        'Elle disparaît toujours'
      ],

      correct:
        1,

      explanation:
        'Un retard d’un sample déplace x[0] vers l’indice 1.'
    },

    code: `import numpy as np
import matplotlib.pyplot as plt

x = np.array([3, 8, 4, 6])

y = np.zeros(len(x) + 1)
y[1:] = x

plt.stem(range(len(x)), x, linefmt="-", markerfmt="o", basefmt=" ", label="x[n]")
plt.stem(range(len(y)), y, linefmt="--", markerfmt="s", basefmt=" ", label="y[n] = x[n-1]")

plt.legend()
plt.xlabel("Indice n")
plt.ylabel("Valeur")
plt.show()`,

    expected:
      'Les valeurs de y apparaissent une position plus tard que celles de x.',

    tryIt:
      'Essaie de créer un délai de deux samples.',

    audio:
      'C’est la représentation la plus simple d’une ligne à retard numérique.',

    takeaway:
      'x[n−1] est vraiment un déplacement temporel discret.'
  },


  /* ========================================================================
     LAB 12 — CONVOLUTION
     ======================================================================== */

  {
    id: 'py_12_convolution',

    order: 12,

    module: 'convolution',

    title:
      'Voir une convolution simple',

    difficulty:
      3,

    dependencies: [
      'numpy'
    ],

    concepts: [
      'sigma',
      'hn'
    ],

    objective:
      'Observer le résultat d’une convolution sur de toutes petites séquences.',

    notation:
      'y[n] = Σ x[k]h[n−k]',

    translation:
      'Faire glisser, multiplier puis additionner.',

    prediction: {
      prompt:
        'Si x est une impulsion [1,0,0] et h = [1,0.5,0.25], quel résultat attends-tu ?',

      options: [
        '[1, 0.5, 0.25, 0, 0]',
        '[1, 1, 1]',
        '[0.25, 0.5, 1]'
      ],

      correct:
        0,

      explanation:
        'Une impulsion reproduit la réponse impulsionnelle h.'
    },

    code: `import numpy as np

x = np.array([1, 0, 0])
h = np.array([1, 0.5, 0.25])

y = np.convolve(x, h)

print("x =", x)
print("h =", h)
print("y =", y)`,

    expected:
      'y = [1.   0.5  0.25 0.   0.  ]',

    tryIt:
      'Remplace x par [1, 1, 0] et observe comment le résultat change.',

    audio:
      'C’est la même opération générale utilisée dans un FIR ou une réverbération par convolution.',

    takeaway:
      'La convolution produit une sortie en combinant x avec h.'
  },


  /* ========================================================================
     LAB 13 — FIR SUR UNE SÉQUENCE
     ======================================================================== */

  {
    id: 'py_13_fir_sequence',

    order: 13,

    module: 'fir',

    title:
      'Appliquer un FIR à une séquence',

    difficulty:
      3,

    dependencies:
      [],

    concepts: [
      'xn',
      'xn_minus_1',
      'bk'
    ],

    objective:
      'Implémenter manuellement un petit filtre sample par sample.',

    notation:
      'y[n] = 0.5x[n] + 0.5x[n−1]',

    translation:
      'Chaque sortie est la moyenne entre le sample actuel et le précédent.',

    prediction: {
      prompt:
        'Avec x = [2, 6, 4], quelle valeur devrait produire y[1] ?',

      options: [
        '3',
        '4',
        '6'
      ],

      correct:
        1,

      explanation:
        '0.5×6 + 0.5×2 = 4.'
    },

    code: `x = [2, 6, 4]

y = []

previous_x = 0

for current_x in x:
    current_y = 0.5 * current_x + 0.5 * previous_x

    y.append(current_y)

    previous_x = current_x

print("x =", x)
print("y =", y)`,

    expected:
      'y = [1.0, 4.0, 5.0]',

    tryIt:
      'Change les coefficients pour 0.8 et 0.2.',

    audio:
      'Tu viens d’implémenter un vrai petit filtre FIR avec une variable d’état.',

    takeaway:
      'La notation DSP peut être traduite presque ligne par ligne en code.'
  },


  /* ========================================================================
     LAB 14 — IIR / FEEDBACK
     ======================================================================== */

  {
    id: 'py_14_iir',

    order: 14,

    module: 'iir',

    title:
      'Observer un système récursif',

    difficulty:
      3,

    dependencies:
      [],

    concepts: [
      'yn_minus_1',
      'feedback'
    ],

    objective:
      'Voir comment une sortie précédente influence les sorties futures.',

    notation:
      'y[n] = x[n] + 0.5y[n−1]',

    translation:
      'Ajouter à l’entrée actuelle la moitié de la sortie précédente.',

    prediction: {
      prompt:
        'Avec x = [1,0,0,0], après y[0]=1, quelle valeur attends-tu pour y[1] ?',

      options: [
        '0',
        '0.5',
        '1'
      ],

      correct:
        1,

      explanation:
        'x[1]=0 et 0.5×y[0]=0.5.'
    },

    code: `x = [1, 0, 0, 0, 0, 0]

y = []

previous_y = 0

for current_x in x:
    current_y = current_x + 0.5 * previous_y

    y.append(current_y)

    previous_y = current_y

print("x =", x)
print("y =", y)`,

    expected:
      'y décroît : [1.0, 0.5, 0.25, 0.125, ...]',

    tryIt:
      'Remplace 0.5 par 0.8, puis par 0.2. Compare la durée de la décroissance.',

    audio:
      'Un coefficient de feedback plus élevé rend ici la mémoire du système plus persistante.',

    takeaway:
      'Le feedback crée une réponse qui peut continuer après la fin de l’entrée.'
  },


  /* ========================================================================
     LAB 15 — FFT
     ======================================================================== */

  {
    id: 'py_15_fft',

    order: 15,

    module: 'dft',

    title:
      'Voir ce que révèle une FFT',

    difficulty:
      4,

    dependencies: [
      'numpy',
      'matplotlib'
    ],

    concepts: [
      'frequency_domain',
      'dft_size',
      'magnitude'
    ],

    objective:
      'Créer un signal composé de deux sinus et observer les fréquences détectées.',

    notation:
      'x[n] → X[k]',

    translation:
      'Passer d’un bloc temporel à une représentation fréquentielle.',

    prediction: {
      prompt:
        'Si le signal contient 50 Hz et 120 Hz, où devrait-on voir les pics principaux ?',

      options: [
        '50 Hz et 120 Hz',
        '170 Hz uniquement',
        '0 Hz uniquement'
      ],

      correct:
        0,

      explanation:
        'Le signal est explicitement construit avec deux composantes à 50 et 120 Hz.'
    },

    code: `import numpy as np
import matplotlib.pyplot as plt

fs = 1000
duration = 1

t = np.arange(0, duration, 1 / fs)

x = (
    np.sin(2 * np.pi * 50 * t)
    +
    0.5 * np.sin(2 * np.pi * 120 * t)
)

X = np.fft.fft(x)

frequencies = np.fft.fftfreq(len(x), 1 / fs)

magnitude = np.abs(X)

positive = frequencies >= 0

plt.plot(
    frequencies[positive],
    magnitude[positive]
)

plt.xlim(0, 250)
plt.xlabel("Fréquence (Hz)")
plt.ylabel("Magnitude")
plt.title("Spectre")
plt.show()`,

    expected:
      'Le graphique montre notamment des pics autour de 50 Hz et 120 Hz.',

    tryIt:
      'Change 120 Hz en 200 Hz. Puis change son amplitude 0.5 en 1.0.',

    audio:
      'Voilà ce que fait concrètement une analyse fréquentielle : elle révèle les composantes du signal.',

    takeaway:
      'La FFT est ici l’outil informatique qui calcule la DFT efficacement.'
  }

];


/* ==========================================================================
   BASE PYTHON LABS
   ========================================================================== */

const PythonLabBase = {

  all(){

    return PythonLabs
      .slice()
      .sort(
        (a, b) =>
          a.order - b.order
      );

  },


  get(id){

    return (
      PythonLabs.find(
        lab =>
          lab.id === id
      )
      ||
      null
    );

  },


  byModule(moduleId){

    return this.all().filter(
      lab =>
        lab.module === moduleId
    );

  },


  byDifficulty(level){

    return this.all().filter(
      lab =>
        lab.difficulty === level
    );

  },


  count(){

    return PythonLabs.length;

  }

};


/* ==========================================================================
   FIN BLOC 6/10

   Bloc 7 :
   Progression + localStorage + sauvegarde JSON

   Cette fois la progression suivra :
   - concept
   - module
   - quiz
   - Python Labs
   - historique
   - prérequis

   Elle conservera également la progression entre deux ouvertures de l'app.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 7/10 — PROGRESSION / LOCALSTORAGE / SAUVEGARDE JSON

   Objectifs :

   1. Conserver automatiquement la progression dans le navigateur.
   2. Suivre séparément :
      - questions vues
      - bonnes / mauvaises réponses
      - concepts
      - modules
      - séries
      - sessions
      - Python Labs
   3. Exporter toute la progression en JSON.
   4. Réimporter une sauvegarde JSON.
   5. Permettre au moteur pédagogique de savoir ce qui est réellement acquis.

   IMPORTANT :
   localStorage persiste après fermeture du navigateur.

   En revanche :
   - vider les données du navigateur
   - utiliser certains modes privés
   - changer de navigateur / appareil

   peut supprimer ou rendre inaccessible cette sauvegarde.

   D'où l'intérêt de l'export JSON.
   ========================================================================== */


/* ==========================================================================
   CONFIGURATION
   ========================================================================== */

const ProgressConfig = {

  storageKey:
    'dsp_learning_progress_v3',

  version:
    3,

  mastery: {

    /*
      Une seule bonne réponse ne suffit PAS
      pour considérer un concept comme maîtrisé.

      Ces seuils pourront évoluer plus tard.
    */

    minimumAttempts:
      3,

    minimumCorrect:
      3,

    minimumAccuracy:
      0.75

  }

};


/* ==========================================================================
   ÉTAT INITIAL

   Cette fonction crée une progression vierge.
   ========================================================================== */

function createEmptyProgress(){

  return {

    version:
      ProgressConfig.version,

    createdAt:
      new Date().toISOString(),

    updatedAt:
      new Date().toISOString(),


    /* ----------------------------------------------------------------------
       STATISTIQUES GLOBALES
       ---------------------------------------------------------------------- */

    stats: {

      totalAnswers:
        0,

      correctAnswers:
        0,

      wrongAnswers:
        0,

      currentStreak:
        0,

      bestStreak:
        0,

      sessionsCompleted:
        0,

      labsCompleted:
        0

    },


    /* ----------------------------------------------------------------------
       QUESTIONS

       Exemple :

       questions: {

         "dsp_alpha_x_01": {
            attempts: 4,
            correct: 3,
            wrong: 1,
            lastResult: true
         }

       }
       ---------------------------------------------------------------------- */

    questions: {},


    /* ----------------------------------------------------------------------
       CONCEPTS

       Exemple :

       concepts: {

         "xn": {
            attempts: 6,
            correct: 5,
            wrong: 1,
            mastered: true
         }

       }
       ---------------------------------------------------------------------- */

    concepts: {},


    /* ----------------------------------------------------------------------
       MODULES

       Exemple :

       modules: {

         "sequences": {
            attempts: 20,
            correct: 17,
            sessionsCompleted: 2
         }

       }
       ---------------------------------------------------------------------- */

    modules: {},


    /* ----------------------------------------------------------------------
       PYTHON LABS
       ---------------------------------------------------------------------- */

    labs: {},


    /* ----------------------------------------------------------------------
       HISTORIQUE DES SESSIONS
       ---------------------------------------------------------------------- */

    sessions: [],


    /* ----------------------------------------------------------------------
       MÉTADONNÉES
       ---------------------------------------------------------------------- */

    meta: {

      lastModule:
        null,

      lastQuestion:
        null,

      lastLab:
        null,

      lastActivityAt:
        null

    }

  };

}


/* ==========================================================================
   UTILITAIRES
   ========================================================================== */

function deepClone(value){

  return JSON.parse(
    JSON.stringify(value)
  );

}


function safeNumber(
  value,
  fallback = 0
){

  return (
    typeof value === 'number'
    &&
    Number.isFinite(value)
  )
    ? value
    : fallback;

}


/* ==========================================================================
   NORMALISATION

   Très important pour les futures mises à jour.

   Si nous ajoutons des propriétés dans une future version,
   une ancienne sauvegarde ne doit pas casser l'application.
   ========================================================================== */

function normalizeProgress(raw){

  const fresh =
    createEmptyProgress();


  if(
    !raw
    ||
    typeof raw !== 'object'
  ){

    return fresh;

  }


  const normalized = {

    ...fresh,

    ...raw,

    stats: {
      ...fresh.stats,
      ...(raw.stats || {})
    },

    questions: {
      ...(raw.questions || {})
    },

    concepts: {
      ...(raw.concepts || {})
    },

    modules: {
      ...(raw.modules || {})
    },

    labs: {
      ...(raw.labs || {})
    },

    sessions:
      Array.isArray(raw.sessions)
        ? raw.sessions
        : [],

    meta: {
      ...fresh.meta,
      ...(raw.meta || {})
    }

  };


  normalized.version =
    ProgressConfig.version;


  return normalized;

}


/* ==========================================================================
   PROGRESS STORE
   ========================================================================== */

const ProgressStore = {

  data:
    createEmptyProgress(),


  /* ------------------------------------------------------------------------
     LOAD
     ------------------------------------------------------------------------ */

  load(){

    try{

      const saved =
        localStorage.getItem(
          ProgressConfig.storageKey
        );


      if(
        !saved
      ){

        this.data =
          createEmptyProgress();

        this.save();

        return this.data;

      }


      const parsed =
        JSON.parse(
          saved
        );


      this.data =
        normalizeProgress(
          parsed
        );


      return this.data;

    }catch(error){

      console.error(
        'Impossible de charger la progression :',
        error
      );


      this.data =
        createEmptyProgress();


      return this.data;

    }

  },


  /* ------------------------------------------------------------------------
     SAVE
     ------------------------------------------------------------------------ */

  save(){

    try{

      this.data.updatedAt =
        new Date().toISOString();


      localStorage.setItem(
        ProgressConfig.storageKey,
        JSON.stringify(
          this.data
        )
      );


      return true;

    }catch(error){

      console.error(
        'Impossible de sauvegarder la progression :',
        error
      );


      return false;

    }

  },


  /* ------------------------------------------------------------------------
     GET
     ------------------------------------------------------------------------ */

  get(){

    return this.data;

  },


  /* ------------------------------------------------------------------------
     RESET

     Ne pas connecter directement cette fonction à un bouton
     sans confirmation utilisateur.
     ------------------------------------------------------------------------ */

  reset(){

    this.data =
      createEmptyProgress();


    this.save();


    return this.data;

  }

};


/* ==========================================================================
   INITIALISER LES ENTRÉES
   ========================================================================== */

function ensureQuestionProgress(
  questionId
){

  if(
    !ProgressStore.data.questions[
      questionId
    ]
  ){

    ProgressStore.data.questions[
      questionId
    ] = {

      attempts:
        0,

      correct:
        0,

      wrong:
        0,

      lastResult:
        null,

      firstSeenAt:
        null,

      lastSeenAt:
        null

    };

  }


  return ProgressStore.data.questions[
    questionId
  ];

}


function ensureConceptProgress(
  conceptId
){

  if(
    !conceptId
  ){

    return null;

  }


  if(
    !ProgressStore.data.concepts[
      conceptId
    ]
  ){

    ProgressStore.data.concepts[
      conceptId
    ] = {

      attempts:
        0,

      correct:
        0,

      wrong:
        0,

      accuracy:
        0,

      mastered:
        false,

      firstSeenAt:
        null,

      lastSeenAt:
        null

    };

  }


  return ProgressStore.data.concepts[
    conceptId
  ];

}


function ensureModuleProgress(
  moduleId
){

  if(
    !moduleId
  ){

    return null;

  }


  if(
    !ProgressStore.data.modules[
      moduleId
    ]
  ){

    ProgressStore.data.modules[
      moduleId
    ] = {

      attempts:
        0,

      correct:
        0,

      wrong:
        0,

      accuracy:
        0,

      sessionsCompleted:
        0,

      lastSeenAt:
        null

    };

  }


  return ProgressStore.data.modules[
    moduleId
  ];

}


function ensureLabProgress(
  labId
){

  if(
    !ProgressStore.data.labs[
      labId
    ]
  ){

    ProgressStore.data.labs[
      labId
    ] = {

      opened:
        false,

      completed:
        false,

      openCount:
        0,

      predictionAttempts:
        0,

      predictionCorrect:
        0,

      firstOpenedAt:
        null,

      lastOpenedAt:
        null,

      completedAt:
        null

    };

  }


  return ProgressStore.data.labs[
    labId
  ];

}


/* ==========================================================================
   CALCUL DE MAÎTRISE D'UN CONCEPT
   ========================================================================== */

function calculateConceptMastery(
  conceptProgress
){

  if(
    !conceptProgress
  ){

    return false;

  }


  const attempts =
    safeNumber(
      conceptProgress.attempts
    );


  const correct =
    safeNumber(
      conceptProgress.correct
    );


  if(
    attempts === 0
  ){

    conceptProgress.accuracy =
      0;

    conceptProgress.mastered =
      false;

    return false;

  }


  const accuracy =
    correct /
    attempts;


  conceptProgress.accuracy =
    accuracy;


  const mastered =
    (
      attempts >=
        ProgressConfig.mastery.minimumAttempts

      &&

      correct >=
        ProgressConfig.mastery.minimumCorrect

      &&

      accuracy >=
        ProgressConfig.mastery.minimumAccuracy
    );


  conceptProgress.mastered =
    mastered;


  return mastered;

}


/* ==========================================================================
   ENREGISTRER UNE RÉPONSE

   C'est la fonction centrale.

   Le moteur de quiz appellera :

   ProgressTracker.recordAnswer(
      question,
      true
   );

   ou

   ProgressTracker.recordAnswer(
      question,
      false
   );
   ========================================================================== */

const ProgressTracker = {

  recordAnswer(
    question,
    isCorrect
  ){

    if(
      !question
    ){

      return;

    }


    const now =
      new Date().toISOString();


    /* ----------------------------------------------------------------------
       GLOBAL
       ---------------------------------------------------------------------- */

    const stats =
      ProgressStore.data.stats;


    stats.totalAnswers++;


    if(
      isCorrect
    ){

      stats.correctAnswers++;

      stats.currentStreak++;


      if(
        stats.currentStreak >
        stats.bestStreak
      ){

        stats.bestStreak =
          stats.currentStreak;

      }

    }else{

      stats.wrongAnswers++;

      stats.currentStreak =
        0;

    }


    /* ----------------------------------------------------------------------
       QUESTION

       Les questions générées possèdent un ID unique.
       On évite volontairement de polluer la sauvegarde avec
       des milliers d'IDs dynamiques.

       Leur apprentissage est comptabilisé au niveau du concept
       et du module.
       ---------------------------------------------------------------------- */

    if(
      !question.generated
      &&
      question.id
    ){

      const qp =
        ensureQuestionProgress(
          question.id
        );


      if(
        qp.attempts === 0
      ){

        qp.firstSeenAt =
          now;

      }


      qp.attempts++;


      if(
        isCorrect
      ){

        qp.correct++;

      }else{

        qp.wrong++;

      }


      qp.lastResult =
        Boolean(
          isCorrect
        );


      qp.lastSeenAt =
        now;

    }


    /* ----------------------------------------------------------------------
       CONCEPT
       ---------------------------------------------------------------------- */

    if(
      question.concept
    ){

      const cp =
        ensureConceptProgress(
          question.concept
        );


      if(
        cp.attempts === 0
      ){

        cp.firstSeenAt =
          now;

      }


      cp.attempts++;


      if(
        isCorrect
      ){

        cp.correct++;

      }else{

        cp.wrong++;

      }


      cp.lastSeenAt =
        now;


      calculateConceptMastery(
        cp
      );

    }


    /* ----------------------------------------------------------------------
       MODULE
       ---------------------------------------------------------------------- */

    if(
      question.module
    ){

      const mp =
        ensureModuleProgress(
          question.module
        );


      mp.attempts++;


      if(
        isCorrect
      ){

        mp.correct++;

      }else{

        mp.wrong++;

      }


      mp.accuracy =
        mp.attempts > 0
          ? mp.correct /
            mp.attempts
          : 0;


      mp.lastSeenAt =
        now;


      ProgressStore.data.meta.lastModule =
        question.module;

    }


    /* ----------------------------------------------------------------------
       META
       ---------------------------------------------------------------------- */

    ProgressStore.data.meta.lastQuestion =
      question.id || null;


    ProgressStore.data.meta.lastActivityAt =
      now;


    ProgressStore.save();

  },


  /* ------------------------------------------------------------------------
     SESSION TERMINÉE
     ------------------------------------------------------------------------ */

  completeSession(session){

    if(
      !session
    ){

      return;

    }


    const now =
      new Date().toISOString();


    const record = {

      id:
        session.id
        ||
        `session_${Date.now()}`,

      module:
        session.module
        ||
        null,

      total:
        safeNumber(
          session.total
        ),

      correct:
        safeNumber(
          session.correct
        ),

      wrong:
        safeNumber(
          session.wrong
        ),

      accuracy:
        session.total > 0
          ? session.correct /
            session.total
          : 0,

      completedAt:
        now

    };


    ProgressStore.data.sessions.push(
      record
    );


    /*
      On garde un historique raisonnable.
      500 sessions est largement suffisant
      pour cette app locale.
    */

    if(
      ProgressStore.data.sessions.length >
      500
    ){

      ProgressStore.data.sessions =
        ProgressStore.data.sessions.slice(
          -500
        );

    }


    ProgressStore.data.stats.sessionsCompleted++;


    if(
      record.module
    ){

      const mp =
        ensureModuleProgress(
          record.module
        );


      mp.sessionsCompleted++;

    }


    ProgressStore.data.meta.lastActivityAt =
      now;


    ProgressStore.save();

  },


  /* ------------------------------------------------------------------------
     LAB OUVERT
     ------------------------------------------------------------------------ */

  openLab(labId){

    const lab =
      ensureLabProgress(
        labId
      );


    const now =
      new Date().toISOString();


    if(
      !lab.opened
    ){

      lab.firstOpenedAt =
        now;

    }


    lab.opened =
      true;


    lab.openCount++;


    lab.lastOpenedAt =
      now;


    ProgressStore.data.meta.lastLab =
      labId;


    ProgressStore.data.meta.lastActivityAt =
      now;


    ProgressStore.save();

  },


  /* ------------------------------------------------------------------------
     PRÉDICTION D'UN LAB
     ------------------------------------------------------------------------ */

  recordLabPrediction(
    labId,
    isCorrect
  ){

    const lab =
      ensureLabProgress(
        labId
      );


    lab.predictionAttempts++;


    if(
      isCorrect
    ){

      lab.predictionCorrect++;

    }


    ProgressStore.data.meta.lastActivityAt =
      new Date().toISOString();


    ProgressStore.save();

  },


  /* ------------------------------------------------------------------------
     LAB TERMINÉ
     ------------------------------------------------------------------------ */

  completeLab(labId){

    const lab =
      ensureLabProgress(
        labId
      );


    if(
      lab.completed
    ){

      return;

    }


    const now =
      new Date().toISOString();


    lab.completed =
      true;


    lab.completedAt =
      now;


    ProgressStore.data.stats.labsCompleted++;


    ProgressStore.data.meta.lastLab =
      labId;


    ProgressStore.data.meta.lastActivityAt =
      now;


    ProgressStore.save();

  }

};


/* ==========================================================================
   LECTURE DES STATISTIQUES
   ========================================================================== */

const ProgressReader = {

  global(){

    const stats =
      ProgressStore.data.stats;


    const accuracy =
      stats.totalAnswers > 0
        ? stats.correctAnswers /
          stats.totalAnswers
        : 0;


    return {

      ...stats,

      accuracy:
        accuracy

    };

  },


  question(questionId){

    return (
      ProgressStore.data.questions[
        questionId
      ]
      ||
      null
    );

  },


  concept(conceptId){

    return (
      ProgressStore.data.concepts[
        conceptId
      ]
      ||
      null
    );

  },


  module(moduleId){

    return (
      ProgressStore.data.modules[
        moduleId
      ]
      ||
      null
    );

  },


  lab(labId){

    return (
      ProgressStore.data.labs[
        labId
      ]
      ||
      null
    );

  },


  /* ------------------------------------------------------------------------
     NOMBRE DE CONCEPTS MAÎTRISÉS
     ------------------------------------------------------------------------ */

  masteredConcepts(){

    return Object.entries(
      ProgressStore.data.concepts
    )
      .filter(
        ([, progress]) =>
          progress.mastered
      )
      .map(
        ([conceptId]) =>
          conceptId
      );

  },


  masteredConceptCount(){

    return this.masteredConcepts()
      .length;

  },


  /* ------------------------------------------------------------------------
     LABS TERMINÉS
     ------------------------------------------------------------------------ */

  completedLabs(){

    return Object.entries(
      ProgressStore.data.labs
    )
      .filter(
        ([, progress]) =>
          progress.completed
      )
      .map(
        ([labId]) =>
          labId
      );

  },


  /* ------------------------------------------------------------------------
     CONCEPTS À REVOIR

     On ne marque pas comme "faible" un concept
     qui n'a jamais été rencontré.

     Cette liste concerne seulement les concepts
     déjà pratiqués.
     ------------------------------------------------------------------------ */

  weakConcepts(){

    return Object.entries(
      ProgressStore.data.concepts
    )
      .filter(
        ([, progress]) => {

          if(
            progress.attempts <
            2
          ){

            return false;

          }


          return (
            progress.accuracy <
            ProgressConfig.mastery.minimumAccuracy
          );

        }
      )
      .map(
        ([conceptId, progress]) => ({

          conceptId:
            conceptId,

          attempts:
            progress.attempts,

          accuracy:
            progress.accuracy

        })
      )
      .sort(
        (a, b) =>
          a.accuracy -
          b.accuracy
      );

  },


  /* ------------------------------------------------------------------------
     DERNIÈRES SESSIONS
     ------------------------------------------------------------------------ */

  recentSessions(
    count = 5
  ){

    return ProgressStore.data.sessions
      .slice(
        -count
      )
      .reverse();

  }

};


/* ==========================================================================
   SCORE DE MAÎTRISE D'UN MODULE

   Ce score est volontairement indicatif.

   Il ne signifie PAS :
   "tu connais 83 % du DSP".

   Il signifie seulement :
   "voici ton niveau de réussite dans les exercices déjà rencontrés
   dans ce module".
   ========================================================================== */

function getModuleScore(
  moduleId
){

  const moduleProgress =
    ProgressReader.module(
      moduleId
    );


  if(
    !moduleProgress
    ||
    moduleProgress.attempts === 0
  ){

    return {

      attempted:
        false,

      attempts:
        0,

      correct:
        0,

      accuracy:
        0,

      percent:
        0

    };

  }


  const accuracy =
    moduleProgress.correct /
    moduleProgress.attempts;


  return {

    attempted:
      true,

    attempts:
      moduleProgress.attempts,

    correct:
      moduleProgress.correct,

    accuracy:
      accuracy,

    percent:
      Math.round(
        accuracy * 100
      )

  };

}


/* ==========================================================================
   EXPORT JSON
   ========================================================================== */

const ProgressBackup = {

  exportJSON(){

    const exportData = {

      app:
        'DSP Learning Lab',

      format:
        'dsp-learning-progress',

      version:
        ProgressConfig.version,

      exportedAt:
        new Date().toISOString(),

      progress:
        deepClone(
          ProgressStore.data
        )

    };


    const json =
      JSON.stringify(
        exportData,
        null,
        2
      );


    const blob =
      new Blob(
        [json],
        {
          type:
            'application/json'
        }
      );


    const url =
      URL.createObjectURL(
        blob
      );


    const link =
      document.createElement(
        'a'
      );


    const date =
      new Date()
        .toISOString()
        .slice(
          0,
          10
        );


    link.href =
      url;


    link.download =
      `dsp-learning-progress-${date}.json`;


    document.body.appendChild(
      link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
      url
    );

  },


  /* ------------------------------------------------------------------------
     IMPORT DEPUIS LE CONTENU JSON
     ------------------------------------------------------------------------ */

  importObject(object){

    if(
      !object
      ||
      typeof object !== 'object'
    ){

      throw new Error(
        'Sauvegarde JSON invalide.'
      );

    }


    /*
      On accepte :
      {
        progress: {...}
      }

      mais également directement
      l'objet progression.
    */

    const incoming =
      object.progress
      ||
      object;


    if(
      !incoming.stats
      ||
      typeof incoming.stats !==
      'object'
    ){

      throw new Error(
        'Ce fichier ne semble pas contenir une progression DSP valide.'
      );

    }


    ProgressStore.data =
      normalizeProgress(
        incoming
      );


    ProgressStore.save();


    return ProgressStore.data;

  },


  /* ------------------------------------------------------------------------
     IMPORT DEPUIS UN FICHIER
     ------------------------------------------------------------------------ */

  importFile(file){

    return new Promise(
      (
        resolve,
        reject
      ) => {

        if(
          !file
        ){

          reject(
            new Error(
              'Aucun fichier sélectionné.'
            )
          );

          return;

        }


        const reader =
          new FileReader();


        reader.onload =
          event => {

            try{

              const text =
                event.target.result;


              const parsed =
                JSON.parse(
                  text
                );


              const result =
                this.importObject(
                  parsed
                );


              resolve(
                result
              );

            }catch(error){

              reject(
                error
              );

            }

          };


        reader.onerror =
          () => {

            reject(
              new Error(
                'Impossible de lire le fichier.'
              )
            );

          };


        reader.readAsText(
          file
        );

      }
    );

  }

};


/* ==========================================================================
   API SIMPLE POUR L'INTERFACE

   Le bloc UI pourra utiliser ces fonctions sans avoir besoin
   de connaître toute la structure interne.
   ========================================================================== */

const ProgressAPI = {

  getDashboard(){

    const global =
      ProgressReader.global();


    return {

      totalAnswers:
        global.totalAnswers,

      correctAnswers:
        global.correctAnswers,

      wrongAnswers:
        global.wrongAnswers,

      accuracy:
        Math.round(
          global.accuracy * 100
        ),

      currentStreak:
        global.currentStreak,

      bestStreak:
        global.bestStreak,

      sessionsCompleted:
        global.sessionsCompleted,

      labsCompleted:
        global.labsCompleted,

      masteredConcepts:
        ProgressReader
          .masteredConceptCount(),

      weakConcepts:
        ProgressReader
          .weakConcepts(),

      lastModule:
        ProgressStore
          .data
          .meta
          .lastModule,

      lastLab:
        ProgressStore
          .data
          .meta
          .lastLab

    };

  },


  getModule(
    moduleId
  ){

    return getModuleScore(
      moduleId
    );

  },


  getLab(
    labId
  ){

    return ProgressReader.lab(
      labId
    );

  },


  exportProgress(){

    ProgressBackup.exportJSON();

  },


  async importProgress(
    file
  ){

    return await ProgressBackup.importFile(
      file
    );

  }

};


/* ==========================================================================
   INITIALISATION

   À chaque lancement de l'application :
   on recharge la progression depuis localStorage.
   ========================================================================== */

ProgressStore.load();


/* ==========================================================================
   DEBUG

   Tu peux taper ceci dans la console du navigateur :

   ProgressStore.get()

   pour voir toute ta progression.

   Ou :

   ProgressAPI.getDashboard()

   pour voir le résumé.

   Ou :

   ProgressReader.weakConcepts()

   pour voir les notions à retravailler.

   NE PAS appeler :

   ProgressStore.reset()

   sauf si tu veux réellement effacer ta progression.
   ========================================================================== */


/* ==========================================================================
   FIN BLOC 7/10

   BLOC 8 :

   MOTEUR DE SESSION / QUIZ

   Il va utiliser ensemble :

   CourseMap
   +
   QuestionBank
   +
   GeneratedQuestionBase
   +
   SessionQuestionPool
   +
   ProgressStore

   pour créer de vraies sessions d'apprentissage.

   Le moteur pourra notamment :

   → créer une session de 5 / 10 / 20 questions

   → respecter le niveau pédagogique

   → mélanger questions fixes + générées

   → présenter une seule difficulté nouvelle à la fois

   → réintroduire des notions anciennes

   → privilégier les concepts faibles

   → éviter de poser uniquement les mêmes questions

   → enregistrer automatiquement les résultats

   → produire le score de fin de session

   C'est également là qu'on commencera à connecter
   réellement le dashboard au parcours.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 8/10 — MOTEUR DE SESSION / QUIZ ADAPTATIF

   Ce bloc transforme la banque de contenu en véritable moteur pédagogique.

   Il gère :

   - sessions de 5 / 10 / 20 questions
   - questions fixes + générées
   - progression par module
   - révision espacée simple
   - priorité aux concepts faibles
   - réintroduction d'anciennes notions
   - limitation des répétitions
   - score
   - séries
   - sauvegarde automatique
   - résultat de fin de session

   IMPORTANT :

   Ce moteur ne prétend PAS mesurer une maîtrise universitaire complète.

   Il sert à construire progressivement :

   reconnaissance
        ↓
   compréhension
        ↓
   calcul simple
        ↓
   lecture d'équations
        ↓
   application DSP
        ↓
   préparation EPFL
   ========================================================================== */


/* ==========================================================================
   CONFIGURATION PÉDAGOGIQUE
   ========================================================================== */

const SessionConfig = {

  allowedSizes: [
    5,
    10,
    20
  ],


  defaultSize:
    10,


  /*
    Répartition approximative.

    Une session contient idéalement :

    60 % module actuel
    25 % révision
    15 % concepts faibles

    Ces catégories peuvent se chevaucher.
  */

  currentModuleWeight:
    0.60,

  reviewWeight:
    0.25,

  weakConceptWeight:
    0.15,


  /*
    Nombre maximum de questions récemment vues
    que l'on garde en mémoire pour éviter
    les répétitions immédiates.
  */

  recentQuestionMemory:
    12,


  /*
    Pour une question fixe déjà très bien réussie,
    on réduit sa priorité.
  */

  masteredQuestionPenalty:
    0.35,


  /*
    Une question jamais vue reçoit un bonus.
  */

  unseenQuestionBonus:
    1.5,


  /*
    Une question liée à un concept faible
    reçoit un bonus important.
  */

  weakConceptBonus:
    2.2,


  /*
    Un concept non maîtrisé reçoit un bonus.
  */

  unmasteredConceptBonus:
    1.4,


  /*
    Une question récemment ratée devient prioritaire.
  */

  previousWrongBonus:
    2.0

};


/* ==========================================================================
   ÉTAT DE SESSION
   ========================================================================== */

function createEmptySession(){

  return {

    id:
      null,

    active:
      false,

    completed:
      false,

    module:
      null,

    size:
      0,

    questions:
      [],

    currentIndex:
      0,

    answers:
      [],

    correct:
      0,

    wrong:
      0,

    startedAt:
      null,

    completedAt:
      null,

    recentQuestionIds:
      []

  };

}


/* ==========================================================================
   UTILITAIRES DE SESSION
   ========================================================================== */

const SessionUtils = {

  normalizeSize(size){

    const parsed =
      Number(size);


    if(
      SessionConfig.allowedSizes.includes(
        parsed
      )
    ){

      return parsed;

    }


    return SessionConfig.defaultSize;

  },


  shuffle(array){

    return RandomTools.shuffle(
      array
    );

  },


  percentage(
    value,
    total
  ){

    if(
      total <= 0
    ){

      return 0;

    }


    return Math.round(
      (
        value /
        total
      )
      *
      100
    );

  },


  uniqueQuestions(
    questions
  ){

    const seen =
      new Set();


    const result =
      [];


    for(
      const question
      of questions
    ){

      /*
        Les questions générées possèdent
        volontairement des IDs uniques.

        Pour elles, on utilise leur contenu
        comme clé secondaire afin d'éviter
        deux exercices identiques dans la session.
      */

      const key =
        question.generated
          ? [
              question.module,
              question.concept,
              question.formulaDisplay,
              question.prompt
            ].join('|')
          : question.id;


      if(
        !seen.has(key)
      ){

        seen.add(key);

        result.push(
          question
        );

      }

    }


    return result;

  }

};


/* ==========================================================================
   ANALYSE D'UNE QUESTION

   Le moteur attribue un score de priorité.

   Plus le score est élevé,
   plus la question est intéressante pédagogiquement.
   ========================================================================== */

const QuestionPriority = {

  score(
    question,
    session
  ){

    let score =
      1;


    if(
      !question
    ){

      return 0;

    }


    /* ----------------------------------------------------------------------
       QUESTION FIXE : historique individuel
       ---------------------------------------------------------------------- */

    if(
      !question.generated
      &&
      question.id
    ){

      const qp =
        ProgressReader.question(
          question.id
        );


      if(
        !qp
        ||
        qp.attempts === 0
      ){

        score *=
          SessionConfig.unseenQuestionBonus;

      }else{

        /*
          Dernière réponse fausse :
          on augmente la probabilité de revoir la notion.
        */

        if(
          qp.lastResult === false
        ){

          score *=
            SessionConfig.previousWrongBonus;

        }


        /*
          Question déjà très bien connue :
          on réduit légèrement sa priorité.
        */

        if(
          qp.attempts >= 3
          &&
          qp.correct /
          qp.attempts >= 0.85
        ){

          score *=
            SessionConfig.masteredQuestionPenalty;

        }

      }

    }


    /* ----------------------------------------------------------------------
       CONCEPT
       ---------------------------------------------------------------------- */

    if(
      question.concept
    ){

      const cp =
        ProgressReader.concept(
          question.concept
        );


      if(
        cp
      ){

        if(
          cp.attempts >= 2
          &&
          cp.accuracy <
          ProgressConfig.mastery.minimumAccuracy
        ){

          score *=
            SessionConfig.weakConceptBonus;

        }


        if(
          !cp.mastered
        ){

          score *=
            SessionConfig.unmasteredConceptBonus;

        }

      }

    }


    /* ----------------------------------------------------------------------
       MODULE ACTUEL
       ---------------------------------------------------------------------- */

    if(
      session
      &&
      session.module
      &&
      question.module ===
      session.module
    ){

      score *=
        1.5;

    }


    /* ----------------------------------------------------------------------
       RÉPÉTITION IMMÉDIATE

       Une question fixe récemment rencontrée
       reçoit une forte pénalité.
       ---------------------------------------------------------------------- */

    if(
      question.id
      &&
      session
      &&
      session.recentQuestionIds.includes(
        question.id
      )
    ){

      score *=
        0.1;

    }


    return score;

  },


  ranked(
    questions,
    session
  ){

    return questions
      .map(
        question => ({

          question:
            question,

          priority:
            this.score(
              question,
              session
            ),

          random:
            Math.random()

        })
      )
      .sort(
        (a, b) => {

          /*
            Le petit facteur aléatoire évite
            d'obtenir exactement le même ordre
            à chaque session.
          */

          const scoreA =
            a.priority *
            (
              0.8 +
              a.random * 0.4
            );


          const scoreB =
            b.priority *
            (
              0.8 +
              b.random * 0.4
            );


          return scoreB -
            scoreA;

        }
      )
      .map(
        entry =>
          entry.question
      );

  }

};


/* ==========================================================================
   MODULES PRÉCÉDENTS

   Cette fonction utilise CourseMap si celui-ci existe.

   Si CourseMap n'est pas disponible,
   le moteur continue simplement sans révision inter-module.
   ========================================================================== */

function getPreviousModules(
  moduleId
){

  if(
    typeof CourseMap ===
    'undefined'
  ){

    return [];

  }


  let modules =
    [];


  /*
    On accepte plusieurs structures possibles
    pour CourseMap afin de garder le code robuste.
  */

  if(
    Array.isArray(
      CourseMap
    )
  ){

    modules =
      CourseMap;

  }else if(
    typeof CourseMap.all ===
    'function'
  ){

    modules =
      CourseMap.all();

  }else if(
    Array.isArray(
      CourseMap.modules
    )
  ){

    modules =
      CourseMap.modules;

  }


  const index =
    modules.findIndex(
      module => {

        if(
          typeof module ===
          'string'
        ){

          return module ===
            moduleId;

        }


        return module.id ===
          moduleId;

      }
    );


  if(
    index <= 0
  ){

    return [];

  }


  return modules
    .slice(
      0,
      index
    )
    .map(
      module =>
        typeof module ===
        'string'
          ? module
          : module.id
    );

}


/* ==========================================================================
   QUESTIONS DE RÉVISION
   ========================================================================== */

const ReviewEngine = {

  /* ------------------------------------------------------------------------
     QUESTIONS ISSUES DES MODULES PRÉCÉDENTS
     ------------------------------------------------------------------------ */

  previousModuleQuestions(
    moduleId
  ){

    const previousModules =
      getPreviousModules(
        moduleId
      );


    const questions =
      [];


    for(
      const previousModule
      of previousModules
    ){

      questions.push(
        ...QuestionBank.byModule(
          previousModule
        )
      );

    }


    return questions;

  },


  /* ------------------------------------------------------------------------
     QUESTIONS LIÉES AUX CONCEPTS FAIBLES
     ------------------------------------------------------------------------ */

  weakConceptQuestions(){

    const weak =
      ProgressReader
        .weakConcepts();


    const questions =
      [];


    for(
      const item
      of weak
    ){

      questions.push(
        ...QuestionBank.byConcept(
          item.conceptId
        )
      );

    }


    return questions;

  },


  /* ------------------------------------------------------------------------
     QUESTIONS RATÉES
     ------------------------------------------------------------------------ */

  failedQuestions(){

    const result =
      [];


    for(
      const question
      of QuestionBank.all()
    ){

      if(
        question.generated
        ||
        !question.id
      ){

        continue;

      }


      const progress =
        ProgressReader.question(
          question.id
        );


      if(
        progress
        &&
        progress.lastResult === false
      ){

        result.push(
          question
        );

      }

    }


    return result;

  }

};


/* ==========================================================================
   CONSTRUCTION D'UNE SESSION

   IMPORTANT :

   Nous ne remplissons pas la session
   uniquement avec les questions fixes.

   Les générateurs du bloc 5 servent à produire
   de nouveaux calculs.
   ========================================================================== */

const SessionBuilder = {

  build(
    moduleId,
    requestedSize = 10
  ){

    const size =
      SessionUtils.normalizeSize(
        requestedSize
      );


    const temporarySession = {
      module:
        moduleId,

      recentQuestionIds:
        []
    };


    /* ----------------------------------------------------------------------
       POOL DU MODULE ACTUEL
       ---------------------------------------------------------------------- */

    const currentPool =
      SessionQuestionPool.forModule(
        moduleId,
        size * 2
      );


    /* ----------------------------------------------------------------------
       RÉVISION ANCIENNE
       ---------------------------------------------------------------------- */

    const reviewPool =
      ReviewEngine.previousModuleQuestions(
        moduleId
      );


    /* ----------------------------------------------------------------------
       CONCEPTS FAIBLES
       ---------------------------------------------------------------------- */

    const weakPool =
      ReviewEngine.weakConceptQuestions();


    /* ----------------------------------------------------------------------
       QUESTIONS RÉCEMMENT RATÉES
       ---------------------------------------------------------------------- */

    const failedPool =
      ReviewEngine.failedQuestions();


    /* ----------------------------------------------------------------------
       CALCUL DU NOMBRE DE QUESTIONS
       ---------------------------------------------------------------------- */

    let currentCount =
      Math.round(
        size *
        SessionConfig.currentModuleWeight
      );


    let reviewCount =
      Math.round(
        size *
        SessionConfig.reviewWeight
      );


    let weakCount =
      size -
      currentCount -
      reviewCount;


    /*
      Si c'est le tout premier module,
      il n'existe évidemment aucun ancien module à réviser.

      On réattribue ces places au module actuel.
    */

    if(
      reviewPool.length === 0
    ){

      currentCount +=
        reviewCount;

      reviewCount =
        0;

    }


    /*
      Même logique si aucun concept faible
      n'a encore été identifié.
    */

    if(
      weakPool.length === 0
      &&
      failedPool.length === 0
    ){

      currentCount +=
        weakCount;

      weakCount =
        0;

    }


    /* ----------------------------------------------------------------------
       CLASSER LES QUESTIONS
       ---------------------------------------------------------------------- */

    const rankedCurrent =
      QuestionPriority.ranked(
        currentPool,
        temporarySession
      );


    const rankedReview =
      QuestionPriority.ranked(
        reviewPool,
        temporarySession
      );


    const rankedWeak =
      QuestionPriority.ranked(
        [
          ...weakPool,
          ...failedPool
        ],
        temporarySession
      );


    /* ----------------------------------------------------------------------
       SÉLECTION INITIALE
       ---------------------------------------------------------------------- */

    let selected = [

      ...rankedCurrent.slice(
        0,
        currentCount
      ),

      ...rankedReview.slice(
        0,
        reviewCount
      ),

      ...rankedWeak.slice(
        0,
        weakCount
      )

    ];


    selected =
      SessionUtils.uniqueQuestions(
        selected
      );


    /* ----------------------------------------------------------------------
       SI LE POOL EST INSUFFISANT

       On complète avec toutes les questions disponibles.
       ---------------------------------------------------------------------- */

    if(
      selected.length <
      size
    ){

      const fallback =
        QuestionPriority.ranked(
          [
            ...currentPool,
            ...reviewPool,
            ...weakPool,
            ...failedPool
          ],
          temporarySession
        );


      for(
        const question
        of fallback
      ){

        if(
          selected.length >=
          size
        ){

          break;

        }


        const candidate =
          SessionUtils.uniqueQuestions([
            ...selected,
            question
          ]);


        if(
          candidate.length >
          selected.length
        ){

          selected.push(
            question
          );

        }

      }

    }


    /* ----------------------------------------------------------------------
       DERNIER RECOURS : GÉNÉRATION

       Pour les modules possédant un générateur,
       on peut produire de nouveaux exercices.
       ---------------------------------------------------------------------- */

    let safety =
      0;


    while(
      selected.length <
      size
      &&
      GeneratedQuestionBase.canGenerate(
        moduleId
      )
      &&
      safety <
      100
    ){

      safety++;


      const generated =
        GeneratedQuestionBase.generate(
          moduleId
        );


      if(
        generated
      ){

        selected.push(
          generated
        );

      }

    }


    /* ----------------------------------------------------------------------
       MÉLANGE FINAL
       ---------------------------------------------------------------------- */

    selected =
      SessionUtils.shuffle(
        selected.slice(
          0,
          size
        )
      );


    return selected;

  }

};


/* ==========================================================================
   SESSION ENGINE
   ========================================================================== */

const SessionEngine = {

  state:
    createEmptySession(),


  /* ------------------------------------------------------------------------
     DÉMARRER UNE SESSION
     ------------------------------------------------------------------------ */

  start(
    moduleId,
    requestedSize = 10
  ){

    if(
      !moduleId
    ){

      throw new Error(
        'Un module est nécessaire pour démarrer une session.'
      );

    }


    const size =
      SessionUtils.normalizeSize(
        requestedSize
      );


    const questions =
      SessionBuilder.build(
        moduleId,
        size
      );


    if(
      questions.length === 0
    ){

      throw new Error(
        `Aucune question disponible pour le module "${moduleId}".`
      );

    }


    this.state = {

      id:
        `session_${Date.now()}`,

      active:
        true,

      completed:
        false,

      module:
        moduleId,

      size:
        questions.length,

      questions:
        questions,

      currentIndex:
        0,

      answers:
        [],

      correct:
        0,

      wrong:
        0,

      startedAt:
        new Date().toISOString(),

      completedAt:
        null,

      recentQuestionIds:
        []

    };


    return this.getState();

  },


  /* ------------------------------------------------------------------------
     QUESTION ACTUELLE
     ------------------------------------------------------------------------ */

  currentQuestion(){

    if(
      !this.state.active
      ||
      this.state.completed
    ){

      return null;

    }


    return (
      this.state.questions[
        this.state.currentIndex
      ]
      ||
      null
    );

  },


  /* ------------------------------------------------------------------------
     RÉPONDRE

     answerIndex correspond à l'index du bouton choisi :
     0 / 1 / 2...
     ------------------------------------------------------------------------ */

  answer(
    answerIndex
  ){

    const question =
      this.currentQuestion();


    if(
      !question
    ){

      return null;

    }


    const selectedIndex =
      Number(
        answerIndex
      );


    const isCorrect =
      selectedIndex ===
      question.correct;


    /* ----------------------------------------------------------------------
       SAUVEGARDE PROGRESSION
       ---------------------------------------------------------------------- */

    ProgressTracker.recordAnswer(
      question,
      isCorrect
    );


    /* ----------------------------------------------------------------------
       SCORE SESSION
       ---------------------------------------------------------------------- */

    if(
      isCorrect
    ){

      this.state.correct++;

    }else{

      this.state.wrong++;

    }


    /* ----------------------------------------------------------------------
       HISTORIQUE DE LA SESSION
       ---------------------------------------------------------------------- */

    this.state.answers.push({

      questionId:
        question.id
        ||
        null,

      generated:
        Boolean(
          question.generated
        ),

      module:
        question.module
        ||
        null,

      concept:
        question.concept
        ||
        null,

      selected:
        selectedIndex,

      correctIndex:
        question.correct,

      isCorrect:
        isCorrect,

      answeredAt:
        new Date().toISOString()

    });


    /* ----------------------------------------------------------------------
       MÉMOIRE DES QUESTIONS RÉCENTES
       ---------------------------------------------------------------------- */

    if(
      question.id
    ){

      this.state.recentQuestionIds.push(
        question.id
      );


      if(
        this.state.recentQuestionIds.length >
        SessionConfig.recentQuestionMemory
      ){

        this.state.recentQuestionIds =
          this.state.recentQuestionIds.slice(
            -SessionConfig.recentQuestionMemory
          );

      }

    }


    return {

      isCorrect:
        isCorrect,

      selected:
        selectedIndex,

      correctIndex:
        question.correct,

      correctAnswer:
        question.answers[
          question.correct
        ],

      explanation:
        question.explain
        ||
        null,

      audio:
        question.audio
        ||
        null,

      question:
        question,

      progress:
        this.getProgress()

    };

  },


  /* ------------------------------------------------------------------------
     QUESTION SUIVANTE

     IMPORTANT :
     answer() ne change PAS immédiatement de question.

     L'interface peut donc :

     1. afficher vert / rouge
     2. montrer l'explication
     3. attendre le clic "Continuer"
     4. appeler next()

     C'est meilleur pédagogiquement.
     ------------------------------------------------------------------------ */

  next(){

    if(
      !this.state.active
    ){

      return null;

    }


    if(
      this.state.currentIndex >=
      this.state.questions.length - 1
    ){

      return this.finish();

    }


    this.state.currentIndex++;


    return {

      completed:
        false,

      question:
        this.currentQuestion(),

      progress:
        this.getProgress()

    };

  },


  /* ------------------------------------------------------------------------
     TERMINER
     ------------------------------------------------------------------------ */

  finish(){

    if(
      this.state.completed
    ){

      return this.getResult();

    }


    this.state.active =
      false;


    this.state.completed =
      true;


    this.state.completedAt =
      new Date().toISOString();


    ProgressTracker.completeSession({

      id:
        this.state.id,

      module:
        this.state.module,

      total:
        this.state.answers.length,

      correct:
        this.state.correct,

      wrong:
        this.state.wrong

    });


    return this.getResult();

  },


  /* ------------------------------------------------------------------------
     PROGRESSION DANS LA SESSION
     ------------------------------------------------------------------------ */

  getProgress(){

    const answered =
      this.state.answers.length;


    const total =
      this.state.questions.length;


    return {

      current:
        Math.min(
          this.state.currentIndex + 1,
          total
        ),

      answered:
        answered,

      total:
        total,

      percent:
        SessionUtils.percentage(
          answered,
          total
        ),

      correct:
        this.state.correct,

      wrong:
        this.state.wrong

    };

  },


  /* ------------------------------------------------------------------------
     RÉSULTAT FINAL
     ------------------------------------------------------------------------ */

  getResult(){

    const total =
      this.state.answers.length;


    const correct =
      this.state.correct;


    const accuracy =
      SessionUtils.percentage(
        correct,
        total
      );


    return {

      sessionId:
        this.state.id,

      module:
        this.state.module,

      total:
        total,

      correct:
        correct,

      wrong:
        this.state.wrong,

      accuracy:
        accuracy,

      level:
        this.getResultLevel(
          accuracy
        ),

      message:
        this.getResultMessage(
          accuracy
        ),

      weakConcepts:
        this.getSessionWeakConcepts(),

      completedAt:
        this.state.completedAt

    };

  },


  /* ------------------------------------------------------------------------
     INTERPRÉTATION DU SCORE

     Ces termes concernent uniquement la session.
     On évite volontairement "expert" ou "maîtrisé"
     sur la base d'un simple quiz.
     ------------------------------------------------------------------------ */

  getResultLevel(
    accuracy
  ){

    if(
      accuracy >= 90
    ){

      return 'solid';

    }


    if(
      accuracy >= 75
    ){

      return 'good';

    }


    if(
      accuracy >= 60
    ){

      return 'developing';

    }


    return 'review';

  },


  getResultMessage(
    accuracy
  ){

    if(
      accuracy >= 90
    ){

      return (
        'Très bonne session. Les exercices de ce niveau semblent solides, mais ils seront réintroduits plus tard pour vérifier la rétention.'
      );

    }


    if(
      accuracy >= 75
    ){

      return (
        'Bonne compréhension générale. Quelques éléments méritent encore d’être consolidés.'
      );

    }


    if(
      accuracy >= 60
    ){

      return (
        'La base commence à se construire. Revois les erreurs avant d’ajouter trop de nouvelles notions.'
      );

    }


    return (
      'Ce module demande encore du travail. Ce n’est pas un problème : le moteur va privilégier les notions qui ont posé difficulté.'
    );

  },


  /* ------------------------------------------------------------------------
     CONCEPTS RATÉS DANS CETTE SESSION
     ------------------------------------------------------------------------ */

  getSessionWeakConcepts(){

    const map = {};


    for(
      const answer
      of this.state.answers
    ){

      if(
        !answer.concept
      ){

        continue;

      }


      if(
        !map[
          answer.concept
        ]
      ){

        map[
          answer.concept
        ] = {

          conceptId:
            answer.concept,

          attempts:
            0,

          wrong:
            0

        };

      }


      map[
        answer.concept
      ].attempts++;


      if(
        !answer.isCorrect
      ){

        map[
          answer.concept
        ].wrong++;

      }

    }


    return Object.values(
      map
    )
      .filter(
        item =>
          item.wrong > 0
      )
      .sort(
        (a, b) =>
          b.wrong -
          a.wrong
      );

  },


  /* ------------------------------------------------------------------------
     ÉTAT
     ------------------------------------------------------------------------ */

  getState(){

    return this.state;

  },


  /* ------------------------------------------------------------------------
     ANNULER SESSION

     Une session abandonnée n'est PAS comptée comme terminée.
     Les réponses déjà données restent cependant enregistrées
     dans la progression conceptuelle.
     ------------------------------------------------------------------------ */

  cancel(){

    this.state =
      createEmptySession();


    return this.state;

  }

};


/* ==========================================================================
   MODE RÉVISION CIBLÉE

   Permettra par exemple un bouton :

   "Réviser mes points faibles"

   contrairement à une session normale,
   on sélectionne ici les concepts qui posent réellement problème.
   ========================================================================== */

const WeakReviewSession = {

  build(
    requestedSize = 10
  ){

    const size =
      SessionUtils.normalizeSize(
        requestedSize
      );


    const weakConcepts =
      ProgressReader.weakConcepts();


    const failed =
      ReviewEngine.failedQuestions();


    let pool =
      failed.slice();


    for(
      const item
      of weakConcepts
    ){

      pool.push(
        ...QuestionBank.byConcept(
          item.conceptId
        )
      );

    }


    pool =
      SessionUtils.uniqueQuestions(
        pool
      );


    pool =
      QuestionPriority.ranked(
        pool,
        {
          module:
            null,

          recentQuestionIds:
            []
        }
      );


    /*
      S'il n'y a encore aucun point faible,
      on ne fabrique PAS artificiellement
      une session "faiblesses".
    */

    if(
      pool.length === 0
    ){

      return {

        available:
          false,

        reason:
          'Aucun point faible suffisamment documenté pour le moment.',

        questions:
          []

      };

    }


    return {

      available:
        true,

      questions:
        pool.slice(
          0,
          size
        )

    };

  }

};


/* ==========================================================================
   MODE RAPPEL / RETENTION

   Une notion maîtrisée ne doit pas disparaître pour toujours.

   Ce pool permet de remettre occasionnellement
   des concepts maîtrisés dans les sessions futures.
   ========================================================================== */

const RetentionEngine = {

  masteredQuestions(){

    const mastered =
      new Set(
        ProgressReader.masteredConcepts()
      );


    if(
      mastered.size === 0
    ){

      return [];

    }


    return QuestionBank.all()
      .filter(
        question =>
          question.concept
          &&
          mastered.has(
            question.concept
          )
      );

  },


  random(
    count = 3
  ){

    const questions =
      this.masteredQuestions();


    if(
      questions.length === 0
    ){

      return [];

    }


    return RandomTools.shuffle(
      questions
    )
      .slice(
        0,
        count
      );

  }

};


/* ==========================================================================
   RECOMMANDATION PÉDAGOGIQUE

   Fournit au dashboard une indication simple sur ce qu'il serait pertinent
   de faire ensuite.

   Ce n'est PAS encore le système complet de verrouillage des modules.
   Celui-ci arrivera avec la connexion au parcours.
   ========================================================================== */

const LearningRecommendation = {

  get(){

    const dashboard =
      ProgressAPI.getDashboard();


    /* ----------------------------------------------------------------------
       AUCUNE RÉPONSE
       ---------------------------------------------------------------------- */

    if(
      dashboard.totalAnswers === 0
    ){

      return {

        type:
          'start',

        title:
          'Commence par l’alphabet',

        message:
          'Construis d’abord les réflexes de lecture : x[n], y[n], indices, opérations et symboles.',

        module:
          'dsp_alphabet'

      };

    }


    /* ----------------------------------------------------------------------
       CONCEPTS FAIBLES
       ---------------------------------------------------------------------- */

    const weak =
      ProgressReader.weakConcepts();


    if(
      weak.length > 0
    ){

      return {

        type:
          'review',

        title:
          'Consolide avant d’avancer',

        message:
          `Le concept "${weak[0].conceptId}" mérite une nouvelle révision.`,

        concept:
          weak[0].conceptId

      };

    }


    /* ----------------------------------------------------------------------
       DERNIER MODULE
       ---------------------------------------------------------------------- */

    if(
      dashboard.lastModule
    ){

      const score =
        getModuleScore(
          dashboard.lastModule
        );


      if(
        score.attempted
        &&
        score.percent < 75
      ){

        return {

          type:
            'repeat',

          title:
            'Refais une courte session',

          message:
            `Ton dernier module est à ${score.percent}% de réussite sur les exercices rencontrés.`,

          module:
            dashboard.lastModule

        };

      }

    }


    /* ----------------------------------------------------------------------
       LAB PYTHON
       ---------------------------------------------------------------------- */

    const nextLab =
      PythonLabBase
        .all()
        .find(
          lab => {

            const progress =
              ProgressReader.lab(
                lab.id
              );


            return (
              !progress
              ||
              !progress.completed
            );

          }
        );


    if(
      nextLab
    ){

      return {

        type:
          'python',

        title:
          'Passe de la formule au code',

        message:
          `Prochain laboratoire : ${nextLab.title}`,

        labId:
          nextLab.id

      };

    }


    return {

      type:
        'continue',

      title:
        'Continue le parcours',

      message:
        'Tes exercices actuels sont consolidés. Tu peux poursuivre vers le module suivant.'

    };

  }

};


/* ==========================================================================
   PETITE API POUR L'INTERFACE

   Le bloc UI pourra simplement faire :

   LearningSessionAPI.start("sequences", 10)

   LearningSessionAPI.answer(1)

   LearningSessionAPI.next()
   ========================================================================== */

const LearningSessionAPI = {

  start(
    moduleId,
    size = 10
  ){

    return SessionEngine.start(
      moduleId,
      size
    );

  },


  question(){

    return SessionEngine.currentQuestion();

  },


  answer(
    answerIndex
  ){

    return SessionEngine.answer(
      answerIndex
    );

  },


  next(){

    return SessionEngine.next();

  },


  progress(){

    return SessionEngine.getProgress();

  },


  result(){

    return SessionEngine.getResult();

  },


  cancel(){

    return SessionEngine.cancel();

  },


  recommendation(){

    return LearningRecommendation.get();

  }

};


/* ==========================================================================
   DEBUG / TEST MANUEL

   Après chargement de l'app, ouvre la console navigateur.

   Exemple :

   LearningSessionAPI.start("sequences", 5)

   puis :

   LearningSessionAPI.question()

   Tu verras quelque chose comme :

   {
      formulaDisplay: "x = [4, 8, 2, 7]",
      prompt: "Que vaut x[2] ?",
      answers: ["2", "8", "7"],
      ...
   }

   Pour répondre au deuxième choix :

   LearningSessionAPI.answer(1)

   Puis :

   LearningSessionAPI.next()

   Dashboard :

   ProgressAPI.getDashboard()

   Recommandation :

   LearningSessionAPI.recommendation()
   ========================================================================== */


/* ==========================================================================
   FIN BLOC 8/10

   BLOC 9 :

   INTERFACE / RENDER ENGINE

   C'est là que les données vont enfin être reliées
   aux éléments visuels de ton application :

   --------------------------------------------------

   DASHBOARD

   symboles maîtrisés
   sessions terminées
   meilleure série
   précision
   progression

   --------------------------------------------------

   SESSION D'ENTRAÎNEMENT

   formule
   question
   3 propositions
   feedback vert / rouge
   explication
   connexion audio
   bouton continuer

   --------------------------------------------------

   DÉCODE LA FORMULE

   y[n]
   =
   b₀
   x[n]
   +
   b₁
   x[n−1]
   −
   a₁
   y[n−1]

   chaque morceau pourra être cliquable
   et surligné individuellement.

   --------------------------------------------------

   PYTHON LABS

   objectif
   prédiction
   code
   résultat attendu
   expérience à modifier

   --------------------------------------------------

   PROGRESSION

   concepts acquis
   notions fragiles
   modules
   historique

   --------------------------------------------------

   Le bloc 9 ne rajoutera quasiment plus de connaissances DSP.

   Il connectera tout ce que nous avons construit
   à l'interface existante.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 9/10 — INTERFACE PRINCIPALE

   Ce bloc connecte :

   Curriculum
   ConceptBase
   QuestionBank
   PythonLabs
   ProgressStore
   SessionEngine

   à l'interface visuelle.

   Le bloc 10 terminera :
   - Python Labs détaillés
   - Vocabulaire DSP
   - Bibliothèque de formules
   - import/export JSON
   - initialisation finale
   ========================================================================== */


/* ==========================================================================
   COMPATIBILITÉ AVEC LE SESSION ENGINE

   Le bloc 8 utilise CourseMap pour retrouver les modules précédents.
   Notre nouvelle architecture utilise Curriculum.

   On crée donc un petit adaptateur.
   ========================================================================== */

const CourseMap = {

  modules:
    Curriculum.modules,

  all(){

    return Curriculum.modules
      .slice()
      .sort(
        (a, b) =>
          a.order - b.order
      );

  },

  get(id){

    return Curriculum.module(
      id
    );

  }

};


/* ==========================================================================
   UI STATE
   ========================================================================== */

const UIState = {

  view:
    'home',

  selectedTrack:
    'math',

  selectedModule:
    null,

  sessionSize:
    10,

  selectedLab:
    null,

  vocabularySearch:
    '',

  vocabularyCategory:
    'all',

  formulaSearch:
    '',

  formulaModule:
    'all',

  quizAnswered:
    false,

  quizFeedback:
    null

};


/* ==========================================================================
   HELPERS UI
   ========================================================================== */

const UIHelpers = {

  escapeHTML(value){

    if(
      value === null
      ||
      value === undefined
    ){

      return '';

    }


    return String(value)
      .replaceAll(
        '&',
        '&amp;'
      )
      .replaceAll(
        '<',
        '&lt;'
      )
      .replaceAll(
        '>',
        '&gt;'
      )
      .replaceAll(
        '"',
        '&quot;'
      )
      .replaceAll(
        "'",
        '&#039;'
      );

  },


  percent(value){

    return `${Math.round(value)}%`;

  },


  moduleProgress(moduleId){

    const score =
      getModuleScore(
        moduleId
      );


    return score;

  },


  moduleConcepts(moduleId){

    return ConceptBase.byModule(
      moduleId
    );

  },


  moduleMasteryPercent(moduleId){

    const concepts =
      this.moduleConcepts(
        moduleId
      );


    if(
      concepts.length === 0
    ){

      return 0;

    }


    let mastered =
      0;


    for(
      const concept
      of concepts
    ){

      const progress =
        ProgressReader.concept(
          concept.id
        );


      if(
        progress?.mastered
      ){

        mastered++;

      }

    }


    return Math.round(
      mastered /
      concepts.length *
      100
    );

  },


  trackLabel(trackId){

    return (
      Curriculum.tracks.find(
        track =>
          track.id === trackId
      )
      ||
      {}
    );

  },


  statusLabel(status){

    const labels = {

      memorise:
        'À mémoriser',

      recognize:
        'À reconnaître',

      reference:
        'À consulter'

    };


    return labels[
      status
    ] || status;

  },


  statusClass(status){

    const classes = {

      memorise:
        'memoriser',

      recognize:
        'reconnaitre',

      reference:
        'consulter'

    };


    return classes[
      status
    ] || '';

  }

};


/* ==========================================================================
   UI ENGINE
   ========================================================================== */

const UI = {

  root:
    null,


  /* ------------------------------------------------------------------------
     INIT ROOT
     ------------------------------------------------------------------------ */

  bindRoot(){

    this.root =
      document.getElementById(
        'app'
      );


    if(
      !this.root
    ){

      throw new Error(
        'Élément #app introuvable.'
      );

    }

  },


  /* ------------------------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------------------------ */

  nav(
    view,
    options = {}
  ){

    UIState.view =
      view;


    Object.assign(
      UIState,
      options
    );


    UIState.quizAnswered =
      false;


    UIState.quizFeedback =
      null;


    this.render();


    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  },


  /* ------------------------------------------------------------------------
     TOP NAV
     ------------------------------------------------------------------------ */

  topnav(){

    const dashboard =
      ProgressAPI.getDashboard();


    return `

      <div class="topnav">

        <div
          class="brand"
          onclick="UI.nav('home')"
        >

          <div class="brand-mark">
            dsp
          </div>

          <div class="brand-name">

            Math<br>

            <span>
              Trainer
            </span>

          </div>

        </div>


        <div class="nav-stats">

          <div class="stat-pill xp">

            ${dashboard.masteredConcepts}
            concepts

          </div>

          <div class="stat-pill streak">

            🔥 ${dashboard.currentStreak}

          </div>

        </div>

      </div>

    `;

  },


  /* ------------------------------------------------------------------------
     RENDER GLOBAL
     ------------------------------------------------------------------------ */

  render(){

    if(
      !this.root
    ){

      this.bindRoot();

    }


    let html =
      '';


    switch(
      UIState.view
    ){

      case 'home':

        html =
          this.renderHome();

        break;


      case 'dashboard':

        html =
          this.renderDashboard();

        break;


      case 'learn':

        html =
          this.renderLearningPath();

        break;


      case 'module':

        html =
          this.renderModule();

        break;


      case 'quiz':

        html =
          this.renderQuiz();

        break;


      case 'summary':

        html =
          this.renderSummary();

        break;


      case 'python':

        html =
          this.renderPythonLabs();

        break;


      case 'python-detail':

        html =
          this.renderPythonLabDetail();

        break;


      case 'vocabulary':

        html =
          this.renderVocabulary();

        break;


      case 'formulas':

        html =
          this.renderFormulaLibrary();

        break;


      default:

        html =
          this.renderHome();

    }


    const wideViews = [
      'dashboard',
      'learn',
      'python',
      'vocabulary',
      'formulas'
    ];


    this.root.className =
      wideViews.includes(
        UIState.view
      )
        ? 'app wide'
        : 'app';


    this.root.innerHTML =
      this.topnav()
      +
      html;


    if(
      UIState.view ===
      'home'
    ){

      this.bindDecodeFormula();

    }

  },


  /* =========================================================================
     HOME
     ========================================================================= */

  renderHome(){

    const dashboard =
      ProgressAPI.getDashboard();


    const recommendation =
      LearningSessionAPI
        .recommendation();


    return `

      <section class="hero">

        <div class="eyebrow">

          MATHS → NOTATION → DSP → PYTHON → AUDIO

        </div>


        <h1>

          Apprends à lire
          les mathématiques du DSP.

        </h1>


        <p class="lede">

          Construis les bases mathématiques nécessaires au traitement
          numérique du signal, puis transforme progressivement les équations
          en expériences Python et en algorithmes audio.

        </p>


        ${this.renderDecodeFormula()}


        <div class="hero-actions">

          <button
            class="btn btn-primary"
            onclick="UI.nav('learn')"
          >

            Continuer le parcours →

          </button>


          <button
            class="btn btn-ghost"
            onclick="UI.nav('dashboard')"
          >

            Voir ma progression

          </button>

        </div>

      </section>


      <div class="section-title">

        <h2>
          Aperçu
        </h2>

      </div>


      <div
        class="card"
        style="
          display:flex;
          gap:28px;
          flex-wrap:wrap;
        "
      >

        ${this.statBlock(
          dashboard.masteredConcepts,
          'concepts maîtrisés',
          'var(--cyan)'
        )}


        ${this.statBlock(
          dashboard.sessionsCompleted,
          'sessions terminées',
          'var(--violet)'
        )}


        ${this.statBlock(
          dashboard.bestStreak,
          'meilleure série',
          '#fbbf24'
        )}


        ${this.statBlock(
          `${dashboard.accuracy}%`,
          'réussite globale',
          'var(--text)'
        )}

      </div>


      <div class="section-title">

        <h2>
          Recommandation
        </h2>

      </div>


      <div class="card">

        <div class="eyebrow">

          ${this.recommendationTypeLabel(
            recommendation.type
          )}

        </div>


        <h3
          style="
            margin:8px 0;
            font-size:20px;
          "
        >

          ${UIHelpers.escapeHTML(
            recommendation.title
          )}

        </h3>


        <p
          style="
            color:var(--text-muted);
            margin-bottom:18px;
          "
        >

          ${UIHelpers.escapeHTML(
            recommendation.message
          )}

        </p>


        ${this.recommendationButton(
          recommendation
        )}

      </div>


      <div class="section-title">

        <h2>
          Espaces
        </h2>

      </div>


      <div class="level-grid">

        ${this.quickCard(
          'Parcours',
          'maths fondamentales → DSP universitaire',
          "UI.nav('learn')"
        )}


        ${this.quickCard(
          'Python Labs',
          'formule → prédiction → code → résultat',
          "UI.nav('python')"
        )}


        ${this.quickCard(
          'Vocabulaire DSP',
          'sample, FIR, FFT, aliasing…',
          "UI.nav('vocabulary')"
        )}


        ${this.quickCard(
          'Bibliothèque de formules',
          'mémoriser, reconnaître, consulter',
          "UI.nav('formulas')"
        )}

      </div>

    `;

  },


  statBlock(
    value,
    label,
    color
  ){

    return `

      <div>

        <div
          style="
            font-family:var(--font-mono);
            font-size:22px;
            color:${color};
          "
        >

          ${value}

        </div>


        <div
          style="
            font-size:12px;
            color:var(--text-faint);
          "
        >

          ${label}

        </div>

      </div>

    `;

  },


  quickCard(
    title,
    subtitle,
    action
  ){

    return `

      <div
        class="level-card"
        onclick="${action}"
      >

        <div>

          <div class="level-card-title">

            ${title}

          </div>


          <div class="level-card-sub">

            ${subtitle}

          </div>

        </div>


        <div class="level-chevron">
          →
        </div>

      </div>

    `;

  },


  /* =========================================================================
     DÉCODE LA FORMULE
     ========================================================================= */

  renderDecodeFormula(){

    const tokens = [

      {
        text:
          'y[n]',

        explanation:
          'La sortie actuelle du système.'
      },

      {
        text:
          '=',

        operator:
          true
      },

      {
        text:
          'b₀',

        explanation:
          'Coefficient appliqué à l’entrée actuelle.'
      },

      {
        text:
          'x[n]',

        explanation:
          'Valeur actuelle du signal d’entrée.'
      },

      {
        text:
          '+',

        operator:
          true
      },

      {
        text:
          'b₁',

        explanation:
          'Coefficient appliqué à l’entrée précédente.'
      },

      {
        text:
          'x[n−1]',

        explanation:
          'Valeur de l’entrée un échantillon dans le passé.'
      },

      {
        text:
          '−',

        operator:
          true
      },

      {
        text:
          'a₁',

        explanation:
          'Coefficient associé au feedback.'
      },

      {
        text:
          'y[n−1]',

        explanation:
          'Sortie précédente : mémoire récursive du système.'
      }

    ];


    return `

      <div class="hero-eq-wrap">

        <div
          class="hero-eq"
          id="heroEq"
        >

          ${tokens.map(
            (
              token,
              index
            ) => {

              if(
                token.operator
              ){

                return `

                  <span class="eq-tok op">

                    ${token.text}

                  </span>

                `;

              }


              return `

                <span
                  class="eq-tok"
                  data-decode-index="${index}"
                  data-explanation="${UIHelpers.escapeHTML(
                    token.explanation
                  )}"
                >

                  ${token.text}

                </span>

              `;

            }
          ).join('')}

        </div>


        <div
          class="eq-explain"
          id="heroExplain"
        >

          Touche un symbole pour voir ce qu’il signifie —
          c’est le mode « Décode la formule ».

        </div>


        <div class="eq-hint">

          Plus tard, cette équation se lira comme une recette
          d’algorithme plutôt que comme un mur de symboles.

        </div>

      </div>

    `;

  },


  bindDecodeFormula(){

    const container =
      document.getElementById(
        'heroEq'
      );


    if(
      !container
    ){

      return;

    }


    const explain =
      document.getElementById(
        'heroExplain'
      );


    container
      .querySelectorAll(
        '[data-decode-index]'
      )
      .forEach(
        token => {

          token.addEventListener(
            'click',
            () => {

              container
                .querySelectorAll(
                  '.eq-tok'
                )
                .forEach(
                  item =>
                    item.classList.remove(
                      'active'
                    )
                );


              token.classList.add(
                'active'
              );


              if(
                explain
              ){

                explain.textContent =
                  token.dataset.explanation
                  ||
                  '';

              }

            }
          );

        }
      );

  },


  /* =========================================================================
     RECOMMENDATION
     ========================================================================= */

  recommendationTypeLabel(type){

    const labels = {

      start:
        'DÉPART',

      review:
        'RÉVISION',

      repeat:
        'CONSOLIDATION',

      python:
        'PYTHON LAB',

      continue:
        'PROCHAINE ÉTAPE'

    };


    return labels[type]
      ||
      'PARCOURS';

  },


  recommendationButton(
    recommendation
  ){

    if(
      recommendation.module
    ){

      return `

        <button
          class="btn btn-primary"
          onclick="
            UI.openModule(
              '${recommendation.module}'
            )
          "
        >

          Ouvrir le module →

        </button>

      `;

    }


    if(
      recommendation.labId
    ){

      return `

        <button
          class="btn btn-primary"
          onclick="
            UI.openLab(
              '${recommendation.labId}'
            )
          "
        >

          Ouvrir le lab →

        </button>

      `;

    }


    return `

      <button
        class="btn btn-primary"
        onclick="UI.nav('learn')"
      >

        Continuer →

      </button>

    `;

  },


  /* =========================================================================
     DASHBOARD
     ========================================================================= */

  renderDashboard(){

    const dashboard =
      ProgressAPI.getDashboard();


    const modules =
      Curriculum.modules
        .slice()
        .sort(
          (a, b) =>
            a.order - b.order
        );


    return `

      <div class="eyebrow">

        PROGRESSION

      </div>


      <h1
        style="
          font-size:28px;
          margin-bottom:22px;
        "
      >

        Dashboard

      </h1>


      <div class="dashboard-stats">

        <div class="dash-stat">

          <strong>
            ${dashboard.masteredConcepts}
          </strong>

          <span>
            concepts maîtrisés
          </span>

        </div>


        <div class="dash-stat">

          <strong>
            ${dashboard.sessionsCompleted}
          </strong>

          <span>
            sessions
          </span>

        </div>


        <div class="dash-stat">

          <strong>
            ${dashboard.bestStreak}
          </strong>

          <span>
            meilleure série
          </span>

        </div>


        <div class="dash-stat">

          <strong>
            ${dashboard.accuracy}%
          </strong>

          <span>
            réussite
          </span>

        </div>

      </div>


      <div class="section-title">

        <h2>
          Modules
        </h2>

      </div>


      <div class="card">

        ${modules.map(
          (
            module,
            index
          ) => {

            const score =
              getModuleScore(
                module.id
              );


            const mastery =
              UIHelpers.moduleMasteryPercent(
                module.id
              );


            const percent =
              score.attempted
                ? score.percent
                : mastery;


            return `

              <div
                class="prog-row"
                onclick="
                  UI.openModule(
                    '${module.id}'
                  )
                "
              >

                <div class="prog-num">

                  ${String(
                    index + 1
                  ).padStart(
                    2,
                    '0'
                  )}

                </div>


                <div class="prog-main">

                  <div class="prog-label">

                    ${module.title}

                    <small>

                      ${percent}%

                    </small>

                  </div>


                  <div class="prog-bar">

                    <div
                      class="prog-fill"
                      style="
                        width:${percent}%;
                      "
                    >
                    </div>

                  </div>

                </div>

              </div>

            `;

          }
        ).join('')}

      </div>


      <div class="section-title">

        <h2>
          Sauvegarde
        </h2>

      </div>


      <div
        style="
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        "
      >

        <button
          class="btn btn-ghost"
          onclick="
            UI.exportProgress()
          "
        >

          Exporter JSON

        </button>


        <button
          class="btn btn-ghost"
          onclick="
            UI.importProgress()
          "
        >

          Importer JSON

        </button>

      </div>

    `;

  },


  /* =========================================================================
     LEARNING PATH
     ========================================================================= */

  renderLearningPath(){

    const selectedTrack =
      UIState.selectedTrack;


    const track =
      UIHelpers.trackLabel(
        selectedTrack
      );


    const modules =
      Curriculum
        .byTrack(
          selectedTrack
        )
        .slice()
        .sort(
          (a, b) =>
            a.order - b.order
        );


    return `

      <div class="eyebrow">

        PARCOURS

      </div>


      <h1
        style="
          font-size:28px;
        "
      >

        De la base mathématique au DSP

      </h1>


      <p class="lede">

        Le parcours est organisé par prérequis.
        Tu peux explorer librement, mais l’ordre proposé évite
        d’introduire trop de symboles inconnus simultanément.

      </p>


      <div class="lib-filters">

        ${Curriculum.tracks.map(
          trackItem => `

            <div
              class="
                lib-filter
                ${
                  selectedTrack ===
                  trackItem.id
                    ? 'active'
                    : ''
                }
              "
              onclick="
                UI.setTrack(
                  '${trackItem.id}'
                )
              "
            >

              ${trackItem.shortName}

            </div>

          `
        ).join('')}

      </div>


      <div
        class="card"
        style="
          margin-top:18px;
          margin-bottom:22px;
        "
      >

        <div class="eyebrow">

          ${track.name || ''}

        </div>


        <p
          style="
            color:var(--text-muted);
            margin:6px 0 0;
          "
        >

          ${track.description || ''}

        </p>

      </div>


      <div class="level-grid">

        ${modules.map(
          module =>
            this.renderModuleCard(
              module
            )
        ).join('')}

      </div>

    `;

  },


  setTrack(trackId){

    UIState.selectedTrack =
      trackId;


    this.render();

  },


  renderModuleCard(module){

    const score =
      getModuleScore(
        module.id
      );


    const conceptMastery =
      UIHelpers.moduleMasteryPercent(
        module.id
      );


    const displayPercent =
      score.attempted
        ? score.percent
        : conceptMastery;


    const questionCount =
      QuestionBank
        .byModule(
          module.id
        )
        .length;


    const labCount =
      PythonLabBase
        .byModule(
          module.id
        )
        .length;


    return `

      <div
        class="level-card"
        onclick="
          UI.openModule(
            '${module.id}'
          )
        "
      >

        <div>

          <div
            class="eyebrow"
            style="
              margin-bottom:6px;
            "
          >

            ${String(
              module.order
            ).padStart(
              2,
              '0'
            )}

            ·

            ${
              module.stage ===
              'foundation'
                ? 'FONDATION'
                : module.stage ===
                  'bridge'
                    ? 'PONT DSP'
                    : 'DSP'
            }

          </div>


          <div class="level-card-title">

            ${module.title}

          </div>


          <div class="level-card-sub">

            ${displayPercent}% ·
            ${questionCount} questions ·
            ${labCount} lab${labCount > 1 ? 's' : ''}

          </div>

        </div>


        <div class="level-chevron">

          →

        </div>

      </div>

    `;

  },


  /* =========================================================================
     MODULE DETAIL
     ========================================================================= */

  openModule(moduleId){

    UIState.selectedModule =
      moduleId;


    this.nav(
      'module',
      {
        selectedModule:
          moduleId
      }
    );

  },


  renderModule(){

    const module =
      Curriculum.module(
        UIState.selectedModule
      );


    if(
      !module
    ){

      return `

        <div class="empty-state">

          Module introuvable.

        </div>

      `;

    }


    const concepts =
      ConceptBase.byModule(
        module.id
      );


    const formulas =
      FormulaBase.byModule(
        module.id
      );


    const labs =
      PythonLabBase.byModule(
        module.id
      );


    const questionCount =
      QuestionBank
        .byModule(
          module.id
        )
        .length;


    const prerequisites =
      Curriculum.prerequisites(
        module.id
      );


    return `

      <div class="eyebrow">

        MODULE ${module.order}

      </div>


      <h1
        style="
          font-size:30px;
        "
      >

        ${module.title}

      </h1>


      <p class="lede">

        ${module.description}

      </p>


      ${
        prerequisites.length
          ? `

            <div
              class="card"
              style="
                margin:22px 0;
              "
            >

              <div class="eyebrow">

                PRÉREQUIS CONSEILLÉS

              </div>


              <div
                style="
                  display:flex;
                  flex-wrap:wrap;
                  gap:8px;
                  margin-top:10px;
                "
              >

                ${prerequisites.map(
                  prerequisite => `

                    <button
                      class="chip"
                      onclick="
                        UI.openModule(
                          '${prerequisite.id}'
                        )
                      "
                    >

                      ${prerequisite.shortTitle}

                    </button>

                  `
                ).join('')}

              </div>

            </div>

          `
          : ''
      }


      <div class="section-title">

        <h2>
          Ce que tu vas rencontrer
        </h2>

      </div>


      <div class="card">

        <div
          style="
            display:flex;
            flex-wrap:wrap;
            gap:8px;
          "
        >

          ${module.topics.map(
            topic => `

              <span class="chip">

                ${topic}

              </span>

            `
          ).join('')}

        </div>

      </div>


      ${
        concepts.length
          ? `

            <div class="section-title">

              <h2>
                Notations
              </h2>

            </div>


            <div class="level-grid">

              ${concepts.map(
                concept => {

                  const progress =
                    ProgressReader.concept(
                      concept.id
                    );


                  return `

                    <div class="level-card">

                      <div>

                        <div
                          class="lib-formula"
                          style="
                            margin-bottom:6px;
                          "
                        >

                          ${concept.symbol}

                        </div>


                        <div class="level-card-title">

                          ${concept.name}

                        </div>


                        <div class="level-card-sub">

                          ${concept.meaning}

                        </div>

                      </div>


                      <div>

                        ${
                          progress?.mastered
                            ? '✓'
                            : ''
                        }

                      </div>

                    </div>

                  `;

                }
              ).join('')}

            </div>

          `
          : ''
      }


      ${
        formulas.length
          ? `

            <div class="section-title">

              <h2>
                Formules associées
              </h2>

            </div>


            <div class="card">

              ${formulas.map(
                formula => `

                  <div
                    style="
                      padding:12px 0;
                      border-bottom:1px solid var(--border);
                    "
                  >

                    <div
                      class="lib-formula"
                    >

                      ${formula.formula}

                    </div>


                    <div
                      style="
                        color:var(--text-muted);
                        font-size:13px;
                        margin-top:4px;
                      "
                    >

                      ${formula.name}

                    </div>

                  </div>

                `
              ).join('')}

            </div>

          `
          : ''
      }


      <div class="section-title">

        <h2>
          Entraînement
        </h2>

      </div>


      ${
        questionCount > 0
        ||
        GeneratedQuestionBase.canGenerate(
          module.id
        )
          ? `

            <div class="session-size-row">

              ${[
                5,
                10,
                20
              ].map(
                size => `

                  <div
                    class="
                      chip
                      ${
                        UIState.sessionSize ===
                        size
                          ? 'active'
                          : ''
                      }
                    "
                    onclick="
                      UI.setSessionSize(
                        ${size}
                      )
                    "
                  >

                    ${size} questions

                  </div>

                `
              ).join('')}

            </div>


            <button
              class="
                btn
                btn-primary
                btn-block
              "
              style="
                margin-top:14px;
              "
              onclick="
                UI.startQuiz(
                  '${module.id}'
                )
              "
            >

              Commencer la session →

            </button>

          `
          : `

            <div class="empty-state">

              Les exercices de ce module seront ajoutés progressivement.

            </div>

          `
      }


      ${
        labs.length
          ? `

            <div class="section-title">

              <h2>
                Expériences Python
              </h2>

            </div>


            <div class="level-grid">

              ${labs.map(
                lab =>
                  this.pythonLabCard(
                    lab
                  )
              ).join('')}

            </div>

          `
          : ''
      }

    `;

  },


  setSessionSize(size){

    UIState.sessionSize =
      size;


    this.render();

  },


  /* =========================================================================
     QUIZ
     ========================================================================= */

  startQuiz(
    moduleId
  ){

    try{

      LearningSessionAPI.start(
        moduleId,
        UIState.sessionSize
      );


      UIState.quizAnswered =
        false;


      UIState.quizFeedback =
        null;


      UIState.view =
        'quiz';


      this.render();


      window.scrollTo(
        0,
        0
      );

    }catch(error){

      console.error(
        error
      );


      alert(
        error.message
      );

    }

  },


  renderQuiz(){

    const session =
      SessionEngine.getState();


    const question =
      LearningSessionAPI.question();


    if(
      !question
    ){

      return `

        <div class="empty-state">

          Aucune question disponible.

        </div>

      `;

    }


    const progress =
      LearningSessionAPI.progress();


    const letters =
      [
        'A',
        'B',
        'C',
        'D'
      ];


    return `

      <div class="quiz-top">

        <div class="quiz-progress-bar">

          <div
            class="quiz-progress-fill"
            style="
              width:${progress.percent}%;
            "
          >
          </div>

        </div>


        <div class="quiz-count">

          ${session.currentIndex + 1}
          /
          ${session.questions.length}

        </div>


        <div
          class="quiz-close"
          onclick="
            UI.cancelQuiz()
          "
        >

          ✕

        </div>

      </div>


      ${
        question.formulaDisplay
          ? `

            <div class="q-formula">

              ${question.formulaDisplay}

            </div>

          `
          : ''
      }


      <div class="q-category">

        ${
          Curriculum.module(
            question.module
          )?.title
          ||
          question.module
        }

      </div>


      <div class="q-prompt">

        ${question.prompt}

      </div>


      <div
        class="answers"
        id="answersWrap"
      >

        ${question.answers.map(
          (
            answer,
            index
          ) => {

            let className =
              'answer-card';


            if(
              UIState.quizAnswered
            ){

              className +=
                ' disabled';


              if(
                index ===
                question.correct
              ){

                className +=
                  ' correct';

              }else if(
                index ===
                UIState.quizFeedback
                  ?.selected
              ){

                className +=
                  ' incorrect';

              }else{

                className +=
                  ' dim';

              }

            }


            return `

              <div
                class="${className}"
                ${
                  UIState.quizAnswered
                    ? ''
                    : `
                      onclick="
                        UI.answerQuiz(
                          ${index}
                        )
                      "
                    `
                }
              >

                <span class="letter">

                  ${letters[index] || ''}

                </span>


                <span>

                  ${answer}

                </span>

              </div>

            `;

          }
        ).join('')}

      </div>


      ${
        UIState.quizAnswered
          ? this.renderQuizFeedback(
              UIState.quizFeedback
            )
          : ''
      }

    `;

  },


  answerQuiz(index){

    if(
      UIState.quizAnswered
    ){

      return;

    }


    const feedback =
      LearningSessionAPI.answer(
        index
      );


    UIState.quizAnswered =
      true;


    UIState.quizFeedback =
      feedback;


    this.render();

  },


  renderQuizFeedback(
    feedback
  ){

    if(
      !feedback
    ){

      return '';

    }


    return `

      <div
        class="
          feedback-panel
          ${
            feedback.isCorrect
              ? 'correct'
              : 'incorrect'
          }
        "
      >

        <div
          class="
            feedback-head
            ${
              feedback.isCorrect
                ? 'correct'
                : 'incorrect'
            }
          "
        >

          ${
            feedback.isCorrect
              ? '✓ Correct'
              : '✕ Pas exactement'
          }

        </div>


        <div class="feedback-text">

          ${feedback.explanation || ''}

        </div>


        ${
          feedback.audio
            ? `

              <div class="audio-link">

                🎧

                <div>

                  <b>
                    Connexion audio —
                  </b>

                  ${feedback.audio}

                </div>

              </div>

            `
            : ''
        }

      </div>


      <button
        class="
          btn
          btn-primary
          btn-block
        "
        style="
          margin-top:18px;
        "
        onclick="
          UI.nextQuizQuestion()
        "
      >

        Continuer →

      </button>

    `;

  },


  nextQuizQuestion(){

    const result =
      LearningSessionAPI.next();


    if(
      result?.completedAt
      ||
      SessionEngine.getState()
        .completed
    ){

      UIState.view =
        'summary';


      UIState.quizAnswered =
        false;


      UIState.quizFeedback =
        null;


      this.render();


      window.scrollTo(
        0,
        0
      );


      return;

    }


    UIState.quizAnswered =
      false;


    UIState.quizFeedback =
      null;


    this.render();

  },


  cancelQuiz(){

    const confirmed =
      confirm(
        'Quitter cette session ? Les réponses déjà données resteront enregistrées.'
      );


    if(
      !confirmed
    ){

      return;

    }


    LearningSessionAPI.cancel();


    this.nav(
      'learn'
    );

  },


  /* =========================================================================
     SUMMARY
     ========================================================================= */

  renderSummary(){

    const result =
      LearningSessionAPI.result();


    const module =
      Curriculum.module(
        result.module
      );


    return `

      <div class="summary-hero">

        <div class="eyebrow">

          SESSION TERMINÉE

        </div>


        <div class="summary-score">

          ${result.correct}
          /
          ${result.total}

        </div>


        <div class="summary-sub">

          ${result.accuracy}% ·
          ${module?.title || ''}

        </div>

      </div>


      <div class="card">

        <p
          style="
            color:var(--text-muted);
            line-height:1.6;
          "
        >

          ${result.message}

        </p>

      </div>


      ${
        result.weakConcepts?.length
          ? `

            <div class="section-title">

              <h2>
                À revoir
              </h2>

            </div>


            <div class="card">

              ${
                result.weakConcepts
                  .map(
                    item => {

                      const concept =
                        ConceptBase.concept(
                          item.conceptId
                        );


                      return `

                        <div
                          style="
                            padding:9px 0;
                          "
                        >

                          <span class="tag-review">

                            ${
                              concept?.symbol
                              ||
                              item.conceptId
                            }

                          </span>

                          <span
                            style="
                              margin-left:8px;
                              color:var(--text-muted);
                            "
                          >

                            ${
                              concept?.name
                              ||
                              ''
                            }

                          </span>

                        </div>

                      `;

                    }
                  )
                  .join('')
              }

            </div>

          `
          : ''
      }


      <div
        style="
          display:flex;
          gap:10px;
          margin-top:24px;
          flex-wrap:wrap;
        "
      >

        <button
          class="btn btn-primary"
          style="flex:1;"
          onclick="
            UI.startQuiz(
              '${result.module}'
            )
          "
        >

          Refaire une session →

        </button>


        <button
          class="btn btn-ghost"
          style="flex:1;"
          onclick="
            UI.openModule(
              '${result.module}'
            )
          "
        >

          Retour au module

        </button>

      </div>

    `;

  },


  /* =========================================================================
     STUBS — TERMINÉS DANS LE BLOC 10

     Ces fonctions sont déjà appelables,
     mais leur interface détaillée arrive juste après.
     ========================================================================= */

  renderPythonLabs(){

    return `

      <div class="eyebrow">
        PYTHON LAB
      </div>

      <h1>
        Expériences Python
      </h1>

      <p class="lede">
        Le contenu détaillé arrive dans le bloc 10/10.
      </p>

    `;

  },


  renderPythonLabDetail(){

    return '';

  },


  renderVocabulary(){

    return '';

  },


  renderFormulaLibrary(){

    return '';

  },


  pythonLabCard(lab){

    const progress =
      ProgressReader.lab(
        lab.id
      );


    return `

      <div
        class="level-card"
        onclick="
          UI.openLab(
            '${lab.id}'
          )
        "
      >

        <div>

          <div class="level-card-title">

            ${lab.title}

          </div>


          <div class="level-card-sub">

            Niveau ${lab.difficulty}

            ${
              progress?.completed
                ? ' · terminé ✓'
                : ''
            }

          </div>

        </div>


        <div class="level-chevron">
          →
        </div>

      </div>

    `;

  },


  openLab(labId){

    UIState.selectedLab =
      labId;


    ProgressTracker.openLab(
      labId
    );


    this.nav(
      'python-detail',
      {
        selectedLab:
          labId
      }
    );

  },


  exportProgress(){

    ProgressAPI.exportProgress();

  },


  importProgress(){

    /*
      Implémentation complète au bloc 10.
    */

    console.log(
      'Import JSON : interface ajoutée dans le bloc 10.'
    );

  }

};


/* ==========================================================================
   FIN BLOC 9/10

   BLOC 10 — FINAL

   Il ajoutera :

   1. Python Lab complet
      - prédiction
      - code
      - bouton copier
      - résultat attendu
      - expérience à modifier
      - "J'ai terminé"

   2. Vocabulaire DSP
      - recherche
      - catégories
      - définitions
      - notation
      - connexion audio

   3. Bibliothèque de formules
      - rechercher
      - filtrer
      - à mémoriser / reconnaître / consulter
      - code Python

   4. Import JSON

   5. quelques corrections de compatibilité

   6. initialisation :

      document.addEventListener(
        'DOMContentLoaded',
        ...
      )

   Après le bloc 10,
   le fichier JavaScript sera COMPLET.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 10/10 — FINAL UI + PYTHON LABS + VOCABULAIRE + FORMULES

   Ce dernier bloc complète :

   - Python Labs
   - prédictions
   - copie du code
   - validation des labs
   - vocabulaire DSP
   - recherche vocabulaire
   - bibliothèque de formules
   - filtres
   - import JSON
   - helpers de compatibilité
   - initialisation finale

   IMPORTANT :
   Certaines fonctions définies dans le bloc 9 sont volontairement
   remplacées ici par leur version complète.
   ========================================================================== */


/* ==========================================================================
   HELPERS DE COMPATIBILITÉ

   Ces fonctions permettent de lire les bases même si certaines méthodes
   ont été nommées légèrement différemment dans les premiers blocs.
   ========================================================================== */


function getAllConcepts(){

  if(
    typeof ConceptBase === 'undefined'
  ){

    return [];

  }


  if(
    typeof ConceptBase.all === 'function'
  ){

    return ConceptBase.all();

  }


  if(
    Array.isArray(ConceptBase)
  ){

    return ConceptBase;

  }


  if(
    Array.isArray(ConceptBase.concepts)
  ){

    return ConceptBase.concepts;

  }


  if(
    typeof Concepts !== 'undefined'
    &&
    Array.isArray(Concepts)
  ){

    return Concepts;

  }


  return [];

}


function getConceptById(id){

  if(
    typeof ConceptBase !== 'undefined'
    &&
    typeof ConceptBase.concept === 'function'
  ){

    return ConceptBase.concept(id);

  }


  return (
    getAllConcepts().find(
      concept =>
        concept.id === id
    )
    ||
    null
  );

}


function getAllFormulas(){

  if(
    typeof FormulaBase === 'undefined'
  ){

    return [];

  }


  if(
    typeof FormulaBase.all === 'function'
  ){

    return FormulaBase.all();

  }


  if(
    Array.isArray(FormulaBase)
  ){

    return FormulaBase;

  }


  if(
    Array.isArray(FormulaBase.formulas)
  ){

    return FormulaBase.formulas;

  }


  if(
    typeof Formulas !== 'undefined'
    &&
    Array.isArray(Formulas)
  ){

    return Formulas;

  }


  return [];

}


function getFormulaModuleId(formula){

  return (
    formula.module
    ||
    formula.moduleId
    ||
    'other'
  );

}


function getConceptCategory(concept){

  return (
    concept.category
    ||
    concept.module
    ||
    'general'
  );

}


/* ==========================================================================
   PYTHON LABS — LISTE
   ========================================================================== */


UI.renderPythonLabs = function(){

  const labs =
    PythonLabBase.all();


  const completed =
    ProgressReader.completedLabs();


  return `

    <div class="eyebrow">
      PYTHON LAB
    </div>


    <h1
      style="
        font-size:30px;
        margin-bottom:10px;
      "
    >

      Expériences Python

    </h1>


    <p class="lede">

      Ici, une équation ne reste pas abstraite.

      Tu fais d'abord une prédiction, puis tu copies le code
      dans Python, tu observes le résultat et tu modifies
      un paramètre pour vérifier ce que tu as compris.

    </p>


    <div
      class="card"
      style="
        margin:22px 0;
      "
    >

      <div class="eyebrow">
        PROGRESSION
      </div>


      <div
        style="
          display:flex;
          align-items:flex-end;
          gap:8px;
          margin-top:8px;
        "
      >

        <div
          style="
            font-family:var(--font-mono);
            font-size:28px;
          "
        >

          ${completed.length}

        </div>


        <div
          style="
            color:var(--text-faint);
            padding-bottom:4px;
          "
        >

          / ${labs.length} labs terminés

        </div>

      </div>


      <div
        class="prog-bar"
        style="
          margin-top:12px;
        "
      >

        <div
          class="prog-fill"
          style="
            width:${
              labs.length
                ? Math.round(
                    completed.length /
                    labs.length *
                    100
                  )
                : 0
            }%;
          "
        >
        </div>

      </div>

    </div>


    <div class="level-grid">

      ${labs.map(
        lab =>
          UI.pythonLabCard(lab)
      ).join('')}

    </div>

  `;

};


/* ==========================================================================
   PYTHON LAB — DÉTAIL
   ========================================================================== */


UI.renderPythonLabDetail = function(){

  const lab =
    PythonLabBase.get(
      UIState.selectedLab
    );


  if(
    !lab
  ){

    return `

      <div class="empty-state">

        Lab introuvable.

      </div>

    `;

  }


  const progress =
    ProgressReader.lab(
      lab.id
    );


  const predictionAnswered =
    Boolean(
      UIState.labPredictionAnswered
    );


  const predictionFeedback =
    UIState.labPredictionFeedback
    ||
    null;


  return `

    <div class="eyebrow">

      PYTHON LAB ${String(lab.order).padStart(2, '0')}

    </div>


    <h1
      style="
        font-size:30px;
        margin-bottom:10px;
      "
    >

      ${UIHelpers.escapeHTML(
        lab.title
      )}

    </h1>


    <div
      style="
        display:flex;
        gap:8px;
        flex-wrap:wrap;
        margin-bottom:22px;
      "
    >

      <span class="chip">

        Niveau ${lab.difficulty}

      </span>


      ${
        progress?.completed
          ? `

            <span class="chip active">

              ✓ terminé

            </span>

          `
          : ''
      }


      ${
        lab.dependencies?.length
          ? lab.dependencies.map(
              dependency => `

                <span class="chip">

                  ${UIHelpers.escapeHTML(
                    dependency
                  )}

                </span>

              `
            ).join('')
          : ''
      }

    </div>


    <div class="section-title">

      <h2>
        Objectif
      </h2>

    </div>


    <div class="card">

      <p
        style="
          color:var(--text-muted);
          line-height:1.65;
          margin:0;
        "
      >

        ${UIHelpers.escapeHTML(
          lab.objective
        )}

      </p>

    </div>


    ${
      lab.notation
        ? `

          <div class="section-title">

            <h2>
              Notation
            </h2>

          </div>


          <div class="card">

            <div
              class="lib-formula"
              style="
                font-size:24px;
                margin-bottom:12px;
              "
            >

              ${lab.notation}

            </div>


            ${
              lab.translation
                ? `

                  <div
                    style="
                      color:var(--text-muted);
                      line-height:1.6;
                    "
                  >

                    En français :

                    <strong
                      style="
                        color:var(--text);
                      "
                    >

                      ${UIHelpers.escapeHTML(
                        lab.translation
                      )}

                    </strong>

                  </div>

                `
                : ''
            }

          </div>

        `
        : ''
    }


    ${
      lab.prediction
        ? `

          <div class="section-title">

            <h2>
              1. Prédis avant d'exécuter
            </h2>

          </div>


          <div class="card">

            <div
              style="
                font-size:16px;
                font-weight:600;
                line-height:1.5;
                margin-bottom:16px;
              "
            >

              ${UIHelpers.escapeHTML(
                lab.prediction.prompt
              )}

            </div>


            <div class="answers">

              ${lab.prediction.options.map(
                (
                  option,
                  index
                ) => {

                  let className =
                    'answer-card';


                  if(
                    predictionAnswered
                  ){

                    className +=
                      ' disabled';


                    if(
                      index ===
                      lab.prediction.correct
                    ){

                      className +=
                        ' correct';

                    }else if(
                      index ===
                      predictionFeedback?.selected
                    ){

                      className +=
                        ' incorrect';

                    }else{

                      className +=
                        ' dim';

                    }

                  }


                  return `

                    <div
                      class="${className}"
                      ${
                        predictionAnswered
                          ? ''
                          : `
                            onclick="
                              UI.answerLabPrediction(
                                '${lab.id}',
                                ${index}
                              )
                            "
                          `
                      }
                    >

                      <span class="letter">

                        ${
                          ['A','B','C','D'][index]
                          ||
                          ''
                        }

                      </span>


                      <span>

                        ${UIHelpers.escapeHTML(
                          option
                        )}

                      </span>

                    </div>

                  `;

                }
              ).join('')}

            </div>


            ${
              predictionAnswered
                ? `

                  <div
                    class="
                      feedback-panel
                      ${
                        predictionFeedback.correct
                          ? 'correct'
                          : 'incorrect'
                      }
                    "
                    style="
                      margin-top:16px;
                    "
                  >

                    <div
                      class="
                        feedback-head
                        ${
                          predictionFeedback.correct
                            ? 'correct'
                            : 'incorrect'
                        }
                      "
                    >

                      ${
                        predictionFeedback.correct
                          ? '✓ Bonne prédiction'
                          : '✕ Regarde ce qui se passe'
                      }

                    </div>


                    <div class="feedback-text">

                      ${UIHelpers.escapeHTML(
                        lab.prediction.explanation
                      )}

                    </div>

                  </div>

                `
                : ''
            }

          </div>

        `
        : ''
    }


    <div class="section-title">

      <h2>
        ${
          lab.prediction
            ? '2. Exécute'
            : '1. Exécute'
        }
      </h2>

    </div>


    <div class="card">

      <div
        style="
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          margin-bottom:12px;
        "
      >

        <div class="eyebrow">

          PYTHON

        </div>


        <button
          class="btn btn-ghost"
          style="
            padding:7px 11px;
            font-size:11px;
          "
          onclick="
            UI.copyLabCode(
              '${lab.id}',
              this
            )
          "
        >

          Copier

        </button>

      </div>


      <pre
        style="
          margin:0;
          overflow:auto;
          white-space:pre;
          font-family:var(--font-mono);
          font-size:13px;
          line-height:1.65;
          color:var(--text);
        "
      ><code>${UIHelpers.escapeHTML(
        lab.code
      )}</code></pre>

    </div>


    <div class="section-title">

      <h2>
        Résultat attendu
      </h2>

    </div>


    <div class="card">

      <div
        style="
          font-family:var(--font-mono);
          line-height:1.7;
        "
      >

        ${UIHelpers.escapeHTML(
          lab.expected
        )}

      </div>

    </div>


    <div class="section-title">

      <h2>
        ${
          lab.prediction
            ? '3. Modifie'
            : '2. Modifie'
        }
      </h2>

    </div>


    <div class="card">

      <p
        style="
          color:var(--text-muted);
          line-height:1.65;
          margin:0;
        "
      >

        ${UIHelpers.escapeHTML(
          lab.tryIt
        )}

      </p>

    </div>


    ${
      lab.audio
        ? `

          <div class="section-title">

            <h2>
              Connexion audio
            </h2>

          </div>


          <div class="audio-link">

            🎧

            <div>

              ${UIHelpers.escapeHTML(
                lab.audio
              )}

            </div>

          </div>

        `
        : ''
    }


    ${
      lab.takeaway
        ? `

          <div
            class="card"
            style="
              margin-top:18px;
            "
          >

            <div class="eyebrow">

              À RETENIR

            </div>


            <div
              style="
                margin-top:8px;
                line-height:1.6;
              "
            >

              ${UIHelpers.escapeHTML(
                lab.takeaway
              )}

            </div>

          </div>

        `
        : ''
    }


    <button
      class="
        btn
        ${
          progress?.completed
            ? 'btn-ghost'
            : 'btn-primary'
        }
        btn-block
      "
      style="
        margin-top:24px;
      "
      onclick="
        UI.completeLab(
          '${lab.id}'
        )
      "
    >

      ${
        progress?.completed
          ? '✓ Lab terminé'
          : 'J’ai testé le code et terminé ce lab ✓'
      }

    </button>


    <button
      class="
        btn
        btn-ghost
        btn-block
      "
      style="
        margin-top:10px;
      "
      onclick="
        UI.nav('python')
      "
    >

      Retour aux Python Labs

    </button>

  `;

};


/* ==========================================================================
   PRÉDICTION PYTHON LAB
   ========================================================================== */


UI.answerLabPrediction = function(
  labId,
  selectedIndex
){

  if(
    UIState.labPredictionAnswered
  ){

    return;

  }


  const lab =
    PythonLabBase.get(
      labId
    );


  if(
    !lab
    ||
    !lab.prediction
  ){

    return;

  }


  const correct =
    Number(selectedIndex)
    ===
    Number(
      lab.prediction.correct
    );


  ProgressTracker.recordLabPrediction(
    labId,
    correct
  );


  UIState.labPredictionAnswered =
    true;


  UIState.labPredictionFeedback = {

    selected:
      Number(
        selectedIndex
      ),

    correct:
      correct

  };


  UI.render();

};


/* ==========================================================================
   COPIER LE CODE PYTHON
   ========================================================================== */


UI.copyLabCode = async function(
  labId,
  button
){

  const lab =
    PythonLabBase.get(
      labId
    );


  if(
    !lab
  ){

    return;

  }


  try{

    await navigator.clipboard.writeText(
      lab.code
    );


    if(
      button
    ){

      const previous =
        button.textContent;


      button.textContent =
        'Copié ✓';


      setTimeout(
        () => {

          button.textContent =
            previous;

        },
        1200
      );

    }

  }catch(error){

    /*
      Fallback pour certains fichiers ouverts
      directement via file://
    */

    const textarea =
      document.createElement(
        'textarea'
      );


    textarea.value =
      lab.code;


    textarea.style.position =
      'fixed';


    textarea.style.opacity =
      '0';


    document.body.appendChild(
      textarea
    );


    textarea.select();


    document.execCommand(
      'copy'
    );


    textarea.remove();


    if(
      button
    ){

      button.textContent =
        'Copié ✓';

    }

  }

};


/* ==========================================================================
   TERMINER LAB
   ========================================================================== */


UI.completeLab = function(
  labId
){

  const progress =
    ProgressReader.lab(
      labId
    );


  if(
    !progress?.completed
  ){

    ProgressTracker.completeLab(
      labId
    );

  }


  UI.render();

};


/* ==========================================================================
   OPEN LAB — RESET ÉTAT DE PRÉDICTION
   ========================================================================== */


UI.openLab = function(
  labId
){

  UIState.selectedLab =
    labId;


  UIState.labPredictionAnswered =
    false;


  UIState.labPredictionFeedback =
    null;


  ProgressTracker.openLab(
    labId
  );


  UI.nav(
    'python-detail',
    {
      selectedLab:
        labId
    }
  );

};


/* ==========================================================================
   VOCABULAIRE DSP
   ========================================================================== */


UI.renderVocabulary = function(){

  const concepts =
    getAllConcepts();


  const search =
    (
      UIState.vocabularySearch
      ||
      ''
    )
      .trim()
      .toLowerCase();


  const categories =
    [
      'all',
      ...new Set(
        concepts.map(
          concept =>
            getConceptCategory(
              concept
            )
        )
      )
    ];


  const filtered =
    concepts.filter(
      concept => {

        const category =
          getConceptCategory(
            concept
          );


        const categoryMatch =
          UIState.vocabularyCategory ===
          'all'
          ||
          category ===
          UIState.vocabularyCategory;


        const haystack =
          [
            concept.symbol,
            concept.name,
            concept.meaning,
            concept.audio,
            concept.mnemonic,
            concept.description
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();


        const searchMatch =
          !search
          ||
          haystack.includes(
            search
          );


        return (
          categoryMatch
          &&
          searchMatch
        );

      }
    );


  return `

    <div class="eyebrow">

      VOCABULAIRE DSP

    </div>


    <h1
      style="
        font-size:30px;
        margin-bottom:10px;
      "
    >

      L’alphabet du signal

    </h1>


    <p class="lede">

      Ici, le but n’est pas de mémoriser des définitions universitaires
      par cœur. Le but est de pouvoir regarder une équation et savoir
      ce que chaque symbole te demande de faire.

    </p>


    <div
      style="
        margin-top:22px;
      "
    >

      <input
        type="text"
        value="${UIHelpers.escapeHTML(
          UIState.vocabularySearch
        )}"
        placeholder="Chercher : x[n], sigma, fréquence, phase…"
        oninput="
          UI.setVocabularySearch(
            this.value
          )
        "
        style="
          width:100%;
          box-sizing:border-box;
          padding:13px 15px;
          border:1px solid var(--border);
          border-radius:12px;
          background:var(--surface);
          color:var(--text);
          font:inherit;
          outline:none;
        "
      >

    </div>


    <div
      class="lib-filters"
      style="
        margin-top:14px;
      "
    >

      ${categories.map(
        category => `

          <div
            class="
              lib-filter
              ${
                UIState.vocabularyCategory ===
                category
                  ? 'active'
                  : ''
              }
            "
            onclick="
              UI.setVocabularyCategory(
                '${category}'
              )
            "
          >

            ${
              category ===
              'all'
                ? 'Tous'
                : UIHelpers.escapeHTML(
                    category
                  )
            }

          </div>

        `
      ).join('')}

    </div>


    <div
      class="level-grid"
      style="
        margin-top:20px;
      "
    >

      ${
        filtered.length
          ? filtered.map(
              concept =>
                UI.renderVocabularyCard(
                  concept
                )
            ).join('')
          : `

            <div class="empty-state">

              Aucun concept trouvé.

            </div>

          `
      }

    </div>

  `;

};


/* ==========================================================================
   VOCABULAIRE — CARTE
   ========================================================================== */


UI.renderVocabularyCard = function(
  concept
){

  const progress =
    ProgressReader.concept(
      concept.id
    );


  return `

    <div
      class="card"
      style="
        min-height:150px;
      "
    >

      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:14px;
        "
      >

        <div
          class="lib-formula"
          style="
            font-size:25px;
          "
        >

          ${concept.symbol || '—'}

        </div>


        ${
          progress?.mastered
            ? `

              <span
                class="chip active"
              >

                maîtrisé ✓

              </span>

            `
            : ''
        }

      </div>


      <h3
        style="
          margin:12px 0 7px;
          font-size:16px;
        "
      >

        ${UIHelpers.escapeHTML(
          concept.name
        )}

      </h3>


      <p
        style="
          color:var(--text-muted);
          font-size:13px;
          line-height:1.6;
          margin:0;
        "
      >

        ${UIHelpers.escapeHTML(
          concept.meaning
          ||
          concept.description
          ||
          ''
        )}

      </p>


      ${
        concept.mnemonic
          ? `

            <div
              style="
                margin-top:13px;
                padding-top:12px;
                border-top:1px solid var(--border);
                font-size:12px;
                color:var(--text-faint);
              "
            >

              💡 ${UIHelpers.escapeHTML(
                concept.mnemonic
              )}

            </div>

          `
          : ''
      }


      ${
        concept.audio
          ? `

            <div
              style="
                margin-top:9px;
                font-size:12px;
                color:var(--cyan);
              "
            >

              🎧 ${UIHelpers.escapeHTML(
                concept.audio
              )}

            </div>

          `
          : ''
      }

    </div>

  `;

};


/* ==========================================================================
   VOCABULAIRE — FILTRES
   ========================================================================== */


UI.setVocabularySearch = function(
  value
){

  UIState.vocabularySearch =
    value;


  /*
    On évite UI.render() à chaque frappe,
    sinon l'input perdrait constamment son focus.
  */

  clearTimeout(
    UI._vocabularyTimer
  );


  UI._vocabularyTimer =
    setTimeout(
      () => {

        UI.render();


        const input =
          document.querySelector(
            'input[placeholder^="Chercher : x[n]"]'
          );


        if(
          input
        ){

          input.focus();


          input.setSelectionRange(
            input.value.length,
            input.value.length
          );

        }

      },
      120
    );

};


UI.setVocabularyCategory = function(
  category
){

  UIState.vocabularyCategory =
    category;


  UI.render();

};


/* ==========================================================================
   BIBLIOTHÈQUE DE FORMULES
   ========================================================================== */


UI.renderFormulaLibrary = function(){

  const formulas =
    getAllFormulas();


  const search =
    (
      UIState.formulaSearch
      ||
      ''
    )
      .trim()
      .toLowerCase();


  const moduleIds =
    [
      'all',
      ...new Set(
        formulas.map(
          formula =>
            getFormulaModuleId(
              formula
            )
        )
      )
    ];


  const filtered =
    formulas.filter(
      formula => {

        const moduleId =
          getFormulaModuleId(
            formula
          );


        const moduleMatch =
          UIState.formulaModule ===
          'all'
          ||
          moduleId ===
          UIState.formulaModule;


        const haystack =
          [
            formula.name,
            formula.formula,
            formula.translation,
            formula.description,
            formula.audio,
            formula.status
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();


        const searchMatch =
          !search
          ||
          haystack.includes(
            search
          );


        return (
          moduleMatch
          &&
          searchMatch
        );

      }
    );


  return `

    <div class="eyebrow">

      FORMULES

    </div>


    <h1
      style="
        font-size:30px;
        margin-bottom:10px;
      "
    >

      Bibliothèque de formules

    </h1>


    <p class="lede">

      Toutes les formules n’ont pas le même statut.

      Certaines doivent devenir automatiques,
      certaines doivent simplement être reconnues,
      et les plus avancées peuvent rester des références.

    </p>


    <div
      style="
        margin-top:22px;
      "
    >

      <input
        type="text"
        value="${UIHelpers.escapeHTML(
          UIState.formulaSearch
        )}"
        placeholder="Chercher une formule ou un concept…"
        oninput="
          UI.setFormulaSearch(
            this.value
          )
        "
        style="
          width:100%;
          box-sizing:border-box;
          padding:13px 15px;
          border:1px solid var(--border);
          border-radius:12px;
          background:var(--surface);
          color:var(--text);
          font:inherit;
          outline:none;
        "
      >

    </div>


    <div
      class="lib-filters"
      style="
        margin-top:14px;
      "
    >

      ${moduleIds.map(
        moduleId => {

          const module =
            moduleId === 'all'
              ? null
              : Curriculum.module(
                  moduleId
                );


          return `

            <div
              class="
                lib-filter
                ${
                  UIState.formulaModule ===
                  moduleId
                    ? 'active'
                    : ''
                }
              "
              onclick="
                UI.setFormulaModule(
                  '${moduleId}'
                )
              "
            >

              ${
                moduleId === 'all'
                  ? 'Toutes'
                  : UIHelpers.escapeHTML(
                      module?.shortTitle
                      ||
                      module?.title
                      ||
                      moduleId
                    )
              }

            </div>

          `;

        }
      ).join('')}

    </div>


    <div
      style="
        margin-top:20px;
      "
    >

      ${
        filtered.length
          ? filtered.map(
              formula =>
                UI.renderFormulaCard(
                  formula
                )
            ).join('')
          : `

            <div class="empty-state">

              Aucune formule trouvée.

            </div>

          `
      }

    </div>

  `;

};


/* ==========================================================================
   FORMULE — CARTE
   ========================================================================== */


UI.renderFormulaCard = function(
  formula
){

  const status =
    formula.status
    ||
    'reference';


  const module =
    Curriculum.module(
      getFormulaModuleId(
        formula
      )
    );


  return `

    <div
      class="card"
      style="
        margin-bottom:12px;
      "
    >

      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:16px;
          flex-wrap:wrap;
        "
      >

        <div>

          <div class="eyebrow">

            ${
              UIHelpers.escapeHTML(
                module?.title
                ||
                getFormulaModuleId(
                  formula
                )
              )
            }

          </div>


          <h3
            style="
              margin:7px 0 0;
              font-size:16px;
            "
          >

            ${UIHelpers.escapeHTML(
              formula.name
              ||
              ''
            )}

          </h3>

        </div>


        <span
          class="
            formula-status
            ${UIHelpers.statusClass(
              status
            )}
          "
        >

          ${UIHelpers.statusLabel(
            status
          )}

        </span>

      </div>


      <div
        class="lib-formula"
        style="
          font-size:22px;
          margin:20px 0 13px;
          overflow-x:auto;
        "
      >

        ${formula.formula}

      </div>


      ${
        formula.translation
          ? `

            <div
              style="
                color:var(--text-muted);
                line-height:1.6;
                font-size:13px;
              "
            >

              <strong
                style="
                  color:var(--text);
                "
              >

                Lecture :

              </strong>

              ${UIHelpers.escapeHTML(
                formula.translation
              )}

            </div>

          `
          : ''
      }


      ${
        formula.description
          ? `

            <p
              style="
                color:var(--text-muted);
                line-height:1.6;
                font-size:13px;
                margin:10px 0 0;
              "
            >

              ${UIHelpers.escapeHTML(
                formula.description
              )}

            </p>

          `
          : ''
      }


      ${
        formula.audio
          ? `

            <div
              style="
                margin-top:13px;
                font-size:12px;
                color:var(--cyan);
              "
            >

              🎧 ${UIHelpers.escapeHTML(
                formula.audio
              )}

            </div>

          `
          : ''
      }


      ${
        formula.python
          ? `

            <details
              style="
                margin-top:15px;
              "
            >

              <summary
                style="
                  cursor:pointer;
                  color:var(--text-muted);
                  font-size:12px;
                "
              >

                Voir la traduction Python

              </summary>


              <pre
                style="
                  margin:12px 0 0;
                  overflow:auto;
                  font-family:var(--font-mono);
                  font-size:12px;
                  line-height:1.6;
                "
              ><code>${UIHelpers.escapeHTML(
                formula.python
              )}</code></pre>

            </details>

          `
          : ''
      }

    </div>

  `;

};


/* ==========================================================================
   FORMULES — FILTRES
   ========================================================================== */


UI.setFormulaSearch = function(
  value
){

  UIState.formulaSearch =
    value;


  clearTimeout(
    UI._formulaTimer
  );


  UI._formulaTimer =
    setTimeout(
      () => {

        UI.render();


        const inputs =
          document.querySelectorAll(
            'input'
          );


        const input =
          Array.from(inputs).find(
            element =>
              element.placeholder
                ?.startsWith(
                  'Chercher une formule'
                )
          );


        if(
          input
        ){

          input.focus();


          input.setSelectionRange(
            input.value.length,
            input.value.length
          );

        }

      },
      120
    );

};


UI.setFormulaModule = function(
  moduleId
){

  UIState.formulaModule =
    moduleId;


  UI.render();

};


/* ==========================================================================
   IMPORT JSON
   ========================================================================== */


UI.importProgress = function(){

  const input =
    document.createElement(
      'input'
    );


  input.type =
    'file';


  input.accept =
    '.json,application/json';


  input.addEventListener(
    'change',
    async () => {

      const file =
        input.files?.[0];


      if(
        !file
      ){

        return;

      }


      const confirmed =
        confirm(
          'Importer cette sauvegarde remplacera la progression actuellement enregistrée dans cette app. Continuer ?'
        );


      if(
        !confirmed
      ){

        return;

      }


      try{

        await ProgressAPI.importProgress(
          file
        );


        alert(
          'Progression importée avec succès.'
        );


        UI.render();

      }catch(error){

        console.error(
          error
        );


        alert(
          `Impossible d’importer cette sauvegarde : ${error.message}`
        );

      }

    }
  );


  input.click();

};


/* ==========================================================================
   RESET SÉCURISÉ

   La fonction existe pour maintenance mais n'est pas mise en avant.
   ========================================================================== */


UI.resetProgress = function(){

  const first =
    confirm(
      'Effacer toute la progression locale ?'
    );


  if(
    !first
  ){

    return;

  }


  const second =
    confirm(
      'Cette action est définitive sauf si tu possèdes une sauvegarde JSON. Confirmer ?'
    );


  if(
    !second
  ){

    return;

  }


  ProgressStore.reset();


  UIState.view =
    'home';


  UI.render();

};


/* ==========================================================================
   PATCH DASHBOARD : AJOUT DU RESET OPTIONNEL

   On ne modifie pas le HTML principal du bloc 9.
   Le reset reste accessible depuis la console avec :

   UI.resetProgress()

   C'est volontaire pour éviter un effacement accidentel.
   ========================================================================== */


/* ==========================================================================
   NAVIGATION CLAVIER DU QUIZ

   1 / 2 / 3 / 4 = réponses
   Entrée = continuer après feedback

   Ce comportement est facultatif mais agréable sur desktop.
   ========================================================================== */


document.addEventListener(
  'keydown',
  event => {

    if(
      UIState.view !==
      'quiz'
    ){

      return;

    }


    if(
      !UIState.quizAnswered
    ){

      const map = {

        '1':
          0,

        '2':
          1,

        '3':
          2,

        '4':
          3

      };


      if(
        Object.prototype.hasOwnProperty.call(
          map,
          event.key
        )
      ){

        const question =
          LearningSessionAPI.question();


        const index =
          map[
            event.key
          ];


        if(
          question
          &&
          index <
          question.answers.length
        ){

          UI.answerQuiz(
            index
          );

        }

      }


      return;

    }


    if(
      event.key ===
      'Enter'
    ){

      UI.nextQuizQuestion();

    }

  }
);


/* ==========================================================================
   VÉRIFICATION DES DONNÉES

   Cette fonction ne modifie rien.

   Elle affiche seulement des warnings dans la console si une référence
   importante est cassée.
   ========================================================================== */


function validateLearningData(){

  const warnings =
    [];


  /* ------------------------------------------------------------------------
     MODULES
     ------------------------------------------------------------------------ */

  const moduleIds =
    new Set(
      Curriculum.modules.map(
        module =>
          module.id
      )
    );


  /* ------------------------------------------------------------------------
     QUESTIONS
     ------------------------------------------------------------------------ */

  for(
    const question
    of QuestionBank.all()
  ){

    if(
      question.module
      &&
      !moduleIds.has(
        question.module
      )
    ){

      warnings.push(
        `Question ${question.id}: module inconnu "${question.module}".`
      );

    }


    if(
      !Array.isArray(
        question.answers
      )
      ||
      question.answers.length <
      2
    ){

      warnings.push(
        `Question ${question.id}: réponses invalides.`
      );

    }


    if(
      question.correct <
      0
      ||
      question.correct >=
      question.answers.length
    ){

      warnings.push(
        `Question ${question.id}: index correct invalide.`
      );

    }

  }


  /* ------------------------------------------------------------------------
     PYTHON LABS
     ------------------------------------------------------------------------ */

  for(
    const lab
    of PythonLabBase.all()
  ){

    if(
      lab.module
      &&
      !moduleIds.has(
        lab.module
      )
    ){

      warnings.push(
        `Python Lab ${lab.id}: module inconnu "${lab.module}".`
      );

    }


    if(
      lab.prediction
      &&
      (
        lab.prediction.correct <
        0
        ||
        lab.prediction.correct >=
        lab.prediction.options.length
      )
    ){

      warnings.push(
        `Python Lab ${lab.id}: réponse de prédiction invalide.`
      );

    }

  }


  /* ------------------------------------------------------------------------
     FORMULES
     ------------------------------------------------------------------------ */

  for(
    const formula
    of getAllFormulas()
  ){

    const moduleId =
      getFormulaModuleId(
        formula
      );


    if(
      moduleId !==
      'other'
      &&
      !moduleIds.has(
        moduleId
      )
    ){

      warnings.push(
        `Formule ${formula.id || formula.name}: module inconnu "${moduleId}".`
      );

    }

  }


  if(
    warnings.length
  ){

    console.group(
      'DSP Learning Lab — vérification des données'
    );


    warnings.forEach(
      warning =>
        console.warn(
          warning
        )
    );


    console.groupEnd();

  }else{

    console.info(
      'DSP Learning Lab : données vérifiées ✓'
    );

  }


  return warnings;

}


/* ==========================================================================
   DIAGNOSTIC

   Dans la console navigateur :

   DSPDebug.summary()

   permet de vérifier rapidement si les bases sont correctement chargées.
   ========================================================================== */


const DSPDebug = {

  summary(){

    const summary = {

      modules:
        Curriculum.modules.length,

      concepts:
        getAllConcepts().length,

      formulas:
        getAllFormulas().length,

      questions:
        QuestionBank.all().length,

      pythonLabs:
        PythonLabBase.all().length,

      masteredConcepts:
        ProgressReader
          .masteredConceptCount(),

      completedLabs:
        ProgressReader
          .completedLabs()
          .length,

      sessions:
        ProgressStore
          .data
          .stats
          .sessionsCompleted

    };


    console.table(
      summary
    );


    return summary;

  },


  progress(){

    console.log(
      ProgressStore.get()
    );


    return ProgressStore.get();

  },


  warnings(){

    return validateLearningData();

  }

};


/* ==========================================================================
   INITIALISATION FINALE
   ========================================================================== */


function initializeDSPLearningApp(){

  /*
    ProgressStore.load() a déjà été appelé dans le bloc 7.

    On peut néanmoins garantir ici que data existe.
  */

  if(
    !ProgressStore.data
  ){

    ProgressStore.load();

  }


  /*
    Vérification du contenu.
  */

  validateLearningData();


  /*
    Liaison au conteneur #app.
  */

  UI.bindRoot();


  /*
    Première vue.
  */

  UI.render();


  console.info(
    'DSP Learning Lab prêt.'
  );

}


/* ==========================================================================
   LANCEMENT

   Si le DOM est déjà chargé :
   lancement immédiat.

   Sinon :
   attente de DOMContentLoaded.
   ========================================================================== */


if(
  document.readyState ===
  'loading'
){

  document.addEventListener(
    'DOMContentLoaded',
    initializeDSPLearningApp
  );

}else{

  initializeDSPLearningApp();

}


/* ==========================================================================
   FIN DU FICHIER JAVASCRIPT

   ARCHITECTURE FINALE :

   BLOC 1
   └── configuration / curriculum

   BLOC 2
   └── alphabet / concepts / vocabulaire

   BLOC 3
   └── formules / connaissances

   BLOC 4
   └── banque de questions

   BLOC 5
   └── questions générées dynamiquement

   BLOC 6
   └── Python Labs

   BLOC 7
   └── progression / localStorage / JSON

   BLOC 8
   └── moteur pédagogique / sessions

   BLOC 9
   └── interface principale / quiz / dashboard

   BLOC 10
   └── labs / vocabulaire / formules / import / initialisation


   CHAÎNE PÉDAGOGIQUE :

   intuition
        ↓
   vocabulaire
        ↓
   symbole
        ↓
   exemple numérique
        ↓
   formule
        ↓
   quiz
        ↓
   Python
        ↓
   visualisation
        ↓
   application audio
        ↓
   algorithme DSP
        ↓
   JUCE / C++
        ↓
   préparation au niveau EPFL


   IMPORTANT :

   L'application est un support d'apprentissage.

   Elle ne remplace pas :
   - les cours EPFL
   - les exercices universitaires
   - les démonstrations mathématiques
   - la pratique de programmation DSP

   Son rôle est de construire le pont qui permet progressivement
   de comprendre ces ressources.
   ========================================================================== */
   /* ==========================================================================
   BLOCK 11 — HARD MODE / UNIVERSITY DSP

   OBJECTIF

   Passer de :

   "je reconnais la bonne réponse"

   à :

   "je sais résoudre un problème DSP"

   Le Hard Mode travaille :

   - calcul manuel
   - raisonnement
   - équations
   - démonstrations guidées
   - convolution
   - systèmes LTI
   - équations aux différences
   - nombres complexes
   - Fourier
   - DFT
   - filtres
   - transformée en Z
   - problèmes mixtes
   - vérification Python

   IMPORTANT :

   "University level" = exercices créés pour entraîner
   les compétences mathématiques universitaires du DSP.

   Ils ne sont PAS présentés comme des exercices officiels EPFL.
   ========================================================================== */


/* ==========================================================================
   CONFIGURATION
   ========================================================================== */

const UniversityConfig = {

  masteryThreshold:
    70,

  categories: [

    {
      id: 'foundations',
      order: 1,
      title: 'Mathematical Foundations',
      shortTitle: 'Foundations',
      description:
        'Indices, sommes, énergie, sinusoïdes et nombres complexes.'
    },

    {
      id: 'signals',
      order: 2,
      title: 'Signals & Systems',
      shortTitle: 'Signals',
      description:
        'Signaux discrets, décalages, systèmes et propriétés LTI.'
    },

    {
      id: 'convolution',
      order: 3,
      title: 'Convolution',
      shortTitle: 'Convolution',
      description:
        'Calcul manuel et interprétation de la convolution.'
    },

    {
      id: 'filters',
      order: 4,
      title: 'Digital Filters',
      shortTitle: 'Filters',
      description:
        'Équations aux différences, FIR, IIR et réponses impulsionnelles.'
    },

    {
      id: 'fourier',
      order: 5,
      title: 'Fourier Analysis',
      shortTitle: 'Fourier',
      description:
        'Exponentielles complexes, spectre, DFT et analyse fréquentielle.'
    },

    {
      id: 'ztransform',
      order: 6,
      title: 'Z-Transform',
      shortTitle: 'Z-transform',
      description:
        'Délais, fonctions de transfert, pôles, zéros et stabilité.'
    },

    {
      id: 'mixed',
      order: 7,
      title: 'Mixed University Problems',
      shortTitle: 'Final',
      description:
        'Aucune indication sur la méthode : à toi de reconnaître l’outil.'
    }

  ]

};


/* ==========================================================================
   BANQUE DE PROBLÈMES

   TYPE :

   calculation
   reasoning
   derivation
   python
   mixed
   ========================================================================== */

const UniversityProblems = [

/* ==========================================================================
   1 — FOUNDATIONS
   ========================================================================== */

{
  id:
    'uni_foundation_001',

  category:
    'foundations',

  difficulty:
    1,

  type:
    'calculation',

  title:
    'Énergie d’un signal discret',

  prerequisite:
    [
      'x[n]',
      'Σ',
      'carré'
    ],

  statement:
    `Soit le signal discret :

x = [1, -2, 3]

Calcule son énergie :

E = Σ |x[n]|²`,

  question:
    'Quelle est la valeur de E ?',

  expected:
    '14',

  accepted:
    [
      '14',
      'E=14',
      'E = 14'
    ],

  hints: [

    `Commence par oublier Σ.

La formule te demande simplement de prendre
chaque valeur du signal.`,

    `Calcule :

1²
(-2)²
3²`,

    `Puis additionne :

1² + (-2)² + 3²`

  ],

  solutionSteps: [

    {
      title:
        'Étape 1 — traduire la formule',

      content:
        `Σ signifie ici :

"additionne le résultat pour tous les échantillons."`
    },

    {
      title:
        'Étape 2 — carré de chaque valeur',

      content:
        `1² = 1

(-2)² = 4

3² = 9`
    },

    {
      title:
        'Étape 3 — somme',

      content:
        `E = 1 + 4 + 9

E = 14`
    }

  ],

  takeaway:
    `La formule Σ|x[n]|² est simplement une boucle :

prendre sample → carré → additionner.`,

  python:
`import numpy as np

x = np.array([1, -2, 3])

E = np.sum(np.abs(x) ** 2)

print(E)`,

  audio:
    `Pour un signal audio fini, cette mesure quantifie mathématiquement son énergie totale.`

},


{
  id:
    'uni_foundation_002',

  category:
    'foundations',

  difficulty:
    2,

  type:
    'calculation',

  title:
    'Décalage temporel',

  statement:
    `On considère :

x = [4, 7, 2, 9]

et :

y[n] = x[n-1]

Si n = 2, quelle valeur prend y[2] ?`,

  question:
    'Calcule y[2].',

  expected:
    '7',

  accepted:
    [
      '7',
      'y[2]=7',
      'y[2] = 7'
    ],

  hints: [

    `Remplace d’abord n par 2.`,

    `x[n-1] devient x[2-1].`,

    `Donc tu cherches x[1].`

  ],

  solutionSteps: [

    {
      title:
        'Substitution',

      content:
        `y[2] = x[2-1]`
    },

    {
      title:
        'Simplification',

      content:
        `y[2] = x[1]`
    },

    {
      title:
        'Lecture du tableau',

      content:
        `x[1] = 7

donc :

y[2] = 7`
    }

  ],

  takeaway:
    `n-1 signifie : regarder un échantillon dans le passé.`,

  audio:
    `x[n-1] est exactement le genre de mémoire élémentaire utilisée dans les delays et filtres numériques.`

},


{
  id:
    'uni_foundation_003',

  category:
    'foundations',

  difficulty:
    3,

  type:
    'derivation',

  title:
    'Magnitude d’un nombre complexe',

  statement:
    `Soit :

z = 3 + j4

Calcule :

|z|`,

  question:
    'Quelle est la magnitude ?',

  expected:
    '5',

  accepted:
    [
      '5',
      '|z|=5',
      '|z| = 5'
    ],

  hints: [

    `Imagine le nombre complexe comme un point :

(3, 4)`,

    `La magnitude est la distance entre
l’origine (0,0) et ce point.`,

    `Utilise :

√(3² + 4²)`

  ],

  solutionSteps: [

    {
      title:
        'Parties réelle et imaginaire',

      content:
        `Re(z) = 3

Im(z) = 4`
    },

    {
      title:
        'Magnitude',

      content:
        `|z| = √(3² + 4²)`
    },

    {
      title:
        'Calcul',

      content:
        `|z| = √(9 + 16)

|z| = √25

|z| = 5`
    }

  ],

  takeaway:
    `Un nombre complexe peut représenter simultanément magnitude et phase.`,

  audio:
    `Cette géométrie deviendra fondamentale lorsque nous représenterons les composantes fréquentielles d’un signal.`

},


/* ==========================================================================
   2 — SIGNALS & SYSTEMS
   ========================================================================== */

{
  id:
    'uni_signal_001',

  category:
    'signals',

  difficulty:
    2,

  type:
    'reasoning',

  title:
    'Système avec mémoire',

  statement:
    `On considère :

y[n] = x[n] + x[n-1]

Le système utilise-t-il uniquement
l’échantillon d’entrée actuel ?`,

  question:
    `Réponds "oui" ou "non".`,

  expected:
    'non',

  accepted:
    [
      'non',
      'Non',
      'NON'
    ],

  hints: [

    `Regarde les indices utilisés à droite de l’équation.`,

    `Il y a x[n], mais également x[n-1].`

  ],

  solutionSteps: [

    {
      title:
        'Entrée actuelle',

      content:
        `x[n] représente l’entrée actuelle.`
    },

    {
      title:
        'Entrée passée',

      content:
        `x[n-1] représente l’échantillon précédent.`
    },

    {
      title:
        'Conclusion',

      content:
        `Le système doit donc mémoriser une valeur passée.

C’est un système avec mémoire.`
    }

  ],

  takeaway:
    `Dès qu’une équation dépend du passé, une mémoire est nécessaire dans l’algorithme.`,

  audio:
    `Un filtre numérique stocke fréquemment des échantillons précédents.`

},


/* ==========================================================================
   3 — CONVOLUTION
   ========================================================================== */

{
  id:
    'uni_conv_001',

  category:
    'convolution',

  difficulty:
    2,

  type:
    'calculation',

  title:
    'Première convolution manuelle',

  statement:
    `Soit :

x = [1, 2, 3]

h = [1, 1]

Calcule :

y = x * h`,

  question:
    'Écris la séquence de sortie.',

  expected:
    '[1, 3, 5, 3]',

  accepted:
    [
      '[1,3,5,3]',
      '[1, 3, 5, 3]',
      '1,3,5,3',
      '1, 3, 5, 3'
    ],

  hints: [

    `La sortie contient :

3 + 2 - 1 = 4 valeurs.`,

    `Commence par :

y[0] = 1 × 1`,

    `Puis :

y[1] = (1 × 1) + (2 × 1)`

  ],

  solutionSteps: [

    {
      title:
        'y[0]',

      content:
        `y[0] = 1 × 1 = 1`
    },

    {
      title:
        'y[1]',

      content:
        `y[1] = (1 × 1) + (2 × 1)

y[1] = 3`
    },

    {
      title:
        'y[2]',

      content:
        `y[2] = (2 × 1) + (3 × 1)

y[2] = 5`
    },

    {
      title:
        'y[3]',

      content:
        `y[3] = 3 × 1 = 3`
    }

  ],

  takeaway:
    `La convolution calcule comment chaque échantillon d’entrée contribue aux sorties voisines selon h.`,

  python:
`import numpy as np

x = np.array([1, 2, 3])
h = np.array([1, 1])

y = np.convolve(x, h)

print(y)`,

  audio:
    `Tu viens de calculer manuellement la sortie d’un filtre FIR.`

},


/* ==========================================================================
   4 — FILTERS
   ========================================================================== */

{
  id:
    'uni_filter_001',

  category:
    'filters',

  difficulty:
    3,

  type:
    'calculation',

  title:
    'Équation aux différences',

  statement:
    `On considère le filtre :

y[n] = x[n] + 0.5 y[n-1]

Conditions initiales :

y[-1] = 0

Entrée :

x[0] = 1
x[1] = 0
x[2] = 0

Calcule :

y[0], y[1], y[2]`,

  question:
    'Écris les trois valeurs.',

  expected:
    '[1, 0.5, 0.25]',

  accepted:
    [
      '[1,0.5,0.25]',
      '[1, 0.5, 0.25]',
      '1,0.5,0.25',
      '1, 0.5, 0.25'
    ],

  hints: [

    `Commence uniquement par n = 0.`,

    `y[0] = x[0] + 0.5 y[-1]`,

    `Une fois y[0] connu,
utilise-le pour calculer y[1].`

  ],

  solutionSteps: [

    {
      title:
        'n = 0',

      content:
        `y[0] = 1 + 0.5 × 0

y[0] = 1`
    },

    {
      title:
        'n = 1',

      content:
        `y[1] = 0 + 0.5 × 1

y[1] = 0.5`
    },

    {
      title:
        'n = 2',

      content:
        `y[2] = 0 + 0.5 × 0.5

y[2] = 0.25`
    }

  ],

  takeaway:
    `La sortie précédente est réinjectée dans le calcul : c’est du feedback.`,

  python:
`x = [1, 0, 0]
y = []

previous_y = 0

for sample in x:

    current_y = sample + 0.5 * previous_y

    y.append(current_y)

    previous_y = current_y

print(y)`,

  audio:
    `Cette décroissance récursive est le principe élémentaire derrière de nombreux filtres IIR.`

},


/* ==========================================================================
   5 — FOURIER
   ========================================================================== */

{
  id:
    'uni_fourier_001',

  category:
    'fourier',

  difficulty:
    3,

  type:
    'calculation',

  title:
    'Résolution fréquentielle',

  statement:
    `Une DFT analyse :

N = 1024 échantillons

avec :

Fs = 48000 Hz

Calcule la distance fréquentielle entre deux bins :

Δf = Fs / N`,

  question:
    'Donne Δf en Hz, arrondi à deux décimales.',

  expected:
    '46.88',

  accepted:
    [
      '46.88',
      '46,88',
      '46.88 Hz',
      '46,88 Hz'
    ],

  hints: [

    `Tu connais déjà les deux nombres nécessaires.`,

    `Δf = 48000 / 1024`

  ],

  solutionSteps: [

    {
      title:
        'Formule',

      content:
        `Δf = Fs / N`
    },

    {
      title:
        'Substitution',

      content:
        `Δf = 48000 / 1024`
    },

    {
      title:
        'Résultat',

      content:
        `Δf = 46.875 Hz

≈ 46.88 Hz`
    }

  ],

  takeaway:
    `Une DFT ne contient pas une fréquence arbitraire par case : chaque bin correspond à un espacement précis.`,

  audio:
    `C’est une notion essentielle pour comprendre ce que montre réellement un analyseur spectral.`

},


/* ==========================================================================
   6 — Z TRANSFORM
   ========================================================================== */

{
  id:
    'uni_z_001',

  category:
    'ztransform',

  difficulty:
    3,

  type:
    'reasoning',

  title:
    'Lire z⁻¹',

  statement:
    `Dans un diagramme DSP apparaît :

z⁻¹

Que représente cet opérateur
dans un système discret ?`,

  question:
    'Réponds en quelques mots.',

  expected:
    'un délai d’un échantillon',

  accepted:
    [
      'un délai d’un échantillon',
      'un delai d’un echantillon',
      'délai d’un échantillon',
      'delai d un echantillon',
      '1 sample delay',
      'delay 1 sample'
    ],

  hints: [

    `Pense à x[n-1].`,

    `z⁻¹ transforme conceptuellement x[n]
en x[n-1].`

  ],

  solutionSteps: [

    {
      title:
        'Temps discret',

      content:
        `x[n] = valeur actuelle`
    },

    {
      title:
        'Décalage',

      content:
        `x[n-1] = valeur précédente`
    },

    {
      title:
        'Notation système',

      content:
        `z⁻¹ représente donc un retard
d’un échantillon.`
    }

  ],

  takeaway:
    `Avant d’être une abstraction algébrique, z⁻¹ peut être vu comme une petite mémoire.`,

  audio:
    `En C++ DSP, cela correspond concrètement à conserver la valeur précédente.`

},


/* ==========================================================================
   7 — MIXED
   ========================================================================== */

{
  id:
    'uni_mixed_001',

  category:
    'mixed',

  difficulty:
    5,

  type:
    'mixed',

  title:
    'Identifier le système',

  statement:
    `On te donne uniquement :

y[n] = 0.8y[n-1] + x[n]

Sans indication de chapitre.

Analyse cette équation.`,

  question:
    `Le système est-il FIR ou IIR ?`,

  expected:
    'IIR',

  accepted:
    [
      'IIR',
      'iir'
    ],

  hints: [

    `Ne cherche pas encore à calculer.`,

    `Regarde si la sortie dépend uniquement de x
ou également d’anciennes valeurs de y.`,

    `y[n-1] est une sortie précédente.`

  ],

  solutionSteps: [

    {
      title:
        'Identifier les termes',

      content:
        `x[n] = entrée actuelle

y[n-1] = sortie précédente`
    },

    {
      title:
        'Repérer la récursion',

      content:
        `La sortie précédente est réinjectée
dans le calcul de la nouvelle sortie.`
    },

    {
      title:
        'Classification',

      content:
        `Le système possède du feedback.

Il est donc récursif.

→ IIR`
    },

    {
      title:
        'Comportement',

      content:
        `Après une impulsion,
la sortie peut continuer :

1
0.8
0.64
0.512
...`
    }

  ],

  takeaway:
    `Le but du Mixed Mode est de reconnaître toi-même la structure mathématique avant de choisir l’outil.`,

  python:
`x = [1] + [0] * 20

y = []

previous = 0

for sample in x:

    current = sample + 0.8 * previous

    y.append(current)

    previous = current

print(y)`,

  audio:
    `Tu peux déjà reconnaître ici le comportement d’une décroissance récursive.`

}

];


/* ==========================================================================
   UNIVERSITY PROBLEM BASE
   ========================================================================== */

const UniversityProblemBase = {

  all(){

    return UniversityProblems;

  },


  get(id){

    return (
      UniversityProblems.find(
        problem =>
          problem.id === id
      )
      ||
      null
    );

  },


  byCategory(categoryId){

    return UniversityProblems.filter(
      problem =>
        problem.category ===
        categoryId
    );

  },


  categories(){

    return UniversityConfig.categories;

  }

};


/* ==========================================================================
   NORMALISATION DES RÉPONSES
   ========================================================================== */

const UniversityAnswer = {

  normalize(value){

    return String(value)
      .trim()
      .toLowerCase()
      .replaceAll('−', '-')
      .replace(/\s+/g, ' ');

  },


  check(problem, value){

    const answer =
      this.normalize(value);


    const accepted =
      [
        problem.expected,
        ...(problem.accepted || [])
      ]
      .map(
        item =>
          this.normalize(item)
      );


    return accepted.includes(
      answer
    );

  }

};


/* ==========================================================================
   PROGRESSION HARD MODE
   ========================================================================== */

const UniversityProgress = {

  storageKey:
    'dsp_university_progress_v1',


  defaultData(){

    return {

      solved:
        {},

      attempts:
        {},

      hintsUsed:
        {},

      currentProblem:
        null

    };

  },


  load(){

    try{

      const raw =
        localStorage.getItem(
          this.storageKey
        );


      if(
        !raw
      ){

        return this.defaultData();

      }


      return {
        ...this.defaultData(),
        ...JSON.parse(raw)
      };

    }catch(error){

      console.warn(
        'Impossible de charger UniversityProgress.',
        error
      );


      return this.defaultData();

    }

  },


  save(){

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(
        this.data
      )
    );

  },


  recordAttempt(
    problemId,
    correct
  ){

    if(
      !this.data.attempts[
        problemId
      ]
    ){

      this.data.attempts[
        problemId
      ] = {

        total:
          0,

        correct:
          0

      };

    }


    const item =
      this.data.attempts[
        problemId
      ];


    item.total++;


    if(
      correct
    ){

      item.correct++;


      this.data.solved[
        problemId
      ] =
        true;

    }


    this.save();

  },


  recordHint(problemId){

    this.data.hintsUsed[
      problemId
    ] =
      (
        this.data.hintsUsed[
          problemId
        ]
        ||
        0
      )
      +
      1;


    this.save();

  },


  isSolved(problemId){

    return Boolean(
      this.data.solved[
        problemId
      ]
    );

  },


  categoryScore(categoryId){

    const problems =
      UniversityProblemBase.byCategory(
        categoryId
      );


    if(
      problems.length === 0
    ){

      return 0;

    }


    const solved =
      problems.filter(
        problem =>
          this.isSolved(
            problem.id
          )
      ).length;


    return Math.round(
      solved /
      problems.length *
      100
    );

  }

};


UniversityProgress.data =
  UniversityProgress.load();


/* ==========================================================================
   HARD MODE UI STATE
   ========================================================================== */

UIState.universityCategory =
  'foundations';


UIState.universityProblem =
  null;


UIState.universityAnswer =
  '';


UIState.universityChecked =
  false;


UIState.universityCorrect =
  false;


UIState.universityHint =
  0;


UIState.universitySolution =
  false;


/* ==========================================================================
   AJOUT DU HARD MODE À L'ACCUEIL

   On surcharge quickCard uniquement en ajoutant
   une méthode dédiée utilisable dans les écrans existants.
   ========================================================================== */

UI.openUniversity = function(){

  UIState.view =
    'university';


  UIState.universityProblem =
    null;


  UI.render();


  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

};


/* ==========================================================================
   OUVRIR UN PROBLÈME
   ========================================================================== */

UI.openUniversityProblem = function(
  problemId
){

  UIState.universityProblem =
    problemId;


  UIState.universityAnswer =
    '';


  UIState.universityChecked =
    false;


  UIState.universityCorrect =
    false;


  UIState.universityHint =
    0;


  UIState.universitySolution =
    false;


  UIState.view =
    'university-problem';


  UI.render();


  window.scrollTo(
    0,
    0
  );

};


/* ==========================================================================
   CATEGORY
   ========================================================================== */

UI.setUniversityCategory = function(
  categoryId
){

  UIState.universityCategory =
    categoryId;


  UI.render();

};


/* ==========================================================================
   HARD MODE HOME
   ========================================================================== */

UI.renderUniversity = function(){

  const categories =
    UniversityProblemBase.categories();


  const current =
    categories.find(
      category =>
        category.id ===
        UIState.universityCategory
    )
    ||
    categories[0];


  const problems =
    UniversityProblemBase.byCategory(
      current.id
    );


  return `

    <div class="eyebrow">

      HARD MODE · UNIVERSITY DSP

    </div>


    <h1
      style="
        font-size:32px;
        margin-bottom:10px;
      "
    >

      Résous. Ne reconnais plus seulement.

    </h1>


    <p class="lede">

      Ici, les trois propositions disparaissent.

      Tu dois lire le problème, identifier les mathématiques nécessaires,
      effectuer le raisonnement et produire toi-même une réponse.

    </p>


    <div
      class="card"
      style="
        margin:22px 0;
      "
    >

      <div class="eyebrow">

        OBJECTIF

      </div>


      <p
        style="
          color:var(--text-muted);
          line-height:1.65;
          margin:8px 0 0;
        "
      >

        Ce mode sert de transition vers les exercices universitaires
        de traitement numérique du signal.

        Les problèmes sont pédagogiquement décomposables,
        mais la solution n'est pas donnée tant que tu ne la demandes pas.

      </p>

    </div>


    <div class="lib-filters">

      ${categories.map(
        category => `

          <div
            class="
              lib-filter
              ${
                current.id ===
                category.id
                  ? 'active'
                  : ''
              }
            "
            onclick="
              UI.setUniversityCategory(
                '${category.id}'
              )
            "
          >

            ${category.shortTitle}

          </div>

        `
      ).join('')}

    </div>


    <div
      class="card"
      style="
        margin-top:18px;
      "
    >

      <div class="eyebrow">

        LEVEL ${current.order}

      </div>


      <h2
        style="
          margin:7px 0;
          font-size:20px;
        "
      >

        ${current.title}

      </h2>


      <p
        style="
          color:var(--text-muted);
          margin:0;
        "
      >

        ${current.description}

      </p>


      <div
        class="prog-bar"
        style="
          margin-top:16px;
        "
      >

        <div
          class="prog-fill"
          style="
            width:${
              UniversityProgress.categoryScore(
                current.id
              )
            }%;
          "
        >
        </div>

      </div>

    </div>


    <div
      class="level-grid"
      style="
        margin-top:18px;
      "
    >

      ${problems.map(
        problem => {

          const solved =
            UniversityProgress.isSolved(
              problem.id
            );


          return `

            <div
              class="level-card"
              onclick="
                UI.openUniversityProblem(
                  '${problem.id}'
                )
              "
            >

              <div>

                <div
                  class="eyebrow"
                  style="
                    margin-bottom:6px;
                  "
                >

                  ${
                    problem.type.toUpperCase()
                  }

                  ·

                  DIFFICULTÉ
                  ${problem.difficulty}/5

                </div>


                <div class="level-card-title">

                  ${problem.title}

                </div>


                <div class="level-card-sub">

                  ${
                    solved
                      ? 'Résolu ✓'
                      : 'À résoudre'
                  }

                </div>

              </div>


              <div class="level-chevron">

                →

              </div>

            </div>

          `;

        }
      ).join('')}

    </div>

  `;

};


/* ==========================================================================
   PROBLEM VIEW
   ========================================================================== */

UI.renderUniversityProblem = function(){

  const problem =
    UniversityProblemBase.get(
      UIState.universityProblem
    );


  if(
    !problem
  ){

    return `

      <div class="empty-state">

        Problème introuvable.

      </div>

    `;

  }


  return `

    <div class="eyebrow">

      UNIVERSITY DSP · DIFFICULTÉ ${problem.difficulty}/5

    </div>


    <h1
      style="
        font-size:29px;
        margin-bottom:20px;
      "
    >

      ${problem.title}

    </h1>


    <div class="card">

      <div class="eyebrow">

        PROBLÈME

      </div>


      <pre
        style="
          white-space:pre-wrap;
          font-family:var(--font-mono);
          font-size:16px;
          line-height:1.8;
          overflow:auto;
          margin:14px 0 0;
        "
      >${UIHelpers.escapeHTML(
        problem.statement
      )}</pre>

    </div>


    <div class="section-title">

      <h2>
        À toi
      </h2>

    </div>


    <div class="card">

      <div
        style="
          font-weight:600;
          margin-bottom:13px;
        "
      >

        ${UIHelpers.escapeHTML(
          problem.question
        )}

      </div>


      <input
        id="universityAnswer"
        type="text"
        value="${UIHelpers.escapeHTML(
          UIState.universityAnswer
        )}"
        placeholder="Ta réponse…"
        ${
          UIState.universityChecked
            ? 'disabled'
            : ''
        }
        style="
          width:100%;
          box-sizing:border-box;
          padding:14px 15px;
          border:1px solid var(--border);
          border-radius:12px;
          background:var(--surface);
          color:var(--text);
          font-family:var(--font-mono);
          font-size:15px;
          outline:none;
        "
        oninput="
          UIState.universityAnswer =
            this.value
        "
        onkeydown="
          if(event.key === 'Enter'){
            UI.checkUniversityAnswer()
          }
        "
      >


      ${
        !UIState.universityChecked
          ? `

            <button
              class="
                btn
                btn-primary
                btn-block
              "
              style="
                margin-top:12px;
              "
              onclick="
                UI.checkUniversityAnswer()
              "
            >

              Vérifier →

            </button>

          `
          : UI.renderUniversityFeedback(
              problem
            )
      }

    </div>


    ${UI.renderUniversityHints(
      problem
    )}


    ${
      UIState.universitySolution
        ? UI.renderUniversitySolution(
            problem
          )
        : `

          <button
            class="
              btn
              btn-ghost
              btn-block
            "
            style="
              margin-top:14px;
            "
            onclick="
              UIState.universitySolution = true;
              UI.render();
            "
          >

            Voir la résolution complète

          </button>

        `
    }


    <button
      class="
        btn
        btn-ghost
        btn-block
      "
      style="
        margin-top:10px;
      "
      onclick="
        UI.openUniversity()
      "
    >

      Retour au Hard Mode

    </button>

  `;

};


/* ==========================================================================
   CHECK ANSWER
   ========================================================================== */

UI.checkUniversityAnswer = function(){

  if(
    UIState.universityChecked
  ){

    return;

  }


  const problem =
    UniversityProblemBase.get(
      UIState.universityProblem
    );


  if(
    !problem
  ){

    return;

  }


  const answer =
    UIState.universityAnswer.trim();


  if(
    !answer
  ){

    return;

  }


  const correct =
    UniversityAnswer.check(
      problem,
      answer
    );


  UniversityProgress.recordAttempt(
    problem.id,
    correct
  );


  UIState.universityCorrect =
    correct;


  UIState.universityChecked =
    true;


  UI.render();

};


/* ==========================================================================
   FEEDBACK
   ========================================================================== */

UI.renderUniversityFeedback = function(
  problem
){

  return `

    <div
      class="
        feedback-panel
        ${
          UIState.universityCorrect
            ? 'correct'
            : 'incorrect'
        }
      "
      style="
        margin-top:14px;
      "
    >

      <div
        class="
          feedback-head
          ${
            UIState.universityCorrect
              ? 'correct'
              : 'incorrect'
          }
        "
      >

        ${
          UIState.universityCorrect
            ? '✓ Correct'
            : '✕ Pas encore'
        }

      </div>


      <div class="feedback-text">

        ${
          UIState.universityCorrect

            ? `Tu as trouvé la réponse sans QCM.
               C'est exactement la compétence travaillée ici.`

            : `Ta réponse n'est pas reconnue comme correcte.
               Essaie d'identifier l'étape précise qui te manque
               avant d'ouvrir la solution.`
        }

      </div>

    </div>


    ${
      !UIState.universityCorrect
        ? `

          <button
            class="
              btn
              btn-ghost
              btn-block
            "
            style="
              margin-top:10px;
            "
            onclick="
              UI.retryUniversityProblem()
            "
          >

            Réessayer

          </button>

        `
        : ''
    }

  `;

};


/* ==========================================================================
   RETRY
   ========================================================================== */

UI.retryUniversityProblem = function(){

  UIState.universityChecked =
    false;


  UIState.universityCorrect =
    false;


  UIState.universityAnswer =
    '';


  UI.render();

};


/* ==========================================================================
   HINT SYSTEM

   Les indices sont révélés UN PAR UN.

   Cela évite de transformer immédiatement
   l'exercice en correction.
   ========================================================================== */

UI.renderUniversityHints = function(
  problem
){

  const hints =
    problem.hints
    ||
    [];


  if(
    hints.length === 0
  ){

    return '';

  }


  return `

    <div class="section-title">

      <h2>
        Indices
      </h2>

    </div>


    <div class="card">

      ${
        UIState.universityHint === 0

          ? `

            <p
              style="
                color:var(--text-muted);
                margin:0 0 14px;
              "
            >

              Bloqué ? Révèle un indice plutôt que la solution.

            </p>

          `

          : hints
              .slice(
                0,
                UIState.universityHint
              )
              .map(
                (
                  hint,
                  index
                ) => `

                  <div
                    style="
                      padding:11px 0;
                      ${
                        index <
                        UIState.universityHint - 1
                          ? 'border-bottom:1px solid var(--border);'
                          : ''
                      }
                    "
                  >

                    <div class="eyebrow">

                      INDICE ${index + 1}

                    </div>


                    <div
                      style="
                        white-space:pre-wrap;
                        color:var(--text-muted);
                        line-height:1.6;
                        margin-top:5px;
                      "
                    >

                      ${UIHelpers.escapeHTML(
                        hint
                      )}

                    </div>

                  </div>

                `
              )
              .join('')
      }


      ${
        UIState.universityHint <
        hints.length

          ? `

            <button
              class="
                btn
                btn-ghost
                btn-block
              "
              style="
                margin-top:10px;
              "
              onclick="
                UI.revealUniversityHint(
                  '${problem.id}'
                )
              "
            >

              ${
                UIState.universityHint === 0
                  ? 'Donne-moi un indice'
                  : 'Indice suivant'
              }

            </button>

          `

          : ''
      }

    </div>

  `;

};


/* ==========================================================================
   REVEAL HINT
   ========================================================================== */

UI.revealUniversityHint = function(
  problemId
){

  const problem =
    UniversityProblemBase.get(
      problemId
    );


  if(
    !problem
  ){

    return;

  }


  const max =
    problem.hints?.length
    ||
    0;


  if(
    UIState.universityHint >=
    max
  ){

    return;

  }


  UIState.universityHint++;


  UniversityProgress.recordHint(
    problemId
  );


  UI.render();

};


/* ==========================================================================
   SOLUTION
   ========================================================================== */

UI.renderUniversitySolution = function(
  problem
){

  return `

    <div class="section-title">

      <h2>
        Résolution
      </h2>

    </div>


    <div class="card">

      ${
        problem.solutionSteps
          .map(
            (
              step,
              index
            ) => `

              <div
                style="
                  padding:
                    ${index === 0 ? '0' : '16px'}
                    0
                    16px;

                  ${
                    index <
                    problem.solutionSteps.length - 1
                      ? 'border-bottom:1px solid var(--border);'
                      : ''
                  }
                "
              >

                <div
                  style="
                    font-weight:600;
                    margin-bottom:7px;
                  "
                >

                  ${UIHelpers.escapeHTML(
                    step.title
                  )}

                </div>


                <div
                  style="
                    white-space:pre-wrap;
                    font-family:var(--font-mono);
                    color:var(--text-muted);
                    line-height:1.7;
                  "
                >

                  ${UIHelpers.escapeHTML(
                    step.content
                  )}

                </div>

              </div>

            `
          )
          .join('')
      }

    </div>


    <div
      class="card"
      style="
        margin-top:12px;
      "
    >

      <div class="eyebrow">

        À RETENIR

      </div>


      <div
        style="
          margin-top:8px;
          line-height:1.6;
        "
      >

        ${UIHelpers.escapeHTML(
          problem.takeaway
        )}

      </div>

    </div>


    ${
      problem.python
        ? `

          <div class="section-title">

            <h2>
              Vérification Python
            </h2>

          </div>


          <div class="card">

            <pre
              style="
                margin:0;
                overflow:auto;
                font-family:var(--font-mono);
                font-size:13px;
                line-height:1.65;
              "
            ><code>${UIHelpers.escapeHTML(
              problem.python
            )}</code></pre>

          </div>

        `
        : ''
    }


    ${
      problem.audio
        ? `

          <div
            class="audio-link"
            style="
              margin-top:12px;
            "
          >

            🎧

            <div>

              ${UIHelpers.escapeHTML(
                problem.audio
              )}

            </div>

          </div>

        `
        : ''
    }

  `;

};


/* ==========================================================================
   PATCH UI.RENDER

   On conserve le render du bloc 9/10,
   mais on intercepte nos deux nouvelles vues.
   ========================================================================== */

const BaseUIRender =
  UI.render.bind(UI);


UI.render = function(){

  if(
    !this.root
  ){

    this.bindRoot();

  }


  if(
    UIState.view ===
    'university'
  ){

    this.root.className =
      'app wide';


    this.root.innerHTML =
      this.topnav()
      +
      this.renderUniversity();


    return;

  }


  if(
    UIState.view ===
    'university-problem'
  ){

    this.root.className =
      'app';


    this.root.innerHTML =
      this.topnav()
      +
      this.renderUniversityProblem();


    return;

  }


  return BaseUIRender();

};


/* ==========================================================================
   AJOUT DU HARD MODE À LA HOME

   On surcharge renderHome puis on injecte
   une carte supplémentaire dans "Espaces".

   Si l'injection échoue à cause d'une modification future
   du HTML, l'app continue normalement.
   ========================================================================== */

const BaseRenderHome =
  UI.renderHome.bind(UI);


UI.renderHome = function(){

  let html =
    BaseRenderHome();


  const hardCard = `

    <div
      class="level-card"
      onclick="
        UI.openUniversity()
      "
    >

      <div>

        <div
          class="eyebrow"
          style="
            margin-bottom:5px;
          "
        >

          HARD MODE

        </div>


        <div class="level-card-title">

          University DSP

        </div>


        <div class="level-card-sub">

          vrais calculs · problèmes · démonstrations · Python

        </div>

      </div>


      <div class="level-chevron">

        →

      </div>

    </div>

  `;


  const marker =
    '</div>';


  const position =
    html.lastIndexOf(
      marker
    );


  if(
    position !== -1
  ){

    html =
      html.slice(
        0,
        position
      )
      +
      hardCard
      +
      html.slice(
        position
      );

  }


  return html;

};


/* ==========================================================================
   DEBUG
   ========================================================================== */

const UniversityDebug = {

  summary(){

    const data =
      UniversityConfig.categories
        .map(
          category => ({

            category:
              category.title,

            problems:
              UniversityProblemBase
                .byCategory(
                  category.id
                )
                .length,

            score:
              `${
                UniversityProgress
                  .categoryScore(
                    category.id
                  )
              }%`

          })
        );


    console.table(
      data
    );


    return data;

  }

};


/* ==========================================================================
   FIN BLOCK 11

   NOUVELLE ARCHITECTURE PÉDAGOGIQUE

   LEARN
   │
   ├── Alphabet / vocabulaire
   │
   ├── Maths fondamentales
   │
   ├── Signaux discrets
   │
   ├── Systèmes
   │
   ├── Convolution
   │
   ├── Filtres
   │
   ├── Fourier
   │
   └── Transformée en Z
   │
   ▼
   QUIZ
   │
   ▼
   PYTHON LAB
   │
   ▼
   HARD MODE
   │
   ├── calcul manuel
   ├── raisonnement
   ├── démonstration
   ├── problème DSP
   ├── vérification Python
   └── problème mixte
   │
   ▼
   COURS UNIVERSITAIRES DSP
   │
   ▼
   EPFL / COURSERA
   ========================================================================== */