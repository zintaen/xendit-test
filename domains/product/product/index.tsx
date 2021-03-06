import { Card } from 'antd';
import { useDispatch } from 'react-redux';

import { useAuth } from '~/hooks';
import { Product } from '~/types/product';

import { actions as cartActions } from '../../cart/services/slice';

import styles from './styles.module.scss';

type Props = {
  product: Product;
};

function ProductItem({ product }: Props) {
  const dispatch = useDispatch();
  const auth = useAuth();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product));
  };

  const thumbnailImg = (
    <img alt="example" src={product.thumbnail} className={styles.thumbnail} />
  );

  return (
    <Card hoverable className={styles.card} cover={thumbnailImg}>
      <Card.Meta title={product.title} />
      <p className={styles.desc}>{product.description}</p>
      <button
        type="button"
        className={styles.cart_btn}
        onClick={handleAddToCart}
        disabled={!auth.isAuth}
      >
        Add to cart
      </button>
    </Card>
  );
}

export default ProductItem;
