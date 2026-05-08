import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    'border-stone/60 bg-stone text-black shadow-ember hover:bg-white hover:shadow-[0_0_48px_rgba(235,235,225,0.2)]',
  secondary:
    'border-stone/35 bg-white/[0.03] text-stone hover:border-stone/70 hover:bg-white/[0.08]',
  ghost:
    'border-border bg-black/20 text-muted hover:border-stone/45 hover:text-stone',
};

export function CTAButton({ children, href, variant = 'primary', external = false, className = '' }: CTAButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
