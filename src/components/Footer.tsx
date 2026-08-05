import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return <footer className="border-t border-white/10 bg-[#02070d]">
    <div className="container-page grid gap-10 py-12 md:grid-cols-4">
      <div><div className="text-xl font-black italic"><span className="text-blue">S</span><span className="text-green">TART</span></div><p className="mt-3 text-xs leading-5 text-white/45">Conectamos empresas e clientes através de estratégias digitais que geram resultados reais.</p><div className="mt-5 flex gap-3">{[Instagram, Facebook, Linkedin, Youtube].map(I => <I key={I.name} size={17} className="text-white/60 hover:text-green" />)}</div></div>
      <div><h3 className="text-xs font-bold uppercase tracking-wider">Navegação</h3><div className="mt-4 grid gap-2 text-xs text-white/45">{["Início","Empresas","Serviços","Sobre","Portfólio","Blog","Contato"].map(x=><a key={x} href="#">{x}</a>)}</div></div>
      <div><h3 className="text-xs font-bold uppercase tracking-wider">Contato</h3><div className="mt-4 grid gap-3 text-xs text-white/45"><span className="flex gap-2"><Phone size={14}/> (34) 99779-9498</span><span className="flex gap-2"><Mail size={14}/> contato@startcreativedigital.com</span><span className="flex gap-2"><MapPin size={14}/> Uberlândia - MG</span></div></div>
      <div><h3 className="text-xs font-bold uppercase tracking-wider">Receba novidades</h3><p className="mt-4 text-xs leading-5 text-white/45">Receba dicas e novidades para impulsionar seu negócio.</p><div className="mt-4 flex overflow-hidden rounded-md border border-white/10"><input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none" placeholder="Seu melhor e-mail" /><button className="bg-green px-4 text-ink"><ArrowRight size={16}/></button></div></div>
    </div>
    <div className="border-t border-white/10 py-5"><div className="container-page flex flex-col justify-between gap-3 text-[10px] text-white/35 sm:flex-row"><span>© 2026 Start Creative Digital. Todos os direitos reservados.</span><div className="flex gap-5"><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a></div></div></div>
  </footer>;
}
