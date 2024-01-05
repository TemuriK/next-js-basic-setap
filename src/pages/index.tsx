import React from 'react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
import styled from 'styled-components';

const HomePageWrapper = styled.div``;

const HomePage = ({}: GetServerSidePropsResult) => {
  const { t } = useTranslation();

  return <HomePageWrapper className="home-page-wrapper">{t('months.January')}</HomePageWrapper>;
};

// Get server side props -----------------------------------------------------------------------------
type GetServerSidePropsResult = {};

type GetServerSidePropsReturnType = GetServerSidePropsResult | SSRConfig;

export const getServerSideProps: GetServerSideProps<GetServerSidePropsReturnType> = async ({ locale = 'ka' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default HomePage;
