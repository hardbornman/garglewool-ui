import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtRate, AtAvatar } from 'taro-ui'

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
    commentImgs: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=1f0ff25d3fad80a3a6c96856be747d75&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201711%2F03%2F33658744127579fb2b7252146dd79a36.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=6405ec303d73a35960f1b845d1d87ac0&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120304%2F9409954_172909477000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=0649a2f040205f4432a3507030215e46&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201411%2F26%2F20141126160858_dWwxt.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=1f0ff25d3fad80a3a6c96856be747d75&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201711%2F03%2F33658744127579fb2b7252146dd79a36.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=6405ec303d73a35960f1b845d1d87ac0&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120304%2F9409954_172909477000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=0649a2f040205f4432a3507030215e46&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201411%2F26%2F20141126160858_dWwxt.jpeg',
    ],
  }

  render() {
    const { commentImgs } = this.state;
    return (
      <View>
        <View className="row align-center">
          <AtAvatar circle text='凹凸实验室'></AtAvatar>
          <View className="ml-5">
            <View className="md-t">jrack</View>
            <View className="sm-t t2">2019-01-22 10:10:10</View>
          </View>
          <View className="com-rate">
          <AtRate size='15' value={2}  />
          </View>
        </View>
        <View className="com-detail">
          <View className="sm-t t3 mt-2">
            事件扩大化笪君开始笪君卡上笪君卡上笪君啊是第五期的坏球大数据看的阿贾克斯好的就啊看是大岁的和去
             i 很大数据看三大数据看的哈睡觉可好
          </View>
          <View className="row com-img-p" style={{ flexWrap: 'wrap' }}>
            {
              [...commentImgs].map(img =>
                <View className="com-img-c" style={{ backgroundImage: `url(${img})` }}></View>
              )
            }
          </View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>