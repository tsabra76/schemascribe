import { parse as parseYaml } from "yaml";

export interface OpenApiSpec {
  openapi?: string;
  info?: {
    title?: string;
    version?: string;
    description?: string;
  };
  paths?: Record<string, unknown>;
  components?: Record<string, unknown>;
}

export function parseOpenApiSpec(text: string): OpenApiSpec {
  const trimmed = text.trim();
  if (!trimmed) {
    throw new Error("Empty OpenAPI spec");
  }

  try {
    return JSON.parse(trimmed) as OpenApiSpec;
  } catch {
    try {
      return parseYaml(trimmed) as OpenApiSpec;
    } catch (yamlError) {
      throw new Error("Invalid OpenAPI JSON or YAML");
    }
  }
}