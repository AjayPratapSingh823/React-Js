//App.js file
import React, {Component} from 'react'
import Greet from './component/Greet'
import './App.css'
class App extend Componet{
  render(){
    <div className="App">
      <Greet name="Bruce">
        <p>This is children props</p>
    </Greet>
    </div>
  }
}
//Greet.js file
import React from 'react'
const Greet=props=>{
 return(
   <div>
   <h1>
   Hello {props.name}</h1>
{props.children}
</div>
)
}
export default Greet
// props=props working as argument.To show inside a html tage we have to use 
// curly braces.props are immutable. We can't change the value inside the 
// function
