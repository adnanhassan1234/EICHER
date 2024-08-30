import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import PowerGeneration from "./components/Engine/PowerGeneration";
import PowerGenEngine from "./components/Engine/PowerGenEngine";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/power-generation/engine" element={<PowerGenEngine />} />
        <Route
          path="/power-generation/engine-25"
          element={<PowerGeneration />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
