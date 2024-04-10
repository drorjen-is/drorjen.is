import { AppProps } from 'next/app';
import { Oswald } from 'next/font/google';

import '../styles/global.css';

const oswald = Oswald({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={oswald.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
