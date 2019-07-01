import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, } from 'taro-ui'

if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
  import('../style.scss');
}

import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  renderPre?: any,
  renderEnd?: any,
}

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
    const { children, renderEnd, renderPre } = this.props;
    return (
      <View className="row align-center border-b-1 padding-v-3 t2">
        {renderPre && renderPre}
        <Text className="md-t">{children}</Text>
        {renderEnd && renderEnd}
      </View>
    )
  }
}


export default Index as ComponentClass<PageOwnProps, PageState>