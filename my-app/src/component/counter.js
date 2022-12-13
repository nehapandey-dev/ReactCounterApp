import { useState } from "react";

export default function Counter() {
    const[count,setCount]=useState(0)
  return (
      <>
    <div className="box"><h1>counter value - {count}</h1>
    <button style={{backgroundColor:"red"}}  onClick={()=>setCount(0)}>Reset Counter</button>
    <button style={{backgroundColor:"green"}} onClick={()=>setCount(count + 1)}>Increase Counter</button>
    <button style={{backgroundColor:"Blue"}} onClick={()=>setCount(count - 1)}>Decrease Counter</button>
    </div>
    </>
  )
}
