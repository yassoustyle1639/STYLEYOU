import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // COSMETICS
  {
    id: 'cosm-01',
    name: {
      ar: 'إكسير الذهب الملكي عيار 24 قيراط',
      en: '24K Royal Gold Infusion Elixir',
      fr: 'Élixir Infusion d’Or Royal 24K'
    },
    tagline: {
      ar: 'سيروم مجدد غني برقائق الذهب الخالص وحمض الهيالورونيك المركّز',
      en: 'Regenerating serum infused with pure 24K gold flakes & peptides',
      fr: 'Sérum régénérant aux paillettes d’or pur 24K et peptides'
    },
    category: 'cosmetics',
    subcategory: 'skincare',
    gender: 'unisex',
    price: 185,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1608248597359-25f0a0d45d8b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'bestseller',
    badgeText: {
      ar: 'الأكثر طلباً',
      en: 'Bestseller',
      fr: 'Best-Seller'
    },
    inStock: true,
    stockLeft: 8,
    sizes: ['30ml', '50ml (Grand Flacon)'],
    description: {
      ar: 'تركيبة ملكية استثنائية تحتوي على رقائق الذهب عيار 24 قيراط القابلة للذوبان فور ملامسة البشرة. تعزز إنتاج الكولاجين وتمنح الوجه إشراقة ذهبية فورية ونعومة فائقة كالحرير.',
      en: 'An exceptional royal formulation featuring micronized 24-karat gold leaf that instantly melts into the skin, boosting collagen production and leaving an incandescent golden glow.',
      fr: 'Une formulation royale d’exception infusée de feuilles d’or 24 carats qui fondent au contact de la peau pour un éclat somptueux et une régénération intense.'
    },
    details: {
      ar: [
        'ذهب خالص عيار 24 قيراط بنسبة نقاء 99.9%',
        'حمض الهيالورونيك الثلاثي لترطيب عميق يدوم 72 ساعة',
        'مضادات أكسدة نباتية نادرة تحمي من علامات التقدم في السن',
        'ملمس حريري غير دهني سريع الامتصاص'
      ],
      en: [
        '99.9% Pure 24K micronized gold flakes',
        'Triple molecular weight hyaluronic acid for 72h hydration',
        'Rare botanical antioxidants for age-defying radiance',
        'Velvet non-greasy absorption'
      ],
      fr: [
        'Paillettes d’or 24 carats pures à 99,9%',
        'Acide hyaluronique triple action hydratation 72h',
        'Antioxydants botaniques rares anti-âge',
        'Texture veloutée sans fini gras'
      ]
    },
    ingredients: {
      ar: 'ماء الورد الدمشقي العضوي، جزيئات الذهب 24K، ببتيدات الكولاجين، زيت الأرجان المغربي النقي، نياسيناميد، فيتامين E وفيتامين C المنشط.',
      en: 'Organic Damask Rose Water, 24K Gold Particles, Collagen Peptides, Pure Moroccan Argan Oil, Niacinamide, Stabilized Vitamin E & C.'
    }
  },
  {
    id: 'cosm-02',
    name: {
      ar: 'أحمر شفاه مخملي نوار آند دور',
      en: 'Velvet Noir & Gold Matte Lipstick',
      fr: 'Rouge à Lèvres Velours Noir & Or'
    },
    tagline: {
      ar: 'لون غني وثبات أسطوري في علبة مغناطيسية مطلية بالذهب',
      en: 'Ultra-pigmented velvet formula in a heavy magnetic gilded casing',
      fr: 'Formule mate ultra-pigmentée sous boîtier magnétique doré'
    },
    category: 'cosmetics',
    subcategory: 'makeup',
    gender: 'women',
    price: 68,
    originalPrice: 85,
    rating: 4.8,
    reviewsCount: 96,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'new',
    badgeText: {
      ar: 'جديد الدار',
      en: 'New Arrival',
      fr: 'Nouveauté'
    },
    inStock: true,
    stockLeft: 14,
    shades: [
      { name: 'Rouge Imperial #01', nameAr: 'أحمر إمبراطوري #01', hex: '#8B0000' },
      { name: 'Velvet Noir Plum #05', nameAr: 'برقوقي داكن مخملي #05', hex: '#4A0E17' },
      { name: 'Golden Nude Seduction #08', nameAr: 'نيود ذهبي ساحر #08', hex: '#B87333' },
      { name: 'Classic Scarlet Gold #12', nameAr: 'قرمزي كلاسيكي متألق #12', hex: '#9E1B32' }
    ],
    description: {
      ar: 'أحمر شفاه بلمسة نهائية مخملية مطفية تدوم حتى 16 ساعة دون جفاف. يأتي داخل علبة معدنية ثقيلة ذات إغلاق مغناطيسي مطلية بالذهب الأصيل عيار 18 قيراط.',
      en: 'Delivers high-impact pigment with an ultra-comfortable 16-hour velvet matte finish. Housed in a bespoke weighted magnetic casing dipped in 18K gold.',
      fr: 'Offre une couleur vibrante et une tenue velours 16h d’un confort suprême. Présenté dans un écrin lourd or 18 carats à fermeture magnétique.'
    },
    details: {
      ar: [
        'ثبات حتى 16 ساعة مقاوم للتلطخ',
        'مستخلص زيت الجوجوبا وزبدة المانجو للترطيب الفائق',
        'علبة فاخرة مدمجة بمرآة نقية وإغلاق مغناطيسي ميكانيكي',
        'خالٍ من البارابين والمعادن الثقيلة'
      ],
      en: [
        '16-hour smudge-proof longevity',
        'Enriched with Jojoba and Wild Mango butter',
        'Magnetic closure weighted gilded casing',
        'Paraben-free and dermatologist tested'
      ],
      fr: [
        'Tenue 16h sans transfert',
        'Enrichi au beurre de mangue et huile de jojoba',
        'Écrin d’or magnétique et gravure sur mesure',
        'Sans parabènes'
      ]
    }
  },
  {
    id: 'cosm-03',
    name: {
      ar: 'لوحة إضاءة ألماسية ببريق الذهب النقي',
      en: 'Golden Obsidian Luminizer Palette',
      fr: 'Palette Enlumineur Or & Obsidienne'
    },
    tagline: {
      ar: 'تدرجات الذهب الشمبانيا، والبرونز الملوكي مع لمسة ألماسية مشعة',
      en: 'Four baked incandescent shades of champagne gold and warm bronze',
      fr: 'Quatre nuances d’or champagne et bronze royal cuites au four'
    },
    category: 'cosmetics',
    subcategory: 'makeup',
    gender: 'women',
    price: 92,
    rating: 4.9,
    reviewsCount: 78,
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'exclusive',
    badgeText: {
      ar: 'إصدار حصري',
      en: 'Exclusive',
      fr: 'Édition Limitée'
    },
    inStock: true,
    stockLeft: 6,
    description: {
      ar: 'لوحة هايلايتر رباعية فريدة تعكس الضوء بتناغم مذهل بفضل الجزيئات اللؤلؤية الدقيقة الممزوجة بمسحوق الذهب. تناسب جميع درجات البشرة وتمنح إشراقة هوليودية راقية.',
      en: 'A quartet of micro-milled highlighting powders infused with crushed golden mica. Delivers seamless glass-skin luminosity from soft candlelit radiance to dramatic strobe.',
      fr: 'Un quatuor de poudres illuminatrices infusées de mica doré broyé. Sculpte les volumes du visage d’un voile de lumière captivant.'
    },
    details: {
      ar: [
        '4 درجات فخمة: شمبانيا ملكية، ذهب دافئ، برونز شمسي، لؤلؤ روز غولد',
        'تركيبة ناعمة كالحرير تندمج بسلاسة مع كريم الأساس',
        'مقاومة للتعرق وتدوم طوال اليوم والحفلات الليلية'
      ],
      en: [
        '4 shades: Royal Champagne, Warm Gold, Sunlit Bronze, Rose Gold Pearl',
        'Micro-milled silky powder that never accentuates texture',
        'All-day sweat and humidity resistance'
      ],
      fr: [
        '4 teintes : Champagne Royal, Or Chaud, Bronze Solaire, Or Rose',
        'Poudre micro-aérienne au fini soyeux sans effet de matière',
        'Tenue irréprochable toute la soirée'
      ]
    }
  },

  // CLOTHING
  {
    id: 'cloth-01',
    name: {
      ar: 'فستان السهرة المخملي الأسود بتطريز الذهب',
      en: 'Obsidian Velvet Gala Gown with Gilded Brocade',
      fr: 'Robe de Soirée Velours Noir Broderies d’Or'
    },
    tagline: {
      ar: 'تصميم هوت كوتور ملكي منسوج بخيوط الذهب الإيطالية وقصة انسيابية',
      en: 'Haute couture midnight velvet silhouette woven with Italian gold threads',
      fr: 'Silhouette haute couture en velours nuit et broderies de fils d’or'
    },
    category: 'clothing',
    subcategory: 'dresses',
    gender: 'women',
    price: 640,
    originalPrice: 780,
    rating: 5.0,
    reviewsCount: 45,
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'exclusive',
    badgeText: {
      ar: 'قطعة ملكية',
      en: 'Signature Piece',
      fr: 'Pièce Maîtresse'
    },
    inStock: true,
    stockLeft: 4,
    sizes: ['36 (S)', '38 (M)', '40 (L)', '42 (XL)'],
    description: {
      ar: 'تحفة فنية من المخمل الأسود الملكي العميق، مطرزة يدوياً على الأكتاف وحول الخصر بزخارف أندلسية وذهبية دقيقة تعكس الضوء مع كل حركة. قصة تبرز القوام بأناقة متفردة.',
      en: 'A breathtaking masterwork in dense silk velvet, hand-embroidered across the décolletage and cuffs with intricate metallic gold motifs. Tailored to sculpt a commanding, statuesque silhouette.',
      fr: 'Une œuvre d’art en velours de soie noir profond, ornée de broderies dorées faites main. Coupe sculpturale dessinant une allure souveraine.'
    },
    details: {
      ar: [
        'مخمل حريري فرنسي فاخر بوزن 450 جرام',
        'تطريز يدوي بخيوط معدنية ذهبية مقاومة للتغير',
        'بطانة داخلية من حرير الساتان الإيطالي بنسبة 100%',
        'سحاب مخفي في الظهر مع أزرار ذهبية مشغولة يدوياً'
      ],
      en: [
        'Heavyweight French silk-blend velvet',
        'Hand-guided metallic bullion gold embroidery',
        '100% Italian silk crepe lining for sublime drape',
        'Concealed back zip with artisanal gilded filigree buttons'
      ],
      fr: [
        'Velours de soie français au tombé majestueux',
        'Broderies métallisées dorées cousues main',
        'Doublure 100% soie italienne',
        'Fermeture invisible et boutons travaillés à l’or'
      ]
    }
  },
  {
    id: 'cloth-02',
    name: {
      ar: 'بدلة تاكسيدو نوار آند دور الرسمية',
      en: 'Noir & D’Or Satin Lapel Peak Tuxedo',
      fr: 'Smoking Noir Impérial Col Châle en Soie Dorée'
    },
    tagline: {
      ar: 'سترة وبنطال بقصة إيطالية دقيقة وأزرار مطلية بالذهب الخالص',
      en: 'Sartorial Italian tailoring in super 150s wool with metallic accents',
      fr: 'Tailleur sur mesure en laine vierge 150s et finitions satinées'
    },
    category: 'clothing',
    subcategory: 'suits',
    gender: 'men',
    price: 790,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'bestseller',
    badgeText: {
      ar: 'الأكثر مبيعاً للرجال',
      en: 'Men’s Bestseller',
      fr: 'Succès Homme'
    },
    inStock: true,
    stockLeft: 5,
    sizes: ['48 (IT)', '50 (IT)', '52 (IT)', '54 (IT)', '56 (IT)'],
    description: {
      ar: 'بدلة توكسيدو فخمة مصممة لأصحاب الذوق الرفيع والمناسبات الكبرى. مصنوعة من صوف المارينو الأسترالي فائق النعومة مع ياقة شال من الحرير الأسود وأزرار مخصصة بختم الدار الذهبي.',
      en: 'A pristine formal smoking jacket and trousers handcrafted in Biella, Italy. Crafted from ultra-fine Super 150s virgin wool with lustrous satin silk lapels and 24K gold-plated crested buttons.',
      fr: 'Le smoking d’apparat par excellence confectionné en Italie en pure laine Super 150s. Col en satin de soie noir intense et boutons armoriés dorés à l’or fin.'
    },
    details: {
      ar: [
        'صوف مارينو نقي 100% سوبر 150s فائق النعومة',
        'بطانة داخلية من قماش الجاكار بنقشة الشعار الذهبي',
        'قصة كلاسيكية عصرية مهندمة تمنح راحة تامة وحضوراً قوياً',
        'أزرار نحاسية مطلية بالذهب عيار 24 قيراط'
      ],
      en: [
        '100% Super 150s Merino wool',
        'Bespoke gold jacquard monogram lining',
        'Modern tailored fit with structured shoulders',
        'Electroplated 24K gold crest buttons'
      ],
      fr: [
        'Laine vierge mérinos 100% Super 150s',
        'Doublure jacquard monogrammée or',
        'Coupe cintrée moderne et structurée',
        'Boutons dorés à l’or fin estampillés'
      ]
    }
  },
  {
    id: 'cloth-03',
    name: {
      ar: 'كيمونو حريري أسود بحزام ذهبي مطرز',
      en: 'Midnight Silk Kimono Robe with Gold Sash',
      fr: 'Kimono en Soie Nuit & Ceinture Brodée d’Or'
    },
    tagline: {
      ar: 'حرير التوت الطبيعي بنسبة 100% ولمعان حريري يأسر القلوب',
      en: '100% pure Mulberry silk with flowing sleeves and hand-woven gold belt',
      fr: '100% pure soie de mûrier aux manches évasées et ceinture or'
    },
    category: 'clothing',
    subcategory: 'loungewear',
    gender: 'women',
    price: 320,
    rating: 4.9,
    reviewsCount: 62,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'new',
    badgeText: {
      ar: 'تصميم جديد',
      en: 'New',
      fr: 'Nouveau'
    },
    inStock: true,
    stockLeft: 9,
    sizes: ['S/M (Loose Fit)', 'L/XL (Loose Fit)'],
    description: {
      ar: 'قطعة تجمع بين راحة الحرير الطبيعي النقي وفخامة الإطلالة المسائية. ينسدل بانسيابية مذهلة على الجسم ومزود بحزام عريض منسوج بخيوط ذهبية يمكن ارتداؤه في المنزل أو فوق فستان سهرة كاجوال.',
      en: 'Fluid, decadent, and effortlessly chic. Spun from 22-momme pure Mulberry silk, paired with a wide waist-cinching belt hand-woven with metallic golden cord.',
      fr: 'Une pièce d’une sensualité absolue en soie de mûrier 22 mommes. Accompagnée d’une large ceinture ornée de passementerie dorée.'
    },
    details: {
      ar: [
        'حرير توت خام نقي 100% بوزن 22 مومي',
        'حزام خصر عريض مزدوج مع شرابات ذهبية أنيقة',
        'أكمام يابانية واسعة مريحة وراقية',
        'حواف مخيطة يدوياً بدقة متناهية'
      ],
      en: [
        '100% Pure grade 6A 22-momme Mulberry silk',
        'Wide obi-style sash with hand-knotted golden tassels',
        'Draped bell sleeves',
        'Hand-rolled luxury hemstitch'
      ],
      fr: [
        '100% soie de mûrier pure qualité 6A 22 mommes',
        'Ceinture obi à pompons dorés tressés',
        'Manches kimono amples et vaporeuses',
        'Ourlet roulotté à la main'
      ]
    }
  },
  {
    id: 'cloth-04',
    name: {
      ar: 'معطف كشمير أسود بأزرار نوار دور الملكية',
      en: 'Grand Noir Cashmere Overcoat',
      fr: 'Manteau d’Apparat en Cachemire Noir & Or'
    },
    tagline: {
      ar: 'كشمير منغولي مزدوج الوجه مع ياقة فاخرة وقصة عصرية حادة',
      en: 'Double-faced pure Mongolian cashmere with polished gold hardware',
      fr: 'Pur cachemire mongol double face et bouclerie or poli'
    },
    category: 'clothing',
    subcategory: 'coats',
    gender: 'unisex',
    price: 890,
    originalPrice: 1100,
    rating: 5.0,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'limited',
    badgeText: {
      ar: 'كمية محدودة',
      en: 'Limited Edition',
      fr: 'Édition Rare'
    },
    inStock: true,
    stockLeft: 3,
    sizes: ['40 (S)', '42 (M)', '44 (L)', '46 (XL)'],
    description: {
      ar: 'معطف شتوي فاخر للغاية مصنوع من أنقى ألياف الكشمير المنغولي التي توفر دفئاً استثنائياً وخفة وزن متناهية. مزدان بأزرار معدنية ثقيلة منقوشة بالذهب الأصفر.',
      en: 'The definitive outerwear investment. Milled from double-faced pure cashmere from the inner plateaus of Mongolia, accented by bespoke gold medallion buttons.',
      fr: 'Le summum de l’élégance hivernale. Confectionné en pur cachemire double face de Mongolie, rehaussé de boutons médaillons dorés.'
    },
    details: {
      ar: [
        '100% كشمير نقي مزدوج الصياغة',
        'مقاوم للرياح والبرودة مع ملمس فائق النعومة',
        'جيوب عميقة مبطنة بالحرير وقصة انسيابية طويلة',
        'صناعة حرفية في إيطاليا'
      ],
      en: [
        '100% Grade-A Mongolian Cashmere',
        'Double-faced construction for featherlight warmth',
        'Silk-lined welt pockets and peaked lapels',
        'Sartorially crafted in Northern Italy'
      ],
      fr: [
        '100% Pur cachemire de Mongolie',
        'Fabrication double face sans couture apparente',
        'Poches gansées de soie et col tailleur structuré',
        'Confection artisanale en Italie'
      ]
    }
  },

  // FRAGRANCES
  {
    id: 'frag-01',
    name: {
      ar: 'عطر العود الملكي الأسود المستخلص',
      en: 'Oud Royal Noir Extrait de Parfum',
      fr: 'Extrait de Parfum Oud Royal Noir'
    },
    tagline: {
      ar: 'عبير العود الكمبودي المعتق 30 عاماً الممزوج بالعنبر والذهب السائل',
      en: 'A 35% concentration blend of 30-year aged Cambodian agarwood and golden amber',
      fr: 'Concentration extrait 35% d’oud cambodgien âgé de 30 ans et ambre d’or'
    },
    category: 'fragrance',
    subcategory: 'perfume',
    gender: 'unisex',
    price: 295,
    originalPrice: 350,
    rating: 5.0,
    reviewsCount: 184,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'bestseller',
    badgeText: {
      ar: 'عطر الدار الأيقوني',
      en: 'Iconic Scent',
      fr: 'Fragrance Culte'
    },
    inStock: true,
    stockLeft: 7,
    sizes: ['50ml Extrait', '100ml Extrait Prestige'],
    description: {
      ar: 'عطر يجسد الهيبة المطلقة والفخامة العربية المعاصرة. يفتتح بنفحات البخور الملكي والزعفران الإيراني، ثم يتكشف عن قلب عميق من الورد الجوري والعود الكمبودي النادر، ليستقر على قاعدة دافئة من العنبر الأسود والمسك وحبيبات التونكا.',
      en: 'The crown jewel of our olfactory atelier. Opening with saffron and rare royal incense, the heart reveals aged agarwood and Damascus rose, culminating in a velvety trail of black amber and golden musk.',
      fr: 'Le joyau absolu de notre parfumerie. S’ouvre sur le safran et l’encens précieux, avant de révéler un cœur d’oud séculaire et de rose de Damas, sur un sillage persistant d’ambre noir.'
    },
    details: {
      ar: [
        'تركيز فائق (Extrait de Parfum) بنسبة 35% لثبات يتجاوز 48 ساعة',
        'زجاجة كريستال سوداء ثقيلة مطلية بالذهب الحقيقي عيار 24 قيراط',
        'صندوق هدايا جلدي أسود مبطن بالمخمل مع شهادة أصالة مرقمة',
        'فوحان مغناطيسي لا ينسى'
      ],
      en: [
        '35% pure extrait concentration with 48h+ lasting trail',
        'Heavy obsidian crystal bottle dipped in genuine 24K liquid gold',
        'Presented in a bespoke velvet-lined leather coffret with numbered certificate',
        'Unforgettable magnetic projection'
      ],
      fr: [
        'Concentration Extrait de Parfum à 35%, sillage exceptionnel 48h',
        'Flacon en cristal d’obsidienne orné d’or 24 carats véritable',
        'Coffret cuir noir velouté avec certificat d’authenticité numéroté',
        'Projection magnétique inoubliable'
      ]
    },
    fragranceNotes: {
      top: {
        ar: 'الزعفران النقي، البخور العماني الملكي، الهيل الغواتيمالي',
        en: 'Persian Saffron, Royal Omani Incense, Green Cardamom'
      },
      heart: {
        ar: 'العود الكمبودي المعتق، الورد الجوري، زهرة السوسن النبيلة',
        en: 'Aged Cambodian Agarwood, Bulgarian Rose Absolute, Noble Orris'
      },
      base: {
        ar: 'العنبر الأسود الكهرماني، خشب الصندل، المسك الأبيض، التونكا الذهبية',
        en: 'Obsidian Amber, Mysore Sandalwood, Golden Tonka, Pure Musk'
      }
    }
  },
  {
    id: 'frag-02',
    name: {
      ar: 'عطر عنبر الذهب الإمبراطوري',
      en: 'Imperial Amber & Gold Elixir',
      fr: 'Ambre d’Or Impérial Eau de Parfum'
    },
    tagline: {
      ar: 'سيمفونية دافئة من العنبر المحلى بالعسل الأسود وأخشاب الأرز الأطلسي',
      en: 'A warm golden veil of honeyed amber, Madagascar vanilla, and Atlas cedar',
      fr: 'Un voile solaire d’ambre miellé, vanille de Madagascar et cèdre'
    },
    category: 'fragrance',
    subcategory: 'perfume',
    gender: 'unisex',
    price: 245,
    rating: 4.8,
    reviewsCount: 112,
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'new',
    badgeText: {
      ar: 'عطر الموسم',
      en: 'Season Pick',
      fr: 'Coup de Cœur'
    },
    inStock: true,
    stockLeft: 11,
    sizes: ['100ml Eau de Parfum'],
    description: {
      ar: 'عطر دافئ حنون يفيض بالجاذبية والرقي. يمزج حلاوة العسل الملكي والعنبر الذهبي مع خشب الأرز والباتشولي الإندونيسي، ليمنحك هالة دافئة ومترفة تلفت الأنظار أينما حللت.',
      en: 'A sublime golden nectar wrapped in warm resins and spices. Crafted with rare amber extracts, dark honey, and bourbon vanilla over smoke-kissed cedarwood.',
      fr: 'Un nectar solaire enivrant où l’ambre précieux rencontre la douceur du miel sombre et la rondeur de la vanille Bourbon sur fond de cèdre fumé.'
    },
    details: {
      ar: [
        'تركيز Eau de Parfum Intense بنسبة 25%',
        'ثبات يدوم أكثر من 24 ساعة على الملابس',
        'مكونات طبيعية نقية خالية من الملونات الصناعية',
        'بخاخ رذاذ دقيق فائق النعومة'
      ],
      en: [
        '25% Eau de Parfum Intense concentration',
        '24+ hour performance on skin and cashmere garments',
        '100% artisanal, cruelty-free botanical essences',
        'Micro-mist aerosol atomizer for even dispersion'
      ],
      fr: [
        'Eau de Parfum Intense concentrée à 25%',
        'Tenue supérieure à 24h sur peau et textiles',
        'Essences naturelles sans colorants artificiels',
        'Diffuseur brume fine ultra-délicate'
      ]
    },
    fragranceNotes: {
      top: {
        ar: 'البرغموت الإيطالي، اليوسفي الذهبي، رشة القرفة السيلانية',
        en: 'Calabrian Bergamot, Golden Mandarin, Ceylon Cinnamon'
      },
      heart: {
        ar: 'العنبر الصمغي، عسل الغابات السوداء، زهر البرتقال',
        en: 'Solar Amber Resin, Wild Forest Honey, Neroli Petals'
      },
      base: {
        ar: 'فانيليا البوربون، خشب الأرز الأطلسي، الباتشولي الداكن',
        en: 'Bourbon Vanilla, Atlas Cedar, Indonesian Patchouli'
      }
    }
  },

  // ACCESSORIES
  {
    id: 'acc-01',
    name: {
      ar: 'ساعة كرونوغراف نوار إي دور الأوتوماتيكية',
      en: 'The Nocturne Gilded Chronometer',
      fr: 'Montre Chronomètre Nocturne Or & Noir'
    },
    tagline: {
      ar: 'هندسة سويسرية دقيقة بعلبة من التيتانيوم الأسود وإطار من الذهب الأصفر',
      en: 'Swiss automatic calibre in matte black titanium with 18K solid gold bezel',
      fr: 'Calibre automatique suisse en titane noir et lunette or 18 carats'
    },
    category: 'accessories',
    subcategory: 'watches',
    gender: 'unisex',
    price: 1250,
    originalPrice: 1490,
    rating: 5.0,
    reviewsCount: 31,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'limited',
    badgeText: {
      ar: 'إصدار أوتوماتيكي فاخر',
      en: 'Master Timepiece',
      fr: 'Haute Horlogerie'
    },
    inStock: true,
    stockLeft: 2,
    sizes: ['41mm Case Diameter'],
    description: {
      ar: 'ساعة يد أوتوماتيكية تجمع بين صلابة التيتانيوم الأسود المصقول وفخامة الذهب عيار 18 قيراط. مزودة بحركة ميكانيكية سويسرية ذاتية التعبئة باحتياطي طاقة 48 ساعة وزجاج ياقوتي مضاد للخدش.',
      en: 'The ultimate expression of horological excellence. Powered by a self-winding Swiss mechanical movement visible through the sapphire exhibition caseback, framed by an 18K solid yellow gold fluted bezel.',
      fr: 'L’expression ultime de la précision horlogère. Équipée d’un mouvement automatique suisse manufacturé, boîtier titane DLC noir et lunette cannelée en or jaune 18 carats.'
    },
    details: {
      ar: [
        'حركة أوتوماتيكية سويسرية باحتياطي طاقة 48 ساعة',
        'زجاج سافاير ياقوتي مقاوم للخدوش مع طلاء مضاد للانعكاس',
        'حزام من جلد التمساح الأسود الطبيعي بمشبك ذهبي ميكانيكي',
        'مقاومة للماء حتى عمق 100 متر (10 ATM)'
      ],
      en: [
        'Swiss automatic movement with 48h power reserve',
        'Scratch-proof sapphire crystal with dual anti-reflective coating',
        'Genuine black alligator leather strap with 18K deployment buckle',
        'Water-resistant to 100 meters (10 ATM)'
      ],
      fr: [
        'Mouvement mécanique automatique suisse, réserve de marche 48h',
        'Verre saphir inrayable avec traitement antireflet double face',
        'Bracelet cuir d’alligator véritable avec boucle déployante dorée',
        'Étanche à 100 mètres (10 ATM)'
      ]
    }
  },
  {
    id: 'acc-02',
    name: {
      ar: 'حقيبة يد جلدية مبطنة بسلسلة ذهبية عيار 24K',
      en: 'Imperial Quilted Leather Flap Bag',
      fr: 'Sac Rabats Cuir Matelassé & Chaîne d’Or'
    },
    tagline: {
      ar: 'جلد عجل إيطالي معتق مع قفل الدار الأيقوني وشريط كتف ذهبي مزدوج',
      en: 'Supple Italian calfskin quilted in diamond chevron with heavy 24K gilded chain',
      fr: 'Cuir de veau italien matelassé chevron et chaîne dorée 24K'
    },
    category: 'accessories',
    subcategory: 'bags',
    gender: 'women',
    price: 520,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'bestseller',
    badgeText: {
      ar: 'الأكثر أناقة',
      en: 'Top Elegance',
      fr: 'Top Élégance'
    },
    inStock: true,
    stockLeft: 6,
    sizes: ['Medium (25cm x 15cm x 7cm)'],
    description: {
      ar: 'حقيبة سهرة وأناقة يومية خالدة لا تبلى بمرور الزمن. صنعت يدوياً في فلورنسا من أجود أنواع جلد العجل المبطن بنمط ماسي هندسي، وتكتمل بقفل دوار مطلي بالذهب وسلسلة كتف متعددة الوضعيات.',
      en: 'Handcrafted in Florence using full-grain Italian calfskin leather. Features our signature rotating turnlock clasp plated in heavy 24K gold and an adjustable woven chain strap for shoulder or crossbody styling.',
      fr: 'Façonné à la main à Florence en cuir de veau pleine fleur matelassé. Fermoir tourniquet signature plaqué or 24 carats et bandoulière chaîne ajustable.'
    },
    details: {
      ar: [
        'جلد عجل إيطالي طبيعي 100% مقاوم للخدش',
        'سلسلة كتف نحاسية مطلية بالذهب عيار 24 قيراط',
        'بطانة داخلية من قماش الكانتارا الفاخر مع جيوب منظمة',
        'صندوق حفظ جلدي أسود وشهادة كود NFC للتحقق من الأصالة'
      ],
      en: [
        '100% Full-grain Italian calf leather with scratch-resistant finish',
        'Heavy solid brass chain dipped in 24K gold',
        'Supple Alcantara interior with zippered security compartment',
        'Includes dust bag, hard black box & NFC authenticity tag'
      ],
      fr: [
        '100% Cuir de veau pleine fleur grainé anti-rayures',
        'Chaîne massive en laiton doré à l’or 24 carats',
        'Intérieur en Alcantara doux avec poche zippée',
        'Livrable avec boîte rigide et puce NFC d’authentification'
      ]
    }
  },
  {
    id: 'acc-03',
    name: {
      ar: 'سوار الذهب الإمبراطوري المفتوح بنقش الكوبرا',
      en: 'Aura Gilded Serpent Cuff Bracelet',
      fr: 'Manchette Serpent Royale Plaqué Or 18K'
    },
    tagline: {
      ar: 'نحاس مصبوب مطلي بالذهب عيار 18 قيراط مرصع بأحجار الزركون السوداء',
      en: 'Sculptural brass cuff electroplated in 18K gold and set with obsidian zirconias',
      fr: 'Manchette sculptée plaquée or 18 carats et oxydes de zirconium noirs'
    },
    category: 'accessories',
    subcategory: 'jewelry',
    gender: 'women',
    price: 160,
    rating: 4.8,
    reviewsCount: 53,
    images: [
      'https://images.unsplash.com/photo-1611591475155-42864299b828?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    badge: 'new',
    badgeText: {
      ar: 'جديد الإكسسوارات',
      en: 'New Jewelry',
      fr: 'Nouveau Bijou'
    },
    inStock: true,
    stockLeft: 12,
    sizes: ['Adjustable Fit (مرن يناسب مختلف المعاصم)'],
    description: {
      ar: 'سوار معصم ملكي بتصميم نحتي مستوحى من الحلي الفرعونية والرومانية القديمة. مطلي بطبقة سميكة من الذهب عيار 18 قيراط مع ترصيع دقيق بأحجار كريستالية سوداء براقة تضفي هيبة طاغية على الإطلالة.',
      en: 'A statement cuff born of ancient royalty and modern poise. Heavily electroplated in lustrous 18K yellow gold, finished with hand-set pavé black obsidian crystals at the terminals.',
      fr: 'Une manchette spectaculaire inspirée de l’antiquité royale. Plaqué or 18 carats généreux et orné de cristaux d’obsidienne sertis grain.'
    },
    details: {
      ar: [
        'طلاء ذهب عيار 18 قيراط بسماكة 5 ميكرون يدوم طويلاً',
        'مقاوم للماء والعطور ولا يسبب حساسية الجلد (Hypoallergenic)',
        'تصميم مفتوح قابل للتعديل ليناسب مختلف مقاسات المعصم',
        'مرفق بجراب مخملي أسود وبطاقة ضمان الدار'
      ],
      en: [
        '5-micron 18K gold electroplate for exceptional durability',
        'Nickel-free, lead-free and hypoallergenic',
        'Open-ended flexible ergonomic fit',
        'Comes in black velvet pouch with authenticity certificate'
      ],
      fr: [
        'Placage or 18 carats 5 microns haute résistance',
        'Hypoallergénique, garanti sans nickel',
        'Taille ajustable avec mémoire de forme',
        'Livré dans sa pochette en velours noir'
      ]
    }
  }
];
