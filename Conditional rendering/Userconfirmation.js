import React,{component} from 'react'

class Welcome extend Component{
  constructore(props){
    super(props)
      this.state{
        isloggedin:true;
      }
    }
  render(){
    if(this.state.isloggedin){
      return(<div>Welcome</div>
             )}
      else{
        return(<div>
          get lost
          </div>
    )}
  }
  export default Welcome
  //We can use ternary operator in place of if or else 
