import { Statistic, Empty, Button } from 'antd';

import { useCartState } from './services/slice';
import CartItem from './item';
import styles from './styles.module.scss';

function UserCart() {
  const cartState = useCartState();
  const cartProductList = Object.values(cartState.selectedProducts);

  const totalPrice: number = Object.values(cartState.selectedProducts).reduce(
    (acc, current) => {
      acc += current.price * current.amount;
      return acc;
    },
    0
  );

  if (totalPrice <= 0) {
    return <Empty />;
  }

  return (
    <div className={styles.container}>
      <Statistic title="Total Price" value={totalPrice} />
      <div className={styles.list}>
        {cartProductList.map((cartProduct) => (
          <CartItem cartProduct={cartProduct} />
        ))}
      </div>
      <Button type="primary">Checkout</Button>
    </div>
  );
}

export default UserCart;
