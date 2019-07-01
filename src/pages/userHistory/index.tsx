import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import CommentBox from '@/components/commentBox'
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
    comments: []
  }

  SegChange = v => {
    this.setState({
      current: v,
    })
  }

  render() {
    const { current, comments } = this.state;
    return (
      <View className="p-h-2">
        <View className="top-seg-c">
          <AtSegmentedControl
            values={['全部订单', '未领取', '待评价', '退款单']}
            onClick={this.SegChange}
            current={current}
          />
        </View>
        <View className="userhiss-c relative">
          {
            comments.length === 0 && <NoOne />
          }
          {
            comments.map(comment =>
              <View className="userhis-c">
                <CommentBox></CommentBox>
              </View>
            )
          }
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>