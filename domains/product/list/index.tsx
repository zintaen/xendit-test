import { Skeleton } from 'antd';

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
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Skeleton>
  );
}

export default ProductList;
