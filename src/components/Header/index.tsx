import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import {
  Container,
  HeaderBrand,
  HeaderContent,
  MiniMenuContainer,
  NavIcon,
  NavLink,
  NavList,
} from "./styles";

interface HeaderProps {
  active: "home" | "blog" | "cursos";
}

export const Header = ({ active }: HeaderProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <MiniMenuContainer>
          <HeaderBrand href="/">
            Walisson Silva <span>.</span>
          </HeaderBrand>

          <NavIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoIosArrowUp /> : <RiMenuFill />}
          </NavIcon>
        </MiniMenuContainer>

        <NavList isMenuOpen={isMenuOpen}>
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
