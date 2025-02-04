import React from 'react';
import { Grandstander } from 'next/font/google';

const grandstander = Grandstander({
  subsets: ['latin'],
  display: 'swap',
});

const Logo = () => {
  return (
    <span
      className={`${grandstander.className} bg-logo-gradient bg-clip-text text-transparent text-5xl font-bold`}
    >
      DomiSys
    </span>
  );
};

export default Logo;
