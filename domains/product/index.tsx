import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProductList, useProductState } from './services/slice';
import Categories from './categories';
import List from './list';
import styles from './index.module.scss';

function ProductList() {
  const dispatch = useDispatch();
  const productState = useProductState();
  const { selectedCategoryId } = productState;

  useEffect(() => {
    const params = selectedCategoryId ? { categoryId: selectedCategoryId } : {};
    dispatch(fetchProductList({ params }));
  }, [selectedCategoryId]);

  return (
    <div className={styles.container}>
      <Categories selectedKey={productState.selectedCategoryId} />
      <List
        products={productState.items}
        isFetching={productState.isFetching}
      />
    </div>
  );
}

export default ProductList;
