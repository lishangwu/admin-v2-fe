import React from 'react';
import ReactDOM from 'react-dom';

// 兄弟组件传值
class Child1 extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        this.props.changeChild2Color('red')
    }
    render(){
        return (
            <div>
                <h1>child1 颜色 {this.props.bgColor}</h1>
                <button onClick={(e)=>this.handleClick(e)}>改变child2组件颜色</button>
                <br/>
            </div>
        )
    }
}

class Child2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{background:this.props.bgColor}}>
                <h1>child2 颜色 {this.props.bgColor}</h1>
                <br/>
            </div>
        )
    }
}

class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            child2BgColor: '#999'
        }
    }
    onBgChild2ColorChange(color){
        this.setState({
            child2BgColor: color
        })
    }
    render(props){
        return ( 
            <div style={ {background: this.state.bgColor} }>
                <Child1 changeChild2Color={(color)=>{this.onBgChild2ColorChange(color)}}/>
                <Child2 bgColor={this.state.child2BgColor}/>

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