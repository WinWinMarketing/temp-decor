export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  excerpt: string;
  coverImage: string;
  images: string[];
  featured: boolean;
  body: string;
}

const projectsData: Project[] = [
  {
    slug: 'grand-rosewood-reception',
    title: 'The Grand Rosewood Reception',
    category: 'Wedding',
    date: '2025-09-15',
    location: 'Rosewood Estate, Toronto',
    excerpt: 'A breathtaking gold and ivory reception featuring cascading floral installations, crystal chandeliers, and 200 guests immersed in timeless luxury.',
    coverImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=900&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
      'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=900&q=80',
    ],
    featured: true,
    body: `When Sophie and Marcus envisioned their dream reception, they wanted a space that felt like stepping into a European palace — grand yet intimate, opulent yet warm. The Rosewood Estate's vaulted ceilings and floor-to-ceiling windows provided the perfect canvas.\n\nWe designed a cohesive palette of ivory, champagne gold, and soft blush that carried through every touchpoint — from the silk table runners to the custom-monogrammed napkins. The centerpiece of the evening was a 12-foot cascading floral installation suspended above the head table, featuring over 2,000 white roses, peonies, and trailing orchids.\n\nCrystal chandeliers at varying heights created layers of warm, flickering light that danced across the gold-rimmed charger plates and vintage glassware. Each of the 20 guest tables featured a unique variation of our signature centerpiece — tall gold candelabras draped with fresh greenery and miniature roses.\n\nAs the evening transitioned to dancing, our team transformed the space with ambient uplighting in warm amber tones, creating an entirely new atmosphere that carried the celebration deep into the night.`,
  },
  {
    slug: 'enchanted-garden-ceremony',
    title: 'Enchanted Garden Ceremony',
    category: 'Wedding',
    date: '2025-06-20',
    location: 'Botanical Gardens, Markham',
    excerpt: 'An outdoor ceremony where nature and design converged — a living floral arch, candlelit pathways, and a sunset ceremony that took everyone\'s breath away.',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=900&q=80',
    ],
    featured: true,
    body: `Maya and Daniel wanted their wedding to feel like it emerged naturally from the gardens themselves. Rather than imposing a design onto the landscape, we worked with the existing botanical beauty — amplifying what nature had already provided.\n\nThe ceremony arch was a living structure, woven from willow branches and bursting with garden roses, jasmine, and trailing ivy. It framed the couple perfectly against the backdrop of the setting sun.\n\nAs twilight settled, hundreds of candles in glass hurricanes illuminated the pathways between the ceremony and reception spaces. The transition felt magical — guests wandered through candlelit garden paths, discovering small vignette arrangements at every turn.`,
  },
  {
    slug: 'modern-minimalist-home',
    title: 'Modern Minimalist Home',
    category: 'Home Decor',
    date: '2025-11-01',
    location: 'Yorkville, Toronto',
    excerpt: 'A complete living space transformation — clean lines, warm textures, and carefully curated pieces that turned a house into a sophisticated sanctuary.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    ],
    featured: false,
    body: `When the Chen family moved into their new Yorkville townhome, they wanted a space that reflected their love of clean, contemporary design without sacrificing warmth.\n\nWe began with a neutral foundation of warm whites, soft taupes, and natural wood tones. The living room features a custom-designed sectional in ivory bouclé fabric, anchored by a hand-knotted wool rug in muted earth tones.\n\nThroughout the home, we introduced organic textures — woven baskets, stone accessories, dried botanical arrangements — that add depth without clutter. The result is a home that feels simultaneously polished and deeply personal.`,
  },
  {
    slug: 'golden-anniversary-gala',
    title: 'Golden Anniversary Gala',
    category: 'Event',
    date: '2025-08-10',
    location: 'Liberty Grand, Toronto',
    excerpt: 'A 50th anniversary celebration dripping in gold, crystal, and candlelight — 150 guests, live jazz, and a design that honored five decades of love.',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=900&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
    ],
    featured: true,
    body: `Fifty years of marriage deserved nothing less than a celebration as extraordinary as the love it honored. The Martinelli family wanted a golden gala that felt like the finest evening their guests had ever experienced.\n\nWe transformed the Liberty Grand's Renaissance Hall into a symphony of gold. Over 500 taper candles created a sea of flickering light across the room.\n\nThe pièce de résistance was a retrospective gallery corridor — a 40-foot passage lined with framed photographs from each decade of the Martinellis' marriage, illuminated by museum-quality spotlights.`,
  },
  {
    slug: 'sapphire-cultural-celebration',
    title: 'Sapphire Cultural Celebration',
    category: 'Cultural',
    date: '2025-07-05',
    location: 'Woodbine Banquet Hall, Toronto',
    excerpt: 'A vibrant South Asian wedding blending rich cultural traditions with contemporary luxury — jewel tones, intricate mandap design, and mehndi artistry.',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=900&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
    ],
    featured: false,
    body: `Ananya and Vikram's wedding was a three-day celebration that honored their families' traditions while incorporating contemporary design elements.\n\nThe mandap was the centerpiece — a four-pillar structure draped in deep sapphire blue fabric with gold embroidered borders, topped with marigolds, red roses, and jasmine garlands.\n\nEach event had its own distinct palette. The mehndi night featured bohemian garden setup. The sangeet transformed into a Bollywood-inspired dance floor. The reception balanced rich jewel tones with elegant restraint.`,
  },
  {
    slug: 'coastal-chic-wedding',
    title: 'Coastal Chic Wedding',
    category: 'Wedding',
    date: '2025-05-18',
    location: 'Lakeside Pavilion, Muskoka',
    excerpt: 'A lakeside celebration where organic textures met refined elegance — driftwood accents, sea-glass palettes, and a ceremony framed by water and sky.',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=900&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=900&q=80',
    ],
    featured: false,
    body: `Jennifer and Thomas chose Muskoka's lakeside pavilion for its natural beauty. Our challenge was to enhance without competing with one of nature's most stunning backdrops.\n\nThe ceremony arch was a minimalist wooden structure — a clean, geometric frame that drew the eye to the lake beyond while providing just enough structure for trailing greenery and white peonies.\n\nAs the sun set, hundreds of string lights woven through the pavilion's wooden beams created a canopy of warm light above the celebrating guests.`,
  },
  {
    slug: 'luxe-penthouse-styling',
    title: 'Luxe Penthouse Styling',
    category: 'Home Decor',
    date: '2025-10-12',
    location: 'King West, Toronto',
    excerpt: 'A high-rise penthouse transformed into an art-forward living space — bold textures, curated collections, and design that commands attention.',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
    ],
    featured: false,
    body: `This King West penthouse had floor-to-ceiling windows and panoramic city views, but the interiors felt cold and disconnected.\n\nWe anchored each room with a statement art piece, then built the surrounding design language around it. The living room's oversized abstract canvas in deep navy and gold informed the entire apartment's palette.\n\nThe dining area was reimagined as both a functional space and a showcase — a marble-topped oval table surrounded by sculptural chairs, lit by a contemporary linear chandelier in brushed gold.`,
  },
  {
    slug: 'winter-wonderland-gala',
    title: 'Winter Wonderland Gala',
    category: 'Event',
    date: '2025-12-14',
    location: 'Fairmont Royal York, Toronto',
    excerpt: 'A corporate holiday gala that transported 300 guests into an enchanted winter forest — frosted branches, ice-blue lighting, and shimmering silver.',
    coverImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
      'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=900&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
    ],
    featured: false,
    body: `When one of Toronto's top financial firms commissioned their annual holiday gala, they wanted an experience that felt transformative.\n\nThe entrance featured a 15-foot tunnel of frosted birch branches with thousands of tiny LED lights. Inside, the palette was silver, ice blue, and pristine white.\n\nA dessert station disguised as an ice palace — complete with carved ice sculptures and mirrored surfaces — became the most photographed element of the evening.`,
  },
];

export function getAllProjects(): Project[] {
  return projectsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}

export function getCategories(): string[] {
  return [...new Set(projectsData.map((p) => p.category))];
}
