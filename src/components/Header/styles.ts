import styled, { css } from "styled-components";

interface ContainerProps {
  hasSrolled: boolean;
}
interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.header<ContainerProps>`
  background-color: ${props => props.theme.colors["background-primary"]};
  padding: 0 2rem;
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  
  ${props => props.hasSrolled && css`
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
  `}

  @media (max-width: 1300px) {
    padding: 0 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 2.5rem;
  }
`

export const HeaderContent = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderBrand = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.colors["white"]};
  cursor: pointer;

  span {
    color: ${props => props.theme.colors["primary-color"]};
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`

export const NavList = styled.div`
  list-style: none;
`

export const NavLink = styled.a<NavLinkProps>`
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.colors.white};

  ${props => props.isActive ? css`
    background: ${props => `linear-gradient(to right,
    ${props.theme.colors["primary-color"]}, ${props.theme.colors["secondary-color"]})`};
    padding: 0.3rem 1rem 0.4rem;
    border-radius: 1rem;
    font-weight: 500;
    transition: filter 0.2s;

    &:hover {
      color: ${props => props.theme.colors.white};
      filter: brightness(1.25);
      transition: filter 0.2s;
    }
  ` : css`
    padding: 0.3rem 1rem 0.4rem;
    border-radius: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors["background-secondary"]};
      color: ${props => props.theme.colors.white};
      transition: background-color 0.3s;
    }
  `}

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    & + a {
      margin-left: 1rem;
    }
  }
`