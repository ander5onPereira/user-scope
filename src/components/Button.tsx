import styled, { css } from 'styled-components';

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

type ButtonProps = {
  variant?: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.md};
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant = 'default', theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.light};
          border: none;

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `;

      case 'outline':
        return css`
          background: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.text.light};
          }
        `;

      case 'destructive':
        return css`
          background-color: #e63946;
          color: ${theme.colors.text.light};

          &:hover {
            background-color: #c81d25;
          }
        `;

      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border: none;

          &:hover {
            background: ${theme.colors.backgroundAlt};
          }
        `;

      case 'link':
        return css`
          background: none;
          color: ${theme.colors.primary};
          border: none;
          padding: 0;
          font-weight: ${theme.font.weight.bold};

          &:hover {
            text-decoration: underline;
          }
        `;

      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.light};
          border: none;

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `;
    }
  }}
`;
