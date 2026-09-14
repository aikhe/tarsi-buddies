import type { ReactNode } from 'react';
import './PageLayout.css';
import { SiteHeader } from './SiteHeader.tsx';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="page-layout section-container">{children}</main>
    </>
  );
}
