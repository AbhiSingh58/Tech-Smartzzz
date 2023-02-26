import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()  

ReactDOM.render(
  <>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
 
  ,
  document.getElementById('root')
);


