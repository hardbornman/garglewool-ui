import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
  import('../style.scss');
}
import shopImage from './image/shop.png'

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
      <View className="info-box">
        <View className="info-header md-t row justify-bet align-center border-b-1">
          <View className="row align-center strong">
            <Image src={shopImage} className="shop-img" />
            <Text className="ml-2 t1">凉皮（托乐嘉店）</Text>
          </View>
          <View>
            <Text className="sm-t t2">已完成</Text>
          </View>
        </View>
        <View className="info-body row sm-t align-center">
          <View>
            <View className="bg-img info-img" style={{ backgroundImage: `url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1336363002,2799287953&fm=11&gp=0.jpg)` }}></View>
          </View>
          <View className="ml-2 t3">
            <View>下单时间: 2019-05-12 13:18</View>
            <View>总价: ¥11</View>
          </View>
        </View>
        <View className="info-footer">
          <View className="btn-2">再来一单</View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>