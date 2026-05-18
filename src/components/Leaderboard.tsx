import { Trophy } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const podiumSlots = [
  {
    rank: '1st',
    player: 'Coming Soon',
    time: '--:--:--',
    status: 'Awaiting first official clear',
    tone: 'border-[rgba(182,161,118,0.38)] bg-[rgba(182,161,118,0.055)]',
    iconTone: 'text-[var(--color-earth)]',
    order: 'order-1 md:order-2',
    height: 'md:min-h-[20rem]',
  },
  {
    rank: '2nd',
    player: 'Coming Soon',
    time: '--:--:--',
    status: 'Record slot opens in playtesting',
    tone: 'border-stone/22 bg-white/[0.035]',
    iconTone: 'text-stone/70',
    order: 'order-2 md:order-1',
    height: 'md:min-h-[17rem]',
  },
  {
    rank: '3rd',
    player: 'Coming Soon',
    time: '--:--:--',
    status: 'Record slot opens in playtesting',
    tone: 'border-[rgba(120,87,58,0.5)] bg-[rgba(120,87,58,0.055)]',
    iconTone: 'text-[#9b7758]',
    order: 'order-3 md:order-3',
    height: 'md:min-h-[15.5rem]',
  },
];

export function Leaderboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <SectionTitle
        eyebrow="Leaderboard"
        title="Fastest Known Survivors"
        text="The first official completion times will be recorded after playtesting begins."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-end">
        {podiumSlots.map((slot) => (
          <article
            key={slot.rank}
            className={`${slot.order} ${slot.height} group relative flex flex-col justify-between overflow-hidden border ${slot.tone} p-6 shadow-insetStone transition duration-300 hover:-translate-y-1 hover:border-stone/42 hover:bg-white/[0.055]`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone/28 to-transparent" aria-hidden="true" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">Rank</p>
                <h3 className="mt-3 font-display text-5xl uppercase leading-none tracking-[0.08em] text-stone">
                  {slot.rank}
                </h3>
              </div>
              <div className={`border border-border bg-black/35 p-3 ${slot.iconTone}`}>
                <Trophy aria-hidden="true" className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted">Player</p>
              <p className="mt-2 text-xl text-stone">{slot.player}</p>
              <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Time</p>
                  <p className="mt-2 font-display text-2xl text-[var(--color-parchment)]">{slot.time}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Status</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{slot.status}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 border-l border-[var(--color-earth)]/45 pl-4 text-sm leading-7 text-muted">
        Official records will begin once early access and playtesting opens.
      </p>
    </section>
  );
}
