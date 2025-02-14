import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './parts/Navbar'
import Home from './pages/Home'
import Footer from './parts/Footer'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
