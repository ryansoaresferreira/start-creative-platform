import { Check, MessageCircle } from "lucide-react";
import { plans } from "../data/siteData";

export function Pricing() {
  return (
    <section id="planos" className="section pt-0">
      <div className="container-page">
        <div className="mb-10 text-center"><h2 className="section-title">Escolha o <span>plano ideal</span> para sua empresa</h2></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map(plan => (
            <article key={plan.name} className={`relative rounded-xl border p-7 ${plan.featured ? "border-blue bg-gradient-to-b from-blue/10 to-panel shadow-blueglow" : "border-white/10 bg-panel"}`}>
              {plan.featured && <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue px-4 py-1 text-[10px] font-black uppercase">Mais escolhido</div>}
              <h3 className="text-center text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-center text-xs text-white/45">{plan.desc}</p>
              <div className="mt-7 text-center"><span className="text-xs text-white/60">A partir de</span><div className="mt-1"><span className="text-sm">R$</span> <strong className="text-4xl">{plan.price}</strong><span className="text-xs text-white/50"> /mês</span></div></div>
              <ul className="mt-7 space-y-3">{plan.items.map(item => <li key={item} className="flex gap-2 text-xs text-white/70"><Check size={15} className="shrink-0 text-green" />{item}</li>)}</ul>
              <a href="https://wa.me/5534999999999?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar." className={`mt-8 w-full ${plan.featured ? "primary-btn" : "secondary-btn"}`}>{plan.featured ? "Solicitar orçamento" : <><MessageCircle size={15} /> Solicitar orçamento</>}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
