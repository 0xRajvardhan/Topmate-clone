import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Card } from "./components/card";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <About />
      <Footer />
    </>
  );
}

export default App;
