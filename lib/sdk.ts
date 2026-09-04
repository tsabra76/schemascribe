import { OpenApiSpec } from "./openapi";

type Language = "javascript" | "typescript" | "python" | "go" | "java";

export function generateSdkSnippets(spec: OpenApiSpec): Record<Language, string> {
  const paths = Object.keys(spec.paths || {});
  const firstPath = paths[0] || "/users";
  const operations = Object.keys(spec.paths?.[firstPath] || {});
  const method = operations.find((op) =>
    ["get", "post", "put", "patch", "delete"].includes(op)
  ) || "get";

  const baseUrl = "https://api.example.com";
  const pathWithParams = firstPath.replace(/{([^}]+)}/g, ":$1");

  return {
    javascript: `const res = await fetch(\`${baseUrl}${pathWithParams}\`);\nconst data = await res.json();`,
    typescript: `const res = await fetch(\`${baseUrl}${pathWithParams}\`);\nconst data: unknown = await res.json();`,
    python: `import requests\n\nres = requests.${method}("${baseUrl}${firstPath}")\ndata = res.json()`,
    go: `resp, err := http.Get("${baseUrl}${firstPath}")\nif err != nil { log.Fatal(err) }\ndefer resp.Body.Close()`,
    java: `HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create("${baseUrl}${firstPath}"))\n    .build();\nHttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());`,
  };
}