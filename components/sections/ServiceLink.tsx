import type { ReactNode } from 'react';
import { SERVICES_PATH } from '@data/client';
import { serviceHref, type InteriorService } from '@data/services';
import styles from '@/styles/Site.module.css';

export default function ServiceLink({ service, children }: {
  service: InteriorService['slug'] | 'overview';
  children: ReactNode;
}) {
  return (
    <a className={styles.serviceLink} href={service === 'overview' ? SERVICES_PATH : serviceHref(service)}>
      {children}
    </a>
  );
}
