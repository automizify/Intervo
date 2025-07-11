import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["intervo-widget"],
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  output: "standalone",
};

export default nextConfig;
