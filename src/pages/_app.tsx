import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary, defaultTheme } from '@/core';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="app-container">
      <ThemeProvider theme={defaultTheme}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
};

export default appWithTranslation(App);
