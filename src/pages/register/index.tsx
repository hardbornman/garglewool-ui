import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

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
    step: 0
  }

  render() {
    const { step } = this.state;
    return (
      <View>
        {
          step === 0 &&
          <View>
            <View>
              <View className="at-article__h1">输入手机号码</View>
              <View className="sm-t t2 row p-4 ml-3">注册即代表阅读并同意<View className="t4">使用条款</View>和<View className="t4">隐私政策</View></View>
            </View>
            <View className="row p-4 border-b-1">
              <View className="row lg-t align-center t3">
                <View>+86</View>
                <View className="at-icon at-icon-chevron-down"></View>
              </View>
              <View className="t3 input-numb">
                <Input type='text' focus></Input>
              </View>
            </View>
            <AtButton className="btn-margin btn-margin" onClick={() => { this.setState({ step: 1 }) }} type='primary' size='normal'>下一步</AtButton>
          </View>
        }
        {
          step === 1 && <View>
            <View>
              <View className="at-article__h1">输入验证码</View>
              <View className="sm-t t2 row p-4 ml-3">注册即代表阅读并同意<View className="t4">使用条款</View>和<View className="t4">隐私政策</View></View>
            </View>
            <View className="row p-4">
              <View className="n-i-c">
                <Input className="n-i" type='text' focus></Input>
              </View>
              <View className="n-i-c">
                <Input className="n-i" type='text' focus></Input>
              </View>
              <View className="n-i-c">
                <Input className="n-i" type='text' focus></Input>
              </View>
              <View className="n-i-c">
                <Input className="n-i" type='text' focus></Input>
              </View>
            </View>
            <View className="row justify-bet p-h-4">
              <View className="t4 sm-t mt-2" onClick={() => { this.setState({ step: 0 }) }}>上一步</View>
              <View className="t4 sm-t mt-2">重新获取(60s)</View>
            </View>
            <AtButton className="btn-margin btn-margin" type='primary' size='normal'>确定</AtButton>
          </View>
        }
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>