import { motion } from 'framer-motion';
import { ArrowRight, KeyRound, Lightbulb, UsersRound, Video } from 'lucide-react';
import { ClipCard } from '../components/ClipCard';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { Hero } from '../components/Hero';
import { NightmareSection } from '../components/NightmareSection';
import { SectionTitle } from '../components/SectionTitle';
import { clips } from '../data/clips';
import { nightmareSections } from '../data/nightmareSections';
import { siteLinks, socialLinks } from '../data/siteLinks';

const discordFeatures = [
  {
    icon: KeyRound,
    title: 'Closed Beta Access',
    text: 'Join the server to request early access and follow the next steps before release.',
  },
  {
    icon: Video,
    title: 'Clips & Community',
    text: 'Share reactions, funny deaths, boss attempts, discoveries, and moments worth showing.',
  },
  {
    icon: Lightbulb,
    title: 'Game Dev Advice',
    text: 'Ask questions about Unity, Steam pages, trailers, marketing, or your own indie game.',
  },
  {
    icon: UsersRound,
    title: 'Indie Game Talk',
    text: 'Talk with players, creators, and devs who enjoy soulslikes, horror, and indie projects.',
  },
];

const supportingSocialLinks = socialLinks.filter((link) => link.label !== 'Discord');

export function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-10">
        {nightmareSections.map((section, index) => (
          <NightmareSection key={section.title} section={section} reverse={index % 2 === 1} />
        ))}

        <section className="relative overflow-hidden border-y border-border bg-black/55 px-4 py-24 text-center">
          <div className="absolute inset-0 bg-stone-radial opacity-70" aria-hidden="true" />
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl font-display text-3xl uppercase leading-tight tracking-[0.12em] text-stone md:text-6xl"
          >
            “The nightmare is no longer something you wake from.”
          </motion.blockquote>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="border border-stone/18 bg-white/[0.035] p-6 shadow-insetStone transition duration-300 hover:border-stone/35 md:p-10">
            <SectionTitle
              eyebrow="Before Release"
              title="Closed Beta access is open"
              text="Built by one developer, Legacy of Mind is looking for passionate players and creators who want early access, honest feedback, and a closer look at a vast desolate first-person soulslike before release."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={siteLinks.discord} external>
                Apply Through Discord
              </CTAButton>
              <CTAButton href="/closed-beta" variant="secondary">
                Learn About Closed Beta
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="relative overflow-hidden border border-stone/18 bg-black/52 p-6 shadow-[inset_0_0_70px_rgba(217,215,204,0.035),0_30px_90px_rgba(0,0,0,0.45)] transition duration-500 hover:border-stone/28 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(182,161,118,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]" aria-hidden="true" />
            <div className="lattice-field opacity-[0.16]" aria-hidden="true" />
            <div className="particle-field opacity-[0.28]" aria-hidden="true" />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-stone/25 bg-black/45 text-stone shadow-[0_0_45px_rgba(217,215,204,0.08)]">
                <DiscordIcon aria-hidden="true" className="h-8 w-8" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-earth)]">Community Hub</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.12em] text-stone md:text-5xl">
                Join the Legacy of Mind Discord
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-stone/78 md:text-lg">
                The Discord is where the world of Legacy of Mind opens before release: <span className="text-[var(--color-parchment)]">Closed Beta access</span>, community chat, clips, feedback, indie game talk, and game dev advice all in one place.
              </p>
              <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted">
                Whether you want to step into the Closed Beta, share your clips, talk with other soulslike and indie game fans, or ask questions about game development, the server is built to be a real community around the game, not just an announcement board.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteLinks.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden border border-stone/55 bg-stone px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_46px_rgba(217,215,204,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_58px_rgba(217,215,204,0.24)] sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent,rgba(255,255,255,0.34),transparent)] transition duration-700 group-hover:translate-x-full" aria-hidden="true" />
                  <DiscordIcon aria-hidden="true" className="relative h-5 w-5 transition group-hover:-translate-y-0.5" />
                  <span className="relative">Join the Discord</span>
                  <ArrowRight aria-hidden="true" className="relative h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={siteLinks.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 border border-stone/35 bg-black/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone shadow-[0_0_34px_rgba(182,161,118,0.08)] transition duration-300 hover:-translate-y-1 hover:border-stone/70 hover:bg-white/[0.08] hover:shadow-[0_0_46px_rgba(182,161,118,0.16)] sm:w-auto"
                >
                  <KeyRound aria-hidden="true" className="h-4 w-4 transition group-hover:-rotate-6" />
                  Get Closed Beta Access
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted">
                Free to join. Share clips and reactions, follow development updates, ask for game dev advice, or bring your own indie project into the conversation.
              </p>
            </div>

            <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {discordFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="group border border-border bg-black/42 p-5 text-left shadow-insetStone transition duration-300 hover:-translate-y-1 hover:border-stone/36 hover:bg-white/[0.04] hover:shadow-[inset_0_0_35px_rgba(255,255,255,0.035),0_20px_48px_rgba(0,0,0,0.32)]">
                    <div className="flex items-center gap-3 text-stone">
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-current transition group-hover:text-[var(--color-parchment)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {supportingSocialLinks.map(({ label, href, icon: Icon, description }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group border border-border bg-black/36 p-5 transition hover:-translate-y-1 hover:border-stone/45 hover:bg-white/[0.025]">
                <Icon aria-hidden="true" className="h-6 w-6 text-stone" />
                <h3 className="mt-5 font-display text-xl uppercase tracking-[0.1em] text-stone">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
                {label === 'YouTube' && (
                  <p className="mt-3 text-sm leading-6 text-muted">Closed Beta clips, reactions, and early footage may be featured on the official YouTube channel.</p>
                )}
                {(label === 'TikTok' || label === 'Instagram') && (
                  <p className="mt-3 text-sm leading-6 text-muted">Selected community clips, creator moments, and development updates may also be shared across TikTok and Instagram.</p>
                )}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
          <SectionTitle eyebrow="Featured Soon" title="Creator Clips Coming Soon..." text="Selected reactions, close escapes, boss attempts, and development updates may be shared across the official channels." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {clips.slice(0, 4).map((clip) => (
              <ClipCard key={clip.title} clip={clip} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
