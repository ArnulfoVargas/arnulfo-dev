import { Link } from 'react-router-dom'


const NavBar = () => {


  return (
      <div className="h-20 bg-gray-800 flex flex-row px-5 justify-between items-center z-50">
      <div className="flex flex-row h-full items-center justify-center w-16">
          <Link to={"/home"}>
            <img src="/LogoTransparenteBlanco.png" alt="Arnulfo Logo" className='h-14'/>
          </Link>
      </div>

      <div className='md:hidden xs:flex xs:h-16 xs:w-16 items-center justify-center'>
        <svg viewBox="0 0 100 80" width="40" height="40" className='fill-gray-200'>
          <rect width="100" height="20" rx="3"></rect>
          <rect y="30" width="100" height="20" rx="3"></rect>
          <rect y="60" width="100" height="20" rx="3"></rect>
        </svg>
      </div>

      <div className='items-center gap-5 flex-row xs:hidden md:flex'>
          <Link to={"/home"}>
              <div className='h-12 w-28 text-gray-200 flex items-center justify-center text-2xl font-bold
                              hover:bg-gray-200 hover:text-gray-800 rounded-md transition-colors duration-500
                              border-2 border-gray-200 hover:border-none
                              '><p>Home</p></div>
          </Link>

          <Link to={"/about"}>
              <div className='h-12 w-28 text-gray-200 flex items-center justify-center text-2xl font-bold
                              hover:bg-gray-200 hover:text-gray-800 rounded-md transition-colors duration-
                              border-2 border-gray-200 hover:border-none
                              '><p>About</p></div>
          </Link>

          <Link to={"/pokeapi"}>
              <div className='h-12 w-28 text-gray-200 flex items-center justify-center text-2xl font-bold
                              hover:bg-gray-200 hover:text-gray-800 rounded-md transition-colors duration-500
                              border-2 border-gray-200 hover:border-none
                              '><p>PokeAPI</p></div>
          </Link>

          <Link to={"/contact"}>
              <div className='h-12 w-44 text-gray-800 flex items-center justify-center text-2xl font-bold
                              bg-gray-200 rounded-md transition-colors duration-500 hover:bg-gray-800 hover:text-gray-200
                              hover:border-2 hover:border-gray-200
                              '><p>Contact Me</p></div>
          </Link>
      </div>

      </div>
  )
}

export default NavBar;