const nextConfig = {
  images: {
    domains: ["source.unsplash.com"],
    // unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: "export",
};

export default nextConfig;