import { Gamepad2, MessageCircle, Sparkles, UserRound, Video, Wrench } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { SectionTitle } from '../components/SectionTitle';
import { siteLinks } from '../data/siteLinks';

const steps = [
  'Join Discord',
  'Submit Form',
  'Request Access',
];

const reasons = [
  {
    icon: Gamepad2,
    text: 'Experience the vast desolate world before launch and follow new updates as the game moves toward release.',
  },
  {
    icon: Sparkles,
    text: 'Point out what feels great, what feels rough, and what would make the experience hit harder.',
  },
  {
    icon: MessageCircle,
    text: 'Ask the developer questions about the game, your feedback, or even your own indie project.',
  },
  {
    icon: Wrench,
    text: 'Send notes that can turn into real polish, cleaner balance, sharper pacing, and stronger encounters.',
  },
  {
    icon: Video,
    text: 'Capture early footage from a dark first-person soulslike before the wider Steam audience sees it.',
  },
  {
    icon: UserRound,
    text: 'Your clips, reactions, and best moments can be featured on the website and official channels with credit.',
  },
];

export function ClosedBeta() {
  return (
    <main className="relative z-10 pt-28">
      <section className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-[var(--color-earth)]">Early build access</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-tight tracking-[0.1em] text-[var(--color-parchment)] md:text-7xl">
          Closed Beta Access
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-muted">
          Step into the barren world of Legacy of Mind before release. Share honest thoughts, capture early footage, and help sharpen the experience before launch.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <CTAButton href={siteLinks.discord} external>
            Join Discord to Request Access
          </CTAButton>
          <CTAButton href={siteLinks.steam} external variant="secondary">
            Wishlist on Steam
          </CTAButton>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 lg:px-6">
        <div className="border border-border bg-black/42 p-6 text-lg leading-9 text-muted transition duration-300 hover:border-stone/25 hover:bg-white/[0.035] md:p-9">
          Closed Beta is an early access opportunity for players, creators, and community members who want to step into Legacy of Mind before launch. It is built for people who genuinely care about dark first-person soulslikes, survival, atmosphere, and punishing nightmare boss encounters.
          <br /><br />
          Some early players can receive access to the game for free before release. To get started, join Discord or submit the form, then request access and introduce yourself. Huge numbers are not the point here. Honest interest, good energy, and useful feedback matter more.
          <blockquote className="mt-8 border-l border-[var(--color-earth)]/55 pl-5 font-display text-3xl uppercase leading-snug tracking-[0.08em] text-[var(--color-parchment)] md:text-4xl">
            "Join a community of soulslike players, indie game fans, creators, and game devs stepping toward release together."
          </blockquote>
        </div>
      </section>

      <InfoSection
        eyebrow="Definition"
        title="What is Closed Beta?"
        text="Closed Beta gives early players access to Legacy of Mind before public release. It is for people who want to experience the game early, share honest thoughts, create videos or streams, and be part of the road to launch."
      />
      <InfoSection
        eyebrow="Eligibility"
        title="Who can join?"
        text="Content creators, streamers, YouTubers, TikTok creators, horror fans, RPG fans, survival players, soulslike players, passionate community members, and gamers of all kinds are welcome. If Legacy of Mind looks like your kind of game and you want to help make it sharper, you are welcome here."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <SectionTitle eyebrow="Simple Access" title="How to get access" text="Choose how you'd like to join: come through Discord or submit the form, then request access." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step} className="border border-border bg-black/36 p-6 transition duration-300 hover:-translate-y-1 hover:border-stone/30 hover:bg-white/[0.035]">
              <span className="font-display text-4xl text-[var(--color-earth)]">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.12em] text-stone">{step}</h3>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-base leading-8 text-muted">
          Getting access is simple and completely free. Join through Discord or submit the form, and you are in the right place to take your first step into Legacy of Mind before release.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <SectionTitle eyebrow="Why Join" title="Your feedback can help shape the final game" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 border border-border bg-black/36 p-5 text-muted transition duration-300 hover:-translate-y-1 hover:border-stone/30 hover:bg-white/[0.035]">
              <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-current" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <InfoSection
        eyebrow="Creators"
        title="For content creators"
        text="Closed Beta is especially useful for creators who want early footage from a dark first-person soulslike. Clips, streams, shorts, reactions, and videos from beta players may be featured on the Legacy of Mind website, YouTube, TikTok, and Instagram."
      />
      <InfoSection
        eyebrow="Development"
        title="A real voice in development"
        text="Built by one developer, Legacy of Mind is a personal game with the ambition of a full dark fantasy world. Feedback from early players can help improve polish, balance, usability, and the moments that make the experience stay with you."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-6">
        <div className="border border-stone/20 bg-white/[0.035] p-8 shadow-insetStone transition duration-300 hover:border-stone/35">
          <h2 className="font-display text-4xl uppercase tracking-[0.1em] text-[var(--color-parchment)] md:text-6xl">Experience the vast desolate world before release</h2>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href={siteLinks.discord} external>Join Discord</CTAButton>
            <CTAButton href={siteLinks.steam} external variant="secondary">Wishlist Now</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoSection({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <div className="grid gap-8 border-y border-border py-10 transition duration-300 hover:border-stone/25 md:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <p className="text-lg leading-9 text-muted">{text}</p>
      </div>
    </section>
  );
}
