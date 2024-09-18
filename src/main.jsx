import React from 'react'
import ReactDOM from 'react-dom/client'
import Calling from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './navigations/navigation.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavigationsTask from './DailyTask/navigation.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calling />
  </React.StrictMode>,
)
