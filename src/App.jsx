import { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'; // ← CSS import here
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallax type="services"/></section>
      <section id='Portfolio'><Services /></section>
      <section id='Contact'><Parallax type="portfolio"/></section>
      <Portfolio />
      {/* <section>
        <Contact />
      </section> */}
    </div>
  )
}

export default App
