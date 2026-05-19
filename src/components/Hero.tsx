import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { LockKeyhole, Youtube } from 'lucide-react';
import { useEffect, useState, type PointerEvent } from 'react';
import { siteLinks } from '../data/siteLinks';
import { CTAButton } from './CTAButton';
import { DiscordIcon } from './DiscordIcon';
import { SteamIcon } from './PlatformIcons';

const HERO_AMBIENCE_VIDEO = '/videos/hero-ambience.mp4';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 680], [1, 0.35]);
  const reduceMotion = useReducedMotion();
  const [showAmbienceVideo, setShowAmbienceVideo] = useState(false);
  const [ambienceVideoReady, setAmbienceVideoReady] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const auraX = useSpring(useTransform(pointerX, [-1, 1], [-28, 28]), { stiffness: 42, damping: 24, mass: 0.8 });
  const auraY = useSpring(useTransform(pointerY, [-1, 1], [-18, 18]), { stiffness: 42, damping: 24, mass: 0.8 });
  const mistX = useSpring(useTransform(pointerX, [-1, 1], [18, -18]), { stiffness: 34, damping: 28, mass: 1 });
  const mistY = useSpring(useTransform(pointerY, [-1, 1], [12, -12]), { stiffness: 34, damping: 28, mass: 1 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  useEffect(() => {
    setShowAmbienceVideo(false);

    if (reduceMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowAmbienceVideo(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-void relative isolate flex min-h-[118svh] items-start justify-center overflow-hidden px-4 pb-20 pt-24 md:min-h-[124svh]"
    >
      <div aria-hidden="true" className="hero-void-base pointer-events-none absolute inset-0 z-0" />
      <motion.div
        aria-hidden="true"
        style={{ x: auraX, y: auraY }}
        className="hero-reactive-aura pointer-events-none absolute left-1/2 top-[36vh] z-[1] h-[60rem] w-[60rem] -ml-[30rem] -mt-[30rem]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: mistX, y: mistY }}
        className="hero-mist-orbit pointer-events-none absolute left-1/2 top-[47vh] z-[2] h-[44rem] w-[90rem] -ml-[45rem] -mt-[22rem]"
      />
      <div aria-hidden="true" className="hero-ether-field pointer-events-none absolute inset-0 z-[3]" />
      <div aria-hidden="true" className="hero-lattice-thread pointer-events-none absolute inset-0 z-[4]" />
      <div aria-hidden="true" className="hero-ash-field pointer-events-none absolute inset-0 z-[5]" />
      <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-screen items-center justify-center">
        <img
          src="/assets/logos/LoM Text Logo.png"
          alt=""
          className="h-auto w-[min(1100px,92vw)] animate-breathe object-contain opacity-55"
        />
      </motion.div>
      {!reduceMotion && (
        <video
          aria-hidden="true"
          tabIndex={-1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setAmbienceVideoReady(true)}
          onError={() => {
            setAmbienceVideoReady(false);
            setShowAmbienceVideo(false);
          }}
          className={`hero-ambience-video pointer-events-none absolute inset-x-0 top-0 z-[15] h-screen w-full ${
            showAmbienceVideo && ambienceVideoReady ? 'is-visible' : ''
          }`}
        >
          <source src={HERO_AMBIENCE_VIDEO} type="video/mp4" />
        </video>
      )}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-screen bg-[radial-gradient(circle_at_50%_36%,rgba(230,230,220,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.82)_86%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[42vh] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.76)_26%,rgba(0,0,0,0.98)_100%)]" />
      <div aria-hidden="true" className="hero-front-haze pointer-events-none absolute inset-0 z-30" />
      <div aria-hidden="true" className="hero-edge-vignette pointer-events-none absolute inset-0 z-30" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-40 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
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
              Playtest Now
            </CTAButton>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-7 text-stone/80 md:text-base">
            Our Discord welcomes casual players, soulslike fans, indie devs seeking advice, creators growing their audience, and anyone who wants to playtest or share what they are building.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton
              href={siteLinks.trailer}
              external
              variant="youtube"
              icon={Youtube}
              className="min-h-14 w-full px-5 py-3.5 text-xs sm:w-auto sm:px-7 md:text-sm"
            >
              Watch Official Story Trailer
            </CTAButton>
            <button
              type="button"
              disabled
              aria-disabled="true"
              aria-label="Official Gameplay Trailer coming soon"
              className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-2.5 border border-stone/20 bg-white/[0.025] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted/70 opacity-60 shadow-[inset_0_0_22px_rgba(217,215,204,0.025)] sm:w-auto sm:px-7 md:text-sm"
            >
              <LockKeyhole aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span>Gameplay Trailer Coming Soon</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
