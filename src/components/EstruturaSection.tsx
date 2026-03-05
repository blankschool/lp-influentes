const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

type Track = 'ind' | 'col' | 'adv';
const pilares: { track: Track; num: string; title: string; body: string; when: string }[] = [
  { track: 'ind', num: '01', title: 'Onboarding estruturado', body: 'Mapeamento do negócio, histórico e objetivos de receita.', when: 'Mês 1' },
  { track: 'ind', num: '02', title: 'Diagnóstico de marca pessoal', body: 'Posicionamento atual, gaps de percepção e análise de mercado.', when: 'Mês 1' },
  { track: 'ind', num: '03', title: 'Planejamento estratégico', body: 'Funil, linhas editoriais e plano tático completo.', when: 'Mês 1' },
  { track: 'ind', num: '04', title: 'Assessment do time', body: 'Diagnóstico de maturidade da equipe e trilha personalizada.', when: 'Mês 1' },
  { track: 'ind', num: '05', title: '8 roteiros base escritos', body: '2 por linha editorial. Escritos do zero pela Blank.', when: 'Mês 1' },
  { track: 'ind', num: '06', title: 'Ciclo quinzenal de mentorias', body: 'Time e empresário, em paralelo.', when: 'Meses 2–4' },
  { track: 'ind', num: '07', title: 'Account manager dedicado', body: 'Suporte nos 120 dias.', when: 'Meses 1–4' },
  { track: 'ind', num: '08', title: '3 revisões 1:1', body: 'Balanço individual com consultor.', when: 'Meses 3–4' },
  { track: 'ind', num: '09', title: 'Call de internalização — 3h', body: 'Transferência total do método.', when: 'Mês 4' },
  { track: 'col', num: '10', title: 'Comunidade do cohort', body: 'Collabs estratégicas de conteúdo, oportunidades.', when: 'Meses 1–4' },
  { track: 'col', num: '11', title: 'Encontro presencial', body: 'Um dia com todo o cohort.', when: 'Pós-programa' },
  { track: 'adv', num: '12', title: 'Mentorias com conselheiros', body: 'Rony, Renata e Erich ao vivo.', when: 'Todo mês' },
];

const barColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.55)', col: 'rgba(240,237,230,0.22)', adv: 'rgba(212,200,154,0.45)' };
const whenColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.45)', col: 'rgba(240,237,230,0.3)', adv: 'rgba(212,200,154,0.4)' };

const EstruturaSection = () => (
  <section id="estrutura" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-[52px]">
      <div>
        <Eyebrow>Estrutura</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Como será<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>sua jornada</em>
        </h2>
      </div>
      <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
        O programa opera em duas trilhas simultâneas: a trilha individual, de trabalho exclusivo com a sua empresa, e a trilha coletiva, dentro do cohort.
      </p>
    </div>

    <div className="flex gap-6 items-center mb-8 flex-wrap">
      {[
        { label: 'Individual — trabalho exclusivo', cls: 'rgba(240,237,230,0.65)' },
        { label: 'Coletiva — cohort', cls: 'rgba(240,237,230,0.28)' },
        { label: 'Conselheiros convidados', cls: 'rgba(212,200,154,0.5)' },
      ].map((l, i) => (
        <div key={i} className="flex items-center gap-2 font-mono-brand text-[14px] tracking-[0.5px]" style={{ color: 'rgba(240,237,230,0.78)' }}>
          <div className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: l.cls }} />
          {l.label}
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {pilares.map((p, i) => (
        <div key={i} className="bg-ink p-[24px_20px_28px] relative transition-colors hover:bg-ink-2">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: barColors[p.track] }} />
          <span className="font-mono-brand text-[14px] block mb-3.5" style={{ color: 'rgba(240,237,230,0.55)' }}>{p.num}</span>
          <div className="text-[17px] font-medium mb-[7px] leading-[1.3]" style={{ color: 'rgba(240,237,230,0.9)' }}>{p.title}</div>
          <p className="text-[16px] font-light leading-[1.6]" style={{ color: 'rgba(240,237,230,0.72)' }}>{p.body}</p>
          <div className="mt-4 font-mono-brand text-[13px] tracking-[1px]" style={{ color: whenColors[p.track] }}>{p.when}</div>
        </div>
      ))}
    </div>
  </section>
);

export default EstruturaSection;
