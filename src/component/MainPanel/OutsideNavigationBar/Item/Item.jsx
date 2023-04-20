import React, { Component } from 'react'
// import { createFromIconfontCN } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'
// import { ALIICONURL } from '../../../../utils/constant';
import './Item.css'

class Item extends Component {
    state = { mouse: false, click: false }
    isUnmount = ''
    componentDidMount() {
        if (this.props.out_Click === this.props.url) {
            this.setState({ click: true })
            this.props.history.push(this.props.url, {})//state跳转 nickName:this.props.nickName
        }
        this.isUnmount = PubSub.subscribe('isClick', (_, data) => {
            if (data.url !== this.props.url) {
                this.setState({ click: false })
            }
        })
    }
    componentWillUnmount() {
        //销毁监听器
        PubSub.unsubscribe(this.isUnmount)
    }
    mouseHandel = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    Click = () => {
        this.setState({ click: true })
        PubSub.publish('isClick', { url: this.props.url })
        this.props.history.push(this.props.url, {})//state跳转 
    }
    render() {
        // const IconFont = createFromIconfontCN({
        //     scriptUrl: ALIICONURL,
        // });
        const { mouse, click } = this.state
        const myType = 'iconfont '+ this.props.icon + ' item_icon'
        return (
            // '#F1F2F3'
            <div className='item_padd' onClick={this.Click}
                style={{
                    backgroundColor: click ? '#DEDFE0' : mouse ? '#DEDFE0' : '#F1F2F3',
                    cursor: mouse ? 'pointer' : 'default',
                    border: click ? '1px solid #DEDFE0' : mouse ? '1px solid #DEDFE0' : '1px solid #F1F2F3',
                    borderRadius: '5px',
                }}
                onMouseEnter={this.mouseHandel(true)} onMouseLeave={this.mouseHandel(false)}>
                {/* <span className="fonticon" style={{ color:click?'#409EFF':'#303133'}}><IconFont type={this.props.icon} className='item_icon' /></span> */}
                <span className="fonticon" style={{ color:click?'#409EFF':'#303133'}}><span className={myType}></span></span>
                <span className='item_span' style={{ color:click?'#409EFF':'#303133'}}>{this.props.itemName}</span>
            </div>
        )
    }
}
export default withRouter(Item)