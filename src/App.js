import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bing from './components/Bing';
import Google from './components/Google';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Google />} />
        <Route path='/google' element={<Google />} />
        <Route path='/bing' element={<Bing />} />
      </Routes>
    </div>
  );
}

export default App;
