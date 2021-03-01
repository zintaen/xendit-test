import { GetServerSideProps } from 'next';

import {
  ResponsiveProvider,
  ResponsiveValueProp,
  ssrGetResponsiveValue,
} from '~/utils/responsive';
import ProductList from '~/domains/product';
import { MainLayout } from '~/layouts';

function Home({ responsiveValue }: ResponsiveValueProp) {
  return (
    <ResponsiveProvider value={{ width: responsiveValue }}>
      <MainLayout>
        <ProductList />
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
