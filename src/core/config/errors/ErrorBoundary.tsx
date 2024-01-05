import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  {
    hasError: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('error:', {
      errorName: error.name,
      errorMessage: error.message || error.name,
      errorStackTrace: error.stack,
      componentStackTrace: errorInfo?.componentStack,
      currentRoute: window.location.href,
    });
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <></>;
    }
    return <>{children}</>;
  }
}
