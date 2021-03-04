import { Skeleton, Empty } from 'antd';

import { Product as ProductType } from '~/types/product';

import Product from '../product';

import styles from './styles.module.scss';

type Props = {
  products: ProductType[];
  isFetching: boolean;
};

function ProductList({ products, isFetching }: Props) {
  return (
    <Skeleton loading={isFetching}>
      <div className={styles.list}>
        {products?.length ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </Skeleton>
  );
}

export default ProductList;
