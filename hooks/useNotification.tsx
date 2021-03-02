import { notification } from 'antd';

type Config = {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description: string;
  onClick?: () => void;
  btn?: JSX.Element;
};

type HookReturned = {
  open: (config: Config) => void;
};

export function useNotification(): HookReturned {
  return {
    open: ({ type = 'info', ...config }: Config) => notification[type]({ ...config, placement: 'bottomLeft' }),
  };
}
