import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-700 selection:text-neutral-100">
    <div className="fixed top-0 -z-10 h-full w-full inset-0">
      <div className="absolute top-0 z-0 min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </div>
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 text-neutral-300">
      {children}
    </div>
    <Footer />
  </div>
);

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Education />
    <Contact />
  </>
);

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Layout>
);

export default App;
