import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { AuthSubmitPayload } from '~/types';
import { authApi } from '~/utils/api';

import { useNotification } from './useNotification';

export function useAuth() {
  const key = 'access_token';
  const notify = useNotification();
  const router = useRouter();

  const storage = useRef<typeof window.localStorage | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      storage.current = window.localStorage;
    }
  }, []);

  useEffect(() => {
    if (storage.current) {
      const token = storage.current.getItem('access_token');
      setIsAuth(Boolean(token));
    }
  }, [storage.current]);

  const auth = {
    isAuth,
    login: async (values: AuthSubmitPayload) => {
      try {
        const response = await authApi.post('/auth/login', values);
        const { access_token } = response.data || {};
        storage.current.setItem(key, `Bearer ${access_token}`);

        notify.open({
          type: 'success',
          message: "Loged In! You're welcome",
          description: '',
        });

        setIsAuth(true);
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
      storage.current.removeItem(key);
      notify.open({
        type: 'info',
        message: 'You are logged out!',
        description: '',
      });
      setIsAuth(false);
    },
  };

  return auth;
}
