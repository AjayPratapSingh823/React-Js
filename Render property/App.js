import React,{component} from 'react'
class App extends Component{
  render(){
    return (
       <div className="App">
       <Counter render={(count,incrementCount) => (
           <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      )
  }
}
export default App
