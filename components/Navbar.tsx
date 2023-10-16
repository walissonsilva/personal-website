"use client";

import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const body = document.body;

    if (theme !== "dark") {
      body.classList.remove("dark");
      body.classList.add("light");
    } else {
      body.classList.add("dark");
      body.classList.remove("light");
    }
  }, [theme]);

  return (
    <header className="border-b-muted border-l-transparent border-[1px] border-solid h-16 flex items-center justify-between">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between w-full">
        <Link href="/" className="text-primary font-bold text-lg">
          Walisson Silva
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button
                variant="outline"
                size="icon"
                aria-label="toggle-change-theme"
                className="ml-2"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
