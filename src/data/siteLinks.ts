import { Instagram, Youtube } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { DiscordIcon } from '../components/DiscordIcon';
import { TikTokIcon } from '../components/PlatformIcons';

// Replace these placeholder URLs when the live pages are ready.
export const siteLinks = {
  steam: 'https://store.steampowered.com/app/4763910/Legacy_of_Mind/',
  discord: 'https://discord.gg/RQTzKEXrY7',
  trailer: 'https://youtu.be/iPgmdf9mY8Y',
  youtube: 'https://youtu.be/iPgmdf9mY8Y',
  tiktok: 'https://www.tiktok.com/@legacyofminddev?is_from_webapp=1&sender_device=pc',
  instagram: 'https://www.instagram.com/legacyofminddev/',
  contactEmail: 'danny@solusstudios.uk',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Closed Beta', href: '/closed-beta' },
  { label: 'Community', href: '/community' },
];

export const headerNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Closed Beta', href: '/closed-beta' },
  { label: 'Community', href: '/community' },
  { label: 'My Story', href: '/my-story' },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  platform: 'discord' | 'youtube' | 'tiktok' | 'instagram';
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Discord',
    href: siteLinks.discord,
    icon: DiscordIcon,
    platform: 'discord',
    description:
      'The Legacy of Mind Discord is the main place for Closed Beta access, community discussion, clip sharing, feedback, and game development questions. Join freely, introduce yourself, and follow the road to release.',
  },
  {
    label: 'YouTube',
    href: siteLinks.youtube,
    icon: Youtube,
    platform: 'youtube',
    description: 'Watch official updates and beta creator clips',
  },
  {
    label: 'TikTok',
    href: siteLinks.tiktok,
    icon: TikTokIcon,
    platform: 'tiktok',
    description: 'Follow short clips, updates, and horror moments',
  },
  {
    label: 'Instagram',
    href: siteLinks.instagram,
    icon: Instagram,
    platform: 'instagram',
    description: 'Follow screenshots, reels, and development posts',
  },
];
