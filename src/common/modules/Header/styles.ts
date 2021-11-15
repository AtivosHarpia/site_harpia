import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid var(--text-white);
  height: 5rem;
  margin-bottom: 2.5rem;
  background: var(--text-white);

`;

export const Content = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  figure {
    max-width: 8rem;
  }

  div {
    display: flex;
    gap: 1rem;
    svg {
      width: 26px;
      height: 26px;
      color: #333;

      cursor: pointer;
    }
  }
`;