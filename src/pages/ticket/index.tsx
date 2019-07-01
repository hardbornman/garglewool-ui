import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtAvatar, AtRate, AtDivider } from 'taro-ui'
import CommentBox from '@/components/commentBox'
import BmButton from '@/components/bmButton'
import IconText from '@/components/IconText'
import ListItem from '@/components/listItem'

import 'taro-ui/dist/style/components/rate.scss'


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
    swiperImgs: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=1f0ff25d3fad80a3a6c96856be747d75&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201711%2F03%2F33658744127579fb2b7252146dd79a36.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=6405ec303d73a35960f1b845d1d87ac0&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120304%2F9409954_172909477000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=0649a2f040205f4432a3507030215e46&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201411%2F26%2F20141126160858_dWwxt.jpeg',
    ],
    swiperCount: 0,
    goodsLabels: [
      {
        text: '特殊原因',
        icon: 'iconfont icon-shijian',
      },
      {
        text: '特殊原因',
        icon: 'iconfont icon-shijian',
      },
      {
        text: '特殊原因',
        icon: 'iconfont icon-shijian',
      },
      {
        text: '特殊原因',
        icon: 'iconfont icon-shijian',
      },
    ]
  }

  toComments = () => {
    Taro.navigateTo({
      url: '/pages/comment/index'
    })
  }

  render() {
    const { swiperImgs, swiperCount, goodsLabels } = this.state;
    return (
      <View>
        <View style={{ position: 'relative' }}>
          <Swiper className='swiper-c' autoplay circular onChange={e => { this.setState({ swiperCount: e.detail.current }) }} >
            {
              swiperImgs.map(img =>
                <SwiperItem style={{ width: '100%' }} >
                  <View className="swiper-item-v" style={{ backgroundImage: `url(${img})` }}></View>
                </SwiperItem>
              )
            }
          </Swiper>
          <View className="swiper-count">{swiperCount + 1}/{swiperImgs.length}</View>
        </View>
        <View className="goods-c">
          <View className="goods-info">
            <Text className="goods-name md-t">到店付原价相送一个送饭是</Text>
            <View className="sm-t t3">正在墙厚，只剩1个拉</View>
          </View>
          <View>
            <View>
              <AtDivider height={90} content='温馨提示' />
            </View>
            <View className="sm-t t2 mt-4">
              <IconText color="#ccc" text="有效期"></IconText>
            </View>
            <View className="sm-t t2 mt-4">
              <IconText color="#ccc" text="兑换时间：11:00 ～ 21:00"></IconText>
            </View>
            <View className="sm-t t2 mt-4">
              <IconText color="#ccc" text="使用规则"></IconText>
            </View>
            <View className="sm-t t2 mt-4">
              <IconText color="#ccc" text="兑换时间：11:00 ～ 21:00"></IconText>
            </View>
            <View className="sm-t t2 mt-4">
              <IconText color="#fec94d" text="注: 由于该券为优惠限量活动，故不支持退款和退金币！"></IconText>
            </View>
          </View>
          <View className=" mt-5">
            <AtDivider height={90} content='店铺信息' />
          </View>
          <View className="border-t-1">
            <View className="at-row shop-info border-b-1">
              <View>
                <AtAvatar circle text='凹凸实验室'></AtAvatar>
              </View>
              <View className="ml-5" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <Text className="md-t t1">余华客厅点</Text>
                <View className="at-row mt-2">
                  <View className="rate-c">
                    <AtRate value={2} size='15' />
                  </View>
                  <View className="at-row at-row__align--center">
                    <Text className="ml-5 sm-t t3">12条评价</Text>
                    <View className="at-icon at-icon-chevron-right sm-t t3"></View>
                  </View>
                </View>
              </View>
            </View>
            <ListItem
              renderPre={
                <View className="at-icon at-icon-map-pin md-t mr-2"></View>
              }
              renderEnd={
                <View className="iconfont icon-dianhua md-t call"></View>
              }>
              南京市余华他去说话撒商家
            </ListItem>
          </View>
        </View>
        <BmButton></BmButton>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>