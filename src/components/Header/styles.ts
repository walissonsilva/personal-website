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
  ${props => props.hasSrolled && css`
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
  `}

  @media (max-width: 1300px) {
    padding: 0 4rem;
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

export const HeaderBrand = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;

  span {
    color: ${props => props.theme.colors["primary-color"]};
  }
`

export const NavList = styled.ul`
  list-style: none;
`

export const NavLink = styled.a<NavLinkProps>`
  font-weight: 300;
  cursor: pointer;

  ${props => props.isActive && css`
    background: ${props => `linear-gradient(to right,
    ${props.theme.colors["primary-color"]}, ${props.theme.colors["secondary-color"]})`};
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    font-weight: 500;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
      transition: filter 0.2s;
    }
  `}

  & + a {
    margin-left: 2rem;
  }
`