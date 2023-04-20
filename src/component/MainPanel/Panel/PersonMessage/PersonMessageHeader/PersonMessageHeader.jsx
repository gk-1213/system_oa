import React, { Component } from 'react'
// import { createFromIconfontCN } from '@ant-design/icons';
// import { ALIICONURL } from '../../../../../utils/constant';
import './PersonMessageHeader.css'

class PersonMessage_header extends Component {
  state = { myName: '', myTeam: '' }
  // IconFont = createFromIconfontCN({
  //   scriptUrl: ALIICONURL,
  // });
  static getDerivedStateFromProps(nextProps, state) {
    const { team, name } = nextProps
    if (state.myName === name && state.myTeam === team) {
      return null
    }
    let t = team
    let n = name
    if (team.length > 40) {
      t = t.strstring(0, 38) + '...'
    }
    if (name.length > 40) {
      n = n.strstring(0, 38) + '...'
    }
    return {
      myName: n, myTeam: t
    }
  }
  render() {
    const { messageIcon, color } = this.props//id, 
    const { myName, myTeam } = this.state
    const myicon = messageIcon ? messageIcon : ''
    const myType = 'iconfont ' + myicon + ' PersonMessage_header_icon'
    return (
      <div className={myTeam === '' ? 'PersonMessage_header_div0' : 'PersonMessage_header_div01'}>
        {/* <div className='PersonMessage_header_div0'> */}
        <div className='PersonMessage_header_div1'>
          <span className={myTeam === '' ? 'PersonMessage_header_button2' : 'PersonMessage_header_button1'} style={{ backgroundColor: color }}>
            {/* <this.IconFont type={messageIcon ? messageIcon : " "} className='PersonMessage_header_icon' /> */}
            <span className={myicon === '' ? '' : myType}></span>
          </span>
        </div>
        <div className='PersonMessage_header_div2'>
          <span className='PersonMessage_header_name'>{myName}</span>
          <br />
          <span className='PersonMessage_header_team'>{myTeam}</span>
        </div>
      </div>
    )
  }
}
export default PersonMessage_header