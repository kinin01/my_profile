import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ValueProp from "@/components/ValueProp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-[#42373D] min-h-screen overflow-x-hidden font-body">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Projects />
      <ValueProp />
      <Contact />
      <Footer />
    </main>
  );
}
