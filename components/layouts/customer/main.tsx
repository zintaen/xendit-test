import { ShoppingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { useCartState } from '~/domains/cart/services/slice';

import styles from './main.module.scss';

type Props = {
  children: JSX.Element;
};

function MainLayout({ children }: Props) {
  const cartState = useCartState();
  const totalCartProduct = Object.keys(cartState.selectedProducts).length;
  const router = useRouter();

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.logo}>
            <Image alt="Xendit logo" layout="fill" src="/icons/logo.svg" />
          </a>
        </Link>

        {!router.asPath.includes('cart') && (
          <Link href="/cart">
            <a className={styles.cart}>
              <span className={styles.cart_text}>
                Giỏ hàng (
                {totalCartProduct}
                )
              </span>
              <ShoppingOutlined className={styles.cart_icon} />
            </a>
          </Link>
        )}
      </nav>

      <main className={styles.body}>{children}</main>
    </>
  );
}

export default MainLayout;
