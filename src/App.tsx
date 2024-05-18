import { useEffect, useState } from 'react';

// i18n
import './locales/i18n';
// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// eslint-disable-next-line import/no-extraneous-dependencies
import { localStorageDetector } from 'typesafe-i18n/detectors';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { MsalProvider } from '@azure/msal-react';

import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser';

import { msalConfig } from './authConfig';

// i18n
import TypesafeI18n from './i18n/i18n-react';
import { detectLocale } from './i18n/i18n-util';
import { loadLocaleAsync } from './i18n/i18n-util.async';
// redux
import { store, persistor } from './redux/store';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// locales
import ThemeLocalization from './locales';
// components
import { StyledChart } from './components/chart';
import SnackbarProvider from './components/snackbar';
import ScrollToTop from './components/scroll-to-top';
import { MotionLazyContainer } from './components/animate';

import { AuthProvider } from './auth/JwtContext';

import { SettingsProvider } from './components/settings';

const detectedLocale = detectLocale(localStorageDetector);
// import { AuthProvider } from './auth/Auth0Context';
// import { AuthProvider } from './auth/FirebaseContext';
// import { AuthProvider } from './auth/AwsCognitoContext';

// ----------------------------------------------------------------------
const pca = new PublicClientApplication(msalConfig);

export default function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <MsalProvider instance={pca}>
      <AuthProvider>
        <HelmetProvider>
          <TypesafeI18n locale={detectedLocale}>
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <SettingsProvider>
                    <BrowserRouter>
                      <ScrollToTop />
                      <MotionLazyContainer>
                        <ThemeProvider>
                          <ThemeLocalization>
                            <SnackbarProvider>
                              <StyledChart />
                              <Router />
                            </SnackbarProvider>
                          </ThemeLocalization>
                        </ThemeProvider>
                      </MotionLazyContainer>
                    </BrowserRouter>
                  </SettingsProvider>
                </LocalizationProvider>
              </PersistGate>
            </ReduxProvider>
          </TypesafeI18n>
        </HelmetProvider>
      </AuthProvider>
    </MsalProvider>
  );
}
