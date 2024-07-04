import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('Current path:', location.pathname);
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard.html" element={<Dashboard1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
