import { GetServerSideProps } from 'next';

import {
  ResponsiveProvider,
  ResponsiveValueProp,
  ssrGetResponsiveValue,
} from '~/utils/ssrGetResponsiveValue';
import Cart from '~/domains/cart';
import { CustomerLayout } from '~/components/layouts';

function Home({ responsiveValue }: ResponsiveValueProp) {
  return (
    <ResponsiveProvider value={{ width: responsiveValue }}>
      <CustomerLayout.Main>
        <Cart />
      </CustomerLayout.Main>
    </ResponsiveProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageProps = {
    props: {
      responsiveValue: ssrGetResponsiveValue(context),
    },
  };

  return pageProps;
};

export default Home;
