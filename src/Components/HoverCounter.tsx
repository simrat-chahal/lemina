import React from "react"
import UpdatedComponent from "./HOC"
import { propsPattern } from "../typescript structures/types"


const HoverCounter = (props:propsPattern) => {
    return (
        <>
            <h1>Hover Counter</h1>
            <div>{props.count}</div>
            <h1 onMouseOver={props.incrementCount}>Hover here To update the counter</h1>
        </>
    )
}

export default UpdatedComponent(HoverCounter)
