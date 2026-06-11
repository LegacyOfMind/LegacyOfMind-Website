import { CTAButton } from '../components/CTAButton';

const storyParagraphs = [
  'I have loved soulslike games for as long as I can remember. As a kid, I was always drawn to mysterious worlds, powerful beasts, dark fantasy, and the feeling of stepping into a place that felt much bigger than me. Films like Monster Hunter stayed with me because I loved seeing huge creatures that felt ancient, dangerous, and impossible to fully understand.',
  'Before Legacy of Mind became what it is today, it was called The Wasteland Trials. The original idea was set on another planet, where one large entity would follow the player and you would have to survive. At the time, that felt like the game I wanted to make.',
  'But after spending so many hours building it, I started to realise I could create something bigger. I wanted a better map, a stronger world, and a game that felt closer to what I had always imagined. That idea became Hollowed Out, a similar concept with more monsters and a setting based on Earth in the early 2000s.',
  'The problem was that I did not have a computer strong enough to build it properly. Even simple tasks could take more than 12 hours to load, no matter how much I tried to optimise things. It was frustrating because I could see the game in my head, but the hardware was constantly holding me back.',
  'After finishing college, I worked as a painter for around three months and picked up as many shifts as I could. And finally, I could afford the PC I needed.',
  'When I got that PC, everything changed. I realised my skillset and my ambition had grown beyond what Hollowed Out was. That was when I started Legacy of Mind.',
  'While studying a medicinal chemistry degree and working in a pub to afford the external help I needed for the game, assets and normal university life, I spent a lot of time thinking about new potential ideas about the game. I would be at work and just space out, brainstorming Legacy of Mind in my head. Environments, enemies, mechanics, progression, story, atmosphere, all of it.',
  'After three and a half years, a lot of all-nighters, and spending almost every spare penny I had on the game, Legacy of Mind became more than just a project to me. It basically is becoming my identity, which is probably why I am very self-critical of my game at times. If I want my name to be associated with something I have made, I want it to be perfect.',
  'I must say. It has been a very hard journey, spending more money and time on one part of the game leads to negligence of another mechanic or part of the game. There has been lots of jumping from one project within Legacy of Mind to another.',
  'The game combines things I have loved from titles like Stalker, Metro Exodus, Days Gone, Elden Ring, Remnant, Call of Duty, Forza, Fortnite and basically every game I grew up playing and my favourite little mechanics from each.',
  'The map is one of the things I care about most. Every metre of the map is handmade. Nothing is procedurally generated.',
  'The way I made the map look as beautiful and cohesive as it is required building a relationship with many asset developers. A lot of my work came from me liking an asset, adding it to my game, wanting to expand on it, and then getting in touch with the creator.',
  'For example, the weapons in the game were from an asset store page, however there were no attachments to these weapons. So I reached out and over the course of the next year, I built a strong relationship with the creator and would request projects relating to my game for custom orders. This is how my whole attachment system was built within a few months.',
  'A lot of the trees in Legacy of Mind are placed individually. I did that because I wanted the environment to match what I imagined, not just fill empty space. The map, the atmosphere, the level design, and the environmental storytelling all matter to me.',
  'There was a time when my motivation was at its lowest. I lost around three months of progress, built from eight hour days. That night brought me to tears, and I remember it very clearly.',
  'But then I walked around the small zone I still had backed up. There were no weapons and no enemies, because those were in other scenes. It was literally just the trees, wind, grass and buildings.',
  'And I loved it.',
  'Walking through that little area reminded me why I started. The atmosphere alone made me want to keep going. I rebuilt what I had lost, made that zone better than it was before, and carried on developing the game. That part of the map is now my personal favourite.',
  'I have now graduated and am currently putting all my time and effort into my game.',
  'Whether Legacy of Mind succeeds or whether I become another indie developer who never makes a profit, I will never regret the time, money, and effort I have put into it. I hope this story motivates anyone reading it, especially other solo developers and creators who are trying to build something while life is still happening around them.',
  'I understand how hard indie games are to make. I understand how hard it is to get views, build a community, and convince people to care about something you have made.',
  'If people had not helped me, given me opportunities, shared advice, or just supported me in general, I would never have finished the version of Legacy of Mind you see today.',
  "I'll see you all at Steam Next Fest this October!!",
];

type PullQuoteProps = {
  children: string;
};

function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-14 max-w-4xl px-2 py-4 text-center md:my-16 md:px-8 md:py-6">
      <p className="mx-auto max-w-3xl font-display text-xl uppercase leading-snug tracking-[0.055em] text-[#e5d9bc] md:text-3xl md:tracking-[0.07em]">
        "{children}"
      </p>
      <div className="mx-auto mt-6 h-px w-20 bg-[var(--color-earth)]/28" aria-hidden="true" />
      <footer className="mt-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted">
        - Developer of Legacy of Mind
      </footer>
    </blockquote>
  );
}

export function MyStory() {
  return (
    <main className="relative z-10 pt-28">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-20 lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">From the solo developer</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-tight tracking-[0.1em] text-[var(--color-parchment)] md:text-7xl">
          My Story
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
          The story behind Legacy of Mind, from a childhood love of monsters and soulslike worlds to a handmade indie FPS horror soulslike.
        </p>
      </section>

      <article className="mx-auto max-w-5xl px-4 pb-24 lg:px-6">
        <PullQuote>I honestly cannot wait to play my own game.</PullQuote>

        <div className="mt-10 max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(0, 6).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>I could see the game in my head, but the hardware was constantly holding me back.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(6, 9).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>Legacy of Mind became more than just a project to me.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(9, 12).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>AI can help, but you can feel the difference between something made with passion and something made for convenience.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(12, 15).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>Every metre of the map is handmade. Nothing is procedurally generated.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(15, 19).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>When I lost months of progress, I mentally hit rock bottom, but the world I had left reminded me why I started.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(19).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <CTAButton href="/" variant="ghost" className="w-full sm:w-auto">
            Back to Home
          </CTAButton>
        </div>
      </article>
    </main>
  );
}
