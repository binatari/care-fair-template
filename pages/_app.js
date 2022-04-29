import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import '../src/css/Global.css'
import createEmotionCache from '../src/createEmotionCache';
import PrivateRoute from '../components/Protected/ProtectedRoute';
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AuthLayout from '../components/layouts/AuthLayout';
import { LoginContextProvider } from '../context/LoginProvider';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 3, 
      // staleTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
}
const queryClient = new QueryClient(queryClientConfig)


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
const publicRoutes = ['/admin/login', '/agency/login', '/admin/register']
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
     <LoginContextProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <PrivateRoute publicRoutes={publicRoutes}>
        { Component.PageLayout ? 
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
        :
        <AuthLayout>
        <Component {...pageProps} />
        </AuthLayout>
        }
        </PrivateRoute>
      </ThemeProvider>
      </LoginContextProvider>
     </QueryClientProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
