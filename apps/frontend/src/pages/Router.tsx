import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import SignInPage from './auth/SignIn';
import SignUpPage from './auth/SignUp';
import RecoverPasswordPage from './auth/RecoverPassword';

import { paths } from '@/constants/routerPaths';
import { customerRoutes } from '@/routes/customer.routes';
import AppLayout from '@/components/layout/AppLayout';

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={paths.authRoot}>
        <Route path={paths.signIn} element={<SignInPage />} />
        <Route path={paths.signUp} element={<SignUpPage />} />
        <Route path={paths.recoverPassword} element={<RecoverPasswordPage />} />
      </Route>

      <Route path="/" element={<AppLayout />}>
        {customerRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </>,
  ),
);
