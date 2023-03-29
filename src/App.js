import React from 'react'
import NavBar from './components/NavBar.js'
import Landing from './components/Landing/landing'
import Footer from './components/Footer'
import Blog from './components/Blog/blog.js'
import About from './components/About/About.js'
import './App.css'



function App() {
  return(
    <div className="App">
      <NavBar />
      <Landing />
      <Blog />
      <About />
      <Footer />
    </div>
  );
}

export default App;
