import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { AtButton, AtForm, AtInput } from 'taro-ui'

type PageStateProps = {
  services: Object,
}

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
    number: '',
    pwd: ''
  }

  numberChange = value => {
    this.setState({
      number: value
    })
  }

  pwdChange = value => {
    this.setState({
      pwd: value
    })
  }

  login = async () => {
    const { number, pwd } = this.state;
    const res = await this.props.services.authLoginPost({
      name: number,
      password: pwd
    })
    console.log(res);
  }

  render() {
    const { number, pwd } = this.state;
    return (
      <View className="border-t">
        <AtInput
          className="border-b-1 t1"
          name='number'
          border={false}
          title='手机号码'
          type='text'
          placeholder='手机号码'
          value={number}
          onChange={this.numberChange}
        />
        <AtInput
          className="border-b-1 t1"
          name='pwd'
          title='密码'
          type='password'
          placeholder='密码'
          value={pwd}
          onChange={this.pwdChange}
        />
        <AtButton className="btn-margin" type='primary' size='normal' onClick={this.login}>登陆</AtButton>
        <View className="row justify-bet p-h-4">
          <View className="sm-t t4">验证码登陆</View>
          <View className="sm-t t4">注册新账户</View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>