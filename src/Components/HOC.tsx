import React, {useState} from "react"
const UpdatedComponent = (OriginalComponent:any) => {
    
    const NewCompo = () => {
        const [count, setCount] = useState(0)
    
        const incrementCount = () => {
            setCount(prevCountValue=>prevCountValue+1)
        }
        return <OriginalComponent count={count} incrementCount={incrementCount} />
    }
    return NewCompo
}

export default UpdatedComponent