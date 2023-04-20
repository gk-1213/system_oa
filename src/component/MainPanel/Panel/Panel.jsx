import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import PersonMessage from './PersonMessage/PersonMessage'
import FrontendAuth from '../../../utils/router/FrontendAuth'
import './Panel.css'

export default class Panel extends Component {
  render() {
    return (
      <div className='panel'>
        <Switch>
          <FrontendAuth path="/main/message/person" component={PersonMessage} />
        </Switch>
      </div>
    )
  }
}
