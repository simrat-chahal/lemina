import { useNavigate } from "react-router-dom";
import Child from "./Child";
import { Users } from "./Users";
import { connect } from "react-redux";
import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter";
import { useState } from "react";
import Counter from "./Counter";
import { incrementCounter } from "../redux/counter/counter.action";

// function mapStateToProps(state:any) {
//     return {
//         globalState: state
//     }
// }

const mapStateToProps = (state: any) => ({ counter: state.counter });

const mapDispatchToProps = {
  incrementCounter,
};

const connector = connect(mapStateToProps, mapDispatchToProps)

const Home = (props: any) => {
  const {incrementCounter} = props
  const [state, setState] = useState(0);
  const func = () => {
    incrementCounter()
  };
  const navigator = useNavigate();
  console.log("home component is rendered", props.counter);
  return (
    <>
      <h1>
        Click on this button to view <i>Posts</i>
      </h1>
      <button onClick={() => navigator(`/posts`)}>View posts</button>
      <h1>
        Click on this button to view <i>Users</i>
      </h1>
      <button onClick={() => navigator(`/users`)}>View Users</button>
      <Child
        name="John"
        age={24}
        cssStyling={{ color: "red" }}
        male
        fatherName="Meller"
        motherName="Sofia"
      />
      {/* <ButtonCounter />
            <HoverCounter /> */}
      <button onClick={func}>update the counter</button>
      <Counter state={state} />
    </>
  );
};
export default connector(Home);
