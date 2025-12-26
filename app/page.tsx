import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { DevOps } from "./components/Devops";
import { Philosophy } from "./components/Philosophy";
import { WorkHistory } from "./components/WorkHistory";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <DevOps />
      <Philosophy />
      <WorkHistory />
      <Footer />
    </>
  );
}
