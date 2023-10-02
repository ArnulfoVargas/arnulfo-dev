
const Footer = () => {
  return (
    <div className="xs:h-80 md:h-64 bg-light-red flex sm:flex-col xs:flex-col md:flex-row justify-between items-center px-5 py-10 xs:gap-10">
        <div className="xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-28 md:h-28">
            <img src="/LogoTransparenteBlanco.png" alt="Logo Arnulfo" 
            className="object-cover "/>
        </div>

        <div className="md:w-1/2 md:h-full xs:w-full xs:h-52 sm:h-52 flex flex-col md:items-end md:justify-center xs:items-center xs:justify-start">
            <div className="flex flex-col w-full">
              <p className="text-red-900 text-xl xs:text-center">©Arnulfo Vargas</p>
              <div className="flex flex-row h-20 w-full">
                  <img src="" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer