// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const { API_URL, NODE_ENV } = process.env;

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  swcMinify: false,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    API_URL,
    NODE_ENV,
  },
  webpack(config) {
    return {
      ...config,
      optimization: {
        ...config.optimization,
        providedExports: true,
        sideEffects: 'flag',
      },
    };
  },
};

module.exports = withNx(nextConfig);
