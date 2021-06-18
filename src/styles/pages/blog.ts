import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  min-height: calc(100vh - 200px - 4rem);
`

export const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 3rem;

  & > * {
    flex: 1 330px;
    min-height: 410px;
  }

  @media (max-width: 990px) {
    & > * {
      min-height: auto;
    }
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
  background-color: ${props => props.theme.colors["white"]};

  display: flex;
  align-items: center;
  position: relative;

  svg {
    color: ${props => props.theme.colors.black};
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    max-width: 100%;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  font-size: 1rem;
  width: 100%;
  height: 1.25rem;

  &::placeholder {
    /* color: ${props => props.theme.colors.alpha}; */
  }
`