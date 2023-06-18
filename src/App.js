import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const title = "Hello React";
  return (
    <div className="App">
  <BrowserRouter>
  <NavBar />
     <Routes>
      <Route path='/'  element = {<Home/>}/>
      <Route path="menu/*" element = {<Menu/>} />
      <Route path="about/*" element = {<About/>}/>
      <Route path="contact/*" element = {<Contact/>}/>
     </Routes>
  <Footer/>
  </BrowserRouter> 
    </div>
  );
}

export default App;
 