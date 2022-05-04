import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');
  let className = styles.right;

  return (
    <Space className={className}>
      xxx
      {/* <Avatar /> */}
    </Space>
  );
};

export default GlobalHeaderRight;
