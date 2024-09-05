import React from 'react'
import ReactDOM from 'react-dom/client'
import Calling from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './navigations/navigation.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavigationsTask from './DailyTask/navigation.jsx';
import SearchTask from './searchTask/searchTask.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <SearchTask/>

    {/* <BrowserRouter> */}
    {/* <Calling /> */}
    {/* <NavigationsTask/> */}
          {/* <Navigations/> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
