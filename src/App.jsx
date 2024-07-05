import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';

function App() {

 

  return (
    
        <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/dash" element={<Dashboard1 />} />
    </Routes>
    
  );
}

export default App;
