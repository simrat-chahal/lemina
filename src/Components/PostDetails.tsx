import { useEffect, useLayoutEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import { saveSinglePost } from "../redux/posts/posts.actions"
import postsDataInterface from "../interfaces/postsDataInterface"
import { showPost } from "../redux/posts/posts.actions"
import { connect } from "react-redux"

// const mapStateToProps = (state:any) => ({ globalState: state })
function mapStateToProps(state:any) {return {globalState: state}}


const PostDetails = (props:any) => {
    console.log(props,"dsfdsfsdfsdf")
    const params = useParams()
    // const [postData, setPostData] = useState<postsDataInterface>()
    const dispatch = useDispatch()
    let navigator = useNavigate()
    const singlePostDetails = useSelector((state: any) => state.postsState.singlePost)
    var displayPost = useSelector((state: any) => state.postsState.showPost)

    const displayPostData = () => {
        dispatch((showPost(!displayPost)))
    }

    useEffect(() => {
        if(displayPost) dispatch(showPost(false))
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => res.json())
            .then((data: postsDataInterface) => {
                dispatch(saveSinglePost(data))
            })
            .catch(error => console.log("this is error", error))
    }, [])

    // const mapDispatchToProps = () => {
    //     return {
    //         singlePost: "dsfdsf"
    //     }
    // }

    if (singlePostDetails) {
        return (
            <>
                <button onClick={() => navigator(-1)}>Go back</button>
                <button onClick={() => displayPostData()}>{displayPost? "Hide Post": "Show Post"}</button>
                <button onClick={()=>{}}>Store some data into error</button>
                {
                    displayPost &&
                    <>
                        <div>user id: {singlePostDetails.userId}</div>
                        <div>id: {singlePostDetails.id}</div>
                        <div>title: {singlePostDetails.title}</div>
                        <div>body: {singlePostDetails.body}</div>
                    </>
                }
            </>
        )
    }
    else return <><h1>Loading..........</h1></>
}
export default connect(mapStateToProps)(PostDetails)