import { ClipCard } from '../components/ClipCard';
import { CTAButton } from '../components/CTAButton';
import { Leaderboard } from '../components/Leaderboard';
import { SectionTitle } from '../components/SectionTitle';
import { SubmitClipForm } from '../components/SubmitClipForm';
import { clips } from '../data/clips';
import { siteLinks } from '../data/siteLinks';

export function Community() {
  return (
    <main className="relative z-10 pt-28">
      <section className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">Players and creators</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-tight tracking-[0.1em] text-[var(--color-parchment)] md:text-7xl">
          Community
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-muted">
          Fastest survivors. Best clips. The players and creators stepping into the first-person soulslike world early.
        </p>
        <p className="mx-auto mt-7 max-w-4xl leading-8 text-muted">
          Community clips may be featured on this page and across official Legacy of Mind channels. Every featured clip will credit the streamer or creator who submitted it, including a link of their choice.
        </p>
      </section>

      <Leaderboard />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <SectionTitle
          eyebrow="Featured Clips"
          title="Clips of the Week"
          text="Featured clips will include a credit link for the streamer or content creator who submitted them."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {clips.map((clip) => (
            <ClipCard key={clip.title} clip={clip} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="border border-border bg-black/36 p-6 transition duration-300 hover:border-stone/30 hover:bg-white/[0.035] md:p-8">
          <SectionTitle
            eyebrow="Submit"
            title="Share your best Legacy of Mind clips"
            text="Submit anything worth sharing: a close escape, a funny death, a boss attempt, a strange discovery, a reaction, or a moment you think other players would enjoy. Featured clips can appear on the website and official channels with credit."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={siteLinks.discord} external>Submit Through Discord</CTAButton>
            <button
              type="button"
              onClick={() => document.getElementById('submit-clip-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="inline-flex min-h-12 items-center justify-center border border-stone/35 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone transition duration-300 hover:border-stone/70 hover:bg-white/[0.08]"
            >
              Submit Clip
            </button>
          </div>
        </div>
      </section>

      <SubmitClipForm />
    </main>
  );
}
