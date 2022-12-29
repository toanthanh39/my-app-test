import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router";
import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";
import BlogTest from "./pages/BlogTest";
import LayoutFC from "./components/layoutFC/LayoutFC";
import Stores from "./pages/Store";
import DailyVideo from "./pages/DailyVideo";
import { QueryClient, QueryClientProvider } from "react-query";
import Webcame from "./pages/Webcame";
import PlayerCustom from "./components/Player/PlayerCustom";
import Test from "./pages/Test";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Stores />}></Route>
        <Route path=":id" element={<DailyVideo />}></Route>
        <Route path="camera" element={<Webcame />}></Route>
        <Route path="play" element={<Test />}></Route>
      </Route>
      {/* <Route path="/nBoards" element={<BlogTest />}>
      </Route> */}
    </>
  ),
  { basename: "/nBoards" }
);
root.render(
  <GlobalProvider>
    <QueryClientProvider client={queryClient}>
      <LayoutFC>
        <RouterProvider router={router}></RouterProvider>
      </LayoutFC>
    </QueryClientProvider>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
