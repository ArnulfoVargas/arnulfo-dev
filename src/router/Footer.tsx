
const Footer = () => {
  return (
    <div className="xs:h-80 md:h-64 bg-gray-800 flex sm:flex-col xs:flex-col md:flex-row justify-between items-center px-5 py-10 xs:gap-10">
        <div className="xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-28 md:h-28">
            <img src="/LogoTransparenteBlanco.png" alt="Logo Arnulfo" 
            className="object-cover "/>
        </div>

        <div className="md:w-1/2 md:h-full xs:w-full xs:h-52 sm:h-52 flex flex-col items-end justify-center">
            <p className="text-gray-500 text-xl">©Arnulfo Vargas</p>
        </div>
    </div>
  )
}

export default Footer