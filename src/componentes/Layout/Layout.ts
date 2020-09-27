import styled from 'styled-components';

const Layout = styled.div`
  margin: 80px 1.5rem 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  grid-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Layout;
