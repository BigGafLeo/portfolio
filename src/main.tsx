import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AppRouter from './router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import GlobalStyle from './styles/GlobalStyles';
import MobileNotification from './components/general/MobileNotification';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Analytics />
        <SpeedInsights />
        <GlobalStyle />

        {/* Powiadomienie, które ma być na każdej podstronie */}
        <MobileNotification />

        {/* Router z resztą aplikacji */}
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
