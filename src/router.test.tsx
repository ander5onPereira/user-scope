import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() },
  }),
}));
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

    expect(screen.getByText('general')).toBeInTheDocument();
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

    expect(screen.getByText('loading')).toBeInTheDocument();
  });
});
