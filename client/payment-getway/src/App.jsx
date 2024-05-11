import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

import './App.css'
import PaymentSuccess from './pages/PaymentSuccess'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Routes>
    <Route  path="/"  element= {<Home/>}/>
    <Route  path="/paymentsuccess"  element= {<PaymentSuccess/>}/>
  </Routes>
</Router>
    </>
  )
}

export default App
