import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

class A extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                AA:
                {/* canshu : {this.props.match.params.id} */}
                <Switch>
                    <Route exact path={ `${this.props.match.path}`} 
                        render={ route=>{
                            return <div>A bu带参数</div>
                        } }
                    />
                    <Route path={ `${this.props.match.path}/sub1`} 
                        render={ route=>{
                            return <div>A sub1: {route.match.params.id}</div>
                        } }
                    />
                    <Route path={ `${this.props.match.path}/:id`} 
                        render={ route=>{
                            return <div>A 带参数：{route.match.params.id}</div>
                        } }
                    />
                </Switch>
            </div>
        ); 
    }
}
    
class B extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                B
            </div>
        ); 
    }
}

class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                <Link to='/a' >AAAAA</Link>
                <br/>
                <Link to='/a/123' >AAAAA</Link>
                <br/>
                <Link to='/b' >BBBBB</Link>
                <br/>
                <Link to='/a/sub' >sub</Link>

                {this.props.children}
            </div>
        ); 
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path='/a' component={A}/>
            <Route path='/b' component={B}/>
        </Wrapper>
    </Router>
    
    ,
    document.getElementById('app')
)