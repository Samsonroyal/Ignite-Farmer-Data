import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="{dev-azfnjzdc.us.auth0.com}"
    clientId="{ShMvYT6CHdjw66Jx9wwr34Fp6GDXXRpX}"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
