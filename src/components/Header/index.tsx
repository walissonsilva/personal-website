import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

import {
  Container,
  HeaderContent,
  HeaderBrand,
  NavList,
  NavLink,
} from './styles';

interface HeaderProps {
  active: 'home' | 'blog';
}

export const Header = ({
  active,
}: HeaderProps) => {
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
  }, [])

  return (
    <Container hasSrolled={hasScrolled}>
      <HeaderContent>
        <HeaderBrand href="/">
          Walisson Silva <span>.</span>
        </HeaderBrand>

        <NavList>
          <NavLink
            href="/"
            isActive={active === 'home'}
          >
            Home
          </NavLink>
          {/* <NavLink>About</NavLink> */}
          {/* <NavLink>Portfolio</NavLink> */}
          <NavLink
            href="/blog"
            isActive={active === 'blog'}
          >
            Blog
          </NavLink>
        </NavList>
      </HeaderContent>
    </Container>
  )
}