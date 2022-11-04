
import { Component, PropsWithChildren } from 'react';
import 'taro-ui/dist/style/index.scss';
import './app.less';

class App extends Component<PropsWithChildren> {
  // eslint-disable-next-line react/static-property-placement
  props: any;

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children;
  }
}

export default App;
