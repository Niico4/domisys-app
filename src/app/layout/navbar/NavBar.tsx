'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';

import Logo from '@/app/components/common/Logo';
import { paths } from '@/app/constants/constants';

import LinkItem from './LinkItem';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Inicio', 'Quienes Somos', 'Ubicación'];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[rgba(11,1,33,0.62)] py-2"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ul className="flex items-center gap-5">
          {paths.map(({ path, label }, index) => (
            <NavbarItem key={index}>
              <LinkItem label={label} path={path} />
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="/auth/sign-in"
            variant="flat"
            className="text-primary-300"
          >
            Iniciar Sesión
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="/auth/sign-up"
            variant="solid"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
