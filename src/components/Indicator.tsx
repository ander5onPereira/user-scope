import styled, { css } from 'styled-components';

type IndicationProps = {
  $size?: string | number;
  $color?: 'Alive' | 'Dead' | 'unknown' | string;
};

export const Indication = styled.div<IndicationProps>`
  width: ${({ $size = 16 }) =>
    typeof $size === 'number' ? `${$size}px` : $size};
  height: ${({ $size = 16 }) =>
    typeof $size === 'number' ? `${$size}px` : $size};
  border-radius: 50%;

  ${({ $color = 'unknown' }) => {
    switch ($color) {
      case 'Alive':
        return css`
          background: green;
        `;
      case 'Dead':
        return css`
          background: red;
        `;
      case 'unknown':
        return css`
          background: #00000030;
        `;
      default:
        return css`
          background: #00000030;
        `;
    }
  }}
`;
