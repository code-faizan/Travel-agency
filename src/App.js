import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App bg-gray-300">
      <Header />
      <Hero/>
      <Destinations/>
      <About/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
