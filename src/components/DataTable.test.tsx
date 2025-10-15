import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';
import { describe, it, expect } from 'vitest';
import type { Column } from './DataTable/types';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() },
  }),
}));

describe('DataTable Component', () => {
  it('renders data correctly', () => {
    const columns: Column<{ id: number; name: string }>[] = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
    ];

    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    render(<DataTable columns={columns} data={data} />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('renders empty state when no data is provided', () => {
    const columns: Column<{ id: number; name: string }>[] = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
    ];

    render(<DataTable columns={columns} data={[]} />);

    expect(screen.getByText('emptyList')).toBeInTheDocument();
  });
});
