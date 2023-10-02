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

    <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/home" Component={HomePage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/pokeapi" Component={PokeApi}/>
        <Route path="/contact" Component={ContactPage}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default AppRouter