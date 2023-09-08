import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
  <ChakraProvider>
     <App />
  </ChakraProvider>
  </BrowserRouter>
 
   
 
);
reportWebVitals();
