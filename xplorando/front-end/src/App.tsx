import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

function Home() {
  return <div className="home">home</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
