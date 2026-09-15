import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal, Section } from "./Reveal";

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Have a project, a role, or an idea? Reach out and I'll get back to you."
    >
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <a
            href="mailto:hello@example.com"
            className="surface-card flex items-center justify-center gap-3 rounded-2xl p-6 text-center transition-colors hover:border-primary/40 sm:p-8"
          >
            <Mail className="size-6 text-primary" />
            <span className="text-lg font-semibold sm:text-xl">hello@example.com</span>
          </a>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" /> {label}
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">Based in Kathmandu, Nepal</p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:px-8">
        <p>© {new Date().getFullYear()} Nitin Priyadarshi. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
