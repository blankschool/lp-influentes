const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[99] h-14 px-6 md:px-[52px] flex items-center justify-between" style={{ background: 'rgba(12,12,10,0.94)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="flex items-center gap-2.5">
      <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center relative" style={{ border: '1px solid rgba(240,237,230,0.3)' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-cream" />
      </div>
      <span className="font-mono-brand text-[11px] font-medium tracking-[3px] uppercase" style={{ color: 'rgba(240,237,230,0.5)' }}>Blank</span>
    </div>
    <div className="flex items-center gap-8">
      <a href="#estrutura" className="hidden md:inline font-mono-brand text-[11px] tracking-[0.5px] no-underline transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.25)' }}>Estrutura</a>
      <a href="#conselheiros" className="hidden md:inline font-mono-brand text-[11px] tracking-[0.5px] no-underline transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.25)' }}>Conselheiros</a>
      <a href="#cases" className="hidden md:inline font-mono-brand text-[11px] tracking-[0.5px] no-underline transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.25)' }}>Cases</a>
      <a href="#investimento" className="hidden md:inline font-mono-brand text-[11px] tracking-[0.5px] no-underline transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.25)' }}>Investimento</a>
      <a href="#investimento" className="font-mono-brand text-[11px] font-medium tracking-[2px] uppercase bg-cream text-ink py-[9px] px-[22px] no-underline transition-opacity hover:opacity-85">Candidatura</a>
    </div>
  </nav>
);

export default Navbar;
