import { motion, useScroll, useTransform } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { siteLinks } from '../data/siteLinks';
import { CTAButton } from './CTAButton';
import { DiscordIcon } from './DiscordIcon';
import { SteamIcon } from './PlatformIcons';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 680], [1, 0.35]);

  return (
    <section className="relative isolate flex min-h-[118svh] items-start justify-center overflow-hidden px-4 pb-20 pt-24 md:min-h-[124svh]">
      <motion.div style={{ y, opacity }} className="absolute inset-x-0 top-0 -z-10 flex h-screen items-center justify-center">
        <img
          src="/assets/logos/LoM Text Logo.png"
          alt=""
          className="h-auto w-[min(1100px,92vw)] animate-breathe object-contain opacity-55"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-screen bg-[radial-gradient(circle_at_50%_36%,rgba(230,230,220,0.12),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.9)_86%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[42vh] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.82)_26%,rgba(0,0,0,0.98)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <div aria-hidden="true" className="h-[13vh] min-h-20 md:h-[16vh]" />
        <p className="relative -translate-y-8 text-xs font-bold uppercase tracking-[0.42em] text-muted md:-translate-y-12">
          THE FIRST INDIE FPS SOULSLIKE LIVE NOW ON STEAM
        </p>
        <div className="mt-[44vh] w-full md:mt-[48vh]">
          <p className="mx-auto max-w-2xl font-display text-2xl leading-9 tracking-[0.08em] text-stone/90 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] md:text-3xl">
            Survive the nightmares that learned to hunt.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon} className="w-full sm:w-auto">
              Wishlist Now on Steam
            </CTAButton>
            <CTAButton href="/closed-beta" variant="discord" icon={DiscordIcon} className="w-full sm:w-auto">
              Closed Beta Access
            </CTAButton>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
            Closed Beta access is available for creators, playtesters, and players who want to help shape the world before release.
          </p>
          <CTAButton
            href={siteLinks.trailer}
            external
            variant="youtube"
            icon={Youtube}
            className="mt-6 min-h-14 px-7 py-3.5"
          >
            Watch Trailer
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
