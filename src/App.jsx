// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
