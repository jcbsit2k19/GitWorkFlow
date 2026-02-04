import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Environment: {import.meta.env.VITE_APP_ENVIRONMENT}</h2>
      </div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
