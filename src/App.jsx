import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { CardSection } from "./components/cardSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <About />
      <Footer />
    </>
  );
}

export default App;
