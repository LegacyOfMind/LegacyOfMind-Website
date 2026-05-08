export type LeaderboardRow = {
  rank: number;
  name: string;
  time: string;
  platform: string;
  linkLabel: string;
  href: string;
  date: string;
};

const featuredRows: LeaderboardRow[] = [
  {
    rank: 1,
    name: 'Awaiting first survivor',
    time: '--:--:--',
    platform: 'Coming soon',
    linkLabel: 'Coming soon',
    href: '#',
    date: 'Coming soon',
  },
  {
    rank: 2,
    name: 'Awaiting first survivor',
    time: '--:--:--',
    platform: 'Coming soon',
    linkLabel: 'Coming soon',
    href: '#',
    date: 'Coming soon',
  },
  {
    rank: 3,
    name: 'Awaiting first survivor',
    time: '--:--:--',
    platform: 'Coming soon',
    linkLabel: 'Coming soon',
    href: '#',
    date: 'Coming soon',
  },
];

// Manually replace placeholder rows as Closed Beta speedrun submissions arrive.
export const leaderboardRows: LeaderboardRow[] = Array.from({ length: 100 }, (_, index) => {
  const rank = index + 1;
  return (
    featuredRows[index] ?? {
      rank,
      name: `Open ranking slot ${rank}`,
      time: '--:--:--',
      platform: 'Awaiting run',
      linkLabel: 'Coming soon',
      href: '#',
      date: 'Coming soon',
    }
  );
});
