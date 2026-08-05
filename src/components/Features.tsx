import { features } from "../data/siteData";

export function Features() {
  return (
    <section id="serviços" className="section">
      <div className="container-page">
        <div className="mb-10 text-center">
          <h2 className="section-title">O que <span>sua empresa recebe</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/50">Tudo que você precisa para aumentar sua presença digital e conquistar novos clientes.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map(([icon, title, text]) => (
            <article key={title} className="glass-card group p-5 transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-blueglow">
              <div className="mb-4 text-2xl text-blue transition group-hover:text-green">{icon}</div>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-white/45">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
