import { Section } from "./Section";

export function Footer() {
  return (
    <Section>
      <p className="text-neutral-400">
        <a
          href="https://github.com/MainBank5"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/eliud-karuga-6549ab250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a href="mailto:eliudkaruga97@gmail.com">Email</a>
      </p>
    </Section>
  );
}
