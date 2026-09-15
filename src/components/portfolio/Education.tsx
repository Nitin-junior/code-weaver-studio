import { Award, GraduationCap } from "lucide-react";
import { Reveal, Section } from "./Reveal";

const certifications = [
  "Google — Networking Fundamentals",
  "Computer Vision using Python",
  "Blockchain",
  "Proposal Development",
];

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="surface-card h-full rounded-2xl p-6 sm:p-8">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">
              Bachelor of Engineering — Information Science &amp; Engineering
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              R.R. Institutions of Technology / Visvesvaraya Technological University
            </p>
            <p className="mt-2 font-mono text-xs text-primary">2020 – 2024 · CGPA 6.9/10</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="surface-card h-full rounded-2xl p-6 sm:p-8">
            <Award className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
