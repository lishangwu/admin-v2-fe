import React, { Component } from 'react';
import Mutil from 'util/mm.jsx';
import UserService from 'service/user-service.jsx';

import './index.scss'

const _mm = new Mutil();
const userService = new UserService();

class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount(){
        document.title = 'login - tao bao'
    }
    onInputChange(e){
        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        })
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit()
        }
    }
    onSubmit(){
        let loginInfo = {
            username : this.state.username,
            password : this.state.password
        }
        let checkResult = userService.checkLoginInfo(loginInfo)
        if(checkResult.status){
            userService.login(loginInfo).then(res=>{
                _mm.setStorage('userInfo', res)
                this.props.history.push(this.state.redirect)
            }, errMsg=>{
                _mm.errorTips(errMsg)
            })
        }else{
            _mm.errorTips(checkResult.msg)
        }
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - tao bao管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                onClick={e => {this.onSubmit(e)}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;