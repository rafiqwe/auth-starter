import fs from "fs";
import crypto from "crypto";

export function generateEnv({
  variables,
  ans,
}: {
  variables: string[];
  ans: string;
}) {
  const secret = crypto.randomBytes(32).toString("hex");
  let databaseUrl = "";
  if (ans === "postgres") {
    databaseUrl = "postgresql://USER:PASSWORD@localhost:5432/authkit-pro";
  }
  if (ans === "mongodb") {
    databaseUrl = "mongodb://localhost:27017/authkit-pro";
  }

  const content = `
NEXTAUTH_SECRET=${secret}
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=${databaseUrl}
${variables.map((v) => `${v}=`).join("\n")}
`;

  fs.writeFileSync(".env", content);
}
