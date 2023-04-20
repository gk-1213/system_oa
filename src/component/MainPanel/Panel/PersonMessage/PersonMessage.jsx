import React, { Component } from 'react'
import { Divider, Button, message } from 'antd'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import lrz from 'lrz';
import SnowflakeId from "snowflake-id";
import PersonMessageHeader from './PersonMessageHeader/PersonMessageHeader'
import BottomIcon from './BottomIcon/BottomIcon'
import Dialogue from './Dialogue/Dialogue'
import { getToken } from '../../../../utils/request/auth'
import './PersonMessage.css'
const snowflake = new SnowflakeId({
    mid: 42,
    offset: (2019 - 1970) * 31536000 * 1000
});
Quill.register('modules/imageDrop', ImageDrop);

class PersonMessage extends Component {
    state = {
        myMessage: [],
        lastEditIndex: '',
        value: '',
        sendMessage: ''
    }
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
        ],
        imageDrop: true,
        keyboard: {
            bindings: {
                enter: {
                    key: 13,
                    handler: (range, context) => {
                        // console.log('enter');
                        let ops = this.reactQuillRef.getEditor().getContents().ops
                        // console.log(ops)
                        this.setState({ sendMessage: ops }, () => {
                            this.addMessage();
                        })
                    }
                },
            }
        }
    }
    formats = ['bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image',]



    static getDerivedStateFromProps(nextProps, nextState) {//preState
        //TODO 此处有个根据id查询消息的请求
        // console.log('nextProps',nextProps.location.state)//id,messageIcon
        const { messageIcon, color } = nextProps.location.state
        //TODO 此处有个从sessionStorage中查出个人图标的请求 getToken('icon') 暂时定为名字
        let myState = nextState.myMessage
        myState.map((s) => {
            return (s.color = color, s.icon = messageIcon)
        })
        const myIcon = getToken('nickName')
        let m = [
            { id: 1, color: color, icon: messageIcon, position: 'left', info: [{ insert: "你好呀😍" }, { insert: { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F041621122252%2F210416122252-1-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671784849&t=891f79c11335b0717366ef0105852e68' } }] },
            { id: 2, color: color, icon: myIcon, position: 'right', info: [{ insert: "你好呀🌹" }] },
            { id: 3, color: color, icon: messageIcon, position: 'left', info: [{ insert: "你叫什么名字" }] },
            { id: 4, color: color, icon: myIcon, position: 'right', info: [{ insert: "我叫Mary" }] },
            { id: 5, color: color, icon: messageIcon, position: 'left', info: [{ insert: "我叫jack" }] },
            { id: 6, color: color, icon: myIcon, position: 'right', info: [{ insert: "你是哪里人" }] },
            { id: 7, color: color, icon: messageIcon, position: 'left', info: [{ insert: "我是外国人" }] },
            { id: 8, color: color, icon: myIcon, position: 'right', info: [{ insert: "我也是外国人" }] },
            { id: 9, color: color, icon: messageIcon, position: 'left', info: [{ insert: "好巧" }] },
            { id: 10, color: color, icon: myIcon, position: 'right', info: [{ insert: "好巧" }] },
            { id: 11, color: color, icon: messageIcon, position: 'left', info: [{ insert: "再见" }] },
            { id: 12, color: color, icon: myIcon, position: 'right', info: [{ insert: "好的，我也要走了" }] },
            { id: 13, color: color, icon: messageIcon, position: 'right', info: [{ insert: "下次再聊" }] },
            { id: 14, color: color, icon: myIcon, position: 'right', info: [{ insert: "好的111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111" }] },
            { id: 15, color: color, icon: messageIcon, position: 'left', info: [{ insert: {file:{name:'成绩单.docx',type:'docx',size:'42.9 KB',src:'../../../../../../static/document/成绩单.docx'}}}] },
            { id: 16, color: color, icon: myIcon, position: 'right', info: [{ insert: {file:{name:'测试.doc',type:'doc',size:'12.0 KB',src:'../../../../../../static/document/测试.doc'}}}] },
            { id: 17, color: color, icon: messageIcon, position: 'left', info: [{ insert: {file:{name:'毕业证.pdf',type:'pdf',size:'522 KB',src:'../../../../../../static/document/毕业证.pdf'}}}] },
            { id: 18, color: color, icon: myIcon, position: 'right', info: [{ insert: {file:{name:'测试.xls',type:'xsl',size:'20.0 KB',src:'../../../../../../static/document/测试.xls'}}}] },
            { id: 19, color: color, icon: messageIcon, position: 'left', info: [{ insert: {file:{name:'测试.xlsx',type:'xslx',size:'522 KB',src:'../../../../../../static/document/测试.xlsx'}}}] },
            { id: 20, color: color, icon: myIcon, position: 'right', info: [{ insert: {file:{name:'react.md',type:'md',size:'20.0 KB',src:'xx'}}}] },
            { id: 21, color: color, icon: messageIcon, position: 'left', info: [{ insert: {file:{name:'react.md',type:'md',size:'522 KB',src:'xx'}}}] },
        ]
        if (myState.length === 0) {
            return {
                myMessage: m
            }
        } else {
            return {
                myMessage: myState
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.location.state.id === nextProps.location.state.id && nextState.myMessage.length === this.state.myMessage.length) {
            return false
        } else {
            this.setState({ value: '' })
            return true
        }
    }

    pickEmoji = (emoji, event) => {
        const { lastEditIndex } = this.state
        var range = lastEditIndex;
        let position = range ? range.index : 0;
        this.reactQuillRef.getEditor().insertText(position, emoji.native);
        this.reactQuillRef.focus()
        this.reactQuillRef.getEditor().setSelection(position + 2);
    }
    //将base64转换为blob
    dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    //将blob转换为file
    blobToFile(theBlob, fileName) {
        theBlob.lastModifiedDate = new Date();  // 文件最后的修改日期
        theBlob.name = fileName;                // 文件名
        return new File([theBlob], fileName, { type: theBlob.type, lastModified: Date.now() });
    }
    //将图片的base
    addMessage = () => {
        const { myMessage, sendMessage } = this.state
        let value = sendMessage
        let length = value.length
        if (value.length !== 0) {
            if (!value[length - 1].insert.image) {
                if (value[length - 1].insert === '\n' || value[length - 1].insert === '\n\n') {
                    value = value.slice(0, -1)
                }
            }
            //将末尾的\n\n或\n删除
            for (let i = 0; i < value.length; i++) {
                if (!value[i].insert.image) {
                    let tt = value[i].insert
                    value[i].insert = tt.slice(0, tt.length - 1)
                }
            }
            if (value.length === 0) {
                message.info('发送内容不能为空，请输入');
            } else {
                //将base64转换成file，并进行压缩，上传服务器
                let temp = value
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].insert.image) {
                        var id = snowflake.generate();
                        //如果是图片，就进行压缩
                        const file = this.blobToFile(this.dataURLtoBlob(temp[i].insert.image), id)
                        console.log("file",file)
                        //压缩
                        lrz(file,{quality : 0.2,fieldName :file.name})
                            .then(function (rst) {
                                // 处理成功会执行
                                console.log(rst);
                            })
                            .catch(function (err) {
                                console.log("压缩失败",err)
                            })
                            .always(function () {
                               
                            });
                    }
                }
                let newArr = myMessage
                newArr = newArr.concat({ id: myMessage.length + 1, color: '"#00B853"', icon: 'gk', position: 'right', info: value })
                this.setState({ myMessage: newArr, value: '', sendMessage: '' })
            }

        } else {
            message.info('发送内容不能为空，请输入');
        }
        this.reactQuillRef.focus()
    }
    onKeyup = (e) => {
        if (e.keyCode === 13) {
            if (window.event.ctrlKey) {
                var range = this.reactQuillRef.getEditor().getSelection();
                let position = range ? range.index : 0;
                this.reactQuillRef.getEditor().insertText(position, "\n");
                this.reactQuillRef.focus()
                this.reactQuillRef.getEditor().setSelection(position + 1);
            }
        }
    }
    blur = () => {
        var range = this.reactQuillRef.getEditor().getSelection();
        this.setState({ lastEditIndex: range })
    };
    render() {
        const { value } = this.state
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div className='personMessage_padd'>
                    <PersonMessageHeader {...this.props.location.state} />
                </div>
                <div className='person_line_padd'><Divider /></div>
                <div className='personMessageMain'>
                    <Dialogue {...this.state.myMessage} />
                </div>
                <div className='person_line_padd'><Divider /></div>
                <div style={{ marginTop: "10px" }} >
                    <BottomIcon title="表情" icon="icon-biaoqing" pickEmoji={this.pickEmoji} />
                    <BottomIcon title="点赞" icon="icon-dianzan" />
                    <BottomIcon title="发送文件" icon="icon-wenjianshangchuan" />
                    <BottomIcon title="富文本输入" icon="icon-zhankaiquanpingkuozhan" right={true} />
                </div>
                <div style={{ 'marginRight': '5px' }} onBlurCapture={this.blur}>
                    <ReactQuill
                        className='personMessage_textArea'
                        modules={this.modules}
                        formats={this.formats}
                        onChange={this.handleChange}
                        value={value}
                        theme="snow"
                        onKeyUp={this.onKeyup}
                        ref={c => {
                            if (c) {
                                this.reactQuillRef = c;
                                c.focus()
                            }
                        }
                        }
                    />
                </div>
                <div style={{ padding: "0px 10px 10px 10px", 'float': 'right' }}>
                    <span style={{ marginRight: '15px', fontSize: '13px', 'color': '#BDBDBD', 'fontWeight': '300' }}>Enter键发送，Enter+Ctrl 键换行</span>
                    <Button type="primary" size="middle" style={{ 'borderRadius': '5px' }} onClick={this.addMessage}>
                        发送
                    </Button>
                </div>
            </div>

        )
    }
}
export default PersonMessage
