import React from 'react';
import Cartelito from './cartelito.jsx'
import Cumple from './cumple.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Cumple />}/>
        <Route exact path= "/cartelito" element={<Cartelito />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
