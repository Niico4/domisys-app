import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import SignInPage from './auth/SignIn';
import SignUpPage from './auth/SignUp';
import ForgotPasswordPage from './auth/recover-password/RecoverPassword';

import { authPaths } from '@/constants/routerPaths';

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Navigate replace to={`/${authPaths.root}/${authPaths.signIn}`} />
        }
      />
      <Route path={authPaths.root}>
        <Route
          path={`/${authPaths.root}/${authPaths.signIn}`}
          element={<SignInPage />}
        />
        <Route
          path={`/${authPaths.root}/${authPaths.signUp}`}
          element={<SignUpPage />}
        />
        <Route
          path={`/${authPaths.root}/${authPaths.recoverPassword}`}
          element={<ForgotPasswordPage />}
        />
      </Route>
    </>,
  ),
);
