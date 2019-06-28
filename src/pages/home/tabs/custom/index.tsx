import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Box from '@/components/box'
import './index.scss'
import { AtDivider } from 'taro-ui'

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
    list: [
      {
        id: 1,
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
      },
      {
        id: 1,
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
      },
    ]
  }

  componentDidMount() {
    console.log(this.props);
  }

  goodsClick = () => {
    Taro.navigateTo({
      url:'/pages/goods/index'
    })
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        {
          list.map(item =>
            <View onClick={this.goodsClick}>
              <Box key={item.id} object={item}></Box>
              <AtDivider lineColor="#f5f5f5" height={10} />
            </View>
          )
        }
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>