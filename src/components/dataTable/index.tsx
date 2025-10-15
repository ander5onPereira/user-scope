import { GrNext, GrPrevious } from 'react-icons/gr';
import {
  Button,
  EmptyRow,
  Footer,
  PageControls,
  Span,
  StyledTable,
  TableWrapper,
  TD,
  TH,
  THead,
  TR,
} from './styled';
import type { Props } from './types';
import { Grid } from '../Grid';
import { useTranslation } from 'react-i18next';

export function DataTable<T extends object>(props: Props<T>) {
  const {
    columns,
    data,
    striped = true,
    compact = false,
    pageSize,
    nextPage,
    prevPage,
    page = 1,
    totalPages,
    count,
    onRowClick,
    isLoading = false,
  } = props;
  const { t } = useTranslation();

  const handleRowClick = (e: React.MouseEvent, row: T) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-no-row-click]')) return;

    onRowClick?.(row);
  };

  return (
    <div>
      <TableWrapper>
        <StyledTable $compact={compact} role='table'>
          <THead>
            <tr>
              {columns.map((col, key) => (
                <TH
                  key={`header-${String(col.key)}-${key}`}
                  align={col.align}
                  width={col.width}
                >
                  <span>{col.title}</span>
                </TH>
              ))}
            </tr>
          </THead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyRow>{t('loading')}</EmptyRow>
                </td>
              </tr>
            ) : (
              <>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length}>
                      <EmptyRow>{t('emptyList')}</EmptyRow>
                    </td>
                  </tr>
                ) : (
                  data?.map((row, idx) => (
                    <TR
                      key={idx}
                      $striped={striped}
                      $index={idx}
                      onClick={(e) => onRowClick && handleRowClick(e, row)}
                    >
                      {columns.map((col, key) => {
                        const value = row[col.key];
                        return (
                          <TD
                            key={`td-${String(col.key)}-${key}`}
                            align={col.align}
                            data-label={col.title}
                          >
                            {col.isAction ? (
                              <div data-no-row-click>
                                {col.render
                                  ? col.render(value, row)
                                  : String(value ?? '')}
                              </div>
                            ) : col.render ? (
                              col.render(value, row)
                            ) : (
                              String(value ?? '')
                            )}
                          </TD>
                        );
                      })}
                    </TR>
                  ))
                )}
              </>
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>

      {pageSize && (
        <Footer>
          <Grid $gap='0.2rem'>
            <Span>{t('showing')}</Span>
            <Span>
              {t('showingInfo', { length: data.length, totalCount: count })}
            </Span>
          </Grid>
          <PageControls>
            <Button
              onClick={prevPage ? () => prevPage() : undefined}
              disabled={page <= 1}
            >
              <GrPrevious />
            </Button>
            <Grid $gap='0.2rem'>
              <Span>{t('page')}</Span>
              <Span>
                {t('pageInfo', { length: page, totalCount: totalPages })}
              </Span>
            </Grid>
            <Button
              onClick={nextPage ? () => nextPage() : undefined}
              disabled={!nextPage}
            >
              <GrNext />
            </Button>
          </PageControls>
        </Footer>
      )}
    </div>
  );
}

// ---------- Example usage (for reference) ----------
// Import DataTable and use in any component
// const columns = [
//   { key: 'id', title: 'ID', width: '60px', sortable: true },
//   { key: 'name', title: 'Nome', sortable: true },
//   { key: 'email', title: 'Email' },
// ];
// const data = [
//   { id: 1, name: 'Anderson', email: 'a@example.com' },
//   { id: 2, name: 'Bea', email: 'b@example.com' },
// ];
// <DataTable columns={columns} data={data} pageSize={5} />

export default DataTable;
