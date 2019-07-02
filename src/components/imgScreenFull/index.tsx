import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
// if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
//   import('../style.scss');
// }
import '../style.scss'

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
    swiperImgs: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=1f0ff25d3fad80a3a6c96856be747d75&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201711%2F03%2F33658744127579fb2b7252146dd79a36.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=6405ec303d73a35960f1b845d1d87ac0&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120304%2F9409954_172909477000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561631738581&di=0649a2f040205f4432a3507030215e46&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201411%2F26%2F20141126160858_dWwxt.jpeg',
    ],
    swiperCount: 0,
  }

  render() {
    const { swiperImgs, swiperCount } = this.state;
    const { close } = this.props;
    return (
      <View className="full-screen" onClick={close} onTouchMove={e => { e.stopPropagation() }}>
        <Swiper className='full-screen-swiper-c' onChange={e => { this.setState({ swiperCount: e.detail.current }) }} >
          {
            swiperImgs.map(img =>
              <SwiperItem style={{ width: '100%' }} >
                <View className="full-s-v" style={{ backgroundImage: `url(${img})` }}></View>
              </SwiperItem>
            )
          }
        </Swiper>
        <View className="full-screen-swiper-count">{swiperCount + 1}/{swiperImgs.length}</View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>