import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/system';
import { Toaster } from 'sonner';

import App from './App.tsx';

import './index.css';
import '@fontsource/grandstander/700.css';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
      <Toaster closeButton richColors />
    </HeroUIProvider>
  </StrictMode>,
);
