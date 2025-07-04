import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>     {/* ✅ wraps App */}
      <App />
    </SearchProvider>
  </BrowserRouter>
);