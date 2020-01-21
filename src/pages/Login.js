import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  console.log(props)

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="user" bsSize="large">
          <FormLabel className="float-left">Username</FormLabel>
          <FormControl
            autoFocus
            type="user"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel className="float-left">Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Link to="/">
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}
