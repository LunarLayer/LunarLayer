import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Sandbox from "./components/sandbox/Sandbox";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/sandbox" element={<Sandbox />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
