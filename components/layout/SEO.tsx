import Head from 'next/head';
import { CLIENT, SITE_URL } from '@data/client';
import { interiorIllustration } from '@data/images';
import { buildPageGraph, type PageSchemaOptions } from '@data/schemas';

type SEOProps = PageSchemaOptions & {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
  noIndex?: boolean;
};

export default function SEO({ title, description, path, image, noIndex = false, ...schemaOptions }: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const socialImage = image ?? interiorIllustration;
  const imageUrl = `${SITE_URL}${socialImage.src}`;
  const graph = noIndex ? null : buildPageGraph({
    ...schemaOptions,
    url,
    title,
    description,
    primaryImage: image ? imageUrl : undefined,
  });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? 'noindex, follow' : 'max-image-preview:large'} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={socialImage.alt} />
      <meta property="og:site_name" content={CLIENT.brand} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={socialImage.alt} />
      {graph && (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
        />
      )}
    </Head>
  );
}
