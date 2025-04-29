import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Api calls
    console.log(name + "api called");
  }, []);

  console.log(name + "function rendered");

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: github.com/adityavarma1234</h4>
    </div>
  );
};

export default User;
