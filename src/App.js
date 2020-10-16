import React from 'react';
import Video from './components/Video/Video';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Video/>
      <div style={{position:"absolute"}}>
        <Dashboard/>
        <About/>
        <Gallery/>
        <Rooms/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
