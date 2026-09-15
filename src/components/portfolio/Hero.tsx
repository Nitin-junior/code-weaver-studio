import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-aura absolute inset-0" aria-hidden />
      <div className="grid-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-primary" /> Available for new projects
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Nitin Priyadarshi
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 text-lg font-medium sm:text-2xl">
            <span className="text-gradient">Full-Stack Developer</span>
            <span className="text-muted-foreground"> | AI &amp; Data-Driven Web Applications</span>
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building scalable web apps, data visualization platforms, and AI-powered tools.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["63,000+", "Users in 1 week"],
              ["4+", "Shipped platforms"],
              ["2024→", "IT & Project lead"],
              ["Full-stack", "Web · AI · GIS"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-primary">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
