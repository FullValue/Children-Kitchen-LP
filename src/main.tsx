import {StrictMode} from 'react';
console.log('main.tsx loading...');
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <App />,
);
