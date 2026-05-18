import { ArrowRight } from 'lucide-react';
import type { ComponentType, ReactNode, SVGProps } from 'react';
import { Link } from 'react-router-dom';

export type CTAButtonVariant = 'primary' | 'secondary' | 'ghost' | 'steam' | 'discord' | 'youtube' | 'tiktok' | 'instagram' | 'upload';

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: CTAButtonVariant;
  external?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  className?: string;
};

const variants = {
  primary:
    'border-stone/60 bg-stone text-black shadow-ember hover:bg-white hover:shadow-[0_0_48px_rgba(235,235,225,0.2)]',
  secondary:
    'border-stone/35 bg-white/[0.03] text-stone hover:-translate-y-0.5 hover:border-stone/70 hover:bg-white/[0.08]',
  ghost:
    'border-border bg-black/20 text-muted hover:-translate-y-0.5 hover:border-stone/45 hover:text-stone',
  steam:
    'border-[#2f5d7f]/75 bg-[linear-gradient(135deg,#06101b,#0e263b_52%,#143a59)] text-stone shadow-[0_0_42px_rgba(25,78,126,0.26)] hover:-translate-y-0.5 hover:border-[#6aa7d3]/75 hover:shadow-[0_0_56px_rgba(54,126,181,0.34)]',
  discord:
    'border-[#5865f2]/45 bg-[linear-gradient(135deg,#111522,#202a62_54%,#2f3f8f)] text-stone shadow-[0_0_36px_rgba(88,101,242,0.18)] hover:-translate-y-0.5 hover:border-[#8791ff]/70 hover:shadow-[0_0_48px_rgba(88,101,242,0.3)]',
  youtube:
    'border-[#9f2626]/60 bg-[linear-gradient(135deg,#1b0708,#521417_58%,#7c2020)] text-stone shadow-[0_0_34px_rgba(160,34,34,0.2)] hover:-translate-y-0.5 hover:border-[#c34b4b]/75 hover:shadow-[0_0_44px_rgba(190,44,44,0.3)]',
  tiktok:
    'border-[#36d4d0]/30 bg-[linear-gradient(135deg,#070909,#111114_56%,#171319)] text-stone shadow-[0_0_28px_rgba(54,212,208,0.08)] hover:-translate-y-0.5 hover:border-[#36d4d0]/55 hover:shadow-[0_0_34px_rgba(54,212,208,0.14)]',
  instagram:
    'border-[#b45a7c]/35 bg-[linear-gradient(135deg,#10090d,#1b111b_56%,#241326)] text-stone shadow-[0_0_28px_rgba(180,90,124,0.1)] hover:-translate-y-0.5 hover:border-[#d18aa5]/55 hover:shadow-[0_0_34px_rgba(180,90,124,0.16)]',
  upload:
    'border-stone/35 bg-white/[0.03] text-stone shadow-[0_0_28px_rgba(217,215,204,0.06)] hover:-translate-y-0.5 hover:border-stone/70 hover:bg-white/[0.08] hover:shadow-[0_0_36px_rgba(217,215,204,0.12)]',
};

const iconMotion: Record<CTAButtonVariant, string> = {
  primary: '',
  secondary: '',
  ghost: '',
  steam: 'group-hover:drop-shadow-[0_0_10px_rgba(88,166,220,0.85)]',
  discord: 'group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_10px_rgba(135,145,255,0.75)]',
  youtube: 'group-hover:translate-x-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(220,72,72,0.8)]',
  tiktok: 'group-hover:drop-shadow-[0_0_8px_rgba(54,212,208,0.75)]',
  instagram: 'group-hover:drop-shadow-[0_0_8px_rgba(209,138,165,0.75)]',
  upload: 'group-hover:-translate-y-0.5',
};

export function CTAButton({
  children,
  href,
  variant = 'primary',
  external = false,
  icon: Icon,
  iconClassName = '',
  className = '',
}: CTAButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2.5 border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon && (
        <Icon
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 transition duration-300 ${iconMotion[variant]} ${iconClassName}`}
        />
      )}
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {content}
    </Link>
  );
}
