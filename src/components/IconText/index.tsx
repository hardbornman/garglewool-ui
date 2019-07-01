import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import '@/assets/iconfont.css'
type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  text: String,
  icon: String,
  color: String,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  render() {
    const { text, icon, color } = this.props;
    return (
      <View className="row align-base" style={{ color }}>
        <View className={icon}></View>
        <Text className="ml-2">{text}</Text>
      </View>
    )
  }
}

Index.defaultProps = {
  text: '特殊说明',
  icon: 'iconfont icon-shijian',
  color: '#fd0606'
}

export default Index as ComponentClass<PageOwnProps, PageState>