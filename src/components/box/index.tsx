import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import ticketImg from './image/ticket.png'
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
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

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {}

  render() {
    const { title, distance, footprint, VOL, price, oldPrice, btnText, btnClick, hasTicket, storeName } = this.props;
    return (
      <View>
        <View className='at-row'>
          <View className='left-c'>
            <Image className="left-c-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1336363002,2799287953&fm=11&gp=0.jpg" />
          </View>
          <View className='right-c mt-2' style={{ display: 'flex', flexDirection: 'column' }}>
            <View className="at-row md-t t1">
              {title}
            </View>
            <View className="at-row sm-t justify-bet t2">
              <View style={{ display: 'flex', alignItems: 'center' }}>
                {hasTicket && <Image className="ticket-img" src={ticketImg} />}
                {storeName}
              </View>
              <View className="">
                {distance}
              </View>
            </View>
            <View className="at-row sm-t t3 mt-4">
              <View className="">
                <AtIcon prefixClass='iconfont icon-liulan' size="14" color='#F00'></AtIcon>
                <Text className="ml-2">{footprint}</Text>
              </View>
              <View className="mt-5 ml-5">
                <AtIcon prefixClass='iconfont icon-jiaoyi' size="14" color='#F00'></AtIcon>
                <Text className="ml-2">{VOL}</Text>
              </View>
            </View>
            <View className="at-row md-t justify-bet" style={{ marginTop: 'auto' }}>
              <View className="price">
                <Text>{price}</Text>
                <Text className="old-price" style={{ textDecoration: 'line-through' }}>{oldPrice}</Text>
              </View>
              <View>
                <Button className="btn-1" onClick={btnClick}>{btnText}</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>