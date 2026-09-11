import type { ReactNode } from 'react';
import './PageLayout.css';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <main className="page-layout section-container">{children}</main>;
}
