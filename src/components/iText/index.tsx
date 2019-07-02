import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'

// if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
//   console.log(Taro.getEnv(), Taro.ENV_TYPE.WEAPP);

//   import('../../assets/iconfont.css');
//   import('../style.scss');
// }

import '../style.scss';
import '@/assets/iconfont.css'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  icon?: String,
  color: String,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  render() {
    const {icon, color } = this.props;
    return (
      <View className="row align-base" style={{ color }}>
        {icon && <View className={icon}></View>}
        <Text className="ml-2">{this.props.children}</Text>
      </View>
    )
  }
}

Index.defaultProps = {
  color: '#fd0606'
}

export default Index as ComponentClass<PageOwnProps, PageState>