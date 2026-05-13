import { socialLinks } from '../data/siteLinks';

const socialHoverClasses = {
  discord: 'hover:border-[#5865f2]/55 hover:text-[#aab2ff] hover:shadow-[0_0_18px_rgba(88,101,242,0.18)]',
  youtube: 'hover:border-[#b83333]/55 hover:text-[#f0a0a0] hover:shadow-[0_0_18px_rgba(190,44,44,0.16)]',
  tiktok: 'hover:border-[#36d4d0]/45 hover:text-[#bdf4f2] hover:shadow-[0_0_18px_rgba(54,212,208,0.12)]',
  instagram: 'hover:border-[#b45a7c]/50 hover:text-[#e0afc0] hover:shadow-[0_0_18px_rgba(180,90,124,0.12)]',
};

type SocialLinksProps = {
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({ showLabels = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon, platform }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`inline-flex h-10 items-center justify-center gap-2 border border-border bg-black/25 px-3 text-muted transition ${socialHoverClasses[platform]}`}
        >
          <Icon aria-hidden="true" className="h-4 w-4" />
          {showLabels && <span className="text-xs uppercase tracking-[0.16em]">{label}</span>}
        </a>
      ))}
    </div>
  );
}
