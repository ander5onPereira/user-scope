import { theme } from '@/styles/theme';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';
import { Collapse } from './index';

describe('Collapse Component', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Collapse title='Test Title'>Content</Collapse>
      </ThemeProvider>
    );
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });

  it('toggles content visibility on header click', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Collapse title='Test Title'>Content</Collapse>
      </ThemeProvider>
    );

    const header = screen.getByText('Test Title');

    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    fireEvent.click(header);

    await waitFor(() => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    fireEvent.click(header);

    await waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });

  it('calls onOpenChange callback when toggled', () => {
    const onOpenChange = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Collapse title='Test Title' onOpenChange={onOpenChange}>
          Content
        </Collapse>
      </ThemeProvider>
    );
    const header = screen.getByText('Test Title');

    fireEvent.click(header);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.click(header);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
