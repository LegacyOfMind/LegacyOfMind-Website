import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, siteLinks, socialLinks } from '../data/siteLinks';
import { CTAButton } from './CTAButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open ? 'border-border bg-black/88 shadow-2xl backdrop-blur-xl' : 'border-transparent bg-black/20 backdrop-blur-sm'
      }`}
    >
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/assets/logos/LoM Logo.png"
            alt="Legacy of Mind mark"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden font-display text-sm uppercase tracking-[0.28em] text-stone sm:inline">
            Legacy of Mind
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-stone ${
                  isActive ? 'text-stone' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mx-1 h-5 w-px bg-border" />
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-muted transition hover:text-stone">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
          <CTAButton href={siteLinks.steam} external className="min-h-10 px-4 py-2 text-xs">
            Wishlist
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-border text-stone lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-black/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border border-border px-4 py-3 text-sm uppercase tracking-[0.18em] ${
                    isActive ? 'bg-white/[0.06] text-stone' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-border px-4 py-3 text-sm text-muted">
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
          <CTAButton href={siteLinks.steam} external className="mt-4 w-full">
            Wishlist Now
          </CTAButton>
        </div>
      )}
    </header>
  );
}
