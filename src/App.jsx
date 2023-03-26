import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { CardSection } from "./components/cardSection";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <About />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
