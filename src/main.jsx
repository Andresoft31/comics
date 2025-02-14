// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import { HeroesApp } from './HeroesApp';
// import './styles.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <HeroesApp />
//     </BrowserRouter>
//   </React.StrictMode>
// );


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './styles.css'
// import { HeroesApp } from './HeroesApp.jsx'
// import { BrowserRouter} from 'react-router-dom';



// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <React.StrictMode>
//     <BrowserRouter>
//       <HeroesApp/>
//     </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { AppRouter } from './router/AppRouter';
import {HeroesApp} from './HeroesApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
// import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
