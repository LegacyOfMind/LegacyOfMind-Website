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
    text: 'Legacy of Mind is a dark, gothic fantasy, soulslike and FPS set in a fractured world where nightmares and reality have merged.',
    imageLabel: 'Gameplay Screenshot Placeholder',
    imageSrc: '/assets/images/home/fractured-reality.png',
    imageAlt: 'A vast gothic city rising around a glowing fire in the fractured world of Legacy of Mind.',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'The Umbrae',
    title: 'The Umbrae are hunting',
    text: 'Born from fear and trauma, the Umbrae stalk the broken world in forms the mind was never meant to survive.',
    imageLabel: 'Umbrae Encounter Placeholder',
    imageSrc: '/assets/images/home/umbrae-encounter.png',
    imageAlt: 'An Umbrae beneath a glowing portal in an overgrown, abandoned settlement.',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'Monarch Hunts',
    title: 'Face the Monarchs',
    text: 'Each Monarch ruled zone contains sub-areas to explore, resources to gather, unique elite enemies to defeat, and perks to upgrade before facing the final Monarch that controls the region in a brutal soulslike first person shooter bossfight.',
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
