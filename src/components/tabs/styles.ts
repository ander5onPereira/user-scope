import styled, { css, keyframes } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TabList = styled.div`
  display: flex;
  gap: 0.5rem;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.border}`} ;
  flex-wrap: wrap;
  width: max-content
`;

interface TabButtonProps {
  $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;

  ${({ $active,theme }) =>
    $active &&
    css`
      color: ${theme.colors.primaryLight};
      border-bottom-color: ${theme.colors.primaryLight};
      font-weight: 600;
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; 
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TabContent = styled.div`
  padding: 1.5rem 0;
  width: 80dvw;
  animation: ${fadeIn} 0.25s ease;
  color: #333;
  line-height: 1.5;
`;
