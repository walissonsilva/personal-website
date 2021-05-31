import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 4rem 0;
  height: 100%;
  max-width: 1160px;
  margin: 0 auto;

  @media (max-width: 1192px) {
    padding: 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const ButtonCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`