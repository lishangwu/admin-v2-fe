import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: 'old data'
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    // 将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    // 子组件是否该更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }
    // 组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    handleClick(){
        console.log('更新数据');
        this.setState({
            data: 'new data'
        })
    }
    render(){
        console.log('render..')
        return (
            <div>
                <p>Component : {this.props.data}</p>
                <button onClick={ ()=>{this.handleClick()} }>Component update</button>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: 'old data'
        }
        console.log('constructor');
    }
    handleClick(){
        console.log('App 更新数据');

        this.setState({
            data: 'new data'
        })
    }
    render(){
        return (
            <div>
                <Component data={this.state.data}/>
                <button onClick={ ()=>{this.handleClick()} }>App update</button>
            </div>
        ); 
    }
}
    

ReactDOM.render(
    <div>
        <App/>
    </div>
    ,
    document.getElementById('app')
)