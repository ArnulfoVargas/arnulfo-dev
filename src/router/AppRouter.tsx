import AboutPage from "../screens/AboutPage"
import ContactPage from "../screens/ContactPage"
import HomePage from "../screens/HomePage"
import PokeApi from "../screens/PokeApi"
import Footer from "./Footer"
import NavBar from "./NavBar"
import {Route, Routes} from 'react-router-dom'


const AppRouter = () => {
  return (
    <>
    <NavBar/>

    <div className="p-5 bg-light-gray">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/pokeapi" element={<PokeApi/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default AppRouter