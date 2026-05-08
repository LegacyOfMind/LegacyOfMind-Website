import { RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { listClipSubmissions, type ClipSubmission } from '../services/clipSubmissions';

export function SubmissionsDashboard() {
  const [submissions, setSubmissions] = useState<ClipSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadSubmissions() {
    setIsLoading(true);
    setError('');

    try {
      const rows = await listClipSubmissions();
      setSubmissions(rows);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Could not load submissions.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadSubmissions();
  }, []);

  return (
    <main className="relative z-10 pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">Internal review</p>
            <h1 className="mt-5 font-display text-4xl uppercase tracking-[0.1em] text-[var(--color-parchment)] md:text-6xl">
              Clip Submissions
            </h1>
            <p className="mt-5 max-w-3xl leading-8 text-muted">
              Review submitted MP4s directly in the browser. Each card keeps credit details, comment, date, status, and video preview together.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadSubmissions()}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-border px-4 py-2 text-sm uppercase tracking-[0.16em] text-muted transition hover:border-stone/40 hover:text-stone"
          >
            <RefreshCcw aria-hidden="true" className="h-4 w-4" />
            Refresh
          </button>
        </div>

        {isLoading && <div className="mt-10 border border-border bg-black/36 p-5 text-muted">Loading submissions...</div>}

        {error && (
          <div className="mt-10 border border-[var(--color-earth)]/40 bg-black/36 p-5 leading-7 text-[var(--color-parchment)]">
            {error}
          </div>
        )}

        {!isLoading && !error && submissions.length === 0 && (
          <div className="mt-10 border border-border bg-black/36 p-5 text-muted">No clip submissions yet.</div>
        )}

        <div className="mt-10 grid gap-6">
          {submissions.map((submission) => (
            <article key={submission.id} className="grid gap-5 border border-border bg-black/36 p-5 transition hover:border-stone/30 lg:grid-cols-[1.15fr_0.85fr]">
              <video className="aspect-video w-full bg-black" src={submission.video_url} controls preload="metadata" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-stone">
                    {submission.anonymous ? 'Anonymous submission' : submission.alias}
                  </h2>
                  <span className="border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted">{submission.status}</span>
                </div>
                <p className="mt-4 text-sm text-[var(--color-parchment)]">
                  {submission.anonymous ? 'No public credit requested' : `Platform: ${submission.platform}`}
                </p>
                {submission.comment ? (
                  <p className="mt-5 whitespace-pre-wrap leading-7 text-muted">{submission.comment}</p>
                ) : (
                  <p className="mt-5 text-sm text-muted">No additional comment.</p>
                )}
                <dl className="mt-6 grid gap-3 text-sm text-muted">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-stone/75">Submission date</dt>
                    <dd className="mt-1">{new Date(submission.created_at).toLocaleString()}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-stone/75">Video path</dt>
                    <dd className="mt-1 break-all">{submission.video_path}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
