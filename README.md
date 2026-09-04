# SchemaScribe

Turn OpenAPI specs into interactive API documentation with AI-generated examples, SDK snippets, and a runnable mock server.

## What you can do

- Paste a JSON or YAML OpenAPI 3.x spec into the dashboard.
- Bring your own OpenAI or Anthropic API key to generate Markdown docs.
- Get SDK snippets for JavaScript, TypeScript, Python, Go, and Java.
- Generate a basic Express mock server from your spec.
- Sign in with Google or GitHub to keep your work private.

## What to expect

- The free version allows one saved spec at a time.
- Your API key is used only for the LLM call you start; no key is stored on the server.
- The generated docs, snippets, and mock server appear in the dashboard response.
- Pro features are not enabled in this public repository.

## What you need to do

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env.local
```

3. Fill in these values:
   - `DATABASE_URL` for PostgreSQL
   - `NEXTAUTH_SECRET` and `NEXTAUTH_URL`
   - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for Google sign-in
   - `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` for GitHub sign-in

4. Run the database migration:

```bash
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
npm run dev
```

6. Open `http://localhost:3000`, sign in, and paste an OpenAPI spec on the dashboard.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth.js
- OpenAI and Anthropic APIs

## Pricing

Freemium includes one spec. Pro will be released soon for a small purchase handling unlimited specs.