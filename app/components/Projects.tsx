import { Section } from "./Section";

export function Projects() {
  return (
    <Section title="Projects">
      <div className="space-y-10">
        <div>
          <h3 className="mb-2 font-medium text-neutral-200">
            Multi-Tenant Campaign Management Platform
          </h3>
          <p className="mb-2 text-neutral-400">
            A backend platform supporting agencies, teams, campaigns, and audiences with strict data isolation.
          </p>
          <ul className="space-y-1 text-neutral-300 list-disc list-inside">
            <li>Multi-tenant PostgreSQL schema</li>
            <li>NestJS + GraphQL API</li>
            <li>Role-based access control (system → agency → staff)</li>
            <li>Redis caching for performance</li>
            <li>Background processing with Graphile Worker</li>
          </ul>
          <p className="mt-2 text-neutral-400">
            Designed for scale, data safety, and complex organizational hierarchies.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-medium text-neutral-200">
            Cloud-Native Reminder & Notification System
          </h3>
          <p className="mb-2 text-neutral-400">
            A scalable reminder system delivering real-time and scheduled notifications.
          </p>
          <ul className="space-y-1 text-neutral-300 list-disc list-inside">
            <li>PostgreSQL-based pub/sub</li>
            <li>Job scheduling and retries</li>
            <li>GraphQL subscriptions for real-time updates</li>
            <li>Horizontal scaling without managed queues</li>
          </ul>
          <p className="mt-2 text-neutral-400">
            Avoids vendor lock-in while maintaining reliability and predictable behavior.
          </p>
        </div>
      </div>
    </Section>
  );
}
