import type { GetStaticProps } from 'next';
import ServicePage, { type ServicePageProps } from '@components/sections/ServiceDetailPage';
import { SERVICE_CONTENT } from '@data/service-details';

export const getStaticProps: GetStaticProps<ServicePageProps> = () => ({
  props: { service: 'peinture', content: SERVICE_CONTENT.peinture },
});

export default ServicePage;
