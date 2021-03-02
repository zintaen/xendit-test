import { Form, Input, Button } from 'antd';
import Link from 'next/link';

import { useAuth } from '~/hooks';
import { AuthSubmitPayload } from '~/types';

import styles from './styles.module.scss';

const LoginForm = () => {
  const auth = useAuth();

  const handleSubmit = async (values: AuthSubmitPayload) => {
    auth.login(values);
  };

  return (
    <Form
      onFinish={handleSubmit}
      className={styles.container}
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>

      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Form>
  );
};

export default LoginForm;
