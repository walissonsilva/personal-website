import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
`

export const SimpleCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  margin-top: 3rem;

  @media (max-width: 896px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const SimpleCard = styled.div`
  background-color: ${props => props.theme.colors["background-primary"]};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1.75rem;
  }

  strong {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 0.85rem;
  }

  &:hover {
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.45);
    transition: box-shadow 0.3s;
  }
`