import React from 'react';
import ReactDOM from 'react-dom';

function Component(){
    return <h1>I am sb</h1>
}

class ES6Component extends React.Component{
    render(){
        return <h1>Im es6</h1>
    }
}
    

ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>
    ,
    document.getElementById('app')
)