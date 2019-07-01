import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, } from 'taro-ui'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  text: String,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ services }) => ({ services }))
class Index extends Component {
  render() {
    const { text } = this.props;
    return (
      <View className="noOne t2 md-t">
        {text}
      </View >
    )
  }
}

Index.defaultProps = {
  text: '暂无数据'
}

export default Index as ComponentClass<PageOwnProps, PageState>