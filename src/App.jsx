import React, { use } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agence from './pages/Agence';
import ContactPage from './pages/ContactPage';
import Stair from './components/comman/Stair';
import Navbar from './components/naviagtion/Navbar';
import FullScreenNav from './components/naviagtion/FullScreenNav';


const App = () => {

  const location = useLocation();
  console.log('Current path:', location.pathname);
  const fillColor = location.pathname === '/' ? 'white' : location.pathname === '/contacts' ? 'white' : 'black'; // White for home, red for contacts, black for others

  return (
    <div className=''>

      <Navbar fillColor={fillColor} />
      <FullScreenNav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<ContactPage />} />
        {/* <Route path='/contact' element={<ContactPage />} /> */}
      </Routes>
    </div>
  )
}

export default App