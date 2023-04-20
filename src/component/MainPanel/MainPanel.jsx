import React, { Component } from 'react'
import Header from './Header/Header'
import OutsideNavigationBar from './OutsideNavigationBar/OutsideNavigationBar'
import InsideNavigationBar from './InsideNavigationBar/InsideNavigationBar'
import Panel from './Panel/Panel'
import "./MainPanel.css"

export default class MainPanel extends Component {
    render() {
        return (
            <div className='main'>
                <Header/>
                <div style={{ whiteSpace: 'nowrap',height:'100%'}}>
                    <OutsideNavigationBar />
                    <InsideNavigationBar />
                    <Panel />
                </div>

            </div>
        )
    }
}
