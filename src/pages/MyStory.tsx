import { CTAButton } from '../components/CTAButton';

const storyParagraphs = [
  'I have loved soulslike games for as long as I can remember. As a kid, I was always drawn to mysterious worlds, powerful beasts, dark fantasy, and the feeling of stepping into a place that felt much bigger than me. Films like Monster Hunter stayed with me because I loved seeing huge creatures that felt ancient, dangerous, and impossible to fully understand.',
  'Before Legacy of Mind became what it is today, it was called The Wasteland Trials. The original idea was set on another planet, where one large entity would follow the player and you would have to survive. At the time, that felt like the game I wanted to make.',
  'But after spending so many hours building it, I started to realise I could create something bigger. I wanted a better map, a stronger world, and a game that felt closer to what I had always imagined. That idea became Hollowed Out, a similar concept with more monsters and a setting based on Earth in the early 2000s.',
  'The problem was that I could not afford a computer strong enough to build it properly. Even simple tasks could take more than 12 hours to load, no matter how much I tried to optimise things. It was frustrating because I could see the game in my head, but the hardware was constantly holding me back.',
  'After finishing college, I worked as a painter for around three months and picked up as many shifts as I could. I did it so I could afford a strong PC and finally build the game the way I wanted to build it.',
  'When I got that PC, everything changed. I realised my skillset and my ambition had grown beyond what Hollowed Out showed. That was when I started Legacy of Mind.',
  'While studying a medicinal chemistry degree and working in a pub to afford assets, freelance work, and normal university life, I spent a lot of time thinking about the game. I would be at work and just space out, brainstorming Legacy of Mind in my head. Environments, enemies, mechanics, progression, story, atmosphere, all of it.',
  'After three and a half years, a lot of all-nighters, and spending almost every spare penny I had on the game, Legacy of Mind became more than just a project to me. There were times where I put the game before myself. Every free night I had went into building it.',
  'I have 4 TB of storage on my computer, and I am still constantly deleting old brainstorm documents, videos, exports, and unfinished ideas just to make space for new versions of Legacy of Mind.',
  'The reason it took so long to get trailers and cutscenes finished is because so much freelance work was happening across different parts of the game. Different people were working on different scenes, cutscenes, assets, and systems, and I was constantly waiting, reviewing, integrating, rebuilding, and trying to keep everything consistent.',
  'I have always been creative, but coding was never the part I naturally enjoyed. I do use AI in my personal life, and it has helped me understand things like setting up a company, legal basics, marketing steps, planning, and finding creators to contact. It has also helped me think through ideas.',
  'But there are parts of Legacy of Mind where I have been, and still am, very against using AI. That includes in-game videos, narration, in-game assets, and the parts of the game that need real creative craft behind them.',
  'I would rather spend money on an asset made by a professional team over a long period of time than generate something quickly with AI. AI can be useful, but it lacks passion, and I think that shows.',
  'Legacy of Mind was created from what I always wanted to make as a kid. AI did not give me that. It cannot replicate the connection I have to this game.',
  'The game combines things I have loved from titles like Stalker, Metro Exodus, Days Gone, Elden Ring, Remnant, Call of Duty, and even a smaller game I used to play with my friends called Combat Master. I always liked how simple and satisfying its attachment system felt, and that influenced how I thought about weapon customisation.',
  'The map is one of the things I care about most. Every metre of the map is handmade. Nothing is procedurally generated.',
  'Yes, I use assets, and I have also had custom assets made based on other assets, but I am very particular about what goes into the game. I worked hard in the jobs I had so I could afford the exact assets I wanted. Sometimes I would spend hours searching stores just to find one asset that matched the feeling I had in my head. Even then, I would often create my own variation of it.',
  'A lot of the trees in Legacy of Mind are placed individually. I did that because I wanted the environment to match what I imagined, not just fill empty space. The map, the atmosphere, the level design, and the environmental storytelling all matter to me.',
  'There were sacrifices too. I postponed trips back home to see my family and siblings because I was in the middle of something important for the game. I had people tell me I should have started smaller, released the first draft, given up, or cut my losses.',
  'I do not have an addictive personality, and I do not have OCD, but Legacy of Mind had to feel right to me. I think the core reason is simple. I honestly cannot wait to play my own game. I cannot wait to be the first real playtester in the world I have spent years building.',
  'There was a time when my motivation was at its lowest. I lost around three months of progress, built from eight hour days. That night brought me to tears, and I remember it very clearly.',
  'But then I walked around the small zone I still had backed up. There were no weapons and no enemies, because those were in other scenes. It was just the environment.',
  'And I loved it.',
  'Walking through that little area reminded me why I started. The atmosphere alone made me want to keep going. I rebuilt what I had lost, made that zone better than it was before, and carried on developing the game. That part of the map is now my personal favourite.',
  'I have my final university exam on 23 May 2026. I am completely unprepared for it because of working my job and working on Legacy of Mind. I deliberately chose to go live with the website, Steam page, and Discord server on that day because it is my final exam. I do not want to get carried away before then. I want to finish the exam, come home, and then release everything properly.',
  'Now that university is coming to an end, I believe Legacy of Mind can be finished within the next two or three months.',
  'Whether Legacy of Mind succeeds or whether I become another indie developer who never makes a profit, I will never regret the time, money, and effort I have put into it. I hope this story motivates anyone reading it, especially other solo developers and creators who are trying to build something while life is still happening around them.',
  'I understand how hard indie games are to make. I understand how hard it is to get views, build a community, and convince people to care about something you have made. That is why I am completely open to people promoting their own work on my server.',
  'If people had not helped me, given me opportunities, offered discounts, shared advice, or let me do things I would not normally have been able to do, I would never have finished the version of Legacy of Mind you see today.',
  'So if you are a player, a creator, a streamer, or an indie developer, I hope the Legacy of Mind community can also be a place where I can help people who want to create their own games. Whether you need advice, have questions, or want to understand the process from the first idea to publishing on Steam, I want that knowledge to be shared.',
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
          The story behind Legacy of Mind, from a childhood love of monsters and soulslike worlds to a handmade indie horror RPG.
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
          {storyParagraphs.slice(6, 10).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>Legacy of Mind became more than just a project to me.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(10, 15).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>AI can help, but you can feel the difference between something made with passion and something made for convenience.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(15, 20).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>Every metre of the map is handmade. Nothing is procedurally generated.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(20, 24).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <PullQuote>When I lost months of progress, I mentally hit rock bottom, but the world I had left reminded me why I started.</PullQuote>

        <div className="max-w-3xl space-y-7 text-base leading-8 text-muted md:text-lg md:leading-9">
          {storyParagraphs.slice(24).map((paragraph) => (
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
