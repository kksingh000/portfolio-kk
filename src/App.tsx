import { PageNav } from "./components/PageNav";
import { Hero } from "./sections/Hero";
import { TechStack } from "./sections/TechStack";
import { Work } from "./sections/Work";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <>
      <PageNav />
      <main>
        <Hero />
        <TechStack />
        <Work />
        <Contact />
      </main>
    </>
  );
}
