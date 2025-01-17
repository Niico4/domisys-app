import React from 'react';
import { Button, Divider, Tooltip } from '@heroui/react';

import Logo from '@/app/components/shared/Logo';
import { paths, socials } from '@/app/(landing)/constants/constants';

import LinkItem from '../navbar/LinkItem';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full bg-black/20 py-14 backdrop-blur-md">
      <section className="flex flex-col justify-center mx-20 gap-4">
        <article className="flex justify-between items-center w-full">
          <Logo />

          <ul className="flex-center gap-5">
            {paths.map(({ path, label }, index) => (
              <LinkItem key={index} path={path} label={label} />
            ))}
          </ul>
        </article>

        <Divider className="bg-gray-400/30" />

        <article className="flex justify-between items-center mx-20">
          <p className="text-gray-300/70 text-sm">
            ©{currentYear} DomiSys™. Derechos reservados.
          </p>

          <ul className="flex-center gap-2">
            {socials.map(({ label, link, icon: Icon }, index) => (
              <Tooltip key={index} content={label} showArrow>
                <a href={link}>
                  <Button
                    isIconOnly
                    variant="light"
                    startContent={<Icon color="#ECECEC" />}
                  />
                </a>
              </Tooltip>
            ))}
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
