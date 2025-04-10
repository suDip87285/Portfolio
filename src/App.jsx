import { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'; // ← CSS import here
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallax type="services"/></section>
      <section id='Portfolio'>Services</section>
      <section id='Contact'><Parallax type="portfolio"/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  )
}

export default App
