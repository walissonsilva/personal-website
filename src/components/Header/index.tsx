import React, { useEffect, useState } from 'react';

import {
  Container,
  HeaderContent,
  HeaderBrand,
  NavList,
  NavLink,
} from './styles';

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(()=>{
    document.addEventListener("scroll", (_) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  },[])

  return (
    <Container hasSrolled={hasScrolled}>
      <HeaderContent>
        <HeaderBrand>
          Walisson Silva <span>.</span>
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