import { ArrowRight } from "lucide-react";

export function CTA() {
  return <section id="contato" className="pb-16">
    <div className="container-page">
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-blue/20 bg-gradient-to-r from-blue/15 via-panel to-green/10 p-8 sm:flex-row sm:items-center">
        <div><h2 className="text-2xl font-black">Pronto para levar sua empresa para o <span className="text-green">próximo nível?</span></h2><p className="mt-2 text-sm text-white/55">Anuncie agora e comece a receber mais clientes todos os dias.</p></div>
        <a className="primary-btn whitespace-nowrap" href="https://wa.me/5534997799498?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar." target="_blank" rel="noreferrer">Quero anunciar minha empresa <ArrowRight size={17}/></a>
      </div>
    </div>
  </section>;
}
