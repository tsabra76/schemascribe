export default function BuyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900">Pricing</h1>
        <p className="mt-2 text-slate-600">
          One-time purchase. No subscription. Bring your own LLM API key.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Free</h2>
            <p className="mt-1 text-3xl font-bold text-slate-900">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>1 OpenAPI spec</li>
              <li>Basic documentation output</li>
              <li>Community support</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-brand-500 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-700">Pro</h2>
            <p className="mt-1 text-3xl font-bold text-slate-900">$39</p>
            <p className="text-sm text-slate-500">One-time + tax</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Unlimited specs</li>
              <li>AI-generated examples and SDK snippets</li>
              <li>Mock server generation</li>
            </ul>
            <a
              href="/api/checkout"
              className="mt-6 block rounded-lg bg-brand-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-700"
            >
              Buy Pro
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}