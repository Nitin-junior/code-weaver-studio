import { Reveal, Section } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering practical digital solutions">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Development and Technology Professional working at the intersection of technology, data,
            and community development. Experienced in managing development projects, coordinating
            teams and stakeholders, conducting data-driven assessments, and developing digital
            solutions for education, skills, and social development initiatives.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Production-grade Next.js and React applications</li>
              <li>GIS mapping and data visualization dashboards</li>
              <li>AI API integration and computer vision</li>
              <li>Database design, REST APIs, and deployment</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
