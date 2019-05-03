import React from "react";
import { render } from "react-dom";
import App from "./main";
import Firebase, { FirebaseContext } from "./components/Firebase";

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
