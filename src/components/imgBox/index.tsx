import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import shopImg from './image/shop.png'
import distanceImg from './image/distance.png'

import '../style.scss'
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  object: {
    /* 标题 */
    title: String,
    /* 是否有优惠券 */
    hasTicket: Boolean,
    /* 店铺名 */
    storeName: String,
    /* 距离 */
    distance: String,
    /* 足迹（浏览量） */
    footprint: String,
    /* 成交量 */
    VOL: String,
    /* 售价 */
    price: String,
    /* 历史价格 */
    oldPrice: String,
    /* 按钮名称 */
    btnText: String,
    /* 按钮点击事件 */
    btnClick: () => void,
  }
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {}



  render() {
    const { title, distance, footprint, VOL, price, oldPrice, btnText, btnClick, hasTicket, storeName } = this.props.object;
    return (
      <View className="img-box">
        <View className='row c1'>
          <View className="img-bg" />
          <View className='row justify-bet img-text'>
            <View>
              <View className="md-t" style={{ color: '#fff' }}>到店原价买一送一</View>
              <View className="sm-t" style={{ color: '#f00' }}>100金币/¥1</View>
            </View>
            <View>
              <Button className="btn-1">立即抢</Button>
            </View>
          </View>
        </View>
        <View className='row c2 justify-bet foot-c'>
          <View>
            <Image src={shopImg} className="sm-img"></Image>
            <Text className="sm-t t2">余华客厅</Text>
          </View>
          <View>
            <Image src={distanceImg} className="sm-img"></Image>
            <Text className="sm-t t3">828m</Text>
          </View>
        </View>
      </View>
    )
  }
}

Index.defaultProps = {
  object: {}
}

export default Index as ComponentClass<PageOwnProps, PageState>