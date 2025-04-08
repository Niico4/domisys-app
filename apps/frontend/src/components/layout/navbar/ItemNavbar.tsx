import { NavLink } from 'react-router-dom';
import { Icon } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { useCartStore } from '@/store/useCart.store';

const ItemNavbar = ({
  label,
  icon: Icon,
  href,
  badge,
}: {
  label: string;
  icon: Icon;
  href: string;
  badge?: boolean;
}) => {
  const { cart } = useCartStore();

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          isActive
            ? 'text-light font-medium bg-gray-300/10'
            : 'hover:bg-gray-300/5'
        } flex-center gap-3 px-3 py-2 rounded-lg text-sm relative`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="navActiveIndicator"
              className="absolute inset-0 bg-gray-300/10 rounded-lg"
              transition={{ type: 'spring', duration: 0.4 }}
            />
          )}

          <div className="relative flex items-center gap-3">
            <div className="relative">
              <Icon stroke={1.5} size={22} />

              {badge && cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                >
                  {cart.length}
                </motion.span>
              )}
            </div>

            <span>{label}</span>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default ItemNavbar;
