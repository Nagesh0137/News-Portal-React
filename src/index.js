import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';  
import ContextProvider, { ContextStore } from './Store/ContextStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <Router>  
        <App />
    </Router>
    </ContextProvider>
    
  </React.StrictMode>
);

reportWebVitals();
