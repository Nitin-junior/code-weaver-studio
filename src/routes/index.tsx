import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Leadership } from "@/components/portfolio/Leadership";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Nitin Priyadarshi — Full-Stack Developer | AI & Data-Driven Web Apps";
const description =
  "Full-Stack Developer building scalable web apps, GIS data visualization platforms, and AI-powered tools with Next.js, React, Python and PostgreSQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Leadership />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
