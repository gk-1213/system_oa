/**
 * 路由守卫校验
 */
 import React, {Component} from "react";
 import {Route} from "react-router-dom";
 import { getToken } from "../request/auth";
 import { TOKEN } from "../constant";
 import Login from "../../component/Login/Login";
 import Register from "../../component/Register/Register";
 
 class FrontendAuth extends Component {
     
 
     render() {
         const {component, path} = this.props;
         if(! getToken(TOKEN)){
            if(path === '/' || path === '/login'){
                return <Route path='/login' component={Login}></Route>
            }else if(path === '/register'){
                return <Route path='/register' component={Register}></Route>
            }
         }else{
            return <Route path={path} component={component}></Route>
         }
     }
 }
 
 export default FrontendAuth;
 