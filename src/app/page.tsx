import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        nextjs-ts-shadcn-template
      </h1>
      <p className="text-muted-foreground max-w-md">
        Next.js, TypeScript, Tailwind CSS, and shadcn/ui, wired up and ready to
        build on.
      </p>
      <Button>Get started</Button>
    </div>
  );
}
