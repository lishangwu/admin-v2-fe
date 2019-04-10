import React from 'react';
import ReactDOM from 'react-dom';

// 父子组件传值
class Child extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        this.props.changeColor('red')
    }
    
    render(){
        return (
            <div>
                <h1>父组件 颜色 {this.props.bgColor}</h1>
                <button onClick={(e)=>this.handleClick(e)}>父组件颜色</button>
                <br/>
            </div>
        )
    }
}

class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bgColor: '#999'
        }
    }
    onBgColorChange(color){
        this.setState({
            bgColor: color
        })
    }
    render(props){
        return ( 
            <div style={ {background: this.state.bgColor} }>
                <Child bgColor={this.state.bgColor} changeColor={(color)=>{this.onBgColorChange(color)}}/>
            </div> 
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <div className="">
                {/* 容器式组建 */}
                <Title>
                    <span>App Span</span>
                    <a href="">link</a>
                </Title>
                <hr/>
            </div>
        )  
    }
}
    

ReactDOM.render(
    <div>
        <Father/>
    </div>
    ,
    document.getElementById('app')
)