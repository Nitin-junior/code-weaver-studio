import { Reveal, Section } from "./Reveal";

const bullets = [
  "Manage organizational IT infrastructure, websites, databases, and digital platforms, supporting day-to-day operations.",
  "Develop and maintain web-based tools for data management, project monitoring, reporting, and organizational operations.",
  "Translate organizational requirements into practical digital solutions and web applications.",
  "Coordinate technical requirements between management, development teams, partner organizations, and field teams.",
  "Support development projects through data analysis, digital documentation, technology implementation, and stakeholder coordination.",
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building">
      <div className="relative border-l border-border pl-8">
        <span className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_20%,transparent)]" />
        <Reveal>
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">IT Manager / Project Manager</h3>
              <span className="font-mono text-xs text-primary">2024 – Present</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Madheshi Dalit NGO Federation (MDNF) — Kathmandu, Nepal
            </p>
            <ul className="mt-5 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
