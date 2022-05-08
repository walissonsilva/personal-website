import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["white"]};

  display: flex;
  align-items: center;
  position: relative;

  svg {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    max-width: 100%;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  font-size: 1rem;
  width: 100%;
  height: 1.25rem;

  &:focus {
    outline: none;
  }
`;
