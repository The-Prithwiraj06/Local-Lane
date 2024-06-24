import { useState } from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import About from './components/About'
import DisplayMap from './components/DisplayBooks/DisplayMap';
import Login from './components/Sigin/Login'
import SignUp from './components/Sigin/SignUp';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ContactUs from './components/ContactUS';
import Dis from './components/DisplayBooks/Dis';
import Donate from './components/Donate';




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<HomePage/>}/>
    <Route path="/login" exact  element={<Login/>}/>
    <Route path="/signup" exact  element={<SignUp/>}/>
    <Route path="/about" exact element={<About/>}/>
    <Route path="/contactUs" exact element={<ContactUs/>}/>
    <Route path="/categories" exact element={<Dis/>}/>
    <Route path="/map" exact element={<DisplayMap/>}/>
    <Route path="/donate" exact element={<Donate/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
  )
}

export default App
