import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
      <p className="text-muted-foreground mt-2">This page is coming soon.</p>
    </div>
  );
}
