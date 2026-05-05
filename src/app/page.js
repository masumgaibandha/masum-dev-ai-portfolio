import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0e0e0e] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
