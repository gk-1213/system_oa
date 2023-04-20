import React, { Component } from 'react'
import { Tooltip, Popover } from 'antd'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
// import { createFromIconfontCN } from '@ant-design/icons';
// import { ALIICONURL } from '../../../../../utils/constant';
import './BottomIcon.css'

export default class BottomIcon extends Component {
    state = { move: false, emoji: false }
    // IconFont = createFromIconfontCN({
    //     scriptUrl: ALIICONURL,
    // });
    content = (
        <div>
            <Picker data={data} onEmojiSelect={(emoji, event) => {if (this.props.pickEmoji) { this.props.pickEmoji(emoji, event);this.setState({emoji: false}) } }} />
        </div>
    );
    mouseHander = (flag) => {
        return () => {
            this.setState({ move: flag })
        }
    }
    handleVisibleChange = (e) => {
        if (e) {
            if (this.props.title === '表情') {
                this.setState({ emoji: true })
            } else {
                this.setState({ emoji: false })
            }
        } else {
            this.setState({ emoji: false })
        }
    }
    render() {
        const { icon, title } = this.props
        const { move, emoji } = this.state
        return (
            <div >
                <div className={this.props.right ? 'BottomIcon_all1' : 'BottomIcon_all'}  >
                    <Popover content={this.content} open={emoji} trigger="click" onOpenChange={(e) => this.handleVisibleChange(e)}>
                        <Tooltip placement="bottom" title={title} mouseEnterDelay={0} mouseLeaveDelay={0}>
                            <span 
                            onMouseEnter={this.mouseHander(true)} 
                            onMouseLeave={this.mouseHander(false)} 
                            className={move ? 'BottomIcon_icon1' : 'BottomIcon_icon'}
                            >
                                {/* <this.IconFont type={icon} style={{ fontSize: "20px", color: '#5F6061' }} /> */}
                                <span className={'iconfont '+icon} style={{ fontSize: "20px", color: '#5F6061' }}></span>
                                </span>
                        </Tooltip>
                    </Popover>
                </div>
            </div>
        )
    }
}
