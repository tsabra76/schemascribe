export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-brand-700 sm:text-5xl">
        SchemaScribe
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Turn OpenAPI specs into interactive API docs with AI-generated examples and SDK snippets.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/dashboard"
          className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
        >
          Open Dashboard
        </a>
        <a
          href="/buy"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          See Pricing
        </a>
      </div>
    </main>
  );
}