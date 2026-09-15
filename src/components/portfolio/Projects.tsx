import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Reveal, Section } from "./Reveal";

const projects = [
  {
    title: "Congress Canvas",
    stack: ["Next.js", "React", "AI API", "Canvas"],
    badge: "63,000+ users in one week",
    description:
      "Built and deployed a web application for creating customized congress participant posters and profile visuals. Integrated an AI-powered background removal API for automated photo editing. Implemented image upload, canvas editing, layers, templates, and poster export.",
  },
  {
    title: "School Project Nepal",
    stack: ["Next.js", "React", "GIS", "Data Visualization", "Vercel"],
    description:
      "Developed a GIS-based platform for mapping and monitoring schools across Nepal with province, district, and school-level navigation. Implemented interactive maps, satellite visualization, location-based filtering, and project monitoring features. Built NPHC 2021 demographic dashboards covering population, gender, age, citizenship, and place-of-birth data.",
  },
  {
    title: "Horizon Skill Academy",
    stack: ["Next.js", "React", "Authentication", "File Uploads"],
    description:
      "Developed a bilingual skill-recognition platform with authentication, skill assessment, document uploads, and progress tracking. Built a multi-step workflow covering assessment, evidence submission, testing, certification, and attestation.",
  },
  {
    title: "Encephalone",
    stack: ["Python", "CNN", "Computer Vision"],
    description:
      "Developed a CNN-based application for recognizing handwritten mathematical expressions. Processed handwritten input using computer vision and deep learning techniques.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured projects"
      description="Platforms shipped to real users across civic tech, education, and AI."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className={p.badge ? "lg:col-span-2" : ""}>
            <article className="surface-card group h-full rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold sm:text-2xl">{p.title}</h3>
                {p.badge ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <TrendingUp className="size-3.5" /> {p.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                View Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
