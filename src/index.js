import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import i18n from "i18next";
import { initReactI18next  } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
import App from './App';
import Loading from 'components/Global/loading/Loading';
i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ar','fr'],
    fallbackLng:'en',
    detection:{
      order: ['cookie','htmlTag','path', 'localStorage',  'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    // react:{useSuspense:false}
  });

  export default i18n;
  // order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

const root = ReactDOM.createRoot(document.getElementById('root'));
const load=Loading
// console.log9load
root.render(
  // <React>
  <Suspense fallback={load}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  // {/* </React> */}
);
