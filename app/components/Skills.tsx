import { Section } from "../components/Section";


export function Skills() {
  return (
    <Section title="Skills">
      <div className="space-y-10">
        <div>
          <h3 className="mb-3 font-medium text-neutral-200">
            Backend & APIs
          </h3>
          <ul className="space-y-1 text-neutral-300">
            <li>NestJS, .NET Web API</li>
            <li>REST & GraphQL APIs</li>
            <li>Authentication & Authorization</li>
            <li>Background jobs & workers (Graphile Worker, Bull)</li>
            <li>Messaging queues & async processing</li>
            <li>Multi-tenant system design</li>
            <li>Concurrency & parallel execution</li>
            <li>
              Distributed systems fundamentals (consistency, replication,
              sharding, streams)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-medium text-neutral-200">
            Databases & Data
          </h3>
          <ul className="space-y-1 text-neutral-300">
            <li>PostgreSQL (schema design, indexes, transactions)</li>
            <li>Redis (caching, queues, rate limiting)</li>
            <li>Caching strategies at application & database level</li>
            <li>SQL vs NoSQL tradeoffs</li>
            <li>Data migrations & versioning</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-medium text-neutral-200">
            Cloud & DevOps
          </h3>
          <ul className="space-y-1 text-neutral-300">
            <li>AWS (ECS/EKS, EC2, S3, IAM, VPC)</li>
            <li>Docker & Kubernetes</li>
            <li>CI/CD with GitHub Actions</li>
            <li>Infrastructure as Code (Terraform)</li>
            <li>Secrets & environment management</li>
            <li>
              Observability: logs, metrics, traces, SLOs, alerting, runbooks
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
