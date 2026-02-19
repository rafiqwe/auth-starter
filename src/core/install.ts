import { execa } from "execa";
import chalk from "chalk";
import { Engine } from "../types/config.js";

export async function installDeps({
  deps,
  engine,
}: {
  deps: string[];
  engine: Engine;
}) {
  if (engine === "nextauth") {
    const devDeps = ["next-auth", ...deps];
    console.log(chalk.green("\nInstalling devDependencies:"));
    devDeps.forEach((dep) => console.log(chalk.cyan("- " + dep)));

    await execa("npm", ["install", "next-auth", ...deps], {
      stdio: "inherit",
    });
  } else {
    const devDeps = ["next-auth@beta", ...deps];
    console.log(chalk.green("\nInstalling devDependencies:"));
    devDeps.forEach((dep) => console.log(chalk.cyan("- " + dep)));

    await execa("npm", ["install", "next-auth@beta", ...deps], {
      stdio: "inherit",
    });
  }
  await execa("npm", ["install", "--save-dev", "@types/bcrypt"]);

  console.log(chalk.green.bold("\n✅ Dependencies installed successfully!\n"));
}
