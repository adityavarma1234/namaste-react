import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aditya_varma1234");
    const json = await data.json();
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h3>Welcome to my food delivery app</h3>
        <p>This is from Namaste React App</p>
        <User name={"Aditya Varma(function)"} />

        <UserClass name={"First"} location={"Hyderabad(class)"} />
      </div>
    );
  }
}

// const About =w
export default About;
