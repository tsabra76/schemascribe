import { OpenApiSpec } from "./openapi";

interface LlmResponse {
  content: string;
}

async function callOpenAi(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You write concise API documentation." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenAI call failed: ${res.status}`);
  }

  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return data.choices?.[0]?.message?.content || "";
}

async function callAnthropic(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-haiku-latest",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Anthropic call failed: ${res.status}`);
  }

  const data = (await res.json()) as {
    content?: Array<{ type?: string; text?: string }>;
  };
  return data.content?.find((c) => c.type === "text")?.text || "";
}

export async function generateDocs(
  spec: OpenApiSpec,
  apiKey: string,
  provider = "openai"
): Promise<string> {
  const prompt = `Generate Markdown API documentation for this OpenAPI spec:\n\n${JSON.stringify(spec, null, 2)}`;

  if (provider === "anthropic") {
    return callAnthropic(prompt, apiKey);
  }
  return callOpenAi(prompt, apiKey);
}
