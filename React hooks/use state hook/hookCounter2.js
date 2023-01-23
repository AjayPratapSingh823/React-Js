import React , {useState} from 'react'
function HookCounterTwo(){
  const intitalCount=0;
  const [count,setCount]=useState(initialCount)
  
  const incrementFive=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount  =>  pervCount+1)
    }
  }
  return (
    <div>
    Count:{count}
     <button onClick={() => setCount(initialCount)}> Reset </button>
     <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
     <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
<button onClickc={() => {incrementFive}>Increment 5</button>
</div>
)
}
