interface EnvConfig {
  graphqlUrl: string;
  cmsDomain: string;
  intercomAppId: string;
  baseUrl: string;
}

export const envConfig: Partial<EnvConfig> = {
  graphqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cmsDomain: process.env.NEXT_PUBLIC_CMS_DOMAIN,
  intercomAppId: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
};
