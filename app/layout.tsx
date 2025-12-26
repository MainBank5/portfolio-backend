import "./globals.css";

export const metadata = {
  title: "Backend & Cloud Engineer",
  description:
    "Backend, Cloud, and DevOps engineer focused on scalable systems and production infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-200 antialiased">
        <main className="mx-auto max-w-3xl px-6 py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
