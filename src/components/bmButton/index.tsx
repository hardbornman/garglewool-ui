import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  btnText?: String,
  onClick?: () => void,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {

  }

  render() {
    const { btnText, onClick } = this.props;
    return (
      <View className="bm-btn-c">
        {this.props.children}
        <View className="bm-btn-r" onClick={onClick}>
          {btnText}
        </View>
      </View >
    )
  }
}

Index.defaultProps = {
  btnText: '立即抢购',
  onClick: () => { console.log('bmBtn点击'); }
}


export default Index as ComponentClass<PageOwnProps, PageState>