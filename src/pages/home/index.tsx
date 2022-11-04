/*
 * @Author: unfetteredman
 * @Date: 2022-11-03 15:59:21
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-11-04 10:16:13
 */
import { Component, PropsWithChildren } from 'react';
import { View, Text } from '@tarojs/components';
import './index.less';

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>HOME</Text>
      </View>
    );
  }
}
