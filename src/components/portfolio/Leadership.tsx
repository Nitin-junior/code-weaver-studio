import { Reveal, Section } from "./Reveal";
import { Users, MapPin, Bike, TrendingUp, DollarSign, ClipboardList } from "lucide-react";

const highlights = [
  { icon: DollarSign, label: "Project budget", value: "$33K" },
  { icon: ClipboardList, label: "Household surveys", value: "440" },
  { icon: MapPin, label: "Wards covered", value: "6" },
  { icon: Users, label: "Team led", value: "13" },
  { icon: Bike, label: "Bicycles distributed", value: "81" },
  { icon: TrendingUp, label: "Attendance uplift", value: "75% → 85%" },
];

const responsibilities = [
  "Led implementation of a $33K education project focused on improving attendance among economically disadvantaged students.",
  "Coordinated collection and analysis of 440 household surveys across 6 wards, using attendance, economic conditions, disability, and distance-to-school data to inform beneficiary selection.",
  "Managed a team of 5 staff and 8 volunteers and coordinated with schools, local authorities, communities, and development partners.",
  "Delivered targeted education and mobility support, including 81 bicycles and school learning materials.",
  "Contributed to an increase in school attendance from 75% to 85%, with follow-up monitoring confirming sustained improvement.",
];

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title="Projects I've led"
      description="Hands-on project management turning field data into measurable outcomes for communities."
    >
      <div className="relative border-l border-border pl-8">
        <span className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_20%,transparent)]" />
        <Reveal>
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                Project Manager — Improving School Attendance in Rautahat District
              </h3>
              <span className="font-mono text-xs text-primary">2024</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              MDNF × Latter-Day Saint Charities (LDSC) | WE24NPL0010
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border border-border bg-background/50 p-4 text-center transition-colors hover:border-primary/30"
                >
                  <h.icon className="mx-auto size-5 text-primary" />
                  <p className="mt-2 text-lg font-bold tracking-tight">{h.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
