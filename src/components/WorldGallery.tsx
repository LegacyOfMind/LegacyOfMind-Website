import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { GalleryImage } from '../data/galleryImages';
import { galleryImages } from '../data/galleryImages';

const AUTO_ADVANCE_MS = 5400;
const INTERACTION_PAUSE_MS = 9000;

type GalleryPair = {
  images: [GalleryImage, GalleryImage];
  imageIndexes: [number, number];
};

const createGalleryPairs = (images: GalleryImage[]): GalleryPair[] => {
  if (images.length === 0) {
    return [];
  }

  const pairs: GalleryPair[] = [];

  for (let index = 0; index < images.length; index += 2) {
    const secondIndex = index + 1 < images.length ? index + 1 : 0;

    pairs.push({
      images: [images[index], images[secondIndex]],
      imageIndexes: [index, secondIndex],
    });
  }

  return pairs;
};

const galleryPairs = createGalleryPairs(galleryImages);

const getWrappedPairIndex = (index: number) => {
  const length = galleryPairs.length;
  return ((index % length) + length) % length;
};

export function WorldGallery() {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const pauseUntilRef = useRef(0);
  const activePair = galleryPairs[activePairIndex];

  const setManualPairIndex = (index: number) => {
    pauseUntilRef.current = Date.now() + INTERACTION_PAUSE_MS;
    setActivePairIndex(getWrappedPairIndex(index));
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current) {
        return;
      }

      setActivePairIndex((currentIndex) => getWrappedPairIndex(currentIndex + 1));
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  if (!activePair) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 lg:px-6 lg:py-20" aria-labelledby="world-gallery-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(202,184,142,0.11),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(217,215,204,0.08),transparent_28%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone/20 to-transparent" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(260px,0.4fr)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-earth)]">Screenshots</p>
            <h2 id="world-gallery-title" className="font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
              Legacy of Mind Gallery
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
              Screenshots from the world, enemies, environments, and moments inside Legacy of Mind.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm leading-7 text-muted lg:justify-end">
            <Images aria-hidden="true" className="h-4 w-4 shrink-0 text-stone/70" />
            <span>Auto-playing gallery. Click any pair to explore.</span>
          </div>
        </div>

        <div className="relative border border-stone/15 bg-black/50 p-3 shadow-[0_0_80px_rgba(0,0,0,0.55),inset_0_0_42px_rgba(255,255,255,0.025)] md:p-5">
          <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_38%_35%,rgba(217,215,204,0.1),transparent_32%),radial-gradient(circle_at_72%_62%,rgba(142,111,72,0.12),transparent_34%)] blur-3xl" aria-hidden="true" />

          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.65fr)]">
            <div className="relative grid gap-3">
              {activePair.images.map((image, pairImageIndex) => (
                <div
                  key={`${image.src}-${pairImageIndex}`}
                  className="group relative overflow-hidden border border-stone/20 bg-black shadow-[0_0_44px_rgba(217,215,204,0.06)] transition duration-300 hover:border-stone/32"
                >
                  <div className="relative aspect-[21/9]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="eager"
                        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.015 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_46%,rgba(0,0,0,0.32)_100%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.24))]" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/82 via-black/30 to-transparent p-4 md:p-5">
                      <p className="font-display text-base uppercase tracking-[0.18em] text-stone/90 md:text-lg">
                        Screenshot {activePair.imageIndexes[pairImageIndex] + 1}
                      </p>
                      <p className="hidden text-xs uppercase tracking-[0.24em] text-muted md:block">
                        {String(activePair.imageIndexes[pairImageIndex] + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute left-3 top-1/2 flex -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => setManualPairIndex(activePairIndex - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center border border-stone/20 bg-black/55 text-stone backdrop-blur transition duration-300 hover:-translate-x-0.5 hover:border-stone/45 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone"
                  aria-label="Previous screenshots"
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute right-3 top-1/2 flex -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => setManualPairIndex(activePairIndex + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center border border-stone/20 bg-black/55 text-stone backdrop-blur transition duration-300 hover:translate-x-0.5 hover:border-stone/45 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone"
                  aria-label="Next screenshots"
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:max-h-[760px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1">
              {galleryPairs.map((pair, pairIndex) => {
                const isActive = pairIndex === activePairIndex;
                const [firstIndex, secondIndex] = pair.imageIndexes;

                return (
                  <button
                    key={`${pair.images[0].src}-${pair.images[1].src}`}
                    type="button"
                    onClick={() => setManualPairIndex(pairIndex)}
                    aria-label={`View screenshots ${firstIndex + 1} and ${secondIndex + 1}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative overflow-hidden border bg-black text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone lg:odd:translate-x-4 ${
                      isActive
                        ? 'border-stone/55 shadow-[0_0_28px_rgba(217,215,204,0.11)]'
                        : 'border-border opacity-70 hover:-translate-y-0.5 hover:border-stone/35 hover:opacity-100'
                    }`}
                  >
                    <div className="grid aspect-[2/1] grid-cols-2 gap-px">
                      {pair.images.map((image, imageIndex) => (
                        <img
                          key={`${image.src}-thumb-${imageIndex}`}
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/10 to-transparent" aria-hidden="true" />
                    <span className="absolute bottom-2 left-3 font-display text-xs uppercase tracking-[0.2em] text-stone/82">
                      {String(firstIndex + 1).padStart(2, '0')} - {String(secondIndex + 1).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {galleryPairs.map((pair, index) => (
              <button
                key={`${pair.images[0].src}-dot`}
                type="button"
                onClick={() => setManualPairIndex(index)}
                aria-label={`Go to screenshot pair ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone ${
                  index === activePairIndex ? 'w-10 bg-stone/85' : 'w-5 bg-stone/22 hover:bg-stone/45'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
