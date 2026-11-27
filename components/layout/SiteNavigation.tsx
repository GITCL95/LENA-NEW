import { useEffect, useRef, useState } from 'react';
import { CITIES } from '@data/cities';
import { DESKTOP_NAV_ROUTES, MOBILE_NAV_ROUTES } from '@data/client';
import { INTERIOR_SERVICES, serviceHref } from '@data/services';
import styles from '@/styles/Site.module.css';

export type SitePage = (typeof MOBILE_NAV_ROUTES)[number]['page'] | 'service' | 'city' | 'legal' | 'notFound';
type NavigationGroup = 'services' | 'zones';

const submenus = {
  services: INTERIOR_SERVICES.map(({ slug, title }) => ({ label: title, href: serviceHref(slug) })),
  zones: CITIES.map(({ name, href }) => ({ label: name, href })),
};

export default function SiteNavigation({ page, activePath, mobile = false, onFragmentNavigate }: {
  page: SitePage;
  activePath?: string;
  mobile?: boolean;
  onFragmentNavigate?: () => void;
}) {
  const [openGroup, setOpenGroup] = useState<NavigationGroup | null>(null);
  const list = useRef<HTMLUListElement>(null);
  const routes = mobile ? MOBILE_NAV_ROUTES : DESKTOP_NAV_ROUTES;

  useEffect(() => {
    if (!openGroup) return;

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !list.current?.contains(event.target)) {
        setOpenGroup(null);
      }
    }

    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [openGroup]);

  return (
    <ul ref={list} className={mobile ? styles.mobileNavList : styles.desktopNavList} role="list">
      {routes.map(({ label, href, page: destination }) => {
        const group = destination === 'services' || destination === 'zones' ? destination : null;
        const open = group !== null && openGroup === group;
        const selectedGroup = (page === 'city' && group === 'zones') || (page === 'service' && group === 'services');
        const current = destination === page ? 'page' : selectedGroup ? 'location' : undefined;
        const linkHref = page === 'contact' && destination === 'contact' ? '#contact' : href;
        const submenuId = `${mobile ? 'mobile' : 'desktop'}-${group}-links`;

        return (
          <li
            key={href}
            className={styles.navItem}
            onBlur={(event) => {
              if (!mobile && open && !event.currentTarget.contains(event.relatedTarget)) {
                setOpenGroup((current) => current === group ? null : current);
              }
            }}
            onKeyDown={(event) => {
              if (open && event.key === 'Escape') {
                event.stopPropagation();
                setOpenGroup(null);
                event.currentTarget.querySelector('button')?.focus();
              }
            }}
          >
            <div className={styles.navItemRow}>
              <a href={linkHref} aria-current={current} onClick={linkHref === '#contact' ? onFragmentNavigate : undefined}>{label}</a>
              {group && (
                <button
                  type="button"
                  className={styles.submenuButton}
                  aria-label={`Sous-menu ${label}`}
                  aria-expanded={open}
                  aria-controls={submenuId}
                  onClick={() => setOpenGroup((current) => current === group ? null : group)}
                >
                  <span aria-hidden="true" />
                </button>
              )}
            </div>
            {group && (
              <ul id={submenuId} className={styles.submenu} hidden={!open} role="list">
                {submenus[group].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} aria-current={activePath === item.href ? 'page' : undefined}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
