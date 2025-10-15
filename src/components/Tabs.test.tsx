import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tabs } from './Tabs';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

describe('Tabs Component', () => {
  it('renders tabs and switches content correctly', async () => {
    const tabs = [
      { id: 'tab1', label: 'Tab 1', content: () => <div>Content 1</div> },
      { id: 'tab2', label: 'Tab 2', content: () => <div>Content 2</div> },
    ];

    render(
      <ThemeProvider theme={theme}>
        <Tabs tabs={tabs} defaultActive='tab1' />
      </ThemeProvider>
    );

    const content1 = screen.getByText('Content 1');

    expect(content1).toBeVisible();
    expect(screen.queryByText('Content 2')).toBeNull();

    fireEvent.click(screen.getByText('Tab 2'));

    await waitFor(() => {
      const content2 = screen.getByText('Content 2');
      expect(content2).toBeVisible();
      expect(content1).not.toBeVisible();
    });
  });
});
