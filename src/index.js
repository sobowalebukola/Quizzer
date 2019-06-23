import React from "react";
import { render } from "react-dom";
import App from "./main";
import Firebase, { FirebaseContext } from "./components/Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';


render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
