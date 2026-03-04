const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const roteiros = [
  { num: '01', title: 'Pessoal', models: ['Uma decisão difícil que você tomou e o que aprendeu com ela', 'Uma crença sua sobre o mercado que a maioria discorda'] },
  { num: '02', title: 'Educacional', models: ['Um erro que o mercado comete e como resolver', 'Uma framework que você usa e poucos conhecem'] },
  { num: '03', title: 'Institucional', models: ['O que a empresa acredita em uma decisão recente', 'Uma conquista do time que ilustra o que você quer que a empresa seja'] },
  { num: '04', title: 'Informativa', models: ['Uma mudança no setor e o que ela significa para quem está dentro', 'Um dado recente e o que você lê nas entrelinhas'] },
];

const RoteirosSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <Eyebrow>8 roteiros base</Eyebrow>
    <h2 className="font-display font-normal leading-[0.96] text-cream mb-4" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
      4 linhas editoriais.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>2 modelos cada.</em>
    </h2>
    <p className="text-[15px] font-light leading-[1.85] max-w-[560px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
      A maioria das pessoas entra nas redes e testa até descobrir o que funciona — o que leva meses. Os 8 roteiros eliminam essa curva: o time começa com modelos validados, calibrados ao posicionamento do fundador.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 mt-12" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {roteiros.map((r, i) => (
        <div key={i} className="bg-ink p-[32px_28px] transition-colors hover:bg-ink-2">
          <div className="font-mono-brand text-[9px] mb-2.5 tracking-[1px]" style={{ color: 'rgba(240,237,230,0.15)' }}>{r.num}</div>
          <div className="font-serif-body text-[20px] font-normal mb-[18px]" style={{ color: 'rgba(240,237,230,0.6)' }}>{r.title}</div>
          {r.models.map((m, j) => (
            <div key={j} className="flex gap-2.5 items-baseline py-2.5 text-[12.5px] font-light" style={{ color: 'rgba(240,237,230,0.35)', borderBottom: j < r.models.length - 1 ? '1px solid rgba(240,237,230,0.04)' : 'none' }}>
              <span className="font-mono-brand text-[10px] flex-shrink-0" style={{ color: 'rgba(240,237,230,0.2)' }}>{String.fromCharCode(65 + j)}</span>
              {m}
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Math row */}
    <div className="grid grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)', borderTop: 'none' }}>
      <div className="bg-ink-2 p-[20px_24px] flex flex-col items-center justify-center gap-1">
        <div className="font-display text-[36px] font-normal text-cream leading-none" style={{ letterSpacing: '-1px' }}>4</div>
        <div className="font-mono-brand text-[9px] tracking-[1px] text-center" style={{ color: 'rgba(240,237,230,0.25)' }}>linhas editoriais</div>
      </div>
      <div className="bg-ink-3 p-[20px_24px] flex flex-col items-center justify-center gap-1">
        <div className="font-mono-brand text-[24px]" style={{ color: 'rgba(240,237,230,0.15)' }}>× 2</div>
        <div className="font-mono-brand text-[9px] tracking-[1px] text-center" style={{ color: 'rgba(240,237,230,0.25)' }}>modelos por linha</div>
      </div>
      <div className="bg-ink-2 p-[20px_24px] flex flex-col items-center justify-center gap-1">
        <div className="font-display text-[36px] font-normal text-cream leading-none" style={{ letterSpacing: '-1px' }}>8</div>
        <div className="font-mono-brand text-[9px] tracking-[1px] text-center" style={{ color: 'rgba(240,237,230,0.25)' }}>roteiros entregues</div>
      </div>
    </div>
  </section>
);

export default RoteirosSection;
