import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;
