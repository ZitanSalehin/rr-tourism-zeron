// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";
import Destination from "../pages/destination/Destination";
import Home from "../pages/home/Home";
import OurTeam from "../pages/ourTeam/OurTeam";
import Services from "../pages/services/Services";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="destination" element={<Destination />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
