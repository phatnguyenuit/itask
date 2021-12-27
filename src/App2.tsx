import { ApolloProvider } from '@apollo/client';
import { Suspense, lazy } from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import Toast from 'components/common/toast';
import AppLayout from 'components/app/app-layout';
import AuthLayout from 'components/auth/auth-layout';
import Spin from 'ui/spin';

import store from 'states/store';
import theme from 'theme';

import apolloClient from './config/apolloClient';
import useStyles from './App.styles';

const NotFoundPage = lazy(() => import('pages/not-found'));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={4}>
            <CssBaseline />
            <Toast />
            <StyledEngineProvider injectFirst>
              <ApolloProvider client={apolloClient}>
                <BrowserRouter>
                  <Suspense
                    fallback={<Spin className={classes.loadingPage} loading />}
                  >
                    <Routes>
                      <Route path="app/*" element={<AppLayout />} />
                      <Route path="auth/*" element={<AuthLayout />} />
                      <Route
                        path=""
                        element={<Navigate to="app/dashboard" replace />}
                      />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </Suspense>
                </BrowserRouter>
              </ApolloProvider>
            </StyledEngineProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </Box>
  );
};
export default App;
