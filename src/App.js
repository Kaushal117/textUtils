// import React from 'react'
import React from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

function App() {
  return (
    <React.Fragment>
    
<Navbar title="algoWorks"  aboutText="KAuSHAL"/>
<div className="container my-3" >
  <TextForm heading="enter the text to analyze" />
</div>
{/* <About/> */}

    </React.Fragment>
  );
}

export default App;
