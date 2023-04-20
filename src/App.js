import React, { Component } from 'react'
import { Route, Switch ,Redirect} from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import FrontendAuth from './utils/router/FrontendAuth'
import MainPanel from './component/MainPanel/MainPanel'
import './App.css'

export default class App extends Component {
  render() {
    let config = {
      num: [4, 7],
      rps: 1,
      radius: [5, 40],
      life: [40, 50],
      v: [20, 30],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center",
      cross: "dead",
      random: 15,
      g: 100,
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    };
    return (
      <>
        <div className='app'>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <FrontendAuth component={MainPanel} path="/main"  />
            <Redirect to= "/login" />
          </Switch>
        </div>
        <ParticlesBg color='#909399' type="cobweb" bg={true} config={config} />
      </>
    )
  }
}
