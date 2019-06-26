import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import ticketImg from './image/ticket.png'
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
  state = {}

  render() {
    return (
      <View>
        <View className='at-row'>
          <View className='left-c'>
            <Image className="left-c-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1336363002,2799287953&fm=11&gp=0.jpg" />
          </View>
          <View className='right-c mt-2' style={{ display: 'flex', flexDirection: 'column' }}>
            <View className="at-row md-t t1">
              到店原价长跑买一送一福利(不超过高价)
            </View>
            <View className="at-row sm-t justify-bet t2">
              <View style={{ display: 'flex', alignItems: 'center' }}>
                <Image className="ticket-img" src={ticketImg} />
                饮茶（语花店）
              </View>
              <View className="">
                846m
              </View>
            </View>
            <View className="at-row sm-t t3 mt-4">
              <View className="">
                <AtIcon prefixClass='iconfont icon-liulan' size="14" color='#F00'></AtIcon>
                <Text className="ml-2">37</Text>
              </View>
              <View className="mt-5 ml-5">
                <AtIcon prefixClass='iconfont icon-jiaoyi' size="14" color='#F00'></AtIcon>
                <Text className="ml-2">37</Text>
              </View>
            </View>
            <View className="at-row md-t justify-bet" style={{ marginTop: 'auto' }}>
              <View className="price">
                <Text>$11</Text>
                <Text className="old-price" style={{ textDecoration: 'line-through' }}>$20</Text>
              </View>
              <View>
                <Button className="btn-1">砍价</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>