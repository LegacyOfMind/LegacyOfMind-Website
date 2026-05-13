import { motion } from 'framer-motion';
import { Instagram, KeyRound, Youtube } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { Hero } from '../components/Hero';
import { NightmareSection } from '../components/NightmareSection';
import { TikTokIcon } from '../components/PlatformIcons';
import { SectionTitle } from '../components/SectionTitle';
import { nightmareSections } from '../data/nightmareSections';
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
              <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon}>
                Apply Through Discord
              </CTAButton>
              <CTAButton href="/closed-beta" variant="secondary" icon={KeyRound}>
                Learn About Closed Beta
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
          <SectionTitle
            eyebrow="Featured Soon"
            title="Creator Clips Coming Soon..."
            text="Creator clips, reactions, boss attempts, and development updates will be posted across the official Legacy of Mind social channels."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {creatorChannels.map(({ label, href, icon, variant }) => (
              <CTAButton key={label} href={href} external variant={variant} icon={icon} className="w-full sm:w-auto">
                {label}
              </CTAButton>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
