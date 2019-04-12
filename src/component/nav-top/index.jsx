import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Mutil from 'util/mm.jsx';
import UserService from 'service/user-service.jsx';


const _mm = new Mutil();
const userService = new UserService();


class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }
    onLogout(){
        userService.logout().then(res => {
            _mm.removeStorage('userInfo');
            window.location.href = '/login';
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>In</b>sight</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username
                                    ? <span>欢迎，{this.state.username}</span>
                                    : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={ ()=>{this.onLogout()} }>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                 </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default index;