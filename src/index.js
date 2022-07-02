import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  debug: true, 
  supportedLngs: ['en', 'it'], 
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches : ['cookie'],
  },
  backend:{
    loadPath: '/assets/local/{{lng}}/translation.json'    
  },
  react:{ useSuspense : false},
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
