export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,230,220,0.08),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.9))]" />
      <div className="absolute -left-24 top-20 h-72 w-[130vw] animate-fog bg-[radial-gradient(ellipse_at_center,rgba(145,145,135,0.09),transparent_62%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-[80vw] animate-fog bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.045),transparent_68%)] blur-3xl [animation-delay:-7s]" />
      <div className="noise-overlay" />
      <div className="particle-field" />
      <div className="ambient-dust ambient-dust-a" />
      <div className="ambient-dust ambient-dust-b" />
      <div className="lattice-field lattice-field-a" />
      <div className="lattice-field lattice-field-b" />
    </div>
  );
}
