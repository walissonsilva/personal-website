import React from 'react';

import {
  Container,
  HeaderContent,
  HeaderBrand,
  NavList,
  NavLink,
} from './styles';

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <HeaderBrand>
          Walisson Silva <span>_</span>
        </HeaderBrand>

        <NavList>
          <NavLink isActive>Home</NavLink>
          <NavLink>Sobre</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Blog</NavLink>
        </NavList>
      </HeaderContent>
    </Container>
  )
}