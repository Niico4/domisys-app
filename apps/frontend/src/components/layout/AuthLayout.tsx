import { Card } from '@heroui/card';

import Brand from '../common/Brand';

export const AuthLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <section className="w-full h-full md:h-screen grid place-content-center mx-auto">
    <div className="flex-col-center gap-3 p-6 w-fit mx-auto">
      <img src="/logo.webp" alt="Logo" className="size-12" />
      <Brand />
    </div>
    <Card
      className="min-w-[450px] max-w-[600px] p-10 surface-glass gap-6"
      radius="sm"
    >
      <div className="flex-col-center">
        <h1>{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>

      {children}
    </Card>
  </section>
);
