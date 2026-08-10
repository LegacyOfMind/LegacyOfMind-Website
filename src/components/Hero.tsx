import { motion } from 'framer-motion';
import { CalendarDays, KeyRound } from 'lucide-react';
import { siteLinks, socialLinks } from '../data/siteLinks';
import { CTAButton } from './CTAButton';
import { SteamIcon } from './PlatformIcons';

const socialHoverClasses = {
  discord: 'hover:border-[#8791ff]/55 hover:text-[#c5caff] hover:shadow-[0_0_30px_rgba(88,101,242,0.16)]',
  youtube: 'hover:border-[#c34b4b]/55 hover:text-[#f0b4b4] hover:shadow-[0_0_30px_rgba(190,44,44,0.14)]',
  tiktok: 'hover:border-[#36d4d0]/45 hover:text-[#bdf4f2] hover:shadow-[0_0_30px_rgba(54,212,208,0.1)]',
  instagram: 'hover:border-[#d18aa5]/45 hover:text-[#e0afc0] hover:shadow-[0_0_30px_rgba(180,90,124,0.11)]',
  x: 'hover:border-stone/55 hover:text-stone hover:shadow-[0_0_30px_rgba(217,215,204,0.1)]',
};

export function Hero() {
  return (
    <section className="home-hero relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pb-14 pt-28 lg:px-6 lg:pb-16">
      <div className="home-hero-depth pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="home-hero-mist pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="home-hero-rift pointer-events-none absolute inset-y-0 left-1/2 w-px" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="max-w-5xl">
          <div className="inline-flex min-h-11 items-center gap-3 border border-[var(--color-earth)]/30 bg-black/45 px-4 py-2 text-xs font-semibold uppercase text-[var(--color-parchment)] shadow-[0_0_34px_rgba(182,161,118,0.08)] backdrop-blur-sm sm:text-sm">
            <CalendarDays aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>Releasing Halloween 2026</span>
          </div>

          <p className="mt-7 text-sm font-semibold uppercase text-stone/72 sm:text-base">
            Solo-developed indie horror FPS
          </p>
          <h1 className="home-hero-title mt-3 font-display text-5xl font-semibold uppercase leading-[0.95] text-stone sm:text-7xl lg:text-8xl xl:text-9xl">
            Legacy <span className="block text-[var(--color-parchment)]">of Mind</span>
          </h1>
          <p className="mt-6 font-display text-xl uppercase text-stone/88 sm:text-2xl lg:text-3xl">
            The First FPS Soulslike
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Legacy of Mind is the first gothic soulslike FPS where nightmares and reality have merged. Face colossal Monarchs that rule over the broken world twisted by living nightmares and unlock otherworldy powers hidden within your mind, but with every power unlocked, something in the dark wakes with you...
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4">
            <CTAButton
              href={siteLinks.steam}
              external
              variant="steam"
              icon={SteamIcon}
              className="min-h-16 w-full px-6 py-4 text-sm sm:text-base"
            >
              Wishlist on Steam
            </CTAButton>
            <CTAButton
              href="/closed-beta"
              variant="discord"
              icon={KeyRound}
              className="min-h-16 w-full px-6 py-4 text-sm sm:text-base"
            >
              Join the Closed Beta
            </CTAButton>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-stone/65">
            Wishlist before Steam Next Fest this October, or join the playtest community for Closed Beta news and a chance to help shape the final experience.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Follow Legacy of Mind">
            {socialLinks.map(({ label, href, icon: Icon, platform }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex min-h-11 items-center gap-2 border border-stone/16 bg-black/35 px-3.5 py-2 text-xs font-semibold uppercase text-muted backdrop-blur-sm transition duration-300 ${socialHoverClasses[platform]}`}
              >
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0 transition duration-300 group-hover:-translate-y-0.5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
