import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';

import { BrowserRouter as Router } from 'react-router-dom';
import { QueryProvider } from './context/QueryContext.tsx';
import AppRoutes from './router.tsx';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <Router>
        <ToastContainer theme='colored' />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Router>
    </QueryProvider>
  </StrictMode>
);
