import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import InfoBox from '@/components/infoBox'
import NoOne from '@/components/noOne'

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
    current: 0;
    comments: [1, 2]
  }

  SegChange = v => {
    this.setState({
      current: v,
    })
  }

  render() {
    const { current, comments } = this.state;
    return (
      <View className="">
        <View className="top-seg-c">
          <AtSegmentedControl
            values={['全部订单', '未领取', '待评价', '退款单']}
            onClick={this.SegChange}
            current={current}
          />
        </View>
        <View className="userhiss-c relative p-h-2" style={{ backgroundColor: '#f3f3f3' }}>
          {
            comments.length === 0 && <NoOne />
          }

          <View className="userhis-c">
            {
              comments.map(comment =>
                <InfoBox></InfoBox>
              )
            }
          </View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>