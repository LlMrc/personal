import "./App.css";
import AboutPage from "./pages/testimonial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";

import NotFound from "./pages/notFound";
import ContactPage from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/hero" element={<HeroPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
