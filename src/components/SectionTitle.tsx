type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, text, align = 'left' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-muted">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl uppercase leading-tight tracking-[0.08em] text-stone md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-muted md:text-lg">{text}</p>}
    </div>
  );
}
