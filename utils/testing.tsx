import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import makeStore from '../store';

const store = makeStore();

type Props = {
  children: JSX.Element;
};

const EnhancedProvider: FC = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: EnhancedProvider, ...options });

export * from '@testing-library/react'; // re-export everything
export { customRender as render }; // override render method
