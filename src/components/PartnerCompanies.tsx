import { partnerCompanies } from "../data/partnerCompanies";

export function PartnerCompanies() {
  return (
    <section className="section pt-0">
      <div className="container-page">

        <div className="mb-8 text-center">
          <h2 className="section-title">
            Nossas <span>Empresas Parceiras</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCompanies.map((c) => (
            <article
              key={c.name}
              className="glass-card overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* CAPA */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden"
              >
                <img
                  src={c.cover}
                  alt={`Preview do site ${c.name}`}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                  <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Visitar Site
                  </span>
                </div>
              </a>

              {/* CONTEÚDO */}
              <div className="p-6">
                <img
                  src={c.logo}
                  alt={`Logo ${c.name}`}
                  className="mx-auto h-16 w-auto object-contain"
                />

                <h3 className="mt-4 font-bold">
                  {c.name}
                </h3>

                <p className="mt-1 text-xs text-white/50">
                  {c.category}
                </p>

                <a
                  className="primary-btn mt-5 inline-block"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar no Site
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="secondary-btn">
            Ver Todas as Empresas
          </button>
        </div>

      </div>
    </section>
  );
}