import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  it('renders correctly with placeholder', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder='Enter text' />
      </ThemeProvider>
    );
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange handler when typing', async () => {
    const handleChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder='Type here' onChange={handleChange} />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;

    // Simula digitação
    await userEvent.type(input, 'New Value');

    expect(handleChange).toHaveBeenCalled();
    expect(input.value).toBe('New Value'); // opcional: verificar valor final
  });
});
