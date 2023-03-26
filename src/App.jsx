import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Footer } from "./components/footer";

import Form from "./components/form";
import Selection from "./components/selection";
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
          <Route path="/form" element={<Form />} />
          <Route path="/selection" element={<Selection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
