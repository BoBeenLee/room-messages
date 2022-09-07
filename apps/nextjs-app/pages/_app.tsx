import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import {
  initialize as initializeBaseURL,
  queryClient,
} from '@room-messages/shared-apis';
import { env } from '../libs/env';
import '../styles/styles.css';

initializeBaseURL(env.API_URL);

interface PageProps {
  dehydratedState: unknown;
}

function CustomApp({ Component, pageProps }: AppProps) {
  const { dehydratedState } = pageProps as PageProps;
  return (
    <>
      <Head>
        <title>1:1 채팅서비스</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
