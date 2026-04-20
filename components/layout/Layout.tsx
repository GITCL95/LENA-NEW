import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideFooterPreCta?: boolean;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const path = router.asPath.split('?')[0].split('#')[0];
  return (
    <div className="relative">
      <TopBar />
      <Header currentPath={path} />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}
