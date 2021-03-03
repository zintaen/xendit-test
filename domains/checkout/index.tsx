import { Radio, Input, Button } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

import styles from './styles.module.scss';

function Checkout() {
  const [selected, setSelected] = useState(1);

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h4>Checkout payment</h4>
      <div>Please select payment method</div>

      <Radio.Group onChange={handleSelectChange} value={selected}>
        <Radio className={styles.option} value={1}>
          Internet banking
        </Radio>
        <Radio className={styles.option} value={2}>
          Cash on delivery
        </Radio>
        <Radio className={styles.option} value={3}>
          Paypal
        </Radio>
      </Radio.Group>

      <Button type="primary" block className={styles.next_btn}>
        Next
      </Button>
      <Link href="/cart">
        <a>Back to cart</a>
      </Link>
    </div>
  );
}

export default Checkout;
