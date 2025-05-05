import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './composant/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import NoPage from './pages/nopage';
import Header from './composant/header';
import Footer from './composant/footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <main>
        <Routes>
          <Route path="/logo" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
