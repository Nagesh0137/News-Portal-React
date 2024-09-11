import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';  
import ContextProvider from './Store/ContextStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>  {/* Wrap the app with context provider */}
      <Router>  {/* Wrap the app with Router for routing */}
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
