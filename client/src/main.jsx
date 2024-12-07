import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
createRoot(document.getElementById('root')).render(
<Router>
  <Routes path= '/' element={<App/>}>
    <Route index element={<Home/>}/>
    {/* <Route path = 'staff' element={<Staff/>}/> */}
    <Route/>
    <Route/>
    <Route/>
  </Routes>
</Router>
)
