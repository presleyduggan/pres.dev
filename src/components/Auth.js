const isUserAuthenticated = function (api_key, username, session) {
  var check = JSON.parse(sessionStorage.getItem("logged_in"));

  // verify session key

  var undef;
  if (session === typeof undef) {
    //console.log("undefined");
    return false;
  }

  if (check) {
    var send = {
      api_key,
      username,
      session,
    };
    fetch("https://presleyduggan.pythonanywhere.com/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(send),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "allow") {
          // it is in fact... not secure ;)
          //console.log("session key is good");
          //return <Navigate to="/Dashboard" />;
          return true;
        } else {
          //console.log("session key is bad");
          return false;
        }
      });
  }
};

export default isUserAuthenticated;
