import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Mycard from './myCard/Mycard';
import { getToken } from '../../../../../utils/request/auth';
import './Dialogue.css'

export default class Dialogue extends Component {
    componentDidMount() {
        if (this.messagesEnd) {
            const scrollHeight = this.messagesEnd.scrollHeight;//里面div的实际高度 
            const height = this.messagesEnd.clientHeight;  //网页可见高度  
            const maxScrollTop = scrollHeight - height;
            this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }
    componentDidUpdate() {
        if (this.messagesEnd) {
            const scrollHeight = this.messagesEnd.scrollHeight;//里面div的实际高度 
            const height = this.messagesEnd.clientHeight;  //网页可见高度 
            const maxScrollTop = scrollHeight - height;
            this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }
    //展示图片
    showImg = (src) => {
        return () => {
            const img = new window.Image();
            img.src = src;
            const newWin = window.open('');
            newWin.document.write(img.outerHTML);
            newWin.document.title = '图片展示'
            newWin.document.close();
        }
    }
    render() {
        let message = this.props
        message = Object.values(message)
        const name = getToken('nickName')
        return (
            <div className='dialogue_all' ref={(el) => { this.messagesEnd = el; }} >
                {
                    message.map((m) => {
                        return <div key={m.id} style={{ width: '100%', 'padding': "20px 0px 20px 0px" }}>
                            <Row>
                                <Col span={m.position === 'left' ? 18 : 6} style={{ visibility: m.position === 'left' ? 'visible' : 'hidden', width: '100%' }}>
                                    <div className='dialogue_div1'>
                                        <span className='dialogue_icon1' style={{ backgroundColor: m.color }}>
                                            <span className={'iconfont ' + m.icon + ' messageItem_icon'}></span>
                                        </span>
                                    </div>
                                    <div className='dialogue_div3'>
                                        <span style={{ margin: '9px 10px 9px 10px', display: 'block' }}>
                                            {
                                                m.position === 'left' ?
                                                    m.info.map((content, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {content.insert.image ? <img onClick={this.showImg(content.insert.image)} src={content.insert.image} style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} alt="" />
                                                                    : content.insert.file ? <Mycard {...content.insert.file} position={m.position} /> : <span>{content.insert}</span>
                                                                }
                                                            </span>
                                                        )
                                                    }) :
                                                    <span></span>
                                            }
                                        </span>
                                    </div>
                                </Col>
                                <Col span={m.position === 'right' ? 18 : 6} style={{ textAlign: 'right', visibility: m.position === 'right' ? 'visible' : 'hidden', width: '100%' }} >
                                    <div className='dialogue_div2'>
                                        <span style={{ margin: '9px 10px 9px 10px', display: 'block', textAlign: 'left' }}>
                                            {
                                                m.position === 'right' ?
                                                    m.info.map((content, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {content.insert.image ? <img onClick={this.showImg(content.insert.image)} src={content.insert.image} style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} alt="" />
                                                                    : content.insert.file ? <Mycard {...content.insert.file} position={m.position} /> : <span>{content.insert}</span>}
                                                            </span>
                                                        )
                                                    }) : <span></span>
                                            }
                                        </span>
                                    </div>
                                    <div className='dialogue_div1'>
                                        <span className='dialogue_icon2' style={{ backgroundColor: '#007FE1' }}>
                                            <span style={{ fontSize: '16px', color: '#ffffff' }}>{name}</span>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    })
                }
            </div>
        )
    }
}
