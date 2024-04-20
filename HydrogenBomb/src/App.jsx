
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './comps/Register'
import Navbar from './comps/Navbar'
import Home from './comps/Home'
import Login from './comps/Login'



function App() {
  

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
     </Routes>
    </>
  )
}

export default App
