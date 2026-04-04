import { Hero } from "@/components/Hero";
import { Identity } from "@/components/Identity";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { PhotoTeaser } from "@/components/PhotoTeaser";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Identity />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Services />
      <PhotoTeaser />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 border-t border-border bg-secondary/20 text-center text-sm text-muted-foreground font-mono">
        <p>sys.exit(0) | © {new Date().getFullYear()} Priyabrata Dey</p>
      </footer>
    </div>
  );
}
