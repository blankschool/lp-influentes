import { useState } from "react";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

type Track = 'ind' | 'col' | 'adv';
type CWType = 'on' | 'sp' | '' | 'gold';
interface PanelItem { track: Track; title: string; desc: string; }
interface CW { type: CWType; label: string; text: string; }
interface MonthData { num: string; name: string; verb: string; panelTitle: React.ReactNode; panelLead: string; cycleLabel: string; weeks: CW[]; items: PanelItem[]; }

const months: MonthData[] = [
  {
    num: 'Mês 01', name: 'Plano de marca', verb: 'Posicionamento, plano estratégico e capacitação do time.',
    panelTitle: <>A Blank constrói todo o plano.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>O empresário valida.</em></>,
    panelLead: 'A Blank conduz o onboarding, escreve o diagnóstico, o plano estratégico e os primeiros roteiros. O time é treinado. Ao fim das quatro semanas, tudo está pronto para operar.',
    cycleLabel: 'Ritmo das 4 semanas',
    weeks: [{ type: 'on', label: 'Sem 1', text: 'Onboarding e diagnóstico' }, { type: 'on', label: 'Sem 2', text: 'Planejamento estratégico' }, { type: 'on', label: 'Sem 3', text: '8 roteiros escritos' }, { type: 'on', label: 'Sem 4', text: 'Treinamento do time' }],
    items: [
      { track: 'ind', title: 'Onboarding e diagnóstico', desc: 'Negócio, posicionamento atual, histórico de comunicação e objetivos de receita.' },
      { track: 'ind', title: 'Planejamento estratégico completo', desc: 'Posicionamento, funil, linhas editoriais e plano tático dos 4 meses — produzido pela Blank.' },
      { track: 'ind', title: '8 roteiros base escritos', desc: '2 por linha editorial. O time começa com formatos do método calibrados ao posicionamento do fundador.' },
      { track: 'ind', title: 'Assessment do time', desc: 'Diagnóstico de maturidade da equipe com trilha personalizada de desenvolvimento.' },
      { track: 'ind', title: 'Treinamento do time', desc: 'A equipe aprende o método e começa o mês 2 com clareza sobre o que produzir e por quê.' },
      { track: 'col', title: 'Integração ao cohort', desc: 'Apresentação entre os membros com mapeamento de complementaridades e sinergias.' },
    ],
  },
  {
    num: 'Mês 02', name: 'Execução assistida', verb: 'Feedbacks e mentorias quinzenais.',
    panelTitle: <>O time produz.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>A Blank acompanha.</em></>,
    panelLead: 'Ritmo quinzenal: uma semana a mentoria é com o time, na seguinte é com o empresário. O account manager fica disponível entre as sessões.',
    cycleLabel: 'Ciclo quinzenal',
    weeks: [{ type: 'on', label: 'Sem A', text: 'Mentoria com o time' }, { type: '', label: 'Sem B', text: 'Publicações' }, { type: 'on', label: 'Sem C', text: 'Mentoria com empresário' }, { type: '', label: 'Sem D', text: 'Publicações' }],
    items: [
      { track: 'ind', title: 'Mentoria quinzenal coletiva com o time', desc: 'Revisão das publicações, análise de desempenho, ajuste de execução e direcionamento.' },
      { track: 'ind', title: 'Mentoria quinzenal coletiva com o empresário', desc: 'Conversa estratégica sobre posicionamento e decisões que afetam a comunicação.' },
      { track: 'ind', title: 'Account manager dedicado', desc: 'Disponível nos 120 dias para alinhamentos entre as sessões formais.' },
      { track: 'col', title: 'Comunidade ativa do cohort', desc: 'Feedback cruzado, análise comparada de resultados e propostas de parceria entre membros.' },
      { track: 'ind', title: 'Plataforma de documentação', desc: 'Toda a inteligência do projeto registrada e acessível para o time operar.' },
    ],
  },
  {
    num: 'Mês 03', name: 'Ajuste tático', verb: 'Refinamento com base em dados.',
    panelTitle: <>Dois meses de dados.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>O plano evolui com eles.</em></>,
    panelLead: 'Com dois meses de dados, as hipóteses do planejamento inicial têm resposta concreta. O plano é ajustado.',
    cycleLabel: 'Ciclo do mês 3',
    weeks: [{ type: 'on', label: 'Sem A', text: 'Mentoria com o time' }, { type: 'sp', label: 'Sem B', text: 'Encontro presencial' }, { type: 'on', label: 'Sem C', text: 'Revisão 1:1' }, { type: 'sp', label: 'Sem D', text: 'Sessão conselheiro' }],
    items: [
      { track: 'ind', title: 'Ciclo quinzenal com ajustes baseados em dados', desc: 'Com métricas reais, a mentoria trabalha calibração de formato, cadência e ângulo editorial.' },
      { track: 'ind', title: 'Primeira revisão 1:1', desc: 'Balanço dos três meses e ajuste do plano para o encerramento.' },
      { track: 'adv', title: 'Sessão ao vivo com conselheiro', desc: 'Conversa aberta sobre como cada conselheiro construiu presença que gera negócio de verdade.' },
      { track: 'ind', title: 'Revisão 1:1 final', desc: 'Balanço dos 60 dias e reajuste do plano para garantir o resultado até o final do projeto.' },
    ],
  },
  {
    num: 'Mês 04', name: 'Handover completo', verb: 'O time opera com autonomia.',
    panelTitle: <>A Blank faz o handover completo.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.32)' }}>O time está pronto para tudo.</em></>,
    panelLead: 'A call de internalização de 3h transfere o método, os processos e toda a documentação para o time. Você termina o programa com capacidade estruturada para replicar tudo que aprendeu.',
    cycleLabel: 'Ciclo do mês 4',
    weeks: [{ type: 'on', label: 'Sem A', text: 'Mentoria com o time' }, { type: 'sp', label: 'Sem B', text: 'Sessão conselheiro' }, { type: 'on', label: 'Sem C', text: 'Revisão 1:1 final' }, { type: 'gold', label: 'Sem D', text: 'Internalização 3h' }],
    items: [
      { track: 'ind', title: 'Call de internalização — 3 horas', desc: 'Transferência do método, processos e documentação para o time. A operação passa a ser inteiramente do cliente.' },
      { track: 'ind', title: 'Revisão 1:1 final', desc: 'Balanço dos 120 dias e plano de operação autônoma para os meses seguintes.' },
      { track: 'ind', title: 'Documentação completa entregue', desc: 'Diagnóstico, plano, roteiros e decisões dos 120 dias. Dentro da empresa para sempre.' },
      { track: 'adv', title: 'Sessão com conselheiro', desc: 'Rotação mensal permanente: todos os membros têm acesso aos três conselheiros ao longo do programa.' },
    ],
  },
];

const dotColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.6)', col: 'rgba(240,237,230,0.25)', adv: 'rgba(212,200,154,0.5)' };
const trackLabels: Record<Track, string> = { ind: 'Individual', col: 'Coletiva', adv: 'Conselheiro' };
const trackLabelColors: Record<Track, string> = { ind: 'rgba(240,237,230,0.5)', col: 'rgba(240,237,230,0.3)', adv: 'rgba(212,200,154,0.4)' };

const cwStyles = (type: CWType) => {
  if (type === 'on') return { bg: 'rgba(240,237,230,0.05)', borderTop: '2px solid rgba(240,237,230,0.4)', nColor: 'rgba(240,237,230,0.38)', lColor: 'rgba(240,237,230,0.85)', lWeight: 500 };
  if (type === 'sp') return { bg: 'rgba(240,237,230,0.03)', borderTop: '2px solid rgba(212,200,154,0.4)', nColor: 'rgba(212,200,154,0.3)', lColor: 'rgba(212,200,154,0.7)', lWeight: 400 };
  if (type === 'gold') return { bg: 'rgba(240,237,230,0.05)', borderTop: '2px solid rgba(212,200,154,0.6)', nColor: 'rgba(240,237,230,0.38)', lColor: 'rgba(240,237,230,0.85)', lWeight: 500 };
  return { bg: 'rgba(240,237,230,0.02)', borderTop: '2px solid transparent', nColor: 'rgba(240,237,230,0.25)', lColor: 'rgba(240,237,230,0.55)', lWeight: 400 };
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
            Quatro meses,<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>cada um com</em><br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>responsabilidades distintas.</em>
          </h2>
        </div>
        <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
          Cada mês tem responsabilidades distintas. O primeiro é quase todo da Blank. Do segundo em diante, o time assume progressivamente — até operar com total autonomia no encerramento.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
        {months.map((mo, i) => (
          <button key={i} onClick={() => setActive(i)} className="p-[20px_24px] text-left transition-colors" style={{
            background: active === i ? 'rgba(240,237,230,0.03)' : 'transparent',
            borderRight: i < 3 ? '1px solid rgba(240,237,230,0.08)' : 'none',
            borderBottom: active === i ? '2px solid hsl(42 33% 92%)' : '2px solid transparent',
          }}>
            <div className="font-mono-brand text-[13px] font-medium tracking-[3px] uppercase mb-2" style={{ color: active === i ? 'rgba(240,237,230,0.55)' : 'rgba(240,237,230,0.28)' }}>{mo.num}</div>
            <div className="font-serif-body text-[19px] italic leading-none mb-1" style={{ color: active === i ? 'hsl(42 33% 92%)' : 'rgba(240,237,230,0.55)' }}>{mo.name}</div>
            <div className="font-mono-brand text-[13px] mt-[5px] tracking-[0.2px] leading-[1.4]" style={{ color: active === i ? 'rgba(240,237,230,0.55)' : 'rgba(240,237,230,0.3)' }}>{mo.verb}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: '1px solid rgba(240,237,230,0.08)', borderTop: 'none', background: 'rgba(240,237,230,0.015)' }}>
        <div className="p-[44px_24px] md:p-[44px_40px] flex flex-col gap-6" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
          <h3 className="font-display font-normal leading-[0.97] text-cream" style={{ fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-1.5px' }}>{m.panelTitle}</h3>
          <p className="text-[18px] font-light leading-[1.85]" style={{ color: 'rgba(240,237,230,0.92)' }}>{m.panelLead}</p>
          <div>
            <div className="font-mono-brand text-[13px] font-medium tracking-[3px] uppercase mb-2.5" style={{ color: 'rgba(240,237,230,0.68)' }}>{m.cycleLabel}</div>
            <div className="grid grid-cols-4 gap-[2px]">
              {m.weeks.map((w, i) => {
                const s = cwStyles(w.type);
                return (
                  <div key={i} className="p-[12px_10px]" style={{ background: s.bg, border: '1px solid rgba(240,237,230,0.03)', borderTop: s.borderTop }}>
                    <div className="font-mono-brand text-[12px] font-medium tracking-[2px] uppercase mb-[5px]" style={{ color: s.nColor }}>{w.label}</div>
                    <div className="text-[14px] leading-[1.4]" style={{ color: s.lColor, fontWeight: s.lWeight }}>{w.text}</div>
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
                <div className="font-mono-brand text-[12px] font-medium tracking-[2px] uppercase mb-1" style={{ color: trackLabelColors[item.track] }}>{trackLabels[item.track]}</div>
                <div className="text-[17px] font-medium mb-1 leading-[1.3]" style={{ color: 'rgba(240,237,230,0.9)' }}>{item.title}</div>
                <div className="text-[16px] font-light leading-[1.6]" style={{ color: 'rgba(240,237,230,0.72)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JornadaSection;
