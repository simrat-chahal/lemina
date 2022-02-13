import { useState, memo } from "react"

const Counter = ({state}:any) => {
    console.log("counter button is rendered")
    const [counter, updateCounter] = useState(0)
    return <button onClick={()=>updateCounter(1)}>click</button>
}

export default memo(Counter)