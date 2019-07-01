import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, } from 'taro-ui'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ services }) => ({ services }))
class Index extends Component {
  state = {

  }

  render() {
    return (
      <View className="row align-i-c border-b-1 padding-v-3 t2">
        <View className="at-icon at-icon-map-pin md-t mr-2"></View>
        <Text className="md-t">南京市余华他去说话撒商家</Text>
        <View className="iconfont icon-dianhua md-t call"></View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>