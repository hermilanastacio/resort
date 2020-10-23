import React from 'react';
import { useState, useEffect } from 'react';
import Video from './components/Video/Video';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import TopNav from './components/TopNav/TopNav';
import Slider from './components/Slider/Slider';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setIsLoading(false); 
  },[]);

  return (
    <div className="App">
      {isLoading
        ? <Loading isLoading={isLoading}/>
        : <React.Fragment>
            <TopNav onShow={setShowSlider}/>
            <Video/>
            <div style={{position:"absolute"}}>
              <Dashboard/>
              <About/>
              <Gallery/>
              <Rooms/>
              <Contact/>
              <Footer/>
            </div>
            <Slider 
              onShow={setShowSlider}
              open={showSlider} 
            />
          </React.Fragment>
      }
    </div>
  );
}

export default App;
