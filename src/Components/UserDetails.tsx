import { useSelector } from "react-redux"
import react, {useEffect, useState} from "react"
import { useParams } from "react-router"

// interface paramsFormat {
//     id: string
// }

export const UserDetails = () => {
    const [userDetails, setUserDetails] = useState<any>()
    const params = useParams<any>()
    var usersList = useSelector((state:any)=>state.usersState.users)
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data=>setUserDetails(data))
        
    }
    , [])
    return (<>
                {/* <button onClick={()=>loadUserDetails}>Load User Data</button> */}
                <table style={{textAlign: "center"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userDetails?.name}</td>
                            <td>{userDetails?.email}</td>
                            <td>{userDetails?.website}</td>
                            <td>{userDetails?.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </>
    )
}