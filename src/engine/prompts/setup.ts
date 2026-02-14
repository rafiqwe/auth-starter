import { multiselect, confirm, select } from "@clack/prompts";
import { AuthCLIConfig } from "../../types/config.js";

export async function runSetup(): Promise<AuthCLIConfig> {
  const providers = await multiselect({
    message: "Select authentication providers",
    options: [
      { value: "google", label: "Google Provider" },
      { value: "github", label: "GitHub Provider" },
      { value: "credentials", label: "Credentials Provider" },
    ],
    required: true,
  });

  const middleware = await confirm({
    message: "Enable route protection middleware?",
  });

  const database = await select({
    message: "Database integration",
    options: [
      { value: "postgres", label: "PostgreSQL" },
      { value: "mongodb", label: "MongoDB" },
      { value: "none", label: "None" },
    ],
  });

  const ui = await confirm({
    message: "Generate login UI components?",
  });

  return {
    providers: providers as any,
    middleware: middleware as boolean,
    database: database as any,
    ui: ui as boolean,
  };
}
