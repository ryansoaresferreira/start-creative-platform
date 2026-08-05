import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="container-page relative grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-4">Mais visibilidade. Mais clientes. Mais resultados.</p>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Sua empresa merece <span className="gradient-text">mais clientes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
            Anuncie em um portal profissional e tenha uma página exclusiva dentro do maior diretório de empresas e serviços da região.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/70">
            {["Página Profissional", "Apareça no Google", "Mais Clientes", "Suporte Especializado"].map(x => <span key={x} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue" />{x}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-btn" href="https://wa.me/5534997799498?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar.">Quero anunciar minha empresa <ArrowRight size={17} /></a>
            <a className="secondary-btn" href="https://wa.me/5534997799498?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar.">Falar com especialista <MessageCircle size={17} className="text-green" /></a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-10 rounded-full bg-blue/10 blur-3xl" />
          <div className="relative rounded-2xl border border-blue/20 bg-gradient-to-br from-panel2 to-ink p-3 shadow-blueglow">
            <div className="aspect-[16/10] rounded-xl border border-white/10 bg-[#0b1a2b] p-5">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2 w-2 rounded-full bg-green" />
                <span className="h-2 w-2 rounded-full bg-blue" />
                <span className="ml-2 h-2 w-24 rounded-full bg-white/10" />
              </div>
              <div className="grid h-full place-items-center text-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue">Portal de empresas</p>
                  <h2 className="mt-3 text-2xl font-black sm:text-3xl">Encontre as melhores<br /><span className="text-green">empresas e serviços</span></h2>
                  <div className="mx-auto mt-5 flex max-w-sm overflow-hidden rounded-md border border-white/10 bg-ink">
                    <span className="flex-1 px-4 py-3 text-left text-xs text-white/30">Buscar empresa, serviço...</span>
                    <button className="bg-green px-5 text-xs font-bold text-ink">Buscar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 w-32 rounded-2xl border border-green/30 bg-panel p-3 shadow-glow sm:-right-8 sm:w-40">
            <div className="mb-3 h-2 w-16 rounded bg-green/60" />
            {[1,2,3].map(i => <div key={i} className="mb-2 h-7 rounded bg-white/5" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
