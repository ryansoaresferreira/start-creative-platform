import { ClipboardList, Monitor, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  [ClipboardList, "Cadastro", "Você envia as informações da sua empresa e escolhe o melhor plano."],
  [Monitor, "Criação", "Nossa equipe cria sua página profissional e personalizada."],
  [Rocket, "Publicação", "Sua empresa entra no portal com uma experiência otimizada."],
  [BarChart3, "Divulgação", "Começamos a divulgar sua empresa para gerar mais visitas e clientes."]
];

export function HowItWorks() {
  return (
    <section className="section pt-0">
      <div className="container-page">
        <div className="mb-10 text-center"><h2 className="section-title">Como <span>funciona</span></h2></div>
        <div className="grid overflow-hidden rounded-xl border border-white/10 bg-panel md:grid-cols-4">
          {steps.map(([Icon, title, text], i) => (
            <div key={title as string} className="relative flex gap-4 border-b border-white/10 p-6 last:border-0 md:border-b-0 md:border-r md:last:border-0">
              <Icon className="mt-1 shrink-0 text-blue" size={34} strokeWidth={1.5} />
              <div><h3 className="text-sm font-bold">{title as string}</h3><p className="mt-2 text-xs leading-5 text-white/45">{text as string}</p></div>
              {i < 3 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden bg-panel text-green md:block" size={22} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
