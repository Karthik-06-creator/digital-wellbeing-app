import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FocusMode from "./pages/FocusMode";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/focus" element={<FocusMode />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
