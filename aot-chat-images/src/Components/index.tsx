import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/index.css';
import Homepage from './Homepage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
