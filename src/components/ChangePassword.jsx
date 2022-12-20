import React, { Component, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ChangePassword(props) {
  const navigate = useNavigate();
  let [confirmPassword, setConfirmPassword] = useState("");
  let [password, setPassword] = useState("");
  let [wrong, setWrong] = useState(false);

  function changePWD() {
    var send = {
      username: JSON.parse(sessionStorage.getItem("user")),
      password: password,
      session: JSON.parse(sessionStorage.getItem("session_key")),
      api_key: process.env.REACT_APP_API_KEY,
    };

    if (
      password === "" ||
      confirmPassword === "" ||
      confirmPassword !== password
    ) {
      props.setError(
        "Error: Please make sure password is not empty, and that both match."
      );
      return;
    }
    //console.log(password);
    //console.log(confirmPassword);
    //var send[password] = password;
    fetch("https://presleyduggan.pythonanywhere.com/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["error"] !== "") {
          //
          props.setError([data["error"]]);
          //console.log(data["error"]);
        } else {
          props.setValid(data["message"]);
          //console.log(data["message"]);
        }
      });
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/lailalogo512.png"
          alt="Stonks bois"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Change your Password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-left">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="button"
                onClick={changePWD}
                className="flex w-full justify-center rounded-md border border-transparent bg-stone-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
