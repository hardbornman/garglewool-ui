import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import services from '@/services/api/DefaultApi'
services.$basePath = 'http://forfuture.club:3000/mock/12'

import Index from './pages/home'

import configStore from './store'

import './app.scss'
// import './assets/iconfont.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore({ services })

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/coupon/index',
      'pages/mine/index',
      'pages/goods/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000',
      selectedColor: '#f13b18',
      backgroundColor: '#fff',
      list: [
        {
          text: '往下拍',
          pagePath: 'pages/home/index',
          iconPath: './images/shangcheng-0.png',
          selectedIconPath: './images/shangcheng-1.png',
        },
        {
          text: '优惠券',
          pagePath: 'pages/coupon/index',
          iconPath: './images/youhuiquan-0.png',
          selectedIconPath: './images/youhuiquan-1.png',
        },
        {
          text: '我的',
          pagePath: 'pages/mine/index',
          iconPath: './images/wode-0.png',
          selectedIconPath: './images/wode-1.png',
        },
      ]
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
