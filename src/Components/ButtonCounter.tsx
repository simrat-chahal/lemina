import UpdatedComponent from "./HOC"
import { propsPattern } from "../typescript structures/types"

const ButtonCounter = (props:propsPattern) => {
    console.log(props,"ppppppppppppp")
    return (
        <>
            <h1>Button Counter</h1>
            <div>{props.count}</div>
            <button onClick={props.incrementCount}>increment count value</button>
        </>
    )
}

export default UpdatedComponent(ButtonCounter)