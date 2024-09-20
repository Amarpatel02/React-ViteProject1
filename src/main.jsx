import React from 'react'
import ReactDOM from 'react-dom/client'
import Calling from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ReduxExample from './redux/redux.jsx';
import { reduxData } from './redux/store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxData}>
      <ReduxExample/>
    </Provider>
  </React.StrictMode>,
)
 