import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Experience
          experience={portfolioData.experience}
          education={portfolioData.education}
        />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact data={portfolioData} />
      </main>
      <Footer />
    </>
  );
}
