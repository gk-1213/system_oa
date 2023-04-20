import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Space, Input, Button, } from 'antd';
import { register } from '../../utils/request/api';
import './Register.css'

export default class Register extends Component {
    register = ()=>{
        let data = {
            account: this.count.input.value,
            nickName: this.name.input.value,
            passwd: this.pass.input.value,
            phone:this.phonecount.input.value
        }
        register(data).then(res=>{
            console.log(res)
        })

    }
    render() {
        return (
                <div>
                    {/* 头部 */}
                    <div className="page-con noselect">
                        <div className="logo-box"><span href="/" id="logo-text">潺 潺 <label>OA<span className="logo-dot rotate"></span></label></span></div>
                        <div className='login-box'>
                            <div>
                                <h2>注册账号</h2>
                            </div>
                            {/* 卡片 */}
                            <Card style={{ width: '100%' }}>
                                {/* 账号密码登录 */}
                                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                <Input ref={c => this.phonecount = c} className='input' size='large' placeholder="请输入手机号" />
                                    <Input ref={c => this.count = c} className='input' size='large' placeholder="请输入账号" />
                                    <Input ref={c => this.name = c} className='input' size='large' placeholder="请输入昵称" />
                                    <Input.Password ref={c => this.pass = c} className='input' size='large' placeholder="请输入密码" />
                                    <Button className='button' size='large' block type="primary" onClick={this.register} >立即注册</Button>
                                </Space>
                                <div className='button_all'>
                                    <Link className='button_right' replace={true} to={{ pathname: "/login" }}>已有账号？去登陆</Link>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>
        )
    }
}
