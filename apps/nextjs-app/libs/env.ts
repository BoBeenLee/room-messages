import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig() ?? {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
};
const {
  API_URL,
  NODE_ENV,
}: {
  API_URL: string;
  NODE_ENV: string;
} = publicRuntimeConfig;

export const env = {
  API_URL,
  NODE_ENV,
};
