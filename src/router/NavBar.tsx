import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className='flex items-center h-20 py-0 sticky top-0 justify-between bg-main-gray'>
      <Link to={"/home"} className='h-full w-18 static flex items-center ml-16'>
      <div className='h-full w-16 static flex items-center justify-center'>
          <div className='h-16 w-16 bg-red-600 rounded-full absolute flex items-center justify-center'>
            <img src="LogoTransparenteBlanco.png" alt="logo" className='h-14 z-10'/>
          </div>
      </div>
      </Link>

      <div className='h-20 md:flex hidden justify-end md:w-1/2'>
        <Link to={"/home"} className='custom-btn'>
          <p>Home</p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>About</p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>Extras <p className='text-sm inline'>▼</p></p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>Contact</p>
        </Link>
      </div>

      {/* Celulares */}
      <div className={'md:hidden bg-main-gray fixed h-full w-full bottom-0 flex flex-col items-start justify-center z-10'}>
        
        <Link to={"/home"} className='h-20 w-full absolute top-5 z-20 flex items-center px-10'>
        <div className='h-16 w-16 static flex items-center justify-center'>
            <div className='h-16 w-16 bg-red-600 rounded-full absolute flex items-center justify-center'>
              <img src="LogoTransparenteBlanco.png" alt="logo" className='h-14 z-10'/>
            </div>
        </div>
        </Link>

      <Link to={"/home"} className='custom-btn'>
          <p>Home</p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>About</p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>Extras <p className='text-sm inline'>▼</p></p>
        </Link>
        <Link to={"/home"} className='custom-btn'>
          <p>Contact</p>
        </Link>
      </div>

    </nav>
    </>
  )
}

export default NavBar;