import styled, { type CSSProp } from 'styled-components';

type GridProps = {
  $wrap?: boolean;
  $flexDirection?: 'row' | 'column';
  $gap?: string | number;
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  $css?: CSSProp;
};

export const Grid = styled.div<GridProps>`
  display: flex;
  flex-direction: ${({ $flexDirection = 'row' }) => $flexDirection};
  align-items: ${({ $justifyContent = 'center' }) => $justifyContent};
  justify-content: ${({ $alignItems = 'center' }) => $alignItems};
  flex-wrap: ${({ $wrap = true }) => ($wrap ? 'wrap' : 'nowrap')};
  gap: ${({ $gap = 0 }) => (typeof $gap === 'number' ? `${$gap}px` : $gap)};
  ${({ $css }) => $css && $css};
`;
