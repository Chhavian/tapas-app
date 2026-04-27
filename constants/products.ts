export type Product = {
  slug: string;
  name: string;
  gender: string;
  tagline: string;
  description: string;
  colour: string;
  colourName: string;
  image: any;
  colourways: { name: string; hex: string; light?: boolean }[];
  specs: { label: string; body: string }[];
  similar: string[];
  phase: number;
};

export const products: Product[] = [
  {
    slug: 'pant',
    name: 'The Tāpas Pant',
    gender: 'Her',
    tagline: 'Built for the work.',
    description: 'High-waist, wide-leg, completely unforgiving in the best way. No side pockets, no excess — one back pocket and a waistband that holds without asking you to think about it. The pant that started this.',
    colour: '#3D4F3C',
    colourName: 'Deep Olive',
    image: null,
    colourways: [
      { name: 'Deep Olive', hex: '#3D4F3C' },
      { name: 'Obsidian', hex: '#141414' },
      { name: 'Raw Cotton', hex: '#F2EDE4', light: true },
    ],
    specs: [
      { label: 'Fabric & Composition', body: '80% Nylon / 20% Spandex. Four-way stretch. Anti-odour treatment.' },
      { label: 'Key Features', body: 'High-waist silhouette. Plain flat waistband. One back pocket. No side pockets. Flatlock seams.' },
      { label: 'Care Instructions', body: 'Cold wash only. No tumble dry. No fabric softener. Hang to dry.' },
      { label: 'Sustainability', body: 'Manufactured with intention. No overclaims — honest materials, honest process.' },
    ],
    similar: ['bra', 'vest', 'tee'],
    phase: 1,
  },
  {
    slug: 'bra',
    name: 'The Tāpas Bra',
    gender: 'Her',
    tagline: 'High support, no compromise.',
    description: 'Adjustable, removable, clean at the back. Worn alone or under everything. The kind of bra you forget you\'re wearing until you remember it\'s doing everything.',
    colour: '#1F4FD8',
    colourName: 'Cobalt',
    image: null,
    colourways: [
      { name: 'Cobalt', hex: '#1F4FD8' },
      { name: 'Obsidian', hex: '#141414' },
      { name: 'Crimson', hex: '#7A0C0C' },
    ],
    specs: [
      { label: 'Fabric & Composition', body: '78% Nylon / 22% Spandex. Four-way stretch. Moisture-wicking.' },
      { label: 'Key Features', body: 'High support. Adjustable straps. Removable padding. Clean finish at back.' },
      { label: 'Care Instructions', body: 'Cold wash only. No tumble dry. No fabric softener. Hang to dry.' },
      { label: 'Sustainability', body: 'Manufactured with intention. No overclaims — honest materials, honest process.' },
    ],
    similar: ['pant', 'vest', 'tee'],
    phase: 1,
  },
  {
    slug: 'tee',
    name: 'The Tāpas Tee',
    gender: 'Her & Him',
    tagline: 'Not a fashion tee. Not a gym tee.',
    description: 'Relaxed without being shapeless. Anti-odour, four-way stretch, structured enough to wear anywhere. The one you reach for every time because it never gets in the way.',
    colour: '#141414',
    colourName: 'Obsidian',
    image: null,
    colourways: [
      { name: 'Obsidian', hex: '#141414' },
      { name: 'Raw Cotton', hex: '#F2EDE4', light: true },
      { name: 'Deep Olive', hex: '#3D4F3C' },
    ],
    specs: [
      { label: 'Fabric & Composition', body: '60% Organic Cotton / 40% Recycled Polyester. Four-way stretch. Anti-odour.' },
      { label: 'Key Features', body: 'Relaxed fit. Slightly oversized. Drop shoulder. Available in Her and Him cuts.' },
      { label: 'Care Instructions', body: 'Cold wash only. No tumble dry. No fabric softener. Hang to dry.' },
      { label: 'Sustainability', body: 'Manufactured with intention. No overclaims — honest materials, honest process.' },
    ],
    similar: ['pant', 'bra', 'short', 'vest'],
    phase: 1,
  },
  {
    slug: 'short',
    name: 'The Tāpas Short',
    gender: 'Him',
    tagline: 'Seven inches. Nothing more.',
    description: 'Internal drawstring. One back zip pocket. Fast-dry fabric that moves exactly when you do. For the run, the lift, the in-between.',
    colour: '#7A0C0C',
    colourName: 'Crimson',
    image: null,
    colourways: [
      { name: 'Crimson', hex: '#7A0C0C' },
      { name: 'Obsidian', hex: '#141414' },
      { name: 'Deep Olive', hex: '#3D4F3C' },
    ],
    specs: [
      { label: 'Fabric & Composition', body: '82% Nylon / 18% Spandex. Four-way stretch. Fast-dry. Anti-odour.' },
      { label: 'Key Features', body: 'Seven-inch inseam. Internal drawstring. One back zip pocket. Flatlock seams.' },
      { label: 'Care Instructions', body: 'Cold wash only. No tumble dry. No fabric softener. Hang to dry.' },
      { label: 'Sustainability', body: 'Manufactured with intention. No overclaims — honest materials, honest process.' },
    ],
    similar: ['tee', 'vest'],
    phase: 1,
  },
  {
    slug: 'vest',
    name: 'The Tāpas Vest',
    gender: 'Him',
    tagline: 'Stripped back to what matters.',
    description: 'Performance cut, moisture-wicking, minimal armhole so nothing chafes on a long run. Worn alone in the heat. Layered under everything else.',
    colour: '#F2EDE4',
    colourName: 'Raw Cotton',
    image: null,
    colourways: [
      { name: 'Raw Cotton', hex: '#F2EDE4', light: true },
      { name: 'Obsidian', hex: '#141414' },
      { name: 'Cobalt', hex: '#1F4FD8' },
    ],
    specs: [
      { label: 'Fabric & Composition', body: '88% Nylon / 12% Spandex. Moisture-wicking. Anti-odour. Lightweight.' },
      { label: 'Key Features', body: 'Performance cut. Minimal armhole. Flatlock seams. Worn alone or layered.' },
      { label: 'Care Instructions', body: 'Cold wash only. No tumble dry. No fabric softener. Hang to dry.' },
      { label: 'Sustainability', body: 'Manufactured with intention. No overclaims — honest materials, honest process.' },
    ],
    similar: ['tee', 'short'],
    phase: 1,
  },
];
