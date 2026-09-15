import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal, Section } from "./Reveal";

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Have a project, a role, or an idea? Send a message and I'll get back to you."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form
            className="surface-card rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-muted-foreground">Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block text-sm">
                <span className="text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Send className="size-4" /> Send message
            </button>
            {sent ? (
              <p className="mt-4 text-sm text-primary">
                Thanks — your message is ready to send once email delivery is connected.
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card h-full rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Elsewhere
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" /> {label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Based in Kathmandu, Nepal</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:px-8">
        <p>© {new Date().getFullYear()} Nitin Paswan. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
