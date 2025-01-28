import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { HeroUIProvider } from '@heroui/react';

import Footer from './layout/footer/Footer';
import NavBar from './layout/navbar/NavBar';

import './styles/globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bienvenidos a DomiSys',
  description:
    'Descubre una plataforma diseñada para gestionar pedidos, inventarios y analíticas de tu negocio de forma eficiente. Simplifica tus operaciones y maximiza tu productividad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.className} antialiased bg-landing custom-theme`}
      >
        <HeroUIProvider>
          <NavBar />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
