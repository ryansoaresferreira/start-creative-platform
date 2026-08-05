import { Star, ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { companies } from "../data/siteData";

export function Companies() {
  return (
    <section id="empresas" className="section pt-0">
      <div className="container-page">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="section-title">Empresas que já <span>fazem parte</span></h2>
          <div className="hidden gap-2 sm:flex"><button className="rounded-full border border-white/10 p-2"><ArrowLeft size={16}/></button><button className="rounded-full border border-white/10 p-2"><ArrowRight size={16}/></button></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companies.map(company => <article key={company.name} className="overflow-hidden rounded-xl border border-white/10 bg-panel">
            <img src={company.image} alt={company.name} className="h-36 w-full object-cover" />
            <div className="p-4"><h3 className="text-sm font-bold">{company.name}</h3><p className="mt-1 text-[11px] text-white/45">{company.category}</p><div className="mt-3 flex items-center gap-1 text-yellow-300">{[1,2,3,4,5].map(i => <Star key={i} size={11} fill="currentColor" />)}<span className="ml-1 text-[10px] text-white/40">5.0</span></div></div>
          </article>)}
        </div>
        <div className="mt-8 text-center"><button className="secondary-btn"><Grid2X2 size={16}/> Ver todas as empresas</button></div>
      </div>
    </section>
  );
}
