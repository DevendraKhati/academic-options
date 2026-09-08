/**
 * @file main.jsx
 * @description Application client-side DOM entry point.
 * Initializes React 18 createRoot, mounts the App component,
 * applies global CSS stylesheets, and equips the application tree
 * with HelmetProvider for dynamic per-route SEO meta management.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
