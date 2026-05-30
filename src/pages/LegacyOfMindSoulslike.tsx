import { BookOpenText, Gamepad2, PlayCircle, RadioTower, Shield, Skull, UsersRound, Video, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTAButton } from '../components/CTAButton';
import { DiscordIcon } from '../components/DiscordIcon';
import { SEO } from '../components/SEO';
import { SteamIcon } from '../components/PlatformIcons';
import { siteLinks } from '../data/siteLinks';

const pageTitle = 'Legacy of Mind: A Dark FPS Soulslike for Fans of Remnant, STALKER, and Elden Ring';
const pageDescription =
  'Legacy of Mind is a dark FPS soulslike / first-person survival action RPG by Solus Studios, now live to wishlist on Steam. Watch the story trailer, join Discord, and apply for Closed Beta playtesting access.';
const pageUrl = 'https://solusstudios.uk/legacy-of-mind-dark-fps-soulslike';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'VideoGame',
      name: 'Legacy of Mind',
      url: pageUrl,
      description: pageDescription,
      genre: ['Dark FPS soulslike', 'First-person survival action RPG', 'Survival action RPG', 'Indie soulslike'],
      gamePlatform: ['PC', 'Steam'],
      operatingSystem: 'Windows',
      publisher: {
        '@type': 'Organization',
        name: 'Solus Studios',
        url: 'https://solusstudios.uk',
      },
      applicationCategory: 'Game',
    },
    {
      '@type': 'Article',
      headline: pageTitle,
      description: pageDescription,
      mainEntityOfPage: pageUrl,
      author: {
        '@type': 'Organization',
        name: 'Solus Studios',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Solus Studios',
        url: 'https://solusstudios.uk',
      },
    },
  ],
};

const featureCards = [
  {
    icon: Skull,
    title: 'Bosses and pressure',
    text: 'Monarchs, hostile zones, and enemy encounters are built around tension, learning, and surviving under pressure.',
  },
  {
    icon: Shield,
    title: 'Survival RPG systems',
    text: 'Scavenge resources, unlock perks, customise weapons, and push deeper into a world that does not feel safe.',
  },
  {
    icon: RadioTower,
    title: 'First-person combat',
    text: 'Firearms and weapon customisation sit inside a darker survival action RPG structure, not a simple shooter loop.',
  },
];

function ArticleSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-earth)]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
        {title}
      </h2>
      <div className="mt-6 space-y-6 text-base leading-8 text-muted md:text-lg md:leading-9">{children}</div>
    </section>
  );
}

export function LegacyOfMindSoulslike() {
  return (
    <main className="relative z-10 pt-28">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageUrl}
        ogTitle="Legacy of Mind: A Dark FPS Soulslike from Solus Studios"
        ogDescription="Wishlist Legacy of Mind on Steam, watch the official story trailer, join Discord, and apply for Closed Beta playtesting access."
        schema={schema}
      />

      <article>
        <section className="relative overflow-hidden border-b border-border px-4 py-20 lg:px-6">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.58),rgba(0,0,0,0.9)),url('/assets/images/gallery/gallery-13.png')] bg-cover bg-center opacity-70" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(217,215,204,0.12),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.18),#020202_96%)]" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">Solus Studios</p>
            <h1 className="mt-5 max-w-5xl font-display text-4xl uppercase leading-tight tracking-[0.08em] text-[var(--color-parchment)] md:text-6xl">
              Legacy of Mind: A Dark FPS Soulslike for Fans of Remnant, STALKER, and Elden Ring
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone/82 md:text-xl md:leading-9">
              A first-person survival action RPG from Solus Studios, now live to wishlist on Steam.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon}>
                Wishlist on Steam
              </CTAButton>
              <CTAButton href={siteLinks.trailer} external variant="youtube" icon={PlayCircle}>
                Watch the Story Trailer
              </CTAButton>
              <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon}>
                Join Discord / Apply for Closed Beta
              </CTAButton>
            </div>
          </div>
        </section>

        <ArticleSection id="opening-hook" eyebrow="Discovery" title="A Darker Kind of First-Person Survival RPG">
          <p>
            Soulslike players are always looking for worlds that feel dangerous, strange, and worth surviving. Not just
            difficult for the sake of it, but places with atmosphere, pressure, and the sense that every step forward has
            a cost.
          </p>
          <p>
            <strong className="font-semibold text-stone">Legacy of Mind</strong> is not just a horror game. It is a dark FPS
            soulslike and first-person survival action RPG with horror atmosphere, survival pressure, boss fights,
            exploration, weapon customisation, and a fractured world built to be pushed through piece by piece.
          </p>
          <p>
            If you are looking for an upcoming indie game that sits somewhere between a soulslike FPS, a dark indie RPG,
            and a survival action RPG, <a href={siteLinks.steam} target="_blank" rel="noopener noreferrer" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">wishlist Legacy of Mind on Steam</a> and follow the road to release.
          </p>
        </ArticleSection>

        <section className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-3 lg:px-6">
          {featureCards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="border border-border bg-black/38 p-5 shadow-insetStone transition duration-300 hover:-translate-y-1 hover:border-stone/30 hover:bg-white/[0.035]">
                <div className="flex items-center gap-3 text-stone">
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--color-earth)]" />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">{card.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
              </div>
            );
          })}
        </section>

        <ArticleSection id="what-is-legacy-of-mind" eyebrow="The Game" title="What Is Legacy of Mind?">
          <p>
            <strong className="font-semibold text-stone">Legacy of Mind game</strong> is a dark first-person survival
            action RPG and indie soulslike by <Link to="/" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">Solus Studios</Link>, now live to wishlist on Steam.
            It takes place in a fractured post-apocalyptic world where reality and dreamlike horror have collapsed into
            one broken landscape.
          </p>
          <p>
            Players explore hostile zones, scavenge resources, customise weapons, unlock perks, survive enemies, and face
            powerful bosses known as Monarchs. The world is dark and psychological, but the focus is broader than pure
            horror: combat, progression, survival choices, and exploration all matter.
          </p>
          <p>
            Legacy of Mind is built by a solo developer with a clear vision for a darker kind of first-person
            soulslike. The aim is not to copy Elden Ring, Remnant, STALKER, or Metro, but to create something that can
            sit near those games for players who like bleak worlds, dangerous encounters, and atmosphere that lingers.
          </p>
        </ArticleSection>

        <ArticleSection id="soulslike-players" eyebrow="For Soulslike Players" title="Why Soulslike Players Should Care">
          <p>
            Elden Ring players, Dark Souls fans, Bloodborne fans, Lies of P players, Lords of the Fallen players, and
            soulslike players in general tend to care about more than difficulty. They care about danger, discovery,
            memorable enemies, readable challenge, and the feeling of learning a hostile world over time.
          </p>
          <p>
            Legacy of Mind is being built around that kind of pressure. Exploration should feel uncertain. Bosses should
            feel like events. Enemy encounters should ask the player to pay attention, adapt, and survive rather than
            simply rush forward.
          </p>
          <p>
            The goal is challenge without pretending frustration is the same thing as depth. If you enjoy progression,
            tension, atmosphere, and surviving hostile zones, this dark FPS soulslike is one to watch.
          </p>
          <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon} className="mt-3 w-full sm:w-auto">
            Wishlist Legacy of Mind on Steam
          </CTAButton>
        </ArticleSection>

        <ArticleSection id="remnant-stalker-metro" eyebrow="For Shooter RPG Fans" title="Why Remnant, STALKER, and Metro Fans Should Care">
          <p>
            Remnant fans and Remnant 2 fans may recognise the appeal of mixing boss pressure, build identity, and combat
            rhythm with a darker world. STALKER fans and Metro fans may connect more with the survival pressure,
            scavenging, bleak environments, and post-apocalyptic atmosphere.
          </p>
          <p>
            Legacy of Mind uses first-person combat, firearms, weapon customisation, hostile environments, and resource
            pressure inside a survival action RPG structure. It is closer to a dark FPS soulslike than a traditional
            horror game, and closer to a handcrafted indie RPG than a simple shooter.
          </p>
          <p>
            If you like games where the world itself feels threatening, the <a href={siteLinks.trailer} target="_blank" rel="noopener noreferrer" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">Legacy of Mind Story Trailer</a> is the fastest way to understand the tone.
          </p>
        </ArticleSection>

        <section id="closed-beta" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
          <div className="border border-[#8791ff]/28 bg-[linear-gradient(135deg,rgba(17,21,34,0.9),rgba(0,0,0,0.76))] p-6 shadow-[0_0_60px_rgba(88,101,242,0.12)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#aab2ff]">Closed Beta Access</p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
              Apply for Legacy of Mind Closed Beta Access
            </h2>
            <div className="mt-6 grid gap-7 text-base leading-8 text-muted md:grid-cols-[1.2fr_0.8fr] md:text-lg md:leading-9">
              <div className="space-y-6">
                <p>
                  Players can apply for free Closed Beta access through the official Legacy of Mind Discord. Selected
                  playtesters may receive a free Steam key when the beta build is ready.
                </p>
                <p>
                  Playtesters can give feedback, report bugs, discuss balance, and help shape the final stages of the
                  game. Creators and streamers are free to make content from the beta where allowed. There is no forced
                  posting requirement.
                </p>
              </div>
              <div className="border border-stone/12 bg-black/38 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-stone">Playtesting community</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Join Discord, request access, and stay close to beta updates from Solus Studios.
                </p>
                <div className="mt-5 grid gap-3">
                  <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon}>
                    Apply for Closed Beta
                  </CTAButton>
                  <CTAButton href="/closed-beta" variant="secondary" icon={Gamepad2}>
                    Apply for Legacy of Mind Closed Beta access
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ArticleSection id="streamers-creators" eyebrow="Creators" title="For Streamers and Creators">
          <p>
            Legacy of Mind is opening early access opportunities for selected streamers and content creators. The Closed
            Beta gives creators a chance to play unseen content before release, capture early footage from a dark
            first-person soulslike, and decide whether it fits their audience.
          </p>
          <p>
            Creators can stream, record, make videos, cut shorts, or simply give private feedback if they prefer. The
            game may be especially interesting for boss attempts, first reactions, dark indie games, soulslike
            discovery, Steam wishlist game coverage, and upcoming indie RPG videos.
          </p>
          <CTAButton href={siteLinks.discord} external variant="discord" icon={Video} className="mt-3 w-full sm:w-auto">
            Join the Creator / Playtester Community
          </CTAButton>
        </ArticleSection>

        <ArticleSection id="indie-dev-community" eyebrow="Community" title="A Discord for Players, Streamers, and Indie Developers">
          <p>
            The <a href={siteLinks.discord} target="_blank" rel="noopener noreferrer" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">Legacy of Mind Discord</a> is not only for the game itself.
            It is also being built as a small indie game Discord for players, streamers, creators, and indie game developers.
          </p>
          <p>
            The server welcomes developers from Unity, Unreal Engine, Godot, GameMaker, custom engines, and anything in
            between. Developers can showcase their own games, post Steam pages, share clips and screenshots, ask for
            feedback, meet other developers, speak with players and creators, and find people interested in indie games.
          </p>
          <p>
            If you are looking for a game dev community or indie developer community that also connects with players and
            content creators, the server is being shaped around that mix.
          </p>
          <CTAButton href={siteLinks.discord} external variant="discord" icon={UsersRound} className="mt-3 w-full sm:w-auto">
            Join the Discord
          </CTAButton>
        </ArticleSection>

        <ArticleSection id="developer-story" eyebrow="Developer Story" title="Built By One Developer">
          <p>
            Legacy of Mind has been built over several years by a solo developer while studying at university and
            working to fund development. The game has gone through multiple versions, setbacks, rebuilt areas, and years
            of iteration.
          </p>
          <p>
            The goal is simple: build the kind of dark FPS soulslike world the developer always wanted to play. A place
            with ruined environments, strange enemies, first-person weapons, survival pressure, and bosses that make the
            world feel bigger than the player.
          </p>
          <p>
            You can read more on the <Link to="/my-story" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">Solus Studios developer story page</Link>, or start with the Steam page, trailer, and Discord if you just want to get closer to the game.
          </p>
          <CTAButton href="/my-story" variant="ghost" icon={BookOpenText} className="mt-3 w-full sm:w-auto">
            Read the Developer Story
          </CTAButton>
        </ArticleSection>

        <section className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-6">
          <div className="border border-stone/18 bg-black/58 p-6 text-center shadow-insetStone md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-earth)]">Wishlist, watch, join, playtest</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
              Legacy of Mind is now live to wishlist on Steam.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
              Watch the official story trailer, wishlist the game, join the Discord, and apply for Closed Beta access
              through Solus Studios.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon}>
                Wishlist on Steam
              </CTAButton>
              <CTAButton href={siteLinks.trailer} external variant="youtube" icon={PlayCircle}>
                Watch Trailer
              </CTAButton>
              <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon}>
                Join Discord
              </CTAButton>
              <CTAButton href="/closed-beta" variant="secondary" icon={Wrench}>
                Apply for Closed Beta
              </CTAButton>
            </div>
            <div className="mt-8 text-sm leading-7 text-muted">
              <Link to="/" className="text-[var(--color-parchment)] underline decoration-stone/25 underline-offset-4 hover:text-stone">
                Visit the Solus Studios homepage
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
