import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  IconBoxSeam,
  IconHome,
  IconShoppingCart,
  IconUser,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';

import ItemNavbar from './ItemNavbar';

import Brand from '@/components/common/Brand';
import { paths } from '@/constants/routerPaths';

const routes = [
  {
    path: paths.home,
    icon: IconHome,
    label: 'Inicio',
  },
  {
    path: paths.shoppingCart,
    icon: IconShoppingCart,
    label: 'Carrito',
    badge: true,
  },
  {
    path: paths.orders,
    icon: IconBoxSeam,
    label: 'Pedidos',
  },
  {
    path: paths.profile,
    icon: IconUser,
    label: 'Perfil',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Animaciones controladas por scroll
  const headerHeight = useTransform(scrollY, [0, 100], [80, 60]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.6]);
  const navItemY = useTransform(scrollY, [0, 100], [0, -2]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const appUrl =
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_APP_URL_DEV
      : import.meta.env.VITE_APP_URL_PROD;

  return (
    <>
      <motion.header
        style={{
          height: headerHeight,
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(0, 0, 0, ${v})`,
          ),
          backdropFilter: useTransform(bgOpacity, (v) => `blur(${v * 12}px)`),
        }}
        className="w-full flex items-center fixed top-0 z-50"
      >
        <nav className="flex justify-between items-center w-4/5 mx-auto h-full p-4">
          {/* Logo con animación de escala */}
          <motion.div style={{ scale: logoScale }}>
            <a href={appUrl} aria-label="volver al inicio">
              <Brand />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex-center gap-3 text-xl">
            {routes.map(({ icon, path, label, badge }, index) => (
              <motion.li key={index} style={{ y: navItemY }}>
                <ItemNavbar
                  href={path}
                  icon={icon}
                  label={label}
                  badge={badge}
                />
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu (sin cambios) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-gray-900 z-40"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {routes.map(({ path, label }, index) => (
                <motion.li
                  key={`mobile-${index}`}
                  className="w-full text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={path}
                    className="block py-2 px-4 text-white hover:bg-gray-800 transition-colors"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
