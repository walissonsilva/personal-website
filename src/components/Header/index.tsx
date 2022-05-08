import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderBrand,
  HeaderContent,
  NavLink,
  NavList,
} from "./styles";

interface HeaderProps {
  active: "home" | "blog" | "cursos";
}

export const Header = ({ active }: HeaderProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (_) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, []);

  return (
    <Container hasSrolled={hasScrolled}>
      <HeaderContent>
        <HeaderBrand href="/">
          Walisson Silva <span>.</span>
        </HeaderBrand>

        <NavList>
          <NavLink href="/" isActive={active === "home"}>
            Home
          </NavLink>
          <NavLink href="/cursos" isActive={active === "cursos"}>
            Cursos
          </NavLink>
          <NavLink href="/blog" isActive={active === "blog"}>
            Blog
          </NavLink>
        </NavList>
      </HeaderContent>
    </Container>
  );
};
