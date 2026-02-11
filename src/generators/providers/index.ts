import { ProviderModule } from "../../types/provider.js";
import { GoogleProvider } from "./google.js";
import { GitHubProvider } from "./github.js";
import { FacebookProvider } from "./facebook.js";
import { Provider } from "../../types/config.js";
import { CredentialsProvider } from "./creadential.js";

const registry: Record<Provider, ProviderModule> = {
  google: GoogleProvider,
  github: GitHubProvider,
  facebook: FacebookProvider,
  credentials: CredentialsProvider,
};

export function loadProviders(selected: Provider[]) {
  return selected.map((p) => registry[p]);
}
