import React from 'react';
import { Button } from '@heroui/react';

import Logo from '@/app/components/shared/Logo';
import { paths } from '@/app/(landing)/constants/constants';

import LinkItem from './LinkItem';

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-black/10 flex items-center  py-4 backdrop-blur-md z-10 shadow-sm shadow-gray-300/20">
      <section className="w-full flex items-center justify-between mx-20">
        <Logo />

        <ul className="flex items-center gap-5">
          {paths.map(({ path, label }, index) => (
            <LinkItem key={index} label={label} path={path} />
          ))}
        </ul>

        <Button variant="shadow" color="secondary">
          Iniciar Sesión
        </Button>
      </section>
    </nav>
  );
};

export default NavBar;
