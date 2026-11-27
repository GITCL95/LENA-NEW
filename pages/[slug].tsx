import type { GetStaticPaths, GetStaticProps } from 'next';
import CityPage from '@components/sections/CityPage';
import { CITIES, getCityBySlug, type CityPageContent } from '@data/cities';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CITIES.map(({ filePath }) => ({ params: { slug: filePath } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ city: CityPageContent }> = async ({ params }) => {
  const city = typeof params?.slug === 'string' ? getCityBySlug(params.slug) : undefined;
  if (!city) return { notFound: true };

  const { name, slug, href, postalCode, departmentName, title, metaDescription, neighbourhoodIntro, neighbourhoods, paintingRate, project } = city;
  return {
    props: {
      city: {
        name, slug, href, postalCode, departmentName, title, metaDescription, neighbourhoodIntro, neighbourhoods,
        ...(paintingRate ? { paintingRate } : {}),
        ...(project ? { project } : {}),
      },
    },
  };
};

export default CityPage;
