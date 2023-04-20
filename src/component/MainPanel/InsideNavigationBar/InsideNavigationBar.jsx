import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import FrontendAuth from '../../../utils/router/FrontendAuth'
import Message from './Message/Message'
import './InsideNavigationBar.css'


class InsideNavigationBar extends Component {

  render() {
    return (
      <div className='InsideNavigationBar'>
        <Switch>
          <FrontendAuth path="/main/message" component={Message} />
        </Switch>
      </div>
    )
  }
}

export default InsideNavigationBar
