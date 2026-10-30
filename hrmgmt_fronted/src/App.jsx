import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'

import {Routes,Route} from 'react-router-dom'

import EmpHome from './pages/EmpHome'
import HrHome from './pages/HrHome'
import AdminHome from './pages/AdminHome'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/emp"element={<EmpHome></EmpHome>}></Route>
        <Route path="/hr"element={<HrHome></HrHome>}></Route>
        <Route path="/admin"element={<AdminHome></AdminHome>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/contact"element={<Contact></Contact>}></Route>
        <Route path="/services"element={<Services></Services>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/register"element={<Register></Register>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
