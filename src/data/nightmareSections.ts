export type NightmareSectionData = {
  title: string;
  text: string;
  eyebrow: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

// Replace image placeholders with gameplay screenshots when available.
export const nightmareSections: NightmareSectionData[] = [
  {
    eyebrow: 'Fractured Reality',
    title: 'A world where thought became flesh',
    text: 'The boundary between mind and reality fractured. Push deeper into a world shaped by memory, fear, and ruin.',
    imageLabel: 'Gameplay Screenshot Placeholder',
    imageSrc: '/assets/images/home/1.png',
    imageAlt: 'A crowned statue in a ruined chapel lit by fire and broken stained glass.',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'The Umbrae',
    title: 'The Umbrae are hunting',
    text: 'Born from fear and trauma, the Umbrae stalk the broken world in forms the mind was never meant to survive.',
    imageLabel: 'Umbrae Encounter Placeholder',
    imageSrc: '/assets/images/home/2.png',
    imageAlt: 'A towering Umbrae nightmare moving through dark water beneath storm clouds.',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'Monarch Hunts',
    title: 'Face the Monarchs',
    text: 'Each region is ruled by a nightmare made sovereign. Face soulslike boss encounters, survive the hunt, and tear open the path forward.',
    imageLabel: 'Boss Arena Placeholder',
    imageSrc: '/assets/images/home/3.png',
    imageAlt: 'Moonlit gothic ruins and dead trees beneath a broken night sky.',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'Survival RPG',
    title: 'Scavenge. Adapt. Endure.',
    text: 'Scavenge what you can. Survive what you find. Customise your weapons, shape your build, and keep moving through the dark.',
    imageLabel: 'Ruins Exploration Placeholder',
    imageSrc: '/assets/images/home/4.png',
    imageAlt: 'A firelit ruined forest settlement under a dark mountain sky.',
    imagePosition: 'center center',
  },
];
