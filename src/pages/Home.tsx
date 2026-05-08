import { motion } from 'framer-motion';
import { KeyRound, Lightbulb, MessageSquareText, Video } from 'lucide-react';
import { ClipCard } from '../components/ClipCard';
import { CTAButton } from '../components/CTAButton';
import { Hero } from '../components/Hero';
import { NightmareSection } from '../components/NightmareSection';
import { SectionTitle } from '../components/SectionTitle';
import { SocialLinks } from '../components/SocialLinks';
import { clips } from '../data/clips';
import { nightmareSections } from '../data/nightmareSections';
import { siteLinks, socialLinks } from '../data/siteLinks';

const communityReasons = [
  {
    icon: KeyRound,
    title: 'Closed Beta & early access',
    text: 'Join the Discord to request Closed Beta access, follow updates, and be part of the first players stepping into the world before release.',
  },
  {
    icon: Video,
    title: 'Community, clips & reactions',
    text: 'Share your best moments, deaths, discoveries, boss attempts, reactions, and clips with other players following Legacy of Mind.',
  },
  {
    icon: MessageSquareText,
    title: 'Feedback that can shape the game',
    text: 'Leave thoughts, report rough edges, suggest improvements, and help refine the final experience before launch.',
  },
  {
    icon: Lightbulb,
    title: 'Game dev advice from the developer',
    text: 'Ask questions about indie development, marketing, Steam pages, trailers, Unity, or building a game as a solo developer.',
  },
];

export function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-10">
        {nightmareSections.map((section, index) => (
          <NightmareSection key={section.title} section={section} reverse={index % 2 === 1} />
        ))}

        <section className="relative overflow-hidden border-y border-border bg-black/55 px-4 py-24 text-center">
          <div className="absolute inset-0 bg-stone-radial opacity-70" aria-hidden="true" />
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl font-display text-3xl uppercase leading-tight tracking-[0.12em] text-stone md:text-6xl"
          >
            “The nightmare is no longer something you wake from.”
          </motion.blockquote>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="border border-stone/18 bg-white/[0.035] p-6 shadow-insetStone transition duration-300 hover:border-stone/35 md:p-10">
            <SectionTitle
              eyebrow="Before Release"
              title="Closed Beta access is open"
              text="Built by one developer, Legacy of Mind is looking for passionate players and creators who want early access, honest feedback, and a closer look at a vast desolate first-person soulslike before release."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={siteLinks.discord} external>
                Apply Through Discord
              </CTAButton>
              <CTAButton href="/closed-beta" variant="secondary">
                Learn About Closed Beta
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <SectionTitle
            eyebrow="Community"
            title="Join the Legacy of Mind community"
            text="The Discord is where early access, feedback, clips, game dev questions, and community discussion all come together."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-sm leading-7 text-muted md:grid-cols-2">
            {communityReasons.map((item) => {
              const Icon = item.icon;

              return (
              <div key={item.title} className="border border-border bg-black/28 p-5 transition duration-300 hover:-translate-y-1 hover:border-stone/30 hover:bg-white/[0.035]">
                <div className="flex items-center gap-3 text-stone">
                  <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-current" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-muted">
            Joining the Discord is completely free. You can request Closed Beta access there, share clips, and help sharpen this dark first-person soulslike before launch.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map(({ label, href, icon: Icon, description }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group border border-border bg-black/36 p-5 transition hover:-translate-y-1 hover:border-stone/45">
                <Icon aria-hidden="true" className="h-7 w-7 text-stone" />
                <h3 className="mt-5 font-display text-xl uppercase tracking-[0.1em] text-stone">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
                {label === 'YouTube' && (
                  <p className="mt-3 text-sm leading-6 text-muted">Closed Beta clips, reactions, and early footage may be featured on the official YouTube channel.</p>
                )}
                {(label === 'TikTok' || label === 'Instagram') && (
                  <p className="mt-3 text-sm leading-6 text-muted">Selected community clips, creator moments, and development updates may also be shared across TikTok and Instagram.</p>
                )}
              </a>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <SocialLinks showLabels />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
          <SectionTitle eyebrow="Featured Soon" title="Creator Clips Coming Soon..." text="Selected reactions, close escapes, boss attempts, and development updates may be shared across the official channels." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {clips.slice(0, 4).map((clip) => (
              <ClipCard key={clip.title} clip={clip} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
