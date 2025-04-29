import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Userclass constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "user component did mount");
    const data = await fetch("https://api.github.com/users/adityavarma1234");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    setInterval(() => {}, 1000);
    // Api calls;
  }

  componentDidUpdate() {
    console.log("Component has been updated");
  }

  componentWillUnmount() {
    console.log("Component has been unmounted");
  }

  render() {
    console.log(this.props.name + "userClass render");
    console.log(this.state);
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: github.com/adityavarma1234</h4>
      </div>
    );
  }
}

export default UserClass;
