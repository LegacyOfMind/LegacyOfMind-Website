import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BellRing,
  CalendarClock,
  Crown,
  Crosshair,
  Gamepad2,
  Instagram,
  KeyRound,
  Map,
  MessageSquareText,
  PlayCircle,
  Radio,
  Users,
  Wrench,
  Youtube,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { SteamIcon, TikTokIcon, XIcon } from '../components/PlatformIcons';
import { siteLinks } from '../data/siteLinks';

const gamePillars = [
  {
    title: 'Tactical soulslike combat',
    text: 'Fight through tactical first-person soulslike combat where guns, attachments, and preparation shape every encounter.',
    icon: Crosshair,
  },
  {
    title: 'Handcrafted open world',
    text: 'Explore handcrafted interiors and exteriors across ruined settlements, dying forests, frozen peaks, and haunted deserts. No procedural generation.',
    icon: Map,
  },
  {
    title: 'Survive and specialise',
    text: 'Loot abandoned buildings, craft buffs and consumables, and unlock four specialised perk trees built for different playstyles.',
    icon: Wrench,
  },
  {
    title: 'Monarch encounters',
    text: 'Explore each Monarch-ruled zone, gather resources, defeat elite enemies, and prepare for a brutal first-person soulslike boss fight.',
    icon: Crown,
  },
];

const followReasons = [
  {
    title: 'Steam Next Fest',
    text: 'Follow the road to Steam Next Fest in October 2026 and be ready when the next public milestone arrives.',
    icon: CalendarClock,
  },
  {
    title: 'Closed Beta',
    text: 'Join the playtesting community, request access, and share honest feedback before release.',
    icon: Gamepad2,
  },
  {
    title: 'Development updates',
    text: 'See new enemies, handmade locations, weapons, and behind-the-scenes progress as the game develops.',
    icon: BellRing,
  },
  {
    title: 'A real community',
    text: 'Meet players, creators, and indie developers who care about horror games and ambitious independent projects.',
    icon: Users,
  },
];

type LinkTone = 'steam' | 'beta' | 'youtube' | 'discord' | 'tiktok' | 'instagram' | 'x';

type HomeLink = {
  title: string;
  description: string;
  href: string;
  external: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: LinkTone;
};

const primaryLinks: HomeLink[] = [
  {
    title: 'Wishlist on Steam',
    description: 'Put Legacy of Mind on your wishlist before Steam Next Fest and the Halloween 2026 release.',
    href: siteLinks.steam,
    external: true,
    icon: SteamIcon,
    tone: 'steam',
  },
  {
    title: 'Join the Closed Beta',
    description: 'Request playtest access, follow beta news, and help sharpen the final game through Discord.',
    href: '/closed-beta',
    external: false,
    icon: KeyRound,
    tone: 'beta',
  },
];

const trailerLinks: HomeLink[] = [
  {
    title: 'The Final Call',
    description: 'Watch The Final Call and step closer to the world waiting beyond the signal.',
    href: siteLinks.finalCall,
    external: true,
    icon: PlayCircle,
    tone: 'youtube',
  },
  {
    title: 'Watch OFFICIAL Trailer #2',
    description: 'Continue into Legacy of Mind with the second official trailer.',
    href: siteLinks.trailerTwo,
    external: true,
    icon: PlayCircle,
    tone: 'youtube',
  },
];

const communityLinks: HomeLink[] = [
  {
    title: 'YouTube',
    description: 'Trailers, showcases, and longer development updates.',
    href: siteLinks.youtube,
    external: true,
    icon: Youtube,
    tone: 'youtube',
  },
  {
    title: 'Discord',
    description: 'Playtest news, game discussion, clips, feedback, and indie dev talk.',
    href: siteLinks.discord,
    external: true,
    icon: DiscordIcon,
    tone: 'discord',
  },
  {
    title: 'TikTok',
    description: 'Quick horror moments, progress clips, and game updates.',
    href: siteLinks.tiktok,
    external: true,
    icon: TikTokIcon,
    tone: 'tiktok',
  },
  {
    title: 'X / Twitter',
    description: 'Short development posts and the latest project news.',
    href: siteLinks.x,
    external: true,
    icon: XIcon,
    tone: 'x',
  },
  {
    title: 'Instagram',
    description: 'Screenshots, reels, and visual updates from the world.',
    href: siteLinks.instagram,
    external: true,
    icon: Instagram,
    tone: 'instagram',
  },
];

const linkToneClasses: Record<LinkTone, string> = {
  steam: 'border-[#477da3]/55 bg-[linear-gradient(135deg,rgba(8,20,32,0.96),rgba(15,48,72,0.72))] hover:border-[#76b5df]/75 hover:shadow-[0_0_42px_rgba(54,126,181,0.2)]',
  beta: 'border-[#6e78dc]/45 bg-[linear-gradient(135deg,rgba(15,17,28,0.96),rgba(40,48,103,0.7))] hover:border-[#9ca5ff]/70 hover:shadow-[0_0_42px_rgba(88,101,242,0.18)]',
  youtube: 'border-[#8e3636]/35 bg-[linear-gradient(135deg,rgba(21,7,8,0.92),rgba(73,20,22,0.52))] hover:border-[#c15353]/60 hover:shadow-[0_0_36px_rgba(190,44,44,0.13)]',
  discord: 'border-[#5865f2]/30 bg-[linear-gradient(135deg,rgba(12,14,22,0.92),rgba(35,42,88,0.52))] hover:border-[#8791ff]/55 hover:shadow-[0_0_36px_rgba(88,101,242,0.13)]',
  tiktok: 'border-[#67b8b6]/20 bg-[linear-gradient(135deg,rgba(7,9,9,0.94),rgba(19,24,25,0.72))] hover:border-[#63d3cf]/45 hover:shadow-[0_0_34px_rgba(54,212,208,0.09)]',
  instagram: 'border-[#a65d79]/25 bg-[linear-gradient(135deg,rgba(15,8,12,0.94),rgba(42,22,31,0.62))] hover:border-[#d18aa5]/45 hover:shadow-[0_0_34px_rgba(180,90,124,0.1)]',
  x: 'border-stone/18 bg-[linear-gradient(135deg,rgba(5,5,5,0.96),rgba(20,20,20,0.72))] hover:border-stone/45 hover:shadow-[0_0_34px_rgba(217,215,204,0.08)]',
};

function HomeLinkCard({ link, prominent = false }: { link: HomeLink; prominent?: boolean }) {
  const Icon = link.icon;
  const classes = `group relative flex min-h-40 flex-col justify-between overflow-hidden border p-5 text-left transition duration-300 hover:-translate-y-1 sm:p-6 ${
    prominent ? 'sm:min-h-48' : ''
  } ${linkToneClasses[link.tone]}`;
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center border border-stone/18 bg-black/35 text-stone">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-stone/45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone" />
      </div>
      <div className="mt-7">
        <h3 className={`font-display uppercase leading-tight text-stone ${prominent ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {link.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{link.description}</p>
      </div>
    </>
  );

  if (link.external) {
    return (
      <a className={classes} href={link.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={link.href}>
      {content}
    </Link>
  );
}

export function Home() {
  return (
    <>
      <SEO
        title="Legacy of Mind | The First FPS Soulslike"
        description="Legacy of Mind is the first gothic soulslike FPS where nightmares and reality have merged. Face colossal Monarchs, unlock otherworldy powers, and wishlist on Steam."
        canonicalUrl="https://solusstudios.uk"
        ogTitle="Legacy of Mind | The First FPS Soulslike"
        ogDescription="Enter a handcrafted post-apocalyptic world where nightmares and reality have merged. Face the Monarchs and wishlist Legacy of Mind on Steam."
      />
      <Hero />

      <main className="relative z-10">
        <section id="what-is" className="border-y border-border bg-black/48 px-4 py-20 lg:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-earth)]">What is Legacy of Mind?</p>
                <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-stone sm:text-4xl lg:text-5xl">
                  Horror through a soulslike lens
                </h2>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  Legacy of Mind is the first FPS soulslike horror game, set in a ruined post-apocalyptic world merged with the nightmare world. Explore a handcrafted open world, survive tactical first-person combat, loot abandoned buildings, customise your weapons, unlock four specialised perk trees, and prepare to face the Monarch ruling each region.
                </p>
                <a
                  href={siteLinks.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase text-[var(--color-parchment)] transition hover:text-stone"
                >
                  View Legacy of Mind on Steam
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
              {gamePillars.map(({ title, text, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group min-h-56 bg-[#070707] p-6 transition duration-300 hover:bg-[#0d0d0d]"
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-[var(--color-earth)] transition duration-300 group-hover:text-[var(--color-parchment)]" />
                  <h3 className="mt-8 font-display text-xl uppercase leading-tight text-stone">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Legacy of Mind trailers">
              {trailerLinks.map((link) => (
                <HomeLinkCard key={link.title} link={link} />
              ))}
            </div>
          </div>
        </section>

        <section className="home-now relative overflow-hidden px-4 py-20 lg:px-6 lg:py-28">
          <div className="home-now-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase text-[var(--color-earth)]">Why follow now?</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-stone sm:text-4xl lg:text-5xl">
                The road to Halloween starts here
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Legacy of Mind heads toward Steam Next Fest in October and releases around Halloween 2026. Wishlist now, enter the Closed Beta community, and follow the build while the final nightmare takes shape.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {followReasons.map(({ title, text, icon: Icon }) => (
                <article key={title} className="group flex gap-4 border border-stone/14 bg-black/40 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-stone/30 hover:bg-white/[0.035] sm:p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-earth)]/22 bg-[var(--color-earth)]/[0.045] text-[var(--color-parchment)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg uppercase text-stone">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon} className="w-full sm:w-auto">
                Wishlist for Steam Next Fest
              </CTAButton>
              <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon} className="w-full sm:w-auto">
                Join the Playtest Community
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-black/55 px-4 py-20 lg:px-6 lg:py-28" aria-labelledby="link-hub-title">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-earth)]">Follow the project</p>
                <h2 id="link-hub-title" className="mt-4 font-display text-3xl uppercase leading-tight text-stone sm:text-4xl lg:text-5xl">
                  Choose how you enter
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted">
                Wishlist, playtest, watch, or join the conversation. Every official Legacy of Mind link is here.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {primaryLinks.map((link) => (
                <HomeLinkCard key={link.title} link={link} prominent />
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {communityLinks.map((link) => (
                <HomeLinkCard key={link.title} link={link} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-24 text-center lg:px-6 lg:py-32">
          <div className="absolute inset-0 bg-stone-radial opacity-70" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <Radio aria-hidden="true" className="mx-auto h-7 w-7 text-[var(--color-earth)]" />
            <p className="mt-5 text-xs font-bold uppercase text-[var(--color-earth)]">Halloween 2026</p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-stone sm:text-5xl lg:text-6xl">
              Be there when the signal breaks
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Wishlist Legacy of Mind on Steam and join the Closed Beta community before the world opens.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon} className="min-h-14 w-full">
                Wishlist Legacy of Mind
              </CTAButton>
              <CTAButton href="/closed-beta" variant="discord" icon={MessageSquareText} className="min-h-14 w-full">
                Join the Closed Beta
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
