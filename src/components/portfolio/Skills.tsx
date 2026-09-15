import { Reveal, Section } from "./Reveal";

const groups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Prisma"] },
  {
    title: "AI & Data",
    items: ["AI APIs", "CNN", "Computer Vision", "Data Visualization", "GIS"],
  },
  { title: "Tools & Deployment", items: ["Git", "GitHub", "Docker", "cPanel", "Vercel"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technical skills"
      description="The stack I use to take products from idea to production."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 70}>
            <div className="surface-card h-full rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
