import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Initialize AOS
AOS.init({
  duration: 1000,     // animation duration in ms
  once: true,         // whether animation should happen only once
  offset: 100,        // offset (in px) from the original trigger point
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance measuring
reportWebVitals();
