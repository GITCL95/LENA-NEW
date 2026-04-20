import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Corben:wght@400;700&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
        <meta name="theme-color" content="#E8623A" />
      </Head>
      <body className="antialiased">
        <a href="#content" className="skip-link">Aller au contenu</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
