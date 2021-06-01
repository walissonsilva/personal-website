import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: 3rem;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 896px) {
    grid-template-columns: 1fr;
  }
`