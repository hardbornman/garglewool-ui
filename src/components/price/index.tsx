import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton, } from 'taro-ui'
if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
  import('../style.scss');
}

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  price: String,
  old?: String,
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
    const { price, old } = this.props;
    return (
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Text className="price md-t">{price}</Text>
        {old && <Text className="old-price sm-t">{old}</Text>}
      </View>
    )
  }
}

Index.defaultProps = {
  price: 0,
}

export default Index as ComponentClass<PageOwnProps, PageState>