import styled, { css } from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  max-height: 80dvh;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
`;

const StyledTable = styled.table<{ $compact?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
  font-size: ${({ $compact }) => ($compact ? '0.85rem' : '0.95rem')};
`;

const thCommon = css`
  text-align: left;
  padding: 12px 16px;
  user-select: none;
  font-weight: 600;
  white-space: nowrap;
`;

const THead = styled.thead`
  background: linear-gradient(180deg, #f8fafc, #ffffff);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const TH = styled.th<{ align?: string; width?: string }>`
  ${thCommon}
  text-align: ${({ align }) => align || 'left'};
  width: ${({ width }) => width || 'auto'};
`;

const TR = styled.tr<{ $striped?: boolean; $index?: number }>`
  background: ${({ $striped, $index }) =>
    $striped && $index !== undefined && $index % 2 === 1
      ? '#fbfbfd'
      : 'transparent'};
  &:hover {
    background: rgba(99, 102, 241, 0.06);
    cursor: pointer;
  }
`;

const TD = styled.td<{ align?: string }>`
  padding: 12px 16px;
  text-align: ${({ align }) => align || 'left'};
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EmptyRow = styled.div`
  padding: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const SortIcon = styled.span`
  display: inline-block;
  margin-left: 8px;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding: 0.5rem;
`;

const PageControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Button = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;
export {
  TableWrapper,
  StyledTable,
  THead,
  TH,
  TR,
  TD,
  EmptyRow,
  SortIcon,
  Footer,
  PageControls,
  Button,
};
