import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton, } from 'taro-ui'

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

  getLocation = async () => {
    const res = await Taro.chooseLocation();
    console.log(res);
  }

  render() {
    return (
      <View className="md-t">
        <View className="row now-addr border-t" onClick={this.getLocation}>
          <View className="add-t">定位: </View>
          <View className="ml-4 t1">南京</View>
        </View>
        <View className="border-t">
          <View className="add-t">最近选择城市</View>
          <View className="row wrap">
            <View className="addr-i">南京</View>
            <View className="addr-i">南京</View>
            <View className="addr-i">南京</View>
            <View className="addr-i">南京</View>
            <View className="addr-i">南京</View>
          </View>
        </View>
        <View className="border-t border-b">
          <View className="add-t">所有城市</View>
          <View className="row wrap">
            <View className="addr-i">南京</View>
            <View className="addr-i">温州</View>
            <View className="addr-i">贵阳</View>
            <View className="addr-i">扬州</View>
            <View className="addr-i">北京</View>
          </View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>