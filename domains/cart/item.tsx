import { useDispatch } from 'react-redux';
import { InputNumber, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Image from 'next/image';

import { priceFormatter } from '~/utils';
import { CartProduct } from '~/types/product';

import { actions } from './services/slice';
import styles from './item.module.scss';

type Props = {
  cartProduct: CartProduct;
};

function CartItem({ cartProduct }: Props) {
  const dispatch = useDispatch();
  const {
    thumbnail, title, description, price, amount
  } = cartProduct;

  const handleConfirmDel = () => {
    dispatch(actions.deleteFromCart(cartProduct.id));
  };

  const handleChangeProductAmount = (value: number) => {
    dispatch(
      actions.updateProductAmount({
        productId: cartProduct.id,
        newValue: value,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <Image alt="Cart item" src={thumbnail} layout="fill" />
      </div>

      <div className={styles.information}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>
      </div>

      <div className={styles.price}>
        {priceFormatter.format(price)} x{' '}
        <InputNumber
          min={1}
          className={styles.counter}
          defaultValue={amount}
          onChange={handleChangeProductAmount}
        />{' '}
        <span>=</span> {priceFormatter.format(price * amount)}
      </div>

      <Popconfirm
        title="Are you sure to delete this item?"
        onConfirm={handleConfirmDel}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined className={styles.delete} />
      </Popconfirm>
    </div>
  );
}

export default CartItem;
