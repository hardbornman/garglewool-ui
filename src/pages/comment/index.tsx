import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import CommentBox from '@/components/commentBox'

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
    comments: [1, 2, 3]
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
            values={['本店所有评论', '当前商品评论']}
            onClick={this.SegChange}
            current={current}
          />
        </View>
        <View className="comms-c">
          {
            comments.map(comment =>
              <View className="comm-c">
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