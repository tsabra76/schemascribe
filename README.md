# SchemaScribe

Turn OpenAPI specs into interactive API documentation with AI-generated examples, SDK snippets, and a runnable mock server.

## Features

- Paste JSON or YAML OpenAPI 3.x specs
- Generate Markdown documentation with your own LLM key
- SDK snippets for JavaScript, TypeScript, Python, Go, and Java
- Express mock server generator
- One-time Pro purchase via Stripe Checkout with automatic tax
- NextAuth authentication with Google and GitHub
- Prisma + PostgreSQL persistence for specs and licenses

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Stripe Checkout + Webhooks
- Prisma + PostgreSQL
- NextAuth.js
- OpenAI and Anthropic APIs

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Fill in database, Stripe, OAuth, and LLM values.

4. Run migrations:

```bash
npx prisma migrate dev --name init
```

5. Start the dev server:

```bash
npm run dev
```

## Pricing

Freemium includes one spec. Pro will be released soon for a small purchase handling unlimited specs.
