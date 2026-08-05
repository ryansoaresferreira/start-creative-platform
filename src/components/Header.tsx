import { Menu, X, PlusCircle } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Início", "Empresas", "Serviços", "Sobre", "Portfólio", "Blog", "Contato"];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-black italic tracking-tight">
          <span className="text-blue">S</span><span className="text-green">TART</span>
          <small className="ml-1 block text-[7px] not-italic tracking-[0.32em] text-white/70">CREATIVE DIGITAL</small>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-semibold text-white/75 transition hover:text-green">{link}</a>)}
        </nav>

        <a href="https://wa.me/5534997799498?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar." className="hidden items-center gap-2 rounded-md border border-blue/50 bg-blue/5 px-4 py-2 text-xs font-bold hover:border-green lg:flex">
          Anuncie sua Empresa <PlusCircle size={16} className="text-green" />
        </a>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-panel px-5 py-4 lg:hidden">
          {links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block py-3 text-sm font-semibold text-white/80">{link}</a>)}
        </nav>
      )}
    </header>
  );
}
