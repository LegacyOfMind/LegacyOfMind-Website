import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const trailerSrc = '/videos/enemy-showcase-trailer.mp4';
const posterSrc = '/videos/enemy-showcase-poster.jpg';

export function EnemyShowcaseTrailer() {
  return (
    <section className="relative overflow-hidden px-4 py-16 lg:px-6 lg:py-20" aria-labelledby="enemy-showcase-title">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(202,184,142,0.12),transparent_30%),radial-gradient(circle_at_50%_78%,rgba(217,215,204,0.07),transparent_32%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone/18 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-earth)]">Boss Encounter Trailer</p>
          <h2 id="enemy-showcase-title" className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
            The Gravestalker
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
            Legacy of Mind is packed with soulslike boss encounters and epic music, with horror playing a big role in keeping the player in a panicked state.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted/90 md:text-base">
            Watch The Gravestalker trailer for a glimpse at one of the threats waiting beyond the ruins.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(217,215,204,0.12),transparent_34%),radial-gradient(circle_at_65%_70%,rgba(142,111,72,0.14),transparent_30%)] blur-3xl"
          />
          <div className="group relative overflow-hidden border border-stone/18 bg-black p-2 shadow-[0_0_80px_rgba(0,0,0,0.58),inset_0_0_44px_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 hover:border-stone/34 md:p-3">
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                className="h-full w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={posterSrc}
                title="The Gravestalker trailer for Legacy of Mind"
                aria-label="The Gravestalker trailer for Legacy of Mind"
              >
                <source src={trailerSrc} type="video/mp4" />
                Your browser does not support the embedded Gravestalker trailer video.
              </video>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_54%,rgba(0,0,0,0.3)_100%)]"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.22em] text-muted">
            <PlayCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-stone/70" />
            <span>Watch The Gravestalker trailer for a glimpse at the horrors beyond the ruins.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
