import { notification } from 'antd';

type Config = {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description: string;
  onClick?: () => void;
  btn?: JSX.Element;
};

type HookOutput = {
  open: (config: Config) => void;
};

export function useNotification(): HookOutput {
  return {
    open: ({ type = 'info', ...config }: Config) => notification[type]({ ...config, placement: 'bottomLeft' }),
  };
}
