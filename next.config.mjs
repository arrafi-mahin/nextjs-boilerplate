const nextConfig = {
    images: {
      domains: ["source.unsplash.com"],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  };
  
  export default nextConfig;