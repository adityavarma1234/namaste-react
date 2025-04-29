import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("about constructor");
  }

  async componentDidMount() {
    console.log("about component did mount");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>About</h1>
        <h3>Welcome to my food delivery app</h3>
        <p>This is from Namaste React App</p>
        {/* <User name={"Aditya Varma(function)"} /> */}

        <UserClass name={"First"} location={"Hyderabad(class)"} />
      </div>
    );
  }
}

// const About =w
export default About;
