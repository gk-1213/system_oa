import React, { Component } from 'react'
// import { createFromIconfontCN } from '@ant-design/icons';
import { Badge } from 'antd'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom';
// import { ALIICONURL } from '../../../../../utils/constant';
import './MessageItem.css'

class MessageItem extends Component {
    state = { myname: '', myM: '', mouse: false, click: false, isDelete: false }
    // IconFont = createFromIconfontCN({
    //     scriptUrl: ALIICONURL,
    // });
    isMessage = ''
    componentDidMount() {
        //初始化阶段，只执行一次
        const { name, lastMessage, parentClick, id, team, messageIcon, color } = this.props
        // console.log('初始化阶段的props',this.props)
        let n = name
        let l = lastMessage
        if (name.length > 6) {
            if (lastMessage.length > 8) {
                n = n.substring(0, 6) + '...'
                l = l.substring(0, 8) + '...'
                this.setState({ myname: n, myM: l })
            } else {
                n = n.substring(0, 6) + '...'
                this.setState({ myname: n, myM: l })
            }
        } else {
            if (lastMessage.length > 8) {
                l = l.substring(0, 8) + '...'
                this.setState({ myname: n, myM: l })
            } else {
                this.setState({ myname: n, myM: l })
            }
        }
        if (parentClick === id) {
            this.setState({ click: true })
            this.props.history.push("/main/message/person", { id, team, messageIcon, color, name })
        }
        //消息订阅
        this.isMessage = PubSub.subscribe('messageItem', (_, data) => {

            if (data.id !== id) {
                this.setState({ click: false })
            } else {
                this.setState({ click: true }, () => {
                    this.props.history.push("/main/message/person", { id, team, messageIcon, color, name })
                })
            }
        })
    }
    componentWillUnmount() {
        //销毁监听器
        PubSub.unsubscribe(this.isMessage)
    }
    mouseHandel = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    Click = () => {
        if (this.state.isDelete === false) {
            this.setState({ click: true, isDelete: false }, () => {
                PubSub.publish('messageItem', { id: this.props.id })
                this.props.history.push("/main/message/person", { id: this.props.id, team: this.props.team, messageIcon: this.props.messageIcon, color: this.props.color, name: this.props.name })
            })
            // console.log(this.props)

        }
    }
    delete = (id) => {
        return () => {
            this.props.deleteTodo(id, this.state.click)
            this.setState({ isDelete: true })
        }
    }

    render() {
        const { messageIcon, color, id, myTime } = this.props
        const { myname, myM, mouse, click } = this.state
        const myType = 'iconfont '+ messageIcon +' messageItem_icon'
        return (
            <div className='messageItem_padd'
                onClick={this.Click}
                style={{
                    backgroundColor: click ? '#EBECED' : mouse ? '#EBECED' : '#fff',
                    cursor: mouse ? 'pointer' : 'default',
                    border: click ? '#EBECED' : mouse ? '#EBECED' : '#fff',
                    borderRadius: '10px'
                }}
                onMouseLeave={this.mouseHandel(false)} onMouseEnter={this.mouseHandel(true)}>
                <div className='div0' style={{ visibility: mouse ? 'visible' : 'hidden' }} onClick={this.delete(id)}>
                    <span className='div0_span'>×</span>
                </div>
                <div className='div1'>
                    <span className='messageItem_button' style={{ backgroundColor: color }}>
                        {/* <this.IconFont type={messageIcon} className='messageItem_icon' /> */}
                        <span className={myType}></span>
                    </span>
                </div>
                <div className='div2'>
                    <div style={{ width: '100%' }}>
                        <span className='meaasgeItem_name'>{myname}</span>
                        <span style={{ float: 'right', fontSize: '12px' }} className='meaasgeItem_time'>{myTime}</span>
                    </div>
                    <div style={{ width: '100%' }}>
                        <span className='meaasgeItem_lastMessage' >{myM}</span>
                        <span style={{ float: 'right' }}><Badge size="small" count={25} /></span>
                    </div>

                </div>
            </div>
        )
    }
}
export default withRouter(MessageItem)
