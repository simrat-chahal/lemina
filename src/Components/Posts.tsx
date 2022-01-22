import React,{ useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Routes, Route } from "react-router-dom"
import postsInterface from '../interfaces/postsDataInterface'
import { setPostsData } from "../redux/posts/posts.actions"

const Posts = () => {
    // const [posts, setPosts] = useState<Array<postsInterface>>([]);
    const dispatch = useDispatch();
    const postsData = useSelector((state:any)=>state.postsState.posts);
    console.log('posts data',postsData)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((data:Array<postsInterface>)=>{
           dispatch(setPostsData(data))
        })
        .catch(error=>console.log("this is error",error)
        )
    },[])

    
    return (
            <>
                <ul>
                    {postsData && postsData.map((item:postsInterface,index:number)=>{
                        return (
                                    <li key={item.id}>
                                        <Link to={`/posts/${item.id}`}>{item.title}</Link>
                                    </li>
                                
                            )
                    })
                    }
                </ul>
            </>
        )
}

export default Posts
