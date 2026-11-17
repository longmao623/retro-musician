import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Shows from './components/Shows';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scanlines">
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Shows />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
