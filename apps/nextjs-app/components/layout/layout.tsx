import React from 'react';
import SEO, { SEOProps } from '../seo';
import styles from './layout.module.css';

interface LayoutProps {
  seoProps?: SEOProps;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { seoProps, children } = props;
  return (
    <div className={styles['layout']}>
      <SEO {...seoProps} />
      {children}
    </div>
  );
}
