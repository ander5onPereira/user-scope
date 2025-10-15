import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>
      </ThemeProvider>
    );
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant='secondary'>Secondary</Button>
      </ThemeProvider>
    );
    const button = screen.getByText('Secondary');
    expect(button).toHaveStyle('background-color: #00C26D');
  });
});
