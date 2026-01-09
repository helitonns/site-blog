import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 👇 informa explicitamente que o Turbopack está ok
  turbopack: {},
};

export default withContentlayer(nextConfig);
