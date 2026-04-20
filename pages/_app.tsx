import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';

const SmoothScroll = dynamic(() => import('@components/SmoothScroll'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SmoothScroll />
      <Component {...pageProps} />
    </>
  );
}
