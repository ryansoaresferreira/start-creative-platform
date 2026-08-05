import { partnerCompanies } from "../data/partnerCompanies";
export function PartnerCompanies(){
return <section className="section pt-0"><div className="container-page">
<div className="mb-8 text-center"><h2 className="section-title">Nossas <span>Empresas Parceiras</span></h2></div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{partnerCompanies.map(c=><article key={c.name} className="glass-card p-6 text-center"><img src={c.logo} className="mx-auto h-20 object-contain"/><h3 className="mt-4 font-bold">{c.name}</h3><p className="text-xs text-white/50">{c.category}</p><a className="primary-btn mt-5" href={c.url} target="_blank">Entrar no Site</a></article>)}
</div><div className="mt-8 text-center"><button className="secondary-btn">Ver Todas as Empresas</button></div></div></section>}