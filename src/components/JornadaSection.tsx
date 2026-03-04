import { useState } from "react";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

type Track = 'ind' | 'col' | 'adv';
type CWType = 'on' | 'sp' | '' | 'gold';
interface PanelItem { track: Track; title: string; desc: string; }
interface CW { type: CWType; label: string; text: string; }
interface MonthData {
  num: string; name: string; verb: string;
  panelTitle: React.ReactNode; panelLead: string; cycleLabel: string;
  weeks: CW[]; items: PanelItem[];
}

const months: MonthData[] = [
  {
    num: 'Mês 01', name: 'A Fundação', verb: 'Construir antes de publicar',
    panelTitle: <>A Blank constrói.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>Você valida.</em></>,
    panelLead: 'O primeiro mês é quase todo da Blank — onboarding, diagnóstico e construção do plano estratégico completo. O empresário aparece para as sessões e valida o que foi produzido.',
    cycleLabel: 'Ritmo das 4 semanas',
    weeks: [
      { type: 'on', label: 'Sem 1', text: 'Onboarding e diagnóstico' },
      { type: 'on', label: 'Sem 2', text: 'Planejamento estratégico' },
      { type: 'on', label: 'Sem 3', text: '8 roteiros escritos' },
      { type: 'on', label: 'Sem 4', text: 'Treinamento do time' },
    ],
    items: [
      { track: 'ind', title: 'Onboarding e diagnóstico completo', desc: 'Negócio, posicionamento atual, histórico de comunicação e objetivos de receita.' },
      { track: 'ind', title: 'Planejamento estratégico', desc: 'Posicionamento, funil, linhas editoriais e plano tático. Produzido pela Blank, validado por você.' },
      { track: 'ind', title: 'Assessment do time', desc: 'Diagnóstico de maturidade com trilha personalizada de desenvolvimento para os 120 dias.' },
      { track: 'ind', title: '8 roteiros base escritos pela Blank', desc: '2 por linha editorial. O time começa com os melhores formatos do método calibrados ao posicionamento do fundador.' },
      { track: 'col', title: 'Integração ao cohort', desc: 'Apresentação entre os 30 membros. Mapeamento de complementaridades e sinergias.' },
    ],
  },
  {
    num: 'Mês 02', name: 'A Execução', verb: 'Publicar com suporte real',
    panelTitle: <>O time publica.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>A Blank acompanha.</em></>,
    panelLead: 'Ritmo quinzenal: uma semana a mentoria é com o time, na seguinte é com o empresário. O account manager fica disponível entre as sessões para o que aparecer no dia a dia.',
    cycleLabel: 'Ciclo quinzenal',
    weeks: [
      { type: 'on', label: 'Sem A', text: 'Mentoria com o time' },
      { type: '', label: 'Sem B', text: 'Publicações' },
      { type: 'on', label: 'Sem C', text: 'Mentoria com empresário' },
      { type: '', label: 'Sem D', text: 'Publicações' },
    ],
    items: [
      { track: 'ind', title: 'Mentoria quinzenal com o time', desc: 'Revisão do que foi publicado, ajuste de execução e direcionamento.' },
      { track: 'ind', title: 'Mentoria quinzenal com o empresário', desc: 'Alinhamento estratégico — posicionamento e decisões que impactam a comunicação.' },
      { track: 'ind', title: 'Account manager dedicado', desc: 'Disponível nos 120 dias para alinhamentos entre as sessões formais.' },
      { track: 'col', title: 'Comunidade ativa do cohort', desc: 'Feedback entre pares, análise cruzada de resultados e propostas de parceria.' },
    ],
  },
  {
    num: 'Mês 03', name: 'A Calibração', verb: 'Ajustar com dados reais',
    panelTitle: <>Dois meses de dados.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>O plano evolui.</em></>,
    panelLead: 'Com dois meses publicados, as hipóteses do mês 1 se tornam evidência. O terceiro mês é de ajuste com base no que funcionou — e é quando acontece a primeira revisão 1:1 com o consultor.',
    cycleLabel: 'Ciclo do mês 3',
    weeks: [
      { type: 'on', label: 'Sem A', text: 'Mentoria com o time' },
      { type: 'sp', label: 'Sem B', text: 'Encontro presencial' },
      { type: 'on', label: 'Sem C', text: 'Revisão 1:1' },
      { type: 'sp', label: 'Sem D', text: 'Sessão conselheiro' },
    ],
    items: [
      { track: 'ind', title: 'Ciclo quinzenal com ajustes baseados em dados', desc: 'Com métricas reais, a mentoria calibra formato, cadência e ângulo editorial.' },
      { track: 'ind', title: 'Primeira revisão 1:1', desc: 'Balanço dos 3 meses e ajuste do plano para o encerramento.' },
      { track: 'col', title: 'Encontro presencial do cohort', desc: 'Um dia com toda a turma — análise coletiva e produção de conteúdo ao vivo.' },
      { track: 'adv', title: 'Sessão ao vivo com conselheiro', desc: 'Conversa aberta sobre como cada conselheiro construiu presença que gera negócio.' },
    ],
  },
  {
    num: 'Mês 04', name: 'A Passagem', verb: 'A Blank sai. O método fica.',
    panelTitle: <>A Blank sai.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>O método fica.</em></>,
    panelLead: 'O objetivo do quarto mês é garantir que tudo que foi construído viva dentro da empresa sem a Blank. Uma sessão de 3 horas transfere o método, as decisões e a documentação para o time.',
    cycleLabel: 'Ciclo do mês 4',
    weeks: [
      { type: 'on', label: 'Sem A', text: 'Mentoria com o time' },
      { type: 'sp', label: 'Sem B', text: 'Sessão conselheiro' },
      { type: 'on', label: 'Sem C', text: 'Revisão 1:1 final' },
      { type: 'gold', label: 'Sem D', text: 'Internalização 3h' },
    ],
    items: [
      { track: 'ind', title: 'Call de internalização — 3 horas', desc: 'Transferência estruturada de toda a inteligência do programa para o time interno.' },
      { track: 'ind', title: 'Revisão 1:1 final', desc: 'Balanço dos 120 dias e plano de operação autônoma para os meses seguintes.' },
      { track: 'ind', title: 'Documentação completa entregue', desc: 'Diagnóstico, plano, roteiros e decisões dos 120 dias. Dentro da empresa para sempre.' },
      { track: 'adv', title: 'Segunda sessão com conselheiro', desc: 'Em 4 meses, contato com dois dos três conselheiros ao vivo.' },
    ],
  },
];

const dotColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.6)', col: 'rgba(240,237,230,0.25)', adv: 'rgba(212,200,154,0.5)' };
const trackLabels: Record<Track, string> = { ind: 'Individual', col: 'Coletiva', adv: 'Conselheiro' };
const trackLabelColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.3)', col: 'rgba(240,237,230,0.18)', adv: 'rgba(212,200,154,0.25)' };

const cwStyles = (type: CWType) => {
  if (type === 'on') return { bg: 'rgba(240,237,230,0.05)', borderTop: '2px solid rgba(240,237,230,0.4)', nColor: 'rgba(240,237,230,0.38)', lColor: 'rgba(240,237,230,0.65)', lWeight: 500 };
  if (type === 'sp') return { bg: 'rgba(240,237,230,0.03)', borderTop: '2px solid rgba(212,200,154,0.4)', nColor: 'rgba(212,200,154,0.3)', lColor: 'rgba(212,200,154,0.5)', lWeight: 400 };
  if (type === 'gold') return { bg: 'rgba(240,237,230,0.05)', borderTop: '2px solid rgba(212,200,154,0.6)', nColor: 'rgba(240,237,230,0.38)', lColor: 'rgba(240,237,230,0.65)', lWeight: 500 };
  return { bg: 'rgba(240,237,230,0.02)', borderTop: '2px solid transparent', nColor: 'rgba(240,237,230,0.12)', lColor: 'rgba(240,237,230,0.18)', lWeight: 400 };
};

const JornadaSection = () => {
  const [active, setActive] = useState(0);
  const m = months[active];

  return (
    <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-[52px]">
        <div>
          <Eyebrow>A jornada</Eyebrow>
          <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
            Quatro meses.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>Cada fase com</em><br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>um propósito.</em>
          </h2>
        </div>
        <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
          Cada mês tem responsabilidades distintas. O primeiro é quase todo da Blank. Do segundo em diante, o time assume progressivamente — até operar com total autonomia no encerramento.
        </p>
      </div>

      {/* Month nav */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
        {months.map((mo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="p-[20px_24px] text-left transition-colors"
            style={{
              background: active === i ? 'rgba(240,237,230,0.03)' : 'transparent',
              borderRight: i < 3 ? '1px solid rgba(240,237,230,0.08)' : 'none',
              borderBottom: active === i ? '2px solid hsl(42 33% 92%)' : '2px solid transparent',
            }}
          >
            <div className="font-mono-brand text-[9px] font-medium tracking-[3px] uppercase mb-2" style={{ color: active === i ? 'rgba(240,237,230,0.45)' : 'rgba(240,237,230,0.18)' }}>{mo.num}</div>
            <div className="font-serif-body text-[16px] italic leading-none" style={{ color: active === i ? 'hsl(42 33% 92%)' : 'rgba(240,237,230,0.25)' }}>{mo.name}</div>
            <div className="font-mono-brand text-[9px] mt-[5px] tracking-[0.2px]" style={{ color: active === i ? 'rgba(240,237,230,0.32)' : 'rgba(240,237,230,0.15)' }}>{mo.verb}</div>
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: '1px solid rgba(240,237,230,0.08)', borderTop: 'none', background: 'rgba(240,237,230,0.015)' }}>
        <div className="p-[44px_24px] md:p-[44px_40px] flex flex-col gap-6" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
          <h3 className="font-display font-normal leading-[0.97] text-cream" style={{ fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-1.5px' }}>{m.panelTitle}</h3>
          <p className="text-[13.5px] font-light leading-[1.85]" style={{ color: 'rgba(240,237,230,0.4)' }}>{m.panelLead}</p>
          <div>
            <div className="font-mono-brand text-[9px] font-medium tracking-[3px] uppercase mb-2.5" style={{ color: 'rgba(240,237,230,0.18)' }}>{m.cycleLabel}</div>
            <div className="grid grid-cols-4 gap-[2px]">
              {m.weeks.map((w, i) => {
                const s = cwStyles(w.type);
                return (
                  <div key={i} className="p-[12px_10px]" style={{ background: s.bg, border: '1px solid rgba(240,237,230,0.03)', borderTop: s.borderTop }}>
                    <div className="font-mono-brand text-[8px] font-medium tracking-[2px] uppercase mb-[5px]" style={{ color: s.nColor }}>{w.label}</div>
                    <div className="text-[10px] leading-[1.4]" style={{ color: s.lColor, fontWeight: s.lWeight }}>{w.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-[44px_24px] md:p-[44px_40px] flex flex-col">
          {m.items.map((item, i) => (
            <div key={i} className="grid grid-cols-[8px_1fr] gap-3.5 py-4 items-start" style={{ borderBottom: i < m.items.length - 1 ? '1px solid rgba(240,237,230,0.04)' : 'none' }}>
              <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ background: dotColors[item.track] }} />
              <div>
                <div className="font-mono-brand text-[8px] font-medium tracking-[2px] uppercase mb-1" style={{ color: trackLabelColors[item.track] }}>{trackLabels[item.track]}</div>
                <div className="text-[12.5px] font-medium mb-1 leading-[1.3]" style={{ color: 'rgba(240,237,230,0.75)' }}>{item.title}</div>
                <div className="text-[11.5px] font-light leading-[1.6]" style={{ color: 'rgba(240,237,230,0.32)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JornadaSection;
