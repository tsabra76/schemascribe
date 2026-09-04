export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Paste an OpenAPI spec below to generate interactive docs.
        </p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <label htmlFor="spec" className="text-sm font-medium text-slate-700">
            OpenAPI JSON or YAML
          </label>
          <textarea
            id="spec"
            rows={10}
            placeholder='{"openapi":"3.0.0","info":{"title":"Example API","version":"1.0.0"},"paths":{}}'
            className="mt-2 w-full rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <button
            type="button"
            className="mt-4 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            Generate Docs
          </button>
        </div>
      </div>
    </main>
  );
}