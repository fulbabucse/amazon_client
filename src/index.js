import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./app/store";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SkeletonTheme>
  </Provider>
);

reportWebVitals();
