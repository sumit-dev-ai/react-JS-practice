// main.jsx or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Likebtn, Feel , Counter , Studentinfo, ClearInput ,List} from './02_useState';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Feel />
    <Likebtn />
    <Counter />
    <Studentinfo />
    <ClearInput />
    <List />

  </StrictMode>
);
