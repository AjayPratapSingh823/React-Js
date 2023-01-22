import React, {Component} from 'react'
class ClickCounterTwo extends Component{
render(){
const {coutn,incrementCount}=this.state
return <button onClick={this.incrementCount}>Clicked {count} times</button>
}
}
export default ClickCounterTwo
