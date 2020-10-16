import React from 'react';
import Video from './components/Video/Video';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Video/>
      <div style={{position:"absolute"}}>
        <Dashboard/>
        <About/>
      </div>
    </div>
  );
}

export default App;
