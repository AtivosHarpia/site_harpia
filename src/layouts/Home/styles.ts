import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 8rem);

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin: 0 auto 2rem 0;
  }

  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 20rem;
  }

  button {
    width: 20rem;
    padding: 1rem;
    border-radius: 0.4rem;
    background: var(--green);
    color: var(--text-white);

    transition: filter 0.2s;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const Left = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 6rem 2rem;
  border-radius: 0.5rem;

  h1,
  p {
    color: var(--text-white);
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
  }

  p {
    width: 100%;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 2rem;
    p {
      width: 100%;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Right = styled.section`
  /* width: 50%; */
`;
