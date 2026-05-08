import { Play } from 'lucide-react';
import type { Clip } from '../data/clips';
import { CTAButton } from './CTAButton';

export function ClipCard({ clip }: { clip: Clip }) {
  return (
    <article className="group overflow-hidden border border-border bg-black/36 transition duration-300 hover:-translate-y-1 hover:border-stone/40">
      <div className="relative aspect-video overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(230,230,220,0.14),transparent_34%),linear-gradient(180deg,#171717,#050505)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-stone/30 bg-black/45 text-stone">
            <Play aria-hidden="true" className="h-7 w-7 fill-current" />
          </div>
        </div>
        <p className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.22em] text-muted">Clip Coming Soon</p>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl uppercase tracking-[0.08em] text-stone">{clip.title}</h3>
        <p className="mt-3 text-sm text-muted">Submitted by: {clip.submittedBy}</p>
        <a href={clip.creatorHref} className="mt-1 inline-block text-sm text-stone/80 underline-offset-4 hover:underline">
          {clip.creatorLink}
        </a>
        <p className="mt-4 min-h-12 text-sm leading-6 text-muted">{clip.description}</p>
        <CTAButton href={clip.watchHref} variant="ghost" external className="mt-5 min-h-10 px-4 py-2 text-xs">
          Watch
        </CTAButton>
      </div>
    </article>
  );
}
