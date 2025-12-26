import { Section } from "./Section";

export function DevOps() {
  return (
    <Section title="DevOps & Infrastructure">
      <div className="space-y-4 text-neutral-300">
        <h3 className="mb-2 font-medium text-neutral-200">
          Production AWS Infrastructure (IaC)
        </h3>
        <p>
          Built VPCs with public/private subnets, IAM roles with least-privilege access, containerized services via Docker, and CI/CD pipelines with GitHub Actions.
        </p>
        <p className="mt-2 text-neutral-400">
          Outcome: Reliable deployments, repeatable infrastructure, and clear environment separation. Demonstrates operational experience with production systems.
        </p>
      </div>
    </Section>
  );
}
