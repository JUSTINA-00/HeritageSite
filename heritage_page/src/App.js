import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navigation from './Components/Nav';
import Home from './Pages/Home';
import PrayerWarriors from './Pages/Prayer_warriors';
import Pavers from './Pages/Pavers';
import PraiseWorship from './Pages/Praise_worship';
import Evangelism from './Pages/Evangelism';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praise-and-worship" element={<PraiseWorship />} />
          <Route path="/evangelism" element={<Evangelism />} />
          <Route path="/prayer-warriors" element={<PrayerWarriors />} />
          <Route path="/pavers" element={<Pavers />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
