import React from 'react'
class Form extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'';
      comments:'';
    }
  }
  handleUsernameChange=(event)=>{
  this.setstate=({
     username:event.target.value
  })
  }
  handleComments=(event)=>{
    this.setstate=({
      comments:event.target.value
    })
  }
  handleSubmit=event=>{
    alert('${this.state.username} ${this.state.comments}')
  }
  render(){
    return(
      <form  onSubmit={this.handleSubmit}>
      <div>
       <label>Username</label>
       <input type="text" value={this.state.username} onChange=this.handleUsernameChange}/>      
      </div>
      <div>
       <label>Comments</label>
       <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
      </div>
       <div>
        <button type="submit" />
       </div>
      </form>
    )
  }
}
The initial value of 
