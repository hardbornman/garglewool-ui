import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import ImgBox from '@/components/imgBox'
import './index.scss'
import { AtAvatar, AtGrid, AtList, AtListItem, } from 'taro-ui'

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

  iconTheme = {
    size: 25, color: '#ccc', value: 'bell',
  }

  toUserHistory = () => {
    Taro.navigateTo({
      url:'/pages/userHistory/index'
    })
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        <View className="border-t">
          <View className="at-row at-row__align--center at-row__justify--between user">
            <View className="at-row at-row__align--center">
              <AtAvatar className="avatar" circle image='https://jdc.jd.com/img/200'></AtAvatar>
              <Text className="name">我的名字</Text>
            </View>
            <View className='at-icon at-icon-chevron-right' style={{ color: '#ccc' }}></View>
          </View>
          <View style={{ backgroundColor: '#fff' }}>
            <AtGrid onClick={this.toUserHistory} columnNum={4} hasBorder={false} data={
              [
                {
                  iconInfo: { size: 36, color: '#ccc', value: 'bell', },
                  value: '未领用',
                },
                {
                  iconInfo: { size: 36, color: '#ccc', value: 'bell', },
                  value: '待评论'
                },
                {
                  iconInfo: { size: 36, color: '#ccc', value: 'bell', },
                  value: '退款单'
                },
                {
                  iconInfo: { size: 36, color: '#ccc', value: 'bell', },
                  value: '全部订单'
                },
              ]
            } />
          </View>
        </View>
        <View className="border-t">
          <AtList>
            <AtListItem title='余额 $11' arrow='right' extraText='明细' iconInfo={{ ...this.iconTheme }} />
            <AtListItem title='金币 0' arrow='right' extraText='兑换明细' iconInfo={{ ...this.iconTheme }} />
            <AtListItem title='券' arrow='right' extraText='抵用券、商品券' iconInfo={{ ...this.iconTheme }} />
            <AtListItem title='一元券' arrow='right' extraText='0' iconInfo={{ ...this.iconTheme }} />
          </AtList>
        </View>
        <View className="border-t">
          <AtList>
            <AtListItem title='今日关注' arrow='right' iconInfo={{ ...this.iconTheme }} />
            <AtListItem title='通知中心' arrow='right' iconInfo={{ ...this.iconTheme }} />
            <AtListItem title='选择城市' arrow='right' extraText='南京' iconInfo={{ ...this.iconTheme }} />
          </AtList>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>