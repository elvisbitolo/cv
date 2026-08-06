import { globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next";

const config = [...nextConfig, globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])];

export default config;
