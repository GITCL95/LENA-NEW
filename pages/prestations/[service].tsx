import type { GetStaticPaths, GetStaticProps } from 'next';
import ServicePage, { type ServicePageProps } from '@components/sections/ServiceDetailPage';
import { SERVICE_CONTENT } from '@data/service-details';
import { INTERIOR_SERVICES } from '@data/services';

const services = INTERIOR_SERVICES.filter(({ slug }) => slug !== 'peinture');

export const getStaticPaths: GetStaticPaths = () => ({
  paths: services.map(({ route }) => ({ params: { service: route } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServicePageProps> = ({ params }) => {
  const service = services.find(({ route }) => params?.service === route);
  if (!service) return { notFound: true };

  return { props: { service: service.slug, content: SERVICE_CONTENT[service.slug] } };
};

export default ServicePage;
