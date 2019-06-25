import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

import CustomTab from './tabs/custom'
import GeneralTab from './tabs/general'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页',
  }

  state = {
    tabCurrent: 0,
    tabList: [
      { title: '全部' },
      { title: '火锅/串串' },
      { title: '海鲜/烧烤' },
      { title: '中餐/西餐' },
      { title: '日韩料理' },
      { title: '生活服务' }
    ]
  }

  tabHandleClick = index => {
    this.setState({
      tabCurrent: index
    })
  }

  render() {
    const { tabCurrent, tabList } = this.state;
    return (
      <View>
        <AtTabs
          current={tabCurrent}
          scroll
          tabList={tabList}
          onClick={this.tabHandleClick}>
          <AtTabsPane current={tabCurrent} index={0}>
            <CustomTab></CustomTab>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={1}>
            <GeneralTab></GeneralTab>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={2}>
            <GeneralTab></GeneralTab>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={3}>
            <GeneralTab></GeneralTab>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={4}>
            <GeneralTab></GeneralTab>
          </AtTabsPane>
          <AtTabsPane current={tabCurrent} index={5}>
            <GeneralTab></GeneralTab>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
