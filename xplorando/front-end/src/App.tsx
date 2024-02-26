import React from "react";
import logo from "./logo.svg";
import { Home } from "./Pages/Home";
import "./App.css";
import { Header } from "./Components/Header";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="mt-16"></div>
        <Routes>
          <Route path="/*" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
