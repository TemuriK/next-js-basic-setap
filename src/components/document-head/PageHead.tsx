import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';

interface PageHeadProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageHead = React.memo(({ title, description, children }: PageHeadProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:description" content={t('metaTags.opengraph.description') || 'Digital contracting platform'} />
      <meta name="twitter:description" content={t('metaTags.opengraph.description') || 'Digital contracting platform'} />
      <meta property="og:url" content={`https://signify.ge/${i18n.language}/`} />
      {children}
    </Head>
  );
});

PageHead.displayName = 'PageHead';
export default PageHead;
