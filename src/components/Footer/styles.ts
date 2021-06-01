import styled from "styled-components";

export const Container = styled.footer`
  padding: 2rem;
  width: 100%;
  background-color: ${props => props.theme.colors["background-primary"]};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.alpha};
  font-weight: 400;
  
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-left: 0.4rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s;
    color: ${props => props.theme.colors['secondary-color']};

    &:hover {
      color: ${props => props.theme.colors['primary-color']};
      transition: color 0.3s;
    }
  }
`