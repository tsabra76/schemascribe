import { OpenApiSpec } from "./openapi";

export function generateMockServer(spec: OpenApiSpec): string {
  const paths = spec.paths || {};
  const routes = Object.entries(paths)
    .map(([path, operations]) => {
      const method = Object.keys(operations || {})[0] || "get";
      return `app.${method}("${path}", (req, res) => {\n  res.json({ ok: true });\n});`;
    })
    .join("\n\n");

  return `const express = require("express");\nconst app = express();\napp.use(express.json());\n\n${routes}\n\napp.listen(3000, () => console.log("Mock server running on port 3000"));`;
}