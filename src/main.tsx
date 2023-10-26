import React from 'react';
import ReactDOM from 'react-dom/client';
import Dice from './dice.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dice />
  </React.StrictMode>
);
