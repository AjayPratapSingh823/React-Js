//Event handling in functional component
import React from 'react'
function FunctionClick(){
  function changecontent(){
    console.log("this is unchangeable");
  }
  return(
    <div>
    <button onClick={changecontent}>Click</button>
</div>
)}

the event handling process in class component is same as functional 
component the difference is that <button onClick={this.changecontent}>
