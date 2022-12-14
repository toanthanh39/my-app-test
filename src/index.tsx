import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { GlobalProvider } from "./contexts/GlobalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Route>
  )
);
root.render(
  <GlobalProvider>
    <RouterProvider router={router}></RouterProvider>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
