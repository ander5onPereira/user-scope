import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

describe('AppRoutes', () => {
  it('renders UserList page on root path', () => {
    window.history.pushState({}, 'Test page', '/');

    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Geral')).toBeInTheDocument();
  });

  it('renders UserPage on dynamic path', () => {
    window.history.pushState({}, 'Test page', '/1');

    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
