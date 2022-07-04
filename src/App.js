import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
 //press ctrl -----to show data in that particular page
function App() {
  const [mod, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type )=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null); 
    }, 1500);
  }


  const toggleMod = ()=>{
    if(mod === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
      showAlert("light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <React.Fragment>

<Router>
    <div className="site-container">
         <Navbar title="TextUtils" mode={mod} toggleMode={toggleMod} />
                 <Routes>
                    
                    <Route   path="/about" element={<About />} />
                    <Route exact  path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mod} />} />
                 
               
                </Routes> 
             {/* <Routes>

                <Route exact path="/about">
                  <About/>
                </Route>

                <Route exact path="/">
                  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mod}/>
                </Route>

             </Routes> */}
           
    </div> 
        
</Router>


    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    
    {/* <Navbar title="TextUtils" mode={mod} toggleMode={toggleMod} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mod}/>
    </div> */}
    </React.Fragment> 
  );
}

export default App;