//Hooks are new feature in react they allow you to use react features without having to write a class

import React, {useState} from 'react'
function HookCounter(){
  const[count,setCount]=useState(0)
  return (
    <div>
     <button onClick={() => setCount(count+1)}>Count {count}</button>
    </div>
)
}
export default hookCounter
