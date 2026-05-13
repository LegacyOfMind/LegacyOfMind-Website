import { Instagram, Youtube } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { Leaderboard } from '../components/Leaderboard';
import { TikTokIcon } from '../components/PlatformIcons';
import { SectionTitle } from '../components/SectionTitle';
import { siteLinks } from '../data/siteLinks';

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
          Fastest survivors. Best clips. The players and creators stepping into the first-person soulslike world early.
        </p>
        <p className="mx-auto mt-7 max-w-4xl leading-8 text-muted">
          Community clips may be featured across official Legacy of Mind channels. Every featured clip will credit the streamer or creator who shared it through Discord.
        </p>
      </section>

      <Leaderboard />

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

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="border border-border bg-black/36 p-6 transition duration-300 hover:border-stone/30 hover:bg-white/[0.035] md:p-8">
          <SectionTitle
            eyebrow="Submit"
            title="Share clips through Discord"
            text="Send close escapes, funny deaths, boss attempts, strange discoveries, reactions, or moments worth sharing directly through the Legacy of Mind Discord."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon}>Submit Through Discord</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
