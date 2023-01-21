//Greet.js file
//Destructuring in functional Component
import React from 'react'
const Greet =props=>{
  const {name,heroName}=props//we extract name heroname property from props
  return(
    <div>
    <h1>
    Hello {name}//instead of writing props.name we can write name only
    </h1>
</div>
)}
exprot default Greet
//Destructuring in Class component
class Welcome extend Component{
render(){
  const{name, heroName}=this.props//this refer current object
  return(
    <h1>
    Welcome {name} 
</h1>
)
}
}
export Default Welcome
