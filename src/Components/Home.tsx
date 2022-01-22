import { useNavigate } from "react-router-dom"
import Child from "./Child"
import { Users } from "./Users"
import { connect } from "react-redux"
import ButtonCounter from "./ButtonCounter"
import HoverCounter from "./HoverCounter"

function mapStateToProps(state:any) {
    return {
        globalState: state
    }
}

const Home = () => {
    const navigator = useNavigate()
    return (
        <>
            <h1>Click on this button to view <i>Posts</i></h1>
            <button onClick={()=>navigator(`/posts`)}>View posts</button>
            <h1>Click on this button to view <i>Users</i></h1>
            <button onClick={()=>navigator(`/users`)}>View Users</button>
            <Child 
                name="John" 
                age={24} 
                cssStyling={{color: 'red'}} 
                male 
                fatherName="Meller"
                motherName="Sofia"
            />
            {/* <ButtonCounter />
            <HoverCounter /> */}
        </>
    )
}
export default connect(mapStateToProps)(Home)