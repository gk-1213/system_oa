import React, { Component } from 'react'
// import { createFromIconfontCN } from '@ant-design/icons';
// import { ALIICONURL } from '../../../../utils/constant';
import './PopupWindow.css'

class PopupWindow extends Component {
    state = {mouse:false,mouse1:false}
    // IconFont = createFromIconfontCN({
    //     scriptUrl: ALIICONURL,
    // });
    mouseHandel = (flag)=>{
        return()=>{
            // console.log(0)
            const m1 = this.state.mouse1
            this.setState({ mouse: flag ,mouse1:m1})
        }
    }
    mouseHandel1 = (flag)=>{
        return()=>{
            // console.log(1)
            const m = this.state.mouse
            this.setState({ mouse1: flag ,mouse:m})
        }
    }
    render() {
        const{mouse,mouse1} = this.state
        return (
            <div>
                {/* 头部 */}
                <div className='floor'>
                    <span style={{ fontSize: '15px', fontWeight: '700' }} className='floor_span'>企业/组织/团队</span>
                    <span className='floor_icon'>
                        {/* <this.IconFont style={{ fontSize: '17px', fontWeight: '700' }} type="icon-tongxunlu" /> */}
                        <span style={{ fontSize: '17px', fontWeight: '700' }} className='iconfont icon-tongxunlu'></span>
                    </span>
                </div>
                {/* 第一部分 */}
                <div className='team_padd' style={{ 
                    backgroundColor: mouse ? '#F0F1F2' : '#fff', 
                    cursor: mouse ? 'pointer' : 'default' }}
                    onMouseEnter={this.mouseHandel(true)} onMouseLeave={this.mouseHandel(false)}>
                    {/* <span className='out_button1'><this.IconFont type="icon-zuzhijiagouguanli" className='out_icon2' /></span> */}
                    <span className='out_button1'><span className='iconfont icon-zuzhijiagouguanli out_icon2'></span></span>
                    <span className='out_span1'>{this.props.longName}</span>
                </div>
                {/* 第二部分 */}
                <div className='create' style={{ 
                    backgroundColor: mouse1 ? '#F0F1F2' : '#fff', 
                    cursor: mouse1 ? 'pointer' : 'default'}}
                    onMouseEnter={this.mouseHandel1(true)} onMouseLeave={this.mouseHandel1(false)}>
                    {/* <span><this.IconFont style={{ fontSize: '18px', fontWeight: '700', marginRight: '8px' }} type="icon-chuangjianqunliao" /></span> */}
                    <span><span className='iconfont icon-chuangjianqunliao' style={{ fontSize: '18px', fontWeight: '700', marginRight: '8px' }}></span></span>
                    <span >创建企业/组织/团队</span>
                </div>
            </div>
        )
    }
}
export default PopupWindow