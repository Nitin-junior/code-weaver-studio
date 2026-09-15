import { Reveal, Section } from "./Reveal";
import { Users, MapPin, TrendingUp, DollarSign, ClipboardList, Package, BookOpen, Droplets, Heart, Armchair, Bike } from "lucide-react";

const impact = [
  { icon: DollarSign, label: "Project budget", value: "$33K" },
  { icon: ClipboardList, label: "Household surveys", value: "440" },
  { icon: MapPin, label: "Wards covered", value: "6" },
  { icon: Users, label: "Team led", value: "13" },
  { icon: TrendingUp, label: "Attendance uplift", value: "75% → 85%" },
];

const distributed = [
  { icon: Package, label: "School bags", detail: "Distributed to students" },
  { icon: BookOpen, label: "Notebooks & learning materials", detail: "Core study supplies" },
  { icon: Droplets, label: "Hygiene kits", detail: "Personal hygiene supplies" },
  { icon: Heart, label: "Girls’ health kits", detail: "Additional kits for girls in grades 7–10" },
  { icon: Armchair, label: "Benches / desks", detail: "100 sets provided" },
  { icon: Bike, label: "Bicycles", detail: "80 total — 45 girls, 35 boys" },
];

const responsibilities = [
  "Led implementation of a $33K education project focused on improving attendance among economically disadvantaged students.",
  "Coordinated collection and analysis of 440 household surveys across 6 wards, using attendance, economic conditions, disability, and distance-to-school data to inform beneficiary selection.",
  "Managed a team of 5 staff and 8 volunteers and coordinated with schools, local authorities, communities, and development partners.",
  "Delivered targeted education and mobility support, including school bags, learning materials, hygiene kits, girls’ health kits, 100 bench/desk sets, and 80 bicycles.",
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

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {impact.map((h) => (
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

            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Materials & support distributed
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {distributed.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="rounded-lg border border-border bg-background p-2">
                      <d.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{d.label}</p>
                      <p className="text-xs text-muted-foreground">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
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
