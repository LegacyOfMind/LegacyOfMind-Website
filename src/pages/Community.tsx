import { Instagram, Youtube } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { Leaderboard } from '../components/Leaderboard';
import { TikTokIcon } from '../components/PlatformIcons';
import { SectionTitle } from '../components/SectionTitle';
import { siteLinks } from '../data/siteLinks';

const spotlightCards = [
  {
    name: 'Creator Slot 01',
    label: 'Streamer Showcase',
    text: 'Gameplay reactions, first impressions, and early footage will appear here as creators begin exploring Legacy of Mind.',
  },
  {
    name: 'Creator Slot 02',
    label: 'Playtester Clips',
    text: 'Standout moments from early players, boss attempts, discoveries, and survival moments will be featured here.',
  },
  {
    name: 'Creator Slot 03',
    label: 'Community Feature',
    text: 'Creators and players who help shape the pre-release journey may be spotlighted here.',
  },
];

const creatorChannels = [
  {
    label: 'TikTok',
    href: siteLinks.tiktok,
    icon: TikTokIcon,
    variant: 'tiktok',
  },
  {
    label: 'YouTube',
    href: siteLinks.youtube,
    icon: Youtube,
    variant: 'youtube',
  },
  {
    label: 'Instagram',
    href: siteLinks.instagram,
    icon: Instagram,
    variant: 'instagram',
  },
] as const;

export function Community() {
  return (
    <main className="relative z-10 pt-28">
      <section className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">Players and creators</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-tight tracking-[0.1em] text-[var(--color-parchment)] md:text-7xl">
          Community
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-muted">
          Creators, playtesters, fastest survivors, and the people stepping into the first-person soulslike world early.
        </p>
        <p className="mx-auto mt-7 max-w-4xl leading-8 text-muted">
          Community clips may be featured across official Legacy of Mind channels. Every featured clip will credit the streamer or creator who shared it through Discord.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <SectionTitle
          eyebrow="Creator Spotlight"
          title="Creator Spotlight"
          text="Streamers, creators, and early players bringing Legacy of Mind to life before release."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {spotlightCards.map((card, index) => (
            <article
              key={card.name}
              className="group flex min-h-[22rem] flex-col border border-border bg-black/36 shadow-insetStone transition duration-300 hover:-translate-y-1 hover:border-stone/35 hover:bg-white/[0.04]"
            >
              <div className="relative flex min-h-40 items-center justify-center overflow-hidden border-b border-border bg-black/45">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,215,204,0.04),transparent_42%,rgba(182,161,118,0.07))]" aria-hidden="true" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(45deg,rgba(217,215,204,0.16)_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
                <span className="relative font-display text-4xl uppercase tracking-[0.18em] text-stone/24">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-earth)]">{card.label}</p>
                    <h3 className="mt-3 text-2xl text-stone">{card.name}</h3>
                  </div>
                  <span className="border border-border bg-black/45 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-5 leading-7 text-muted">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Leaderboard />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="grid gap-8 border border-border bg-black/36 p-6 shadow-insetStone transition duration-300 hover:border-stone/30 hover:bg-white/[0.035] md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-muted">Discord Hub</p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-4xl">
              Join the Community on Discord
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-muted">
              Discord is where Closed Beta access, playtester updates, creator clips, feedback, and indie game discussion will happen before release.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Closed Beta and Pioneer Program updates will be shared there first.
            </p>
          </div>
          <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon} className="w-full md:w-auto">
            Join the Discord
          </CTAButton>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <SectionTitle
          eyebrow="Featured Clips"
          title="Watch clips on the official channels"
          text="Creator clips, reactions, boss attempts, and short development updates will be posted across the official Legacy of Mind social channels."
        />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {creatorChannels.map(({ label, href, icon, variant }) => (
            <CTAButton key={label} href={href} external variant={variant} icon={icon} className="w-full sm:w-auto">
              {label}
            </CTAButton>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-2 lg:px-6">
        <div className="border border-border bg-black/24 p-5 text-sm leading-7 text-muted md:p-6">
          Send close escapes, funny deaths, boss attempts, strange discoveries, reactions, or moments worth sharing through the Discord. Featured clips will always credit the creator or player who shared them.
        </div>
      </section>
    </main>
  );
}
