// import React from 'react'

export default function Todo({ task, isDone }) {

    // way 1
    //   if(isDone){
    //     return(
    //         <h2>Finished: {task}</h2>
    //     )
    //   }
    //   else{
    //     return(
    //         <h2>Work-on: {task}</h2>
    //     )
    //   }

    // way-2
    // return (
    //     isDone ? <h2>Finished: {task}</h2> : <h2>Work-on: {task}</h2>
    // )
    
    // way-3
    let listItem  ;
    if (isDone) {
        listItem = <li>Finish: {task}</li>;
    }
    else{
        listItem = <li>Work-on: {task}</li>;
    }
    return (
        listItem
    )
}
