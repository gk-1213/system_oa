import React, { Component } from 'react'
import { Divider, Popconfirm } from 'antd'
// import { createFromIconfontCN } from '@ant-design/icons';
// import { ALIICONURL } from '../../../utils/constant'
import Item from './Item/Item';
import PopupWindow from './PopupWindow/PopupWindow';
import './OutsideNavigationBar.css'

class OutsideNavigationBar extends Component {
  state = { header_mouse: false, teamName: '', longName: '' ,out_Click:'/main/message'}
  // IconFont = createFromIconfontCN({
  //   scriptUrl: ALIICONURL,
  // });

  mouseHandel = (flag) => {
    return () => {
      this.setState({ header_mouse: flag})
    }
  }


  componentDidMount() {
    //这里有一处请求 TODO 得到架构名称
    let teamName = '深圳市xxxx科技有限公司'
    let l = teamName
    if (teamName.length > 4) {
      teamName = teamName.substring(0, 4) + '...'
      this.setState({ teamName: teamName, longName: l })
    } else {
      this.setState({  teamName: teamName, longName: l })
    }
  }

  content = () => {
    return (
      <div  >
        <PopupWindow longName={this.state.longName} />
      </div>
    )
  }
  render() {
    const { header_mouse,out_Click } = this.state
    return (
      <div className='outside'>
        {/* 头部 */}
        <Popconfirm title={this.content} placement="bottom" icon={false} showCancel={false} okText="">
          <div className='out_padd' style={{ backgroundColor: header_mouse ? '#DEDFE0' : '#F1F2F3', cursor: header_mouse ? 'pointer' : 'default', border: header_mouse ? '1px solid #DEDFE0' : '1px solid #F1F2F3', borderRadius: '5px' }}
            onMouseEnter={this.mouseHandel(true)} onMouseLeave={this.mouseHandel(false)}>
            {/* <span className='out_button'><this.IconFont type="icon-zuzhijiagouguanli" className='out_icon' /></span> */}
            <span className='out_button'><span className='iconfont icon-zuzhijiagouguanli out_icon'></span></span>
            <span className='out_span'>{this.state.teamName}</span>
            {/* <this.IconFont type="icon-zelvxuanzefeiyongdaosanjiaoxingfandui" className='out_icon1' /> */}
            <span className='iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui out_icon1'></span>
          </div>
        </Popconfirm>

        {/* 菜单 */}
        <Item url="/main/message" itemName="消息" icon="icon-message"  out_Click={out_Click} />
        <Item url="/main/work" itemName="工作台" icon="icon-gongzuotai-moren" out_Click={out_Click} />
        <Item url="/main/phone" itemName="通讯录" icon="icon-tongxunlu-moren" out_Click={out_Click} />
        <div className='line_padd'><Divider /></div>
        <Item url="/main/meeting" itemName="会议" icon="icon-shipinhuiyiline" out_Click={out_Click} />
      </div>
    )
  }
}
export default OutsideNavigationBar