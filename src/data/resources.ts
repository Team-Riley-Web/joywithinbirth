import type { ImageMetadata } from 'astro';

/**
 * The four free resources use the same covers as the homepage's "Free
 * resources" carousel for these same opt-ins (see the `freebies` array in
 * index.astro) — not the raw Flodesk/Canva opt-in graphics. Two places on the
 * site selling the same free resource should show the same picture for it.
 */
import fiveKeysCover from '../assets/images/imgi_8_689ec538c6ba4e09e29cc249.jpg';
import birthPrepCover from '../assets/images/imgi_19_689ec90324858a5600fb5a4e.jpg';
import essentialOilsCover from '../assets/images/imgi_21_689ec99d5bdfcf8261cfd875.jpg';
import flowAndEnergyCover from '../assets/images/imgi_11_689cede83b01e6b095436d26.jpg';

/**
 * The two digital guides use their actual Flodesk opt-in covers instead —
 * these are the real product, not a lifestyle photo standing in for it, so
 * unlike the four free resources above they show the designed cover itself.
 */
import fertilityEbookCover from '../assets/images/covers/fertility-ebook-cover.jpg';
import doulaGuideCover from '../assets/images/covers/doula-guide-cover.jpg';

export interface Resource {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  cover: ImageMetadata;
  coverAlt: string;
  /** Crop focus for the cover image, as a CSS object-position value. */
  coverPosition?: string;
}

export const freeResources: Resource[] = [
  {
    title: '5 Keys to a Joy-Filled Birth',
    description:
      'The five mindset and preparation shifts that turn fear of birth into confidence, straight from Hailey’s own births.',
    href: 'https://joywithinbirth.myflodesk.com/5keystojoywithinbirth',
    ctaLabel: 'Get the free guide',
    cover: fiveKeysCover,
    coverAlt: 'A pregnant mother journaling with a laptop while preparing for birth',
    coverPosition: '50% 45%',
  },
  {
    // Matches the homepage's title exactly (no colon) — the same opt-in
    // shouldn't have two different names depending on which page links it.
    title: 'How to Prep Your Body for Birth 36 Weeks On',
    description:
      'Simple, practical ways to prepare your body in the final weeks of pregnancy so you walk into labor ready.',
    href: 'https://joywithinbirth.myflodesk.com/birthprep',
    ctaLabel: 'Get the free guide',
    cover: birthPrepCover,
    coverAlt: 'A mother in her third trimester holding her belly and a handful of wildflowers',
    coverPosition: '50% 42%',
  },
  {
    title: 'How to Use Essential Oils for Labor',
    description:
      'What essential oils are safe and effective for pregnancy, labor, and postpartum, and exactly how to use them well.',
    href: 'https://joywithinbirth.myflodesk.com/oilsforpregnancy',
    ctaLabel: 'Get the free guide',
    cover: essentialOilsCover,
    coverAlt: 'Essential oil bottles, a candle, and wildflowers set out beside a birth pool',
    coverPosition: '50% 45%',
  },
  {
    title: 'Flow & Energy for Each Stage of Labor',
    description:
      'What to expect, and how to move, in each phase of labor, from early contractions through pushing.',
    href: 'https://joywithinbirth.myflodesk.com/joyfulflow',
    ctaLabel: 'Get the free guide',
    cover: flowAndEnergyCover,
    coverAlt: 'A mother laboring in a birth pool with her partner supporting her close by',
    coverPosition: '38% 50%',
  },
];

export const digitalGuides: Resource[] = [
  {
    title: 'Holistic Fertility Ebook',
    description:
      'Hailey’s own approach to increasing fertility naturally, drawn from her personal journey of holistic healing.',
    href: 'https://joywithinbirth.myflodesk.com/fertilityebook',
    ctaLabel: 'Get the free guide',
    cover: fertilityEbookCover,
    coverAlt: 'A couple holding hands and walking together along a coastal cliff at sunset',
    coverPosition: '50% 25%',
  },
  {
    // Matches the homepage's title exactly ("Doula Guide", not "The Doula
    // Guide") for the same reason as above.
    title: 'Doula Guide',
    description:
      'A grounding resource for aspiring and seasoned doulas, and for anyone supporting a friend through her birth.',
    href: 'https://joywithinbirth.myflodesk.com/doulaguide',
    ctaLabel: 'Get the free guide',
    cover: doulaGuideCover,
    coverAlt: 'The Doula Guide: cover graphic showing a doula supporting a laboring mother by candlelight',
    coverPosition: '55% 50%',
  },
];
