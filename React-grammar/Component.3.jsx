import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'sb',
            age : 18
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            age: this.state.age +1
        })
    }
    onValueChange(e){
        this.setState({
            age: e.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <h1>I am {this.props.name}</h1>
                <p>{this.state.age}</p>
                <button onClick={(e)=>this.handleClick(e)}>age add</button>
                <br/>
                <input type="text" onChange={(e)=>this.onValueChange(e)}/>
            </div>
        )
    }
}
    

ReactDOM.render(
    <div>
        <Component name="kk 123"/>
    </div>
    ,
    document.getElementById('app')
)