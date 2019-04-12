import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import Layout from 'component/layout/index.jsx'

import Login from 'page/login/index.jsx'
import Home from 'page/home/index.jsx'
import User from 'page/user/index.jsx'

import OrderList        from 'page/order/index.jsx';
import OrderDetail      from 'page/order/detail.jsx';


class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/' render={props=>(
                            <Layout>
                                <Switch>
                                        <Route exact path='/' component={Home} />
                                        <Route exact path='/product' component={Home} />
                                        <Route exact path='/product-category' component={Home} />

                                        <Route path="/order/index" component={OrderList}/>
                                        <Route path="/order/detail/:orderNumber" component={OrderDetail}/>
                                        <Redirect exact from="/order" to="/order/index"/>

                                        <Route exact path='/user' component={User} />
                                    </Switch>
                            </Layout>
                        ) }/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById('app')
)