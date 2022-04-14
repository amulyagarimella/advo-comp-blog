import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route element={<AllPosts/>} path="/" exact />
        <Route element={<OnePost/>} path="/one" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
