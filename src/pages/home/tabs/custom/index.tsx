import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Box from '@/components/box'
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
    list: [
      {
        /* 标题 */
        title: '话实说实话实说实话实说实话实说实话实说实话实说',
        /* 是否有优惠券 */
        hasTicket: true,
        /* 店铺名 */
        storeName: '实话实说实',
        /* 距离 */
        distance: '12m',
        /* 足迹（浏览量） */
        footprint: '10k',
        /* 成交量 */
        VOL: '12',
        /* 售价 */
        price: '$1',
        /* 历史价格 */
        oldPrice: '$0',
        /* 按钮名称 */
        btnText: '砍价',
        /* 按钮点击事件 */
        btnClick: () => {
          console.log('点击了');
        },
      }
    ]
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        {
          list.map(item =>
            <Box {...item}></Box>
          )
        }
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>