import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, } from 'taro-ui'
import Price from '@/components/price'
import ListItem from '@/components/listItem'
import BmButton from '@/components/bmButton'
import IconText from '@/components/iText'

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

  }

  pay = () => {
    console.log('付钱');
  }

  render() {
    return (
      <View>
        <View className="border-t p-4">
          <View className="md-t t1">到店手机电视很大哈笪君萨科齐</View>
          <View className="row">
            <Price></Price>
          </View>
          <View className="sm-t t2">是笪君啊哈券</View>
        </View>
        <View className="border-t">
          <ListItem renderEnd={
            <View className="sm-t mr-4" style={{ marginLeft: 'auto' }}>未使用</View>
          }><Text className="ml-4">抵用券</Text></ListItem>
          <ListItem renderEnd={
            <View className="sm-t mr-4" style={{ marginLeft: 'auto' }}>¥1</View>
          }><Text className="ml-4">实付款</Text></ListItem>
        </View>
        <View className="border-t p-4">
          <View className="md-t t1">特别提示</View>
          <View className="ml-4">
            <IconText icon="at-icon at-icon-settings sm-t">
              <View className="sm-t">有效期15天</View>
            </IconText>
            <IconText icon="at-icon at-icon-settings sm-t">
              <View className="sm-t">有效期15天</View>
            </IconText>
            <IconText icon="at-icon at-icon-settings sm-t">
              <View className="sm-t">有效期15天</View>
            </IconText>
          </View>
          <View className="t2 mt-4 sm-t">
            啥抠脚大汉阿手机号笪君卡是赌气吴浩的撒娇地区为 i 的阿坚上课东湖区我但是将卡东湖区我 i但是看见啊暑期我笪君卡上
          </View>
        </View>
        <BmButton onClick={this.pay}>
          <View className="w-400 all-center" style={{ color: 'rgb(249, 84, 84)' }}>
            倒计时: 10:10
          </View>
        </BmButton>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>