import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className='flex items-center h-20 py-0 sticky top-0 justify-between' id='nav'>
      <Link to={"/home"} className='h-full w-18 static flex items-center ml-16'>
      <div className='h-full w-18 static flex items-center justify-center'>
          <div className='h-18 w-18 bg-red-600 rounded-full absolute'>
            <img src="LogoTransparenteBlanco.png" alt="logo" className='h-14 z-10'/>
          </div>
      </div>
      </Link>

      <div className='h-20 flex justify-end md:w-1/2'>
        <Link to={"/home"} className='button'>
          <p>Home</p>
        </Link>
        <Link to={"/home"} className='button'>
          <p>About Me</p>
        </Link>
        <Link to={"/home"} className='button'>
          <p>Extras</p>
        </Link>
        <Link to={"/home"} className='button'>
          <p>Contact</p>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar;