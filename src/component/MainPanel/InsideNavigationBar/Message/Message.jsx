import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import MessageItem from './MessageItem/MessageItem'

class Message extends Component {
    state = { messages: [], parentClick: 0 }
    componentDidMount() {
        //这里有一个请求，获取所有的消息 TODO
        let m = [
            { id: 0, name: "文件小助手", messageIcon: 'icon-line-foldertransferwenjianjiazhuanhuan', lastMessage: '', color: '#00B853' ,team:'',myTime:'09:30'},
            { id: 1, name: "工作通知：深圳市xxxxx有限公司", messageIcon: 'icon-tongzhi', lastMessage: '补卡通知', color: '#0089FF' ,team:'',myTime:'09:30'},
            { id: 2, name: "隔壁老李", messageIcon: 'icon-morentouxiang', lastMessage: 'v我50看实力', color: '#0089FF',myTime:'昨天',team:'隔壁老李(深圳市xxxxx有限公司-研发中心-xxx技术部)' },
            { id: 3, name: "深圳市xxxxx有限公司", messageIcon: 'icon-shuyi_qunliao', lastMessage: '欢迎xxx进群~', color: '#0089FF',team:'归属于 深圳市xxxxx有限公司',myTime:'11-14' },
            { id: 4, name: "邮箱", messageIcon: 'icon-youjian', lastMessage: '考勤小助手,请注意查收', color: '#F25643',team:'',myTime:'13:14'},
        ]
        this.setState({ messages: m })
    }
    deleteTodo = (id, isClick) => {
        let copy = this.state.messages
        let copydArr = copy.filter((x) => x.id !== id);
        let check = 0;
        let length = copydArr.length
        if (isClick === true) {
            //选中的删除
            if (length > 0) {
                for (let i = id + 1; i <= copydArr[length - 1].id; i++) {
                    let temp = copydArr.filter(x => x.id === i);
                    if (temp.length > 0) {
                        check = temp[0].id
                        break
                    } else {
                        if (copydArr.length > 0) {
                            check = copydArr[0].id
                        }
                    }
                }
                this.setState({ messages: copydArr }, () => {
                    PubSub.publish('messageItem', { id: check })
                })
            } else {
                this.setState({ messages: copydArr })
            }
        } else {
            //非选中的删除
            this.setState({ messages: copydArr })
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.messages.map((m) => {
                        return <MessageItem key={m.id} {...m} deleteTodo={this.deleteTodo} parentClick={this.state.parentClick} />
                    })
                }
            </div>
        )
    }
}
export default Message