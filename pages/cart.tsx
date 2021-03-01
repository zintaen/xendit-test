import { GetServerSideProps } from 'next';

import {
  ResponsiveProvider,
  ResponsiveValueProp,
  ssrGetResponsiveValue,
} from '~/utils/responsive';
import Cart from '~/domains/cart';
import { MainLayout } from '~/layouts';

function Home({ responsiveValue }: ResponsiveValueProp) {
  return (
    <ResponsiveProvider value={{ width: responsiveValue }}>
      <MainLayout>
        <Cart />
      </MainLayout>
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
