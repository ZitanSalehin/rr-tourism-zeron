// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Destination from "../pages/destination/Destination";
import FAQ from "../pages/faq/FAQ";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import OurTeam from "../pages/ourTeam/OurTeam";
import Reviews from "../pages/reviews/Reviews";
import Services from "../pages/services/Services";
import ConditionPolicy from "../pages/termsCondition/ConditionPolicy";
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
          <Route path="faq" element={<FAQ />} />
          <Route path="terms-service" element={<ConditionPolicy />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
