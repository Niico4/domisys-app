import { Metadata } from 'next';
import Link from 'next/link';
import { Grandstander } from 'next/font/google';
import Image from 'next/image';
import { Button } from '@heroui/react';

import notFoundImage from '@/../public/404.webp';

export const metadata: Metadata = {
  title: 'Página no encontrada | DomiSys',
  description:
    'Lo sentimos, la página que buscas no está disponible. Puede que el enlace esté roto o la URL sea incorrecta. Vuelve al inicio y sigue explorando nuestro contenido.',
};

const grandstander = Grandstander({
  subsets: ['latin'],
  display: 'swap',
});

export default function NotFoundPage() {
  return (
    <main className={`${grandstander.className} flex-center w-4/5 mx-auto`}>
      <article className="flex flex-col items-start gap-5">
        <h1 className="text-6xl font-bold text-gray-100">
          ¡Lo sentimos! No encontramos lo que buscabas.
        </h1>
        <p className="text-xl text-gray-300/80">
          La página que intentas visitar no está disponible. Vuelve a la página
          principal y sigue explorando.
        </p>
        <Button as={Link} href="/" variant="ghost" color="primary">
          Regresar al inicio
        </Button>
      </article>

      <article className="w-4/5 flex-center">
        <Image
          src={notFoundImage}
          alt="Imagen de página no encontrada"
          width={0}
          height={0}
          className="size-full object-cover"
        />
      </article>
    </main>
  );
}
