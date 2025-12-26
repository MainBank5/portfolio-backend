import { Section } from "./Section";

export function WorkHistory() {
  return (
    <Section title="Work History">
      <div className="space-y-10 text-neutral-300">
        <div>
          <h4 className="font-medium text-neutral-200">
            Lead Software Engineer
          </h4>
          <p className="text-neutral-400">Creative Edge | October 2024 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lead engineer for the company’s flagship media platform built on a .NET microservice architecture with an Angular-based microfrontend.</li>
            <li>Designed, developed, and optimized multiple backend microservices, ensuring high availability and scalable communication across services.</li>
            <li>Refactored and modernized the Angular microfrontend to improve performance, maintainability, and UX based on product owner requirements.</li>
            <li>Built new production features end-to-end across backend and frontend, supporting a platform with active paying users.</li>
            <li>Managed DevOps pipelines in Azure, including CI/CD workflows, infrastructure management, and environment configuration for continuous delivery.</li>
            <li>Developed a second internal product (MVP) using NestJS (backend) and Next.js (frontend), delivering a functional prototype ready for stakeholder evaluation.</li>
            <li>Participated in code reviews for our MVP product and our main SaaS product.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-neutral-200">Backend Engineer</h4>
          <p className="text-neutral-400">Laara Group | September 2024 – January 2025</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Built and optimized backend services with Node.js and NestJS, improving API performance and scalability for high-traffic use cases.</li>
            <li>Implemented Docker-based environments ensuring consistent deployments across development and production.</li>
            <li>Designed efficient PostgreSQL database structures to support new features and improve query performance.</li>
            <li>Collaborated with UI/UX, frontend, and product teams to deliver features aligned with business goals.</li>
            <li>Integrated security best practices including advanced authentication workflows and GCP-based access controls.</li>
            <li>Conducted code reviews, ensuring stable, production-ready releases through proactive issue detection.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-neutral-200">Full Stack Engineer</h4>
          <p className="text-neutral-400">Koch Properties | August 2024 – September 2024</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed and optimized the company's real estate platform using Next.js, React, TypeScript, and MongoDB, reducing load times by 15%.</li>
            <li>Managed distributed data storage and caching, reducing CPU usage and cutting VPS operational costs by 5%.</li>
            <li>Improved SEO via metadata optimization, dynamic rendering, and content indexing strategies in Next.js.</li>
            <li>Built and maintained CI/CD pipelines for automated deployments and improved developer workflow.</li>
            <li>Designed and refined database queries and data models to support dynamic property listings and search features.</li>
            <li>Delivered mobile-friendly, responsive UI components for cross-device accessibility.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-neutral-200">Freelance Web Developer</h4>
          <p className="text-neutral-400">Remote | November 2022 – July 2023</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Built and deployed a full-featured e-commerce platform using Node.js, React, and MongoDB with authentication, payments, and admin dashboards.</li>
            <li>Developed a doctor appointment booking system improving patient-doctor scheduling with secure APIs and intuitive UI.</li>
            <li>Optimized personal portfolio using Next.js and Tailwind CSS, achieving a 50% reduction in load time.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
