//Using functional Component
import React from 'react'
function Greet(){
  return <h1>Hello Vishwas</h1>
}
export default Greet
Import this file to your APP.js folder
import Greet from './components/Greet'
<Greet />
  //Using Class Component
 Now we use how to render function using class
 Step-1 :we have to import component from react
import React,{component} from 'react'
class Welcome extends Component{
  render(){
    return <h1>Class Component</h1>
  }
}
export default Welcome

