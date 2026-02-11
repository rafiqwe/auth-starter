import { AuthCLIConfig } from "../types/config.js";
import { loadProviders } from "../generators/providers/index.js";
import { injectDynamicRoute } from "./injectDynamicRoute.js";
import { write } from "../utils/write.js";

export function injectAuthConfig(ans: AuthCLIConfig) {
  const providers = loadProviders(ans.providers);
  const file = `
import NextAuth from "next-auth";
${providers.map((p) => p.getImport()).join("\n")}
${
  ans.database === "postgres"
    ? 'import { PrismaAdapter } from "@auth/prisma-adapter" \n import { NextAuthOptions } from "next-auth";'
    : ""
}

export const authOptions: NextAuthOptions = {

  ${ans.database === "postgres" ? "adapter: PrismaAdapter(prisma)," : ""}
  providers: [
    ${providers.map((p) => p.getConfig()).join(",")}
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" },
};

export default NextAuth(authOptions);
`;

  write(process.cwd(), "lib/auth.ts", file);
  injectDynamicRoute();
}
