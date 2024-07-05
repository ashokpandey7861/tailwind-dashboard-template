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

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dash" element={<Dashboard1 />} />
        </Routes>
      </Router>
    
  );
}

export default App;
