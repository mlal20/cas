import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
   </AuthProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
