import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Tabs, Space, Input, Button, message} from 'antd';
import { login } from '../../utils/request/api';
import { setToken } from '../../utils/request/auth';
import { NICKNAME,ID,TOKEN } from '../../utils/constant';
import './Login.css'

export default class Login extends Component {
    callback(key) {
        // console.log(key);
    }
    login = () => {
        let param = {
            account: this.name.input.value,
            passwd: this.pass.input.value
        }
        // login(param).then(res => {
        //     if(res.returnCode === 0){
        //         setToken(TOKEN,res.token)
        //         setToken(NICKNAME,res.nickName)
        //         setToken(ID,res.ID)
        //         //TODO 存入个人的头像 setToken(icon,res.icon)
        //         message.success(res.errMessage);
        //         return this.props.history.push("/main",{})
        //     }else{
        //         ///没有联网的时候也进入主页面
        //         return message.error(res.errMessage);
        //     }
        // })
        //没有连接网络直接进入
                setToken(TOKEN,"token")
                setToken(NICKNAME,"张三")
                setToken(ID,1)
                //TODO 存入个人的头像 setToken(icon,res.icon)
                return this.props.history.push("/main",{})
    }
    render() {
        const { TabPane } = Tabs;
        return (
            <div>
                {/* 头部 */}
                <div className="page-con noselect">
                    <div className="logo-box"><span href="/" id="logo-text">潺 潺 <label>OA<span className="logo-dot rotate"></span></label></span></div>
                    <div className="loginway-icon-box" >
                        <div id="loginway-icons" data-type="weixin">
                            <div className="loginway-icon">
                            </div>
                            <div className="loginway-icon"></div>
                        </div>
                    </div>
                    <div className='login-box'>
                        {/* 卡片 */}
                        <Card style={{ width: '100%' }}>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="账号密码登录" key="1">
                                    {/* 账号密码登录 */}
                                    <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                        <Input ref={c => this.name = c} className='input' size='large' placeholder="请输入账号或绑定的手机号" />
                                        <Input.Password ref={c => this.pass = c} className='input' size='large' placeholder="请输入密码" />
                                        <Button className='button' size='large' block type="primary" onClick={this.login} >立即登录</Button>
                                    </Space>
                                    <div className='button_all'>
                                        <Button className='button_left' type='text'>忘记密码？</Button>
                                        <Link className='button_right' replace={true} to={{ pathname: "/register" }}>去注册</Link>
                                    </div>
                                </TabPane>
                                <TabPane tab="手机验证码登录" key="2">
                                    {/* 账号密码登录 */}
                                    <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                        <Input className='input' size='large' placeholder="请输入手机号" />
                                        <Input.Group compact>
                                            <Input className='input' size='large'
                                                style={{ width: 'calc(100% - 90px)', borderRadius: '20px 0px 0px 20px', textAlign: "left" }} placeholder="请输入验证码" />
                                            <Button size='large' style={{ width: '90px', borderRadius: '0px 20px 20px 0px', fontSize: "small", padding: 0 }}
                                                type="primary" shape="round">获取验证码</Button>
                                        </Input.Group>
                                        <Button className='button' size='large' block type="primary" >立即登录</Button>
                                    </Space>
                                    <div className='button_all'>
                                        <Link className='button_right' replace={true} to={{ pathname: "/register" }}>去注册</Link>
                                    </div>
                                </TabPane>
                            </Tabs>,
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
