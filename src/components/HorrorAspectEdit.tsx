import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const videoSrc = '/videos/horror-aspect-edit.mp4';
const posterSrc = '/videos/horror-aspect-poster.jpg';

export function HorrorAspectEdit() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 lg:px-6 lg:pb-20" aria-labelledby="horror-aspect-title">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(217,215,204,0.06),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(142,111,72,0.1),transparent_28%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone/12 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-earth)]">Horror Atmosphere Edit</p>
          <h2 id="horror-aspect-title" className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
            Alone but not lonely...
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
            A short edit focused on the horror side of Legacy of Mind, where silence, movement, and pressure keep the player on edge.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(217,215,204,0.08),transparent_34%),radial-gradient(circle_at_62%_68%,rgba(142,111,72,0.12),transparent_30%)] blur-3xl"
          />
          <div className="group relative overflow-hidden border border-stone/18 bg-black p-2 shadow-[0_0_80px_rgba(0,0,0,0.58),inset_0_0_44px_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 hover:border-stone/34 md:p-3">
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                className="h-full w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={posterSrc}
                title="Alone but not lonely horror atmosphere edit for Legacy of Mind"
                aria-label="Alone but not lonely horror atmosphere edit for Legacy of Mind"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the embedded Legacy of Mind horror edit video.
              </video>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_54%,rgba(0,0,0,0.34)_100%)]"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.22em] text-muted">
            <PlayCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-stone/70" />
            <span>A focused look at the horror atmosphere inside Legacy of Mind.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
