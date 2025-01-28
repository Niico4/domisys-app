'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  path: string;
  label: string;
}

const LinkItem: FC<Props> = ({ label, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`text-lg ${isActive ? 'bg-blue-400 bg-clip-text text-transparent font-semibold' : 'text-gray-100 hover:opacity-80 transition-all'}`}
    >
      {label}
    </Link>
  );
};

export default LinkItem;
