import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import SignInPage from './auth/SignIn';
import SignUpPage from './auth/SignUp';
import RecoverPasswordPage from './auth/RecoverPassword';
import HomePage from './customer/Home';
import ShoppingCartPage from './customer/ShoppingCart';

import { paths } from '@/constants/routerPaths';
import Layout from '@/components/layout/Layout';

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Navigate replace to={`/${paths.root}/${paths.signIn}`} />}
      />
      <Route path={paths.root}>
        <Route
          path={`/${paths.root}/${paths.signIn}`}
          element={<SignInPage />}
        />
        <Route
          path={`/${paths.root}/${paths.signUp}`}
          element={<SignUpPage />}
        />
        <Route
          path={`/${paths.root}/${paths.recoverPassword}`}
          element={<RecoverPasswordPage />}
        />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path={`${paths.home}`} element={<HomePage />} />
        <Route path={`${paths.shoppingCart}`} element={<ShoppingCartPage />} />
      </Route>
    </>,
  ),
);
