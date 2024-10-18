import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './Components/Nav';
import Home from './Pages/Home';
import Prayer_warriors from './Pages/Prayer_warriors';
import Pavers from './Pages/Pavers';
import Praise_Worship from './Pages/Praise_worship';
import Evangelism from './Pages/Evangelism';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praise-and-worship" element={<Praise_Worship />} />
          <Route path="/evangelism" element={<Evangelism />} />
          <Route path="/prayer-warriors" element={<Prayer_warriors />} />
          <Route path="/pavers" element={<Pavers />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
