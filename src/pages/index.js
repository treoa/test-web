import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import SEO from './components/seo';
import Layout from './../components/layout';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Startup Landing 005" />
      </Layout>
    </StickyProvider>
  );
}
