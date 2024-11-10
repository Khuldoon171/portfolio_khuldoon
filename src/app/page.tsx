import Contact from "./Component/contact";
import Hero from "./Component/hero";
import Project from "./Component/project";
import Skill from "./Component/skill";
import About from "./Component/about";



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
    
  );
}
