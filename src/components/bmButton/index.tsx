import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {

  }

  render() {
    return (
      <View className="bm-btn-c">
        <View className="bm-btn-l">
          首页
        </View>
        <View className="bm-btn-r">
          立即抢购
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>