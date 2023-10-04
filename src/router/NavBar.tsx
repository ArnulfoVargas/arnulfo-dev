import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState<boolean>(false)
  const body = document.querySelector("body");

  window.addEventListener("resize", () => {
    if(window.screen.width >= 768){
      setOverflow(true)
    }
    else{
      if(open)
        onClickEvent()
      else{
        setOverflow(true)
      }
    }
  })

  const onClickEvent = ()=>{

    setOpen(!open);

    setOverflow(open)
  }

  const setOverflow = (value : boolean) => {
    if (value){
      body?.classList.remove("overflow-hidden")
    }
    else{
      body?.classList.add("overflow-hidden")
    }
  }

  return (
    <>
    <nav className='flex items-center h-20 py-0 sticky top-0 justify-between bg-main-gray z-20'>
      <Link to={"/home"} className='h-full w-16 static flex items-center ml-10'>
      <div className='h-full w-16 static flex items-center justify-center'>
          <div className='h-16 w-16 bg-red-600 rounded-full absolute flex items-center justify-center z-20'>
            <img src="LogoTransparenteBlanco.png" alt="logo" className='h-14 z-20'/>
          </div>
      </div>
      </Link>

      <div className=' text-5xl mr-16 z-20 md:hidden h-14 w-14' onClick={ onClickEvent }>
        <img src={open ? "/close-sharp.svg" : "/menu-sharp.svg"} className='invert' />
      </div>

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
      <div className={`md:hidden bg-main-gray fixed h-full w-full bottom-0 z-10 flex flex-col items-start justify-center duration-500 ${open ? "left-0" : 'left-[-100%]'}`}>

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