import styled from 'styled-components';
export const CollapseWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  flex: 0 0 auto;
  margin-bottom: 0.5rem;
`;

export const Header = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  text-align: left;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.div`
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 0px solid transparent;
`;

export const Inner = styled.div`
  padding: 0.6rem 0.8rem;
  line-height: 1.4;
  white-space: normal;
`;
