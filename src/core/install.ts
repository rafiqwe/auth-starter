import { execa } from "execa";
import chalk from "chalk";
import { AuthCLIConfig } from "../types/config.js";

export async function installDeps({
  deps,
  ans,
}: {
  deps: string[];
  ans: AuthCLIConfig["database"];
}) {
  const devDeps = ["next-auth", ...deps];
  console.log(chalk.green("\nInstalling devDependencies:"));
  devDeps.forEach((dep) => console.log(chalk.cyan("- " + dep)));

  await execa("npm", ["install", "next-auth", ...deps], {
    stdio: "inherit",
  });
  await execa("npm", ["install", "--save-dev", "@types/bcrypt"]);

  console.log(chalk.green.bold("\n✅ Dependencies installed successfully!\n"));

  console.log(chalk.cyan("Next steps:"));
  console.log(chalk.yellow("1. Add your DATABASE_URL to the .env file"));
  console.log(
    chalk.yellow(
      "2. Add your providers credentials CLIENT_ID and CLIENT_SECRET to the .env file",
    ),
  );
  console.log(
    chalk.yellow("3. Run migrations: ") +
      chalk.white.bold("npx prisma migrate dev --name init"),
  );
  console.log(
    chalk.yellow("4. Generate Prisma client: ") +
      chalk.white.bold("npx prisma generate"),
  );
  console.log(
    chalk.yellow("5. Push schema to database: ") +
      chalk.white.bold("npx prisma db push\n"),
  );

  console.log(chalk.green("🎉 Your database and Prisma are ready! \n"));
  console.log(chalk.blue("Run npm run dev to start your application \n"));
  console.log(
    chalk.green("Login first then get: ") +
      chalk.white.bold("localhost:3000/api/auth/check\n"),
  );
}
