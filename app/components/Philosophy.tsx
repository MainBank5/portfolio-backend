import { Section } from "./Section";

export function Philosophy() {
  return (
    <Section title="Architecture Philosophy">
      <ul className="list-disc list-inside text-neutral-300 space-y-1">
        <li>Design systems that scale gradually</li>
        <li>Keep infrastructure boring and predictable</li>
        <li>Avoid unnecessary vendor lock-in</li>
        <li>Write code future engineers can reason about</li>
      </ul>
    </Section>
  );
}
