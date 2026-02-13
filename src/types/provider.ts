export type ProviderModule = (options?: any) => {
  name: string;

  getImport(): string;

  getConfig(): string;

  getEnv(): string[];

  getDependencies(): string[];
};
