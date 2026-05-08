import { Instagram, Music2, Youtube } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { DiscordIcon } from '../components/DiscordIcon';

// Replace these placeholder URLs when the live pages are ready.
export const siteLinks = {
  steam: 'https://store.steampowered.com/app/PLACEHOLDER',
  discord: 'https://discord.gg/T62RKQk5ar',
  youtube: 'https://www.youtube.com/@solusstudiosLoM',
  tiktok: 'https://www.tiktok.com/@legacyofminddev?is_from_webapp=1&sender_device=pc',
  instagram: 'https://www.instagram.com/legacyofminddev/',
  contactEmail: 'danny@solusstudios.uk',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Closed Beta', href: '/closed-beta' },
  { label: 'Community', href: '/community' },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Discord',
    href: siteLinks.discord,
    icon: DiscordIcon,
    description:
      'The Legacy of Mind Discord is the main place for Closed Beta access, community discussion, clip sharing, feedback, and game development questions. Join freely, introduce yourself, and follow the road to release.',
  },
  {
    label: 'YouTube',
    href: siteLinks.youtube,
    icon: Youtube,
    description: 'Watch official updates and beta creator clips',
  },
  {
    label: 'TikTok',
    href: siteLinks.tiktok,
    icon: Music2,
    description: 'Follow short clips, updates, and horror moments',
  },
  {
    label: 'Instagram',
    href: siteLinks.instagram,
    icon: Instagram,
    description: 'Follow screenshots, reels, and development posts',
  },
];
