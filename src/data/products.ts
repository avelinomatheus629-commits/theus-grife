import { Product } from '../types';

export const LUXURY_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Terno Desestruturado Sartoriale Super 160s',
    brandInspiration: 'Armani',
    inspirationNote: 'Inspirado no caimento fluido e alfaiataria desconstruída milanesa de Giorgio Armani.',
    category: 'tailoring',
    price: 4890,
    originalPrice: 5600,
    tag: 'Ícone Alfaiataria',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Blazer e calça de corte milanês com ombros naturais sem ombreiras rígidas. Confeccionado em pura lã fria virgem com toque sedoso e drapeado impecável para o homem contemporâneo.',
    fabricDetails: '100% Lã Virgem Australiana Super 160s tecida em Biella, Itália. Forro cupro respirável.',
    origin: 'Atelier de Milão, Itália',
    sizes: ['46 (P)', '48 (M)', '50 (G)', '52 (GG)', '54 (XG)'],
    colors: [
      { name: 'Nero Profondo', hex: '#111113' },
      { name: 'Blu Notte Imperial', hex: '#1b2333' },
      { name: 'Grigio Antracite', hex: '#2f3136' }
    ],
    rating: 4.9,
    reviewCount: 48,
    isBestSeller: true
  },
  {
    id: 'prod-2',
    name: 'Polo Club Petit Piqué de Algodão Pima',
    brandInspiration: 'Lacoste',
    inspirationNote: 'Homenagem ao legado do Grand Slam e à sofisticação do tênis clássico francês de René Lacoste.',
    category: 'polos',
    price: 890,
    tag: 'Herança Tennis Club',
    images: [
      'https://images.unsplash.com/photo-1625910513413-7fc430c6a83a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'A clássica camisa polo reinventada com fiação penteada de algodão Pima peruano colhido à mão. Gola canelada com memória que não deforma e botões esculpidos em madrepérola natural.',
    fabricDetails: '100% Algodão Pima Peruano de fibra extra-longa (ELS) em ponto Petit Piqué duplo.',
    origin: 'Troyes, França',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Branco Roland Garros', hex: '#f6f6f6' },
      { name: 'Verde Vert Imperial', hex: '#123524' },
      { name: 'Azul Marinho Riviera', hex: '#16233b' },
      { name: 'Preto Sombra', hex: '#18181a' }
    ],
    rating: 4.8,
    reviewCount: 112,
    isBestSeller: true
  },
  {
    id: 'prod-3',
    name: 'Jaqueta Técnica Minimalista Re-Nylon Arquitetural',
    brandInspiration: 'Prada',
    inspirationNote: 'Linhas retas e puristas com acabamento técnico impermeável característico da vanguarda Prada.',
    category: 'outerwear',
    price: 3950,
    originalPrice: 4400,
    tag: 'Vanguarda & Sustentável',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Blusão contemporâneo em poliamida regenerada de alta densidade com zíperes vedados matte. Corte reto geométrico com silhueta clean sem costuras aparentes e bolsos embutidos magnéticos.',
    fabricDetails: 'Nylon regenerado ECONYL® com membrana repelente à água DWR e toque encorpado.',
    origin: 'Toscana, Itália',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Nero Opaco', hex: '#0f0f10' },
      { name: 'Cinza Asfalto', hex: '#3a3b3d' },
      { name: 'Oliva Militar', hex: '#2d3328' }
    ],
    rating: 5.0,
    reviewCount: 34,
    isNew: true
  },
  {
    id: 'prod-4',
    name: 'Óculos de Sol Titanium Prizm Polarized',
    brandInspiration: 'Oakley',
    inspirationNote: 'Inspirado na precisão balística, armações em titânio e ótica de alta definição da Oakley.',
    category: 'eyewear',
    price: 1850,
    tag: 'Precisão Óptica',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Armação forjada em liga de titânio aeroespacial ultrafina com hastes ergonômicas de retenção três pontos. Lentes polarizadas com contraste aprimorado para claridade absoluta e proteção UV400 total.',
    fabricDetails: 'Titânio Aeroespacial Grau 5 com lentes em Policarbonato Plutonite® antirreflexo.',
    origin: 'Foothill Ranch, Califórnia / Belluno, Itália',
    sizes: ['Tamanho Único (Ajuste Ergonômico)'],
    colors: [
      { name: 'Black Iridium Titanium', hex: '#1c1c1e' },
      { name: 'Gunmetal Prata Fosco', hex: '#4a4d52' },
      { name: 'Safira Polarized', hex: '#1d2a44' }
    ],
    rating: 4.9,
    reviewCount: 89,
    isBestSeller: true
  },
  {
    id: 'prod-5',
    name: 'Sobretudo Minimalista Lã e Cashmere Duplo Face',
    brandInspiration: 'Armani',
    inspirationNote: 'Elegância sóbria com corte alongado que define o refinamento clássico do cinema e alta costura.',
    category: 'outerwear',
    price: 6200,
    originalPrice: 7100,
    tag: 'Edição de Luxo',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Casaco sobretudo de abotoamento simples em mescla de lã virgem e cashmere mongol. Corte solto elegante com fenda traseira sob medida, lapelas notch finas e bolsos debruados à mão.',
    fabricDetails: '85% Lã Virgem Fina, 15% Cashmere selecionado. Costuras finalizadas artesanalmente.',
    origin: 'Como, Itália',
    sizes: ['48 (M)', '50 (G)', '52 (GG)', '54 (XG)'],
    colors: [
      { name: 'Camelo Nude Nobre', hex: '#b38d6d' },
      { name: 'Nero Supremo', hex: '#0f0f10' },
      { name: 'Grafite Escuro', hex: '#26282b' }
    ],
    rating: 5.0,
    reviewCount: 22,
    isNew: true
  },
  {
    id: 'prod-6',
    name: 'Camisa Sartoriale Popeline Italiana 120/2',
    brandInspiration: 'Armani',
    inspirationNote: 'A perfeição da camisa branca clássica com colarinho semi-italiano e corte sob medida.',
    category: 'tailoring',
    price: 980,
    tag: 'Essencial Diário',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Camisa social de caimento esguio confeccionada em tecido de fiação dupla 120/2. Tecelagem cerrada com acabamento sedoso que amassa menos e preserva o branco alvejado por anos.',
    fabricDetails: '100% Algodão Egípcio Giza 87 fiado pelo mestre tecelão Albini na Itália.',
    origin: 'Bérgamo, Itália',
    sizes: ['38 (P)', '40 (M)', '42 (G)', '44 (GG)', '46 (XG)'],
    colors: [
      { name: 'Branco Óptico Sartorial', hex: '#ffffff' },
      { name: 'Azul Celeste Capri', hex: '#d0e0ed' },
      { name: 'Listrado Fino Navy', hex: '#e8edf3' }
    ],
    rating: 4.9,
    reviewCount: 67
  },
  {
    id: 'prod-7',
    name: 'Sneaker Aerodinâmico Urban Tech em Couro Nappa',
    brandInspiration: 'Oakley',
    inspirationNote: 'Fusão de design biomecânico, sola tracionada com absorção de impacto e acabamento em couro de luxo.',
    category: 'footwear',
    price: 1990,
    originalPrice: 2250,
    tag: 'High-Tech Footwear',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Tênis futurista com cabedal em couro Nappa premium e inserções de malha respirável de alta tenacidade. Entressola responsiva em EVA moldado com estabilizador de calcanhar em TPU.',
    fabricDetails: 'Couro Bovino Nappa de toque macio, forro bactericida e solado de borracha vulcanizada.',
    origin: 'Civitanova Marche, Itália',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Triple Black Stealth', hex: '#131314' },
      { name: 'Preto & Branco Minimal', hex: '#262629' },
      { name: 'Cinza Titânio Fosco', hex: '#4e5157' }
    ],
    rating: 4.8,
    reviewCount: 53,
    isNew: true
  },
  {
    id: 'prod-8',
    name: 'Bolsa Carteiro Estruturada Couro Saffiano',
    brandInspiration: 'Prada',
    inspirationNote: 'O clássico couro texturizado Saffiano criado pela alta marroquinaria milanesa com linhas puras.',
    category: 'accessories',
    price: 3450,
    tag: 'Marroquinaria Nobre',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Pasta crossbody de luxo com relevo cruzado Saffiano de alta durabilidade e resistência a riscos. Ferragens em metal escovado fumê, alça ajustável em gorgurão de seda e compartimento acolchoado para notebook 14".',
    fabricDetails: '100% Couro de bezerro com estampa Saffiano. Forro em jacquard acetinado.',
    origin: 'Florença, Itália',
    sizes: ['Tamanho Único (38 x 28 x 8 cm)'],
    colors: [
      { name: 'Nero Black Matte', hex: '#111113' },
      { name: 'Tabaco Scuro', hex: '#3b281b' }
    ],
    rating: 5.0,
    reviewCount: 41
  },
  {
    id: 'prod-9',
    name: 'Jaqueta Harrington Sport Club em Gabardine Hidrorrepelente',
    brandInspiration: 'Lacoste',
    inspirationNote: 'O clássico blouson casual europeu que transitou das quadras de tênis para as ruas parisienses.',
    category: 'outerwear',
    price: 2190,
    tag: 'Clássico Parisiense',
    images: [
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Corte vintage regular com gola alta de dois botões e punhos canelados elásticos. Forro interno leve em micro-xadrez clássico, zíper frontal duplo e bolsos angulares com aba protetora.',
    fabricDetails: 'Gabardine de algodão penteado compacto com tratamento especial Teflon™ anti-manchas.',
    origin: 'Lyon, França',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Azul Marinho Marégraphe', hex: '#16233b' },
      { name: 'Bege Areia Normandia', hex: '#c8b69b' },
      { name: 'Verde Floresta Émeraude', hex: '#15291f' }
    ],
    rating: 4.7,
    reviewCount: 38
  },
  {
    id: 'prod-10',
    name: 'Cardigan de Malha Fina em Pura Lã Merino Extrafina',
    brandInspiration: 'Armani',
    inspirationNote: 'Suavidade inigualável e caimento rente ao corpo para sobreposições contemporâneas discretas.',
    category: 'polos',
    price: 1450,
    tag: 'Fibras Preciosas',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Cardigan com decote V clássico e botões em chifre fosco natural. Malha de toque aveludado e propriedades termorreguladoras naturais que mantêm a temperatura ideal em qualquer estação.',
    fabricDetails: '100% Pura Lã Merino Extrafina 19.5 mícrons fiada na fiação Zegna Baruffa.',
    origin: 'Biella, Itália',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Preto Grafite', hex: '#171719' },
      { name: 'Azul Meia-Noite', hex: '#1b253b' },
      { name: 'Cinza Mescla Mineral', hex: '#58595f' }
    ],
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'prod-11',
    name: 'Óculos de Sol Shield Vanguarda Futurista Aero',
    brandInspiration: 'Oakley',
    inspirationNote: 'Design monocromático de lente única curvada sem aro, unindo estilo rave-chic e performance.',
    category: 'eyewear',
    price: 1690,
    tag: 'Vanguarda Visual',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509695503495-7ddc40251781?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Lente contínua cilíndrica de alta curvatura que oferece campo de visão periférica expandido. Ponte nasal em borracha Unobtainium® que adere melhor à pele com o calor corporal.',
    fabricDetails: 'Lente Plutonite® com tratamento espelhado de irídio cinza e armação O-Matter™ ultraleve.',
    origin: 'Califórnia, EUA',
    sizes: ['Tamanho Único'],
    colors: [
      { name: 'Black Shadow Mirror', hex: '#161618' },
      { name: 'Chrome Prateado Hi-Def', hex: '#777c85' }
    ],
    rating: 4.8,
    reviewCount: 64,
    isNew: true
  },
  {
    id: 'prod-12',
    name: 'Calça Alfaiataria Tapered com Pregas Frontais',
    brandInspiration: 'Prada',
    inspirationNote: 'Corte afunilado impecável com prega dupla que homenageia a modernidade intelectual milanesa.',
    category: 'tailoring',
    price: 1890,
    originalPrice: 2150,
    tag: 'Modelagem Exclusiva',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Calça clássica de cintura média com ajustadores laterais metálicos sem necessidade de cinto. Bainha italiana dobrada de 4 cm e caimento tapered que valoriza qualquer sapato de luxo.',
    fabricDetails: 'Twill de lã tropical com elastano natural para liberdade de movimento.',
    origin: 'Vicenza, Itália',
    sizes: ['40', '42', '44', '46', '48'],
    colors: [
      { name: 'Preto Puro', hex: '#101012' },
      { name: 'Cinza Chumbo', hex: '#323438' },
      { name: 'Azul Noturno', hex: '#182030' }
    ],
    rating: 4.9,
    reviewCount: 42
  }
];

export const BRAND_PILLARS = [
  {
    id: 'armani',
    name: 'GIORGIO ARMANI',
    subtitle: 'A Pureza da Alfaiataria Milanesa',
    description: 'Desconstrução atemporal, caimento que flui com a anatomia e a paleta neutra que redefiniu o luxo moderno.',
    accent: 'Lã Virgem Super 160s & Cashmere',
    tag: 'Sartorial Elegance'
  },
  {
    id: 'prada',
    name: 'PRADA MILANO',
    subtitle: 'Vanguarda & Re-Nylon Técnico',
    description: 'Minimalismo conceitual, geometria arquitetônica e a fusão definitiva entre matérias-primas nobres e nylon industrial de alto padrão.',
    accent: 'Re-Nylon & Couro Saffiano',
    tag: 'Architectural Modernism'
  },
  {
    id: 'lacoste',
    name: 'LACOSTE HERITAGE',
    subtitle: 'A Aristocracia do Sport Chic Francês',
    description: 'A elegância nascida nas quadras de saibro de Roland Garros: algodão Petit Piqué puro e o equilíbrio perfeito entre o casual e a alta roda.',
    accent: 'Algodão Pima Peruano & Piqué',
    tag: 'Heritage Club Tennis'
  },
  {
    id: 'oakley',
    name: 'OAKLEY INNOVATION',
    subtitle: 'Precisão Balística & Titânio Óptico',
    description: 'A vanguarda dos materiais aeroespaciais, lentes polarizadas de alta definição e design aerodinâmico para o homem dinâmico contemporâneo.',
    accent: 'Titânio Aeroespacial & Lentes Prizm',
    tag: 'High-Tech Performance'
  }
];

export const EDITORIAL_STORIES = [
  {
    id: 'story-1',
    title: 'A Nova Alfaiataria: Fluidez sem Rigidez',
    subtitle: 'Como o corte italiano eliminou ombreiras pesadas para criar uma presença magnética e natural.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    featuredProduct: 'prod-1'
  },
  {
    id: 'story-2',
    title: 'Da Quadra ao Restaurante Michelin',
    subtitle: 'O Petit Piqué de algodão Pima que se tornou o uniforme do cavalheiro contemporâneo cosmopolita.',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1200&auto=format&fit=crop',
    featuredProduct: 'prod-2'
  },
  {
    id: 'story-3',
    title: 'Visão Sem Distorções: O Titânio em Foco',
    subtitle: 'Armações ergonômicas de 14 gramas que unem proteção ocular total a um perfil futurista refinado.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
    featuredProduct: 'prod-4'
  }
];
