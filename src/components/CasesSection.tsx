import { getFormUrl } from "@/lib/utm";
import caseTallis from "@/assets/case-tallis.png";
import caseSandra from "@/assets/case-sandra.png";
import caseTony from "@/assets/case-tony.png";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const cases = [
  { img: caseTallis, alt: 'Tallis Gomes — +200M alcance/mês' },
  { img: caseSandra, alt: 'Sandra Chayo — +200 mil seguidores' },
  { img: caseTony, alt: 'Tony Bernardini — Top of mind do seu setor' },
];

const CasesSection = () => (
  <section id="cases" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Resultados</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Cases de<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>clientes.</em>
        </h2>
      </div>
      <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
        A Blank gere 34 milhões de seguidores dos principais empresários do Brasil. O método funciona em fundadores diferentes, setores diferentes e estágios distintos de empresa. Os resultados falam por si.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <img key={i} src={c.img} alt={c.alt} className="w-full h-auto rounded-lg object-cover" />
      ))}
    </div>
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a href={getFormUrl()} target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[14px] font-medium tracking-[2px] uppercase bg-cream text-ink py-4 px-8 no-underline transition-opacity hover:opacity-85">Enviar Aplicação</a>
    </div>
  </section>
);

export default CasesSection;
