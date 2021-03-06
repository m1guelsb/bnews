import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
