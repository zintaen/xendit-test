import { useDispatch } from 'react-redux';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { selectCategory } from './services/slice';
import styles from './categories.module.scss';

type Props = {
  selectedKey: string;
};

function Categories({ selectedKey }: Props) {
  const dispatch = useDispatch();

  const handleSelecteCategory = ([categoryId]) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <div className={styles.category}>
      <Tree
        selectedKeys={[selectedKey]}
        onSelect={handleSelecteCategory}
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        treeData={[
          {
            title: 'Fashion',
            key: '0',
          },
          {
            title: 'Shoes',
            key: '1',
            children: [
              {
                title: 'Adidas',
                key: '1.0',
              },
              {
                title: 'Nike',
                key: '1.1',
              },
              {
                title: 'New balance',
                key: '1.2',
              },
            ],
          },
          {
            title: 'Technologies',
            key: '2',
            children: [
              {
                title: 'Macbook Pro',
                key: '2.0',
              },
              {
                title: 'Macbook Air',
                key: '2.1',
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Categories;
