import React from 'react';
import ReactDOM from 'react-dom';

// import 'font-awesome/css/font-awesome.min.css';
// import './index.css';
import './index.scss';

// ReactDOM.render(
//     <div>
//         <h1>Hello, world! ..</h1>
//     </div>,
//     document.getElementById('app')
// );



let style = {
    // color: 'red',
    // fontSize: '30px'
}
let name = 'sbasd'
let flag = false
let jsx = <div className="jsx" style={style}>jsx... {name}</div>

let jsx2 = ( 
    <div>
        {/* 条件判断 */}
        {
            flag ? <p> I am {name}</p> : <p> I not am {name}</p>
        }
        {/* 数组循环 */}
        { 
            [1,3,5].map((name, index) =>  <p key={index}> I am {name}</p> )
        }
    </div> 
);
ReactDOM.render(
    jsx2,
    document.getElementById('app')
)