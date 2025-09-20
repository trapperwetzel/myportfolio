import Silk from "./Silk";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import PillNav from "./PillNav"; 
import tcoding from "../assets/tcoding.png";

export default function Home() {
  return (
    <div className="relative text-white">
      {/* Global Silk Background */}
      <div className="absolute inset-0 -z-10">
        <Silk speed={5} scale={1} color="#065f46" noiseIntensity={1} />
      </div>

      {/* Pill Navbar */}
      <PillNav
        logo= {tcoding}
        items={[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Resume", href: "#resume" },
        ]}
        activeHref="#about"
        className="px-6"
        ease="power2.easeOut"
        baseColor="#065f46"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#065f46"
      />

      {/* Sections */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>
    </div>
  );
}
