import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`

export const PostsContainer = styled.div`
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

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background-color: ${props => props.theme.colors["background-primary"]};

  display: flex;
  align-items: center;
  position: relative;

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    max-width: 100%;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  width: 100%;
  height: 1.25rem;

  &::placeholder {
    color: ${props => props.theme.colors.alpha};
  }
`