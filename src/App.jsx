import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import DetailSection from "./components/DetailSection";
import Footer from "./components/Footer";
//stying
import "./App.css";
import CallToAction from "./components/CallToAction";
import AboutSection from "./components/AboutSection";
import ProfileCalculatorSection from "./components/ProfileCalculatorSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProfileCalculatorSection />
        <DetailSection />
        <CallToAction />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
