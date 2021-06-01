import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 3rem;
  width: 100%;

  @media (max-width: 896px) {
    grid-template-columns: 1fr;
  }
`