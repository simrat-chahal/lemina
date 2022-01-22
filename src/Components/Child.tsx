import React from "react"
import { connect } from "react-redux"
import { saveError } from "../redux/posts/posts.actions"

// function mapStateToProps(state:any) {
//     return {
//         postsState: state.postsState,
//         usersState: state.usersState,
//     }
// }

// const mapDispatchToProps = (dispatch:any, ownProps:any) => ({
//     saveName: () => console.log(ownProps.name,"ownProps"),
//     saveXYZ: ()=> dispatch(saveError("bbbbbbbbb")),
//   })

type parentDetails = {
    fatherName: string
    motherName: string
}

type bio = {
    cssStyling: React.CSSProperties
    name: string
    age: number
}

type man = parentDetails & bio & {
    male: boolean
    female?: never
}
type woman = parentDetails & bio & {
    female: boolean
    male?: never
}

type ChildPropsFormat = man | woman


const Child = (props:ChildPropsFormat) => {
    return (
    <>
        <h1>this is component child</h1>
    </>
    )
}

export default Child