export type Column<T> = {
  key: keyof T;
  isAction?: boolean;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type Props<T> = {
  columns: Column<T>[];
  data: T[];
  striped?: boolean;
  compact?: boolean;
  pageSize?: number;
  nextPage?: () => void;
  prevPage?: () => void;
  page?: number;
  totalPages?: number;
  count?: number;
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
};
