import react, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setUsersData } from "../redux/users/users.actions"

export const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector((state:any)=>state.usersState.users)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data=>dispatch(setUsersData(data)))
    }, [])

    return (
        <>
            <ul>
                {usersList.map((item:any)=>{
                    return (<li><Link to={`/users/${item.id}`}>{item.name}</Link></li>)
                })}
            </ul>
        </>
    )
}