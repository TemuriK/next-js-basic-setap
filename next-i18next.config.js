module.exports = {
  i18n: {
    locales: ['default', 'en', 'ka'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
