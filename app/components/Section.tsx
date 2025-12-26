export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <h2 className="mb-6 text-sm font-semibold tracking-wide text-neutral-400 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
