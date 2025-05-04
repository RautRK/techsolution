import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./segments/About";
import Achievement from "./segments/Achievement";
import Hero from "./segments/Hero";
import Navbar from "./segments/Navbar/Navbar";
import Portfolio from "./segments/Portfolio";
import Service from "./segments/Services";
import "swiper/css";
import Testimonial from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Blog from "./segments/Blog";
import Footer from "./segments/Footer";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
           <Navbar />
     <Hero />
     <Achievement />
     <About />
     <Service />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Blog />
     <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
