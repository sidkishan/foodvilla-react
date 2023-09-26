import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
// import React from "react";
import { Component } from "react";
import UserContext from "../../UserContext";
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <p>This is about page</p>
//       {/* <Outlet /> */}
//       <ProfileClass name={"siddharth"} />
//     </div>
//   );
// };
//class component
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent About constructor");
  }
  componentDidMount() {
    console.log("Parent About componentDidMount");
    this.intervalId = setInterval(() => {
      console.log("Say React OP");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    console.log("Parent About render");
    return (
      <div>
        <h1>About</h1>
        <p>This is about page</p>
        <ProfileClass name={"first class"} />
        <UserContext.Consumer>
          {(user) => {
            <h1>{user.name + " " + user.email} </h1>;
          }}
        </UserContext.Consumer>
        {/* <ProfileClass name={"second class"} /> */}
      </div>
    );
  }
}
export default About;
