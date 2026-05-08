import { socialLinks } from '../data/siteLinks';

type SocialLinksProps = {
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({ showLabels = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-10 items-center justify-center gap-2 border border-border bg-black/25 px-3 text-muted transition hover:border-stone/50 hover:text-stone"
        >
          <Icon aria-hidden="true" className="h-4 w-4" />
          {showLabels && <span className="text-xs uppercase tracking-[0.16em]">{label}</span>}
        </a>
      ))}
    </div>
  );
}
