import { useMemo, useState } from 'react';
import { leaderboardRows } from '../data/leaderboard';
import { SectionTitle } from './SectionTitle';

const rowsPerPage = 10;

export function Leaderboard() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const pageCount = Math.ceil(leaderboardRows.length / rowsPerPage);

  const visibleRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return leaderboardRows.slice(start, start + rowsPerPage);
  }, [page]);

  const searchResult = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return null;
    return leaderboardRows.find((row) => row.name.toLowerCase().includes(trimmed)) ?? null;
  }, [query]);

  const searchedWithoutMatch = query.trim().length > 0 && !searchResult;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <SectionTitle
        eyebrow="Leaderboard"
        title="Quickest Playthroughs"
        text="The quickest completed playthroughs will appear here once Closed Beta and community submissions begin. Search a name, scan the rankings, and see who pushed deepest through the broken world."
      />

      <div className="mt-8 grid gap-4 border border-border bg-black/30 p-4 md:grid-cols-[1fr_auto] md:items-end">
        <label className="grid gap-2 text-sm text-muted">
          Search player / creator name
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-field"
            placeholder="Type a name..."
          />
        </label>
        <div className="text-sm leading-6 text-muted">
          Tracking <span className="text-stone">{leaderboardRows.length}</span> ranking slots
        </div>
      </div>

      {searchResult && (
        <div className="mt-5 border border-stone/30 bg-white/[0.04] p-5 text-sm leading-7 text-muted">
          Found <span className="text-stone">{searchResult.name}</span> at{' '}
          <span className="font-display text-xl text-[var(--color-parchment)]">#{searchResult.rank}</span> with time{' '}
          <span className="text-stone">{searchResult.time}</span>. Platform / Link: {searchResult.platform} / {searchResult.linkLabel}. Date: {searchResult.date}.
        </div>
      )}

      {searchedWithoutMatch && (
        <div className="mt-5 border border-border bg-black/36 p-5 text-sm leading-7 text-muted">
          Not currently placed in the visible rankings. Current tracked range: <span className="text-stone">{leaderboardRows.length}+</span>.
        </div>
      )}

      <div className="mt-10 hidden overflow-hidden border border-border md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.22em] text-muted">
            <tr>
              <th className="px-5 py-4">Rank</th>
              <th className="px-5 py-4">Player / Creator Name</th>
              <th className="px-5 py-4">Time</th>
              <th className="px-5 py-4">Platform / Link</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={row.rank} className="border-t border-border bg-black/28 text-sm text-muted transition hover:bg-white/[0.035]">
                <td className="px-5 py-5 font-display text-xl text-stone">#{row.rank}</td>
                <td className="px-5 py-5 text-stone">{row.name}</td>
                <td className="px-5 py-5">{row.time}</td>
                <td className="px-5 py-5">
                  <a href={row.href} className="underline-offset-4 hover:text-stone hover:underline">
                    {row.platform} / {row.linkLabel}
                  </a>
                </td>
                <td className="px-5 py-5">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-4 md:hidden">
        {visibleRows.map((row) => (
          <article key={row.rank} className="border border-border bg-black/32 p-5 transition hover:border-stone/30">
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-2xl text-stone">#{row.rank}</span>
              <span className="text-sm text-muted">{row.time}</span>
            </div>
            <h3 className="mt-4 text-lg text-stone">{row.name}</h3>
            <p className="mt-2 text-sm text-muted">{row.platform} / {row.linkLabel}</p>
            <p className="mt-2 text-sm text-muted">{row.date}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
          className="border border-border px-4 py-2 text-sm uppercase tracking-[0.16em] text-muted transition hover:border-stone/40 hover:text-stone disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <div className="text-sm text-muted">
          Page <span className="text-stone">{page}</span> of <span className="text-stone">{pageCount}</span>
        </div>
        <button
          type="button"
          onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
          disabled={page === pageCount}
          className="border border-border px-4 py-2 text-sm uppercase tracking-[0.16em] text-muted transition hover:border-stone/40 hover:text-stone disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
