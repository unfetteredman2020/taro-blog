/*
 * @Author: unfetteredman
 * @Date: 2022-11-03 16:14:57
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-11-04 10:17:06
 */
import { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import 'taro-ui/dist/style/components/tab-bar.scss';
import 'taro-ui/dist/style/components/badge.scss';

// import { CoverView, CoverImage } from '@tarojs/components';
import './index.less';

function TabBar() {
  const [current, setCurrent] = useState(0);
  const handleClick = (value) => {
    setCurrent(value);
  };
  return <AtTabBar
    fixed
    tabList={[
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: 99 },
    ]}
    onClick={handleClick}
    current={current}
  />;
}

export default TabBar;
