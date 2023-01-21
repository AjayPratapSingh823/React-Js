import React,{Component} from'react'
class Message extend Component{
  constructor(){
    super(){
      this.state={
        message:'Welcome Visitor'
      }
    }
    changeMessage(){
      this.setstate({
      message:'Thank you for Subscribing';
      })
    }
  render(){
    return(
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={() =>this.changeMessage()}>Subscribe</button>
    </div>
    )}
}
State:The state is a built in React object that is used to contain 
data or information about the componenet.A component's state can cagange over time;
whenever it changes,the component re-renders
