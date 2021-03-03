import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import { AuthSubmitPayload } from '~/types';
import { authApi } from '~/utils/api';
import { actions, useAuthState } from '~/domains/auth/services/slice';

import { useNotification } from './useNotification';

const authProtectedRoutes: string[] = ['/cart'];

export function useAuth() {
  const notify = useNotification();
  const router = useRouter();
  const dispatch = useDispatch();

  const { isAuth } = useAuthState();

  const storage = useRef<typeof window.localStorage | null>(null);

  const updateAuthStatus = (status: boolean) =>
    dispatch(actions.updateStatus(status));

  // Auth protections
  useEffect(() => {
    if (isAuth === '') return;

    const isRouteProtected = authProtectedRoutes.includes(router.asPath);
    if (!isAuth && isRouteProtected) {
      router.replace('/auth/login');
    }
  }, [isAuth]);

  useEffect(() => {
    if (window) {
      storage.current = window.localStorage;
    }
  }, []);

  useEffect(() => {
    if (storage.current) {
      const token = storage.current.getItem('access_token');
      updateAuthStatus(Boolean(token));
    }
  }, [storage.current]);

  const auth = {
    isAuth,
    login: async (values: AuthSubmitPayload) => {
      try {
        const response = await authApi.post('/auth/login', values);
        const { access_token } = response.data || {};
        storage.current.setItem('access_token', `Bearer ${access_token}`);

        notify.open({
          type: 'success',
          message: "Loged In! You're welcome",
          description: '',
        });

        updateAuthStatus(true);
        router.replace('/');
      } catch (err) {
        if (err.response.status === 401) {
          notify.open({
            type: 'warning',
            message: err.response.data.message,
            description: 'Please try again!',
          });
        }
      }
    },
    logout() {
      updateAuthStatus(false);
      storage.current.removeItem('access_token');
      notify.open({
        type: 'info',
        message: 'You are logged out!',
        description: '',
      });
    },
  };

  return auth;
}
