import { act, render, screen } from '~/utils/testing';
import api from '~/utils/api';

import Component from '.';

jest.mock('~/utils/api');

describe('render: product list', () => {
  test('rendered all product cards', async () => {
    const promise = Promise.resolve({
      data: [
        {
          id: 1,
          title: 'Hoodie black',
          thumbnail:
            'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          description: 'This is product detail description',
          price: 200000,
        },
        {
          id: 2,
          title: 'Adidas yeezy',
          thumbnail:
            'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          description: 'This is product detail description',
          price: 20000000,
        },
      ],
    });

    (api.get as jest.Mock).mockImplementationOnce(
      () => promise
    ) as jest.Mock;

    render(<Component />);

    await act(() => promise);

    expect(screen.getByText(/hoodie black/i)).toBeInTheDocument();
  });
});
