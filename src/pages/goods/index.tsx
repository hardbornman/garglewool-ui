import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtAvatar, AtRate, AtDivider } from 'taro-ui'
import CommentBox from '@/components/commentBox'
import BmButton from '@/components/bmButton'
import IconText from '@/components/iText'
import ListItem from '@/components/listItem'
import Price from '@/components/price'
import ImgScreenFull from '@/components/imgScreenFull'

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
    ],
    fullScreenVisible: false,
  }

  toComments = () => {
    Taro.navigateTo({
      url: '/pages/comment/index'
    })
  }

  toPay = () => {
    Taro.navigateTo({
      url: '/pages/pay/index'
    })
  }
  commentImgClick = () => {
    this.setState({
      fullScreenVisible: true,
    })
  }
  fullScreenClose = () => {
    this.setState({
      fullScreenVisible: false,
    })
  }

  render() {
    const { swiperImgs, swiperCount, goodsLabels, fullScreenVisible } = this.state;
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
            <Text className="goods-name md-t">到店元件是看电视剧啊老大的</Text>
            <Price></Price>
            <View className="sm-t t3">正在墙厚，只剩1个拉</View>
          </View>
          <View className="mark">
            比如：原价26元示范户否累，可以再带走一个26元产屏，超出部分自己买单
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
            {/* <View className="at-row align-center border-b-1 padding-v-3 t2">
              <View className="at-icon at-icon-map-pin md-t mr-2"></View>
              <Text className="md-t">南京市余华他去说话撒商家</Text>
              <View className="iconfont icon-dianhua md-t call"></View>
            </View> */}
            <ListItem
              renderPre={
                <View className="at-icon at-icon-map-pin md-t mr-2"></View>
              }
              renderEnd={
                <View className="iconfont icon-dianhua md-t call"></View>
              }>
              南京市余华他去说话撒商家
            </ListItem>
            <ListItem
              renderPre={
                <View className="iconfont icon-youhuquan-0 md-t mr-2"></View>
              }
              renderEnd={
                <View className="at-icon at-icon-chevron-right md-t ml-auto"></View>
              }>
              <Text className="md-t">一元券</Text>
              <Text className="ticket-m sm-t">到店原价买一送一</Text>
            </ListItem>
          </View>
          <View>
            <View>
              <AtDivider height={90} content='特别提示' />
            </View>
            <View className="at-row align-center sm-t" style={{ flexWrap: 'wrap' }}>
              {
                [...goodsLabels].map(label =>
                  <View className="goods-label">
                    <IconText icon={label.icon}>
                      {label.text}
                    </IconText>
                  </View>
                )
              }
            </View>

            <View className="sm-t t2 mt-4">
              <IconText color="#ccc" >
                兑换时间：11:00 ～ 21:00
              </IconText>
            </View>
            <View className="sm-t t3 mt-4">
              打卡机的撒娇好看的上课就啊哈笪
              君卡就是笪君啊上课哈笪君卡上还得看撒哈笪君看撒花的钱物 i到户外去对话阿手机壳分开就撒从电脑上 v IE我秋风额迪乌夫啊
            </View>
          </View>
          <View>
            <View>
              <AtDivider height={90} content='用户评论' />
            </View>
            <View className="at-row align-center sm-t">
              <CommentBox imgClick={this.commentImgClick}></CommentBox>
            </View>
            <View onClick={this.toComments} className="more-com sm-t t-2">查看所有评论</View>
          </View>
        </View>
        <BmButton onClick={this.toPay} btnText="事实上">
          <View className="bm-btn-back all-center iconfont icon-shangcheng-1">
          </View>
        </BmButton>
        {
          fullScreenVisible && <ImgScreenFull close={this.fullScreenClose} />
        }
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>