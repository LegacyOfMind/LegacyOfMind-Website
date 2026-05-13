import { Link } from 'react-router-dom';
import { navLinks, siteLinks } from '../data/siteLinks';
import { CTAButton } from './CTAButton';
import { DiscordIcon } from './DiscordIcon';
import { SteamIcon } from './PlatformIcons';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-black px-4 py-12 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/assets/logos/LoM Text Logo.png" alt="Legacy of Mind" className="h-auto w-64 max-w-full object-contain" />
          <p className="mt-5 max-w-sm text-muted">Survive the nightmares that learned to hunt.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={siteLinks.steam} external variant="steam" icon={SteamIcon} className="min-h-10 px-4 py-2 text-xs">
              Wishlist on Steam
            </CTAButton>
            <CTAButton href={siteLinks.discord} external variant="discord" icon={DiscordIcon} className="min-h-10 px-4 py-2 text-xs">
              Join Discord
            </CTAButton>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-stone">Navigation</h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted transition hover:text-stone">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-stone">Social</h2>
          <SocialLinks showLabels className="mt-5" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-xs text-muted">
        © 2026 Solus Studios. Legacy of Mind. All rights reserved.
      </div>
    </footer>
  );
}
