const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

type Track = 'ind' | 'col' | 'adv';
const pilares: { track: Track; num: string; title: string; body: string; when: string }[] = [
  { track: 'ind', num: '01', title: 'Onboarding estruturado', body: 'Mapeamento do negócio, histórico e objetivos de receita.', when: 'Mês 1 · Sem 1' },
  { track: 'ind', num: '02', title: 'Diagnóstico de marca', body: 'Posicionamento atual, gaps de percepção e análise de mercado.', when: 'Mês 1 · Sem 1' },
  { track: 'ind', num: '03', title: 'Planejamento estratégico', body: 'Funil, linhas editoriais e plano tático completo. Feito pela Blank.', when: 'Mês 1 · Sem 2' },
  { track: 'ind', num: '04', title: 'Assessment do time', body: 'Diagnóstico de maturidade e trilha personalizada de desenvolvimento.', when: 'Mês 1' },
  { track: 'ind', num: '05', title: '8 roteiros base escritos', body: '2 por linha editorial, escritos pela Blank antes de começar.', when: 'Mês 1 · Sem 3' },
  { track: 'ind', num: '06', title: 'Ciclo quinzenal', body: 'Mentorias alternadas com o time e com o empresário. Meses 2–4.', when: 'Meses 2–4' },
  { track: 'ind', num: '07', title: 'Account manager dedicado', body: 'Suporte dedicado ao longo dos 120 dias entre as sessões formais.', when: 'Meses 1–4' },
  { track: 'ind', num: '08', title: '3 revisões 1:1', body: 'Balanço individual com o consultor nos meses 2, 3 e 4.', when: 'Meses 2–4' },
  { track: 'ind', num: '09', title: 'Call de internalização — 3h', body: 'Transferência total do método para o time no encerramento.', when: 'Mês 4 · Sem 4' },
  { track: 'col', num: '10', title: 'Comunidade do cohort', body: 'Troca, feedback cruzado e parcerias entre as 30 empresas.', when: 'Meses 1–4' },
  { track: 'col', num: '11', title: 'Encontro presencial', body: 'Um dia com toda a turma — análise coletiva e produção ao vivo.', when: 'Pós-programa' },
  { track: 'adv', num: '12', title: 'Sessões com conselheiros', body: 'Rony, Renata e Erich em rotação mensal. Ao vivo com o cohort.', when: 'Todo mês' },
];

const barColors: Record<Track, string> = {
  ind: 'rgba(240,237,230,0.55)',
  col: 'rgba(240,237,230,0.22)',
  adv: 'rgba(212,200,154,0.45)',
};
const whenColors: Record<Track, string> = {
  ind: 'rgba(240,237,230,0.2)',
  col: 'rgba(240,237,230,0.12)',
  adv: 'rgba(212,200,154,0.25)',
};

const EstruturaSection = () => (
  <section id="estrutura" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-[52px]">
      <div>
        <Eyebrow>Estrutura</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          12 pilares.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>Duas trilhas.</em>
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
        O programa opera em duas dimensões paralelas: a trilha individual, de trabalho exclusivo com cada empresa, e a trilha coletiva, dentro do cohort. Cada uma entrega o que a outra não consegue.
      </p>
    </div>

    <div className="flex gap-6 items-center mb-8">
      {[
        { label: 'Individual — 1:1', cls: 'rgba(240,237,230,0.65)' },
        { label: 'Coletiva — cohort', cls: 'rgba(240,237,230,0.28)' },
        { label: 'Conselheiros', cls: 'rgba(212,200,154,0.5)' },
      ].map((l, i) => (
        <div key={i} className="flex items-center gap-2 font-mono-brand text-[10px] tracking-[0.5px]" style={{ color: 'rgba(240,237,230,0.28)' }}>
          <div className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: l.cls }} />
          {l.label}
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {pilares.map((p, i) => (
        <div key={i} className="bg-ink p-[24px_20px_28px] relative transition-colors hover:bg-ink-2">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: barColors[p.track] }} />
          <span className="font-mono-brand text-[10px] block mb-3.5" style={{ color: 'rgba(240,237,230,0.1)' }}>{p.num}</span>
          <div className="text-[13px] font-medium mb-[7px] leading-[1.3]" style={{ color: 'rgba(240,237,230,0.72)' }}>{p.title}</div>
          <p className="text-[11.5px] font-light leading-[1.6]" style={{ color: 'rgba(240,237,230,0.3)' }}>{p.body}</p>
          <div className="mt-4 font-mono-brand text-[9px] tracking-[1px]" style={{ color: whenColors[p.track] }}>{p.when}</div>
        </div>
      ))}
    </div>
  </section>
);

export default EstruturaSection;
