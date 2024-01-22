// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "child",
        // filename: "static/chunks/remoteEntry.js",
        filename: `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        exposes: {
          "./Expose": "./src/components/Expose.tsx",
        },
        // remotes: {
        //   main: `main@http://localhost:3001/_next/static/${
        //     isServer ? "ssr" : "chunks"
        //   }/remoteEntry.js`,
        // },
        shared: {
          // whatever else
          "next/link": {
            singleton: true,
            eager: false,
          },
        },
      })
    );

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
