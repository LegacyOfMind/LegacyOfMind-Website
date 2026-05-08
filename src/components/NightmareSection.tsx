import { motion } from 'framer-motion';
import type { NightmareSectionData } from '../data/nightmareSections';

type NightmareSectionProps = {
  section: NightmareSectionData;
  reverse?: boolean;
};

export function NightmareSection({ section, reverse = false }: NightmareSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 lg:px-6 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-muted">{section.eyebrow}</p>
        <h2 className="font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
          {section.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">{section.text}</p>
      </div>
      <div className="group relative aspect-[16/9] min-h-[260px] overflow-hidden border border-border bg-charcoal shadow-insetStone md:min-h-[320px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(230,230,220,0.13),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_34%),linear-gradient(180deg,#151515,#050505)]" />
        <div className="absolute inset-0 opacity-45 transition duration-700 group-hover:scale-105">
          <div className="absolute left-1/2 top-0 h-full w-px bg-stone/15" />
          <div className="absolute bottom-12 left-10 right-10 h-px bg-stone/10" />
          <div className="absolute left-12 top-14 h-28 w-28 border border-stone/10" />
          <div className="absolute bottom-16 right-14 h-36 w-36 rounded-full border border-stone/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
          <p className="max-w-xs font-display text-lg uppercase tracking-[0.22em] text-stone/72">
            {section.imageLabel}
          </p>
        </div>
        {section.imageSrc && (
          <img
            src={section.imageSrc}
            alt={section.imageAlt ?? section.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full bg-black object-contain transition duration-700 group-hover:scale-[1.015]"
            style={{ objectPosition: section.imagePosition ?? 'center center' }}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_34%,rgba(0,0,0,0.18)_100%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.34))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>
    </motion.section>
  );
}
