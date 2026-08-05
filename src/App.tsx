import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Companies } from "./components/Companies";
import { PartnerCompanies } from "./components/PartnerCompanies";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Companies />
        <PartnerCompanies />
        <CTA />
      </main>
      <Footer />
      <a href="https://wa.me/5534997799498?text=Olá!%20Encontrei%20o%20site%20da%20Start%20Creative%20Digital%20e%20tenho%20interesse%20em%20divulgar%20minha%20empresa.%20Gostaria%20de%20conhecer%20os%20planos,%20benefícios%20e%20como%20posso%20começar." target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green text-ink shadow-[0_0_30px_rgba(0,230,118,.35)] transition hover:scale-105">
        <MessageCircle size={27} />
      </a>
    </div>
  );
}
