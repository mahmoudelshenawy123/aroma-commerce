import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import './features/i18nInit'
import Loading from 'components/Global/loading/Loading';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
