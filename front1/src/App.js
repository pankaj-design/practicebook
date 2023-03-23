import React from 'react';
import Home from './components/Home';  
import Navbar from './components/Navbar'; 
import Navbar2 from './components/Navbar2';  
import Learning from './components/Learning'; 
import Datastore from './components/Datastore'; 
import Footer from './components/Footer'; 
import A from "./components/List/A"
import B from "./components/List/B"
import Documents from "./components/Documents"

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
                 <Route exact path='/learning' element={< Learning />}></Route>  
                 <Route exact path='/navbar' element={< Navbar />}></Route>  
                 {/* <Route exact path='/datastore' element={< Datastore />}></Route> */}
                 <Route exact path='/a' element={<A />}></Route>
                 <Route exact path='/b' element={<B />}></Route>
                 <Route exact path='/documents' element={<Documents />}></Route>
          </Routes>  
    <Footer/>      
    </BrowserRouter>
    </>
  );
}

export default App;
