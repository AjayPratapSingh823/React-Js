import React,{component} from 'react'
class Counter extends Component{
  constructore(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment(){
      this.setState({
        count:this.state.count+1;
      },()=>{
    console.log(this.state.count)
  }
                    })
  }
render(){
  return(
    <div>
    <div>Count-{this.state.coutn}</div>
    <button onClick={()=>this.increment()}Increment</button>

// Setstate-this function is used to show change in user interface
// after occuring an event
