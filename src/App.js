
import Plant from './screens/Form';
import Landing from './screens/Landing';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path = "/plant" element={<Plant/>}/>
          <Route path = "/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
  
}

export default App;
