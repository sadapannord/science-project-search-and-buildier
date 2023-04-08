// import { set } from "mongoose";
import React, { useState } from "react";

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Username") {
      setUsername(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${username}`);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form>
        {/* <label>
          First Name
          <input type="text" name="First Name" />
        </label>
        <label>
          Last Name
          <input type="text" name="Last Name" />
        </label> */}
        <label>
          Username
          <input
            type="text"
            name="Username"
            onChange={handleInputChange}
            value={username}
            placeholder="Username"
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="Email"
            onChange={handleInputChange}
            value={email}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="Password"
            onChange={handleInputChange}
            value={password}
            placeholder="Password"
          />
        </label>
        {/* <label>
          Confirm Password
          <input type="text" name="Confirm Password" />
        </label> */}
        <input
          type="submit"
          value="Login/Create Account"
          onClink={handleFormSubmit}
        />
      </form>
    </div>
  );
}

export default SignUpForm;
