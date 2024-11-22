
import About from "@/components/About";
import Contact from "@/components/Contact.";
import Hero from "@/components/Hero";
import Project from "@/components/project";
import Skill from "@/components/Skill";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
