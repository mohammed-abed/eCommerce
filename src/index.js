import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { SnackbarProvider } from "notistack";
import Collapse from '@material-ui/core/Collapse';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
    }}
    TransitionComponent={Collapse}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
