import "./App.css";
import AboutPage from "./pages/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/form";

import HomePage from "./pages/homePage";
import HeroPage from "./pages/hero";
import NotFound from "./pages/notFound";


function App() {


  return (
    <>
    <BrowserRouter>
    
    
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/hero" element={<HeroPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
       
        </BrowserRouter>
    </>
  );
}

export default App;
