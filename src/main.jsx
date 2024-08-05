import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)



// import React from 'react';
// import { createRoot } from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { HashRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>
// );