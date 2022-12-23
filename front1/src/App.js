import React from 'react';
import Home from './components/Home';  
import Navbar from './components/Navbar'; 
import Navbar2 from './components/Navbar2';  
import About from './components/About'; 
import Datastore from './components/Datastore'; 
import Footer from './components/Footer'; 

import './App.css';
import  { Routes, Route, BrowserRouter } from 'react-router-dom';  

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Navbar2/>

      <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/about' element={< About />}></Route>  
                 <Route exact path='/navbar' element={< Navbar />}></Route>  
                 <Route exact path='/datastore' element={< Datastore />}></Route>
          </Routes>  
    <Footer/>      
    </BrowserRouter>
    </>
  );
}

export default App;
