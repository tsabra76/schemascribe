import { NextResponse } from "next/server";
import { parseOpenApiSpec } from "../../../lib/openapi";
import { generateDocs } from "../../../lib/llm";
import { generateSdkSnippets } from "../../../lib/sdk";
import { generateMockServer } from "../../../lib/mock";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const specText = body.spec;
    const apiKey = body.apiKey || process.env.OPENAI_API_KEY;
    const provider = body.provider || "openai";

    if (!specText) {
      return NextResponse.json({ error: "Missing OpenAPI spec" }, { status: 400 });
    }

    const spec = parseOpenApiSpec(specText);
    const docs = await generateDocs(spec, apiKey, provider);
    const snippets = generateSdkSnippets(spec);
    const mockServer = generateMockServer(spec);

    return NextResponse.json({
      title: spec.info?.title || "API",
      version: spec.info?.version || "1.0.0",
      docs,
      snippets,
      mockServer,
    });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate documentation" },
      { status: 500 }
    );
  }
}