import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from"./App";
import Todo from "./Class";


export default function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        
        <Route path="class" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  );
}
