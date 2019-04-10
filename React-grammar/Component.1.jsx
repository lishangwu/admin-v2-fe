import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'sb'
        }
    }
    render(){
        // setTimeout(()=>{
        //     this.setState({
        //         name: 'sb22'
        //     })
        // },2000)
        return <h1>I am {this.props.name}</h1>
    }
}
    

ReactDOM.render(
    <div>
        <Component name="kk 123"/>
    </div>
    ,
    document.getElementById('app')
)