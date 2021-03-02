import {
  ShoppingOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { useCartState } from '~/domains/cart/services/slice';
import { useAuth } from '~/hooks';

import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
};

function MainLayout({ children }: Props) {
  const auth = useAuth();
  const cartState = useCartState();
  const totalCartProduct = Object.keys(cartState.selectedProducts).length;
  const router = useRouter();

  const handleSignIn = () => router.push('/auth/login');
  const handleSignOut = () => auth.logout();

  const availableCart = auth.isAuth && !router.asPath.includes('cart');

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.logo}>
            <Image alt="Xendit logo" layout="fill" src="/icons/logo.svg" />
          </a>
        </Link>

        <div className={styles.left}>
          {availableCart && (
            <Link href="/cart">
              <a className={styles.btn}>
                <span className={styles.btn_text}>
                  Cart ({totalCartProduct})
                </span>
                <ShoppingOutlined className={styles.btn_icon} />
              </a>
            </Link>
          )}

          {auth.isAuth ? (
            <button
              type="button"
              className={styles.btn}
              onClick={handleSignOut}
            >
              <span className={styles.btn_text}>Sign out</span>
              <LogoutOutlined className={styles.btn_icon} />
            </button>
          ) : (
            <button type="button" className={styles.btn} onClick={handleSignIn}>
              <span className={styles.btn_text}>Sign in</span>
              <LoginOutlined className={styles.btn_icon} />
            </button>
          )}
        </div>
      </nav>

      <main className={styles.body}>{children}</main>
    </>
  );
}

export default MainLayout;
