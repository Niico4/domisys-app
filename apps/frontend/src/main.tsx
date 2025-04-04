import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/system';
import { Toaster } from 'sonner';

import App from './App.tsx';

import '@domisys/ui/fonts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
      <Toaster closeButton richColors />
    </HeroUIProvider>
  </StrictMode>,
);
