import { useDispatch } from 'react-redux';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { selectCategory } from '../services/slice';

import styles from './styles.module.scss';

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
          { title: 'Show all', key: '' },
          {
            title: 'Fashion',
            key: 'fashion',
          },
          {
            title: 'Shoes',
            key: 'shoes',
            children: [
              {
                title: 'Adidas',
                key: 'shoes-adidas',
              },
              {
                title: 'Nike',
                key: 'shoes-nike',
              },
              {
                title: 'New balance',
                key: 'shoes-newbalance',
              },
            ],
          },
          {
            title: 'Technologies',
            key: 'tech',
            children: [
              {
                title: 'Macbook Pro',
                key: 'tech-macpro',
              },
              {
                title: 'Macbook Air',
                key: 'tech-macair',
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Categories;
