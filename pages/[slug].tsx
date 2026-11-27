import type { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import type { ServicePageProps } from '@components/sections/ServiceDetailPage';
import { CITIES, type CityPageContent } from '@data/cities';
import { SERVICE_CONTENT } from '@data/service-details';
import { INTERIOR_SERVICES } from '@data/services';

const CityPage = dynamic(() => import('@components/sections/CityPage'));
const ServicePage = dynamic(() => import('@components/sections/ServiceDetailPage'));

type PageProps = ({ kind: 'service' } & ServicePageProps) | { kind: 'city'; city: CityPageContent };

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    ...INTERIOR_SERVICES.map(({ route }) => ({ params: { slug: route } })),
    ...CITIES.map(({ href }) => href),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<PageProps> = ({ params }) => {
  const service = INTERIOR_SERVICES.find(({ route }) => route === params?.slug);
  if (service) {
    return { props: { kind: 'service', service: service.slug, content: SERVICE_CONTENT[service.slug] } };
  }

  const city = CITIES.find(({ href }) => href === `/${params?.slug}`);
  if (!city) return { notFound: true };

  const { name, slug, href, postalCode, departmentName, title, metaDescription, neighbourhoodIntro, neighbourhoods, project, optimizedImages } = city;
  return {
    props: {
      kind: 'city',
      city: {
        name, slug, href, postalCode, departmentName, title, metaDescription, neighbourhoodIntro, neighbourhoods,
        ...(project ? { project } : {}),
        ...(optimizedImages ? { optimizedImages } : {}),
      },
    },
  };
};

export default function DetailPage(props: PageProps) {
  if (props.kind === 'city') return <CityPage city={props.city} />;
  return <ServicePage service={props.service} content={props.content} />;
}
