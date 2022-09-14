import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function PasswordGate() {
  let [password, setPassword] = useState("");
  let [wrong, setWrong] = useState(false);

  const navigate = useNavigate();

  function checkPWD() {
    var send = { password: password };
    //var send[password] = password;
    fetch("https://presleyduggan.pythonanywhere.com/api/playground", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "valid") {
          window.sessionStorage.setItem("mordor", JSON.stringify("true"));
          window.location.reload(false);
        } else {
          setWrong(true);
        }
      });
  }

  return (
    <div>
      <div hidden={!wrong}>
        <Alert variant="danger">Incorrect Password</Alert>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>One does not simply walk into Mordor...</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={checkPWD}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PasswordGate;
