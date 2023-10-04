import { Link } from "react-router-dom"
import FooterSocialButton from "../components/FooterSocialButton"

const Footer = () => {
  return (
    <div className="h-fit w-full py-10 bg-main-gray px-10 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-10">
      <div className="flex flex-col justify-center items-center md:items-start h-full w-full">
        <Link to={"/home"} className='md:h-40 h-22 md:w-40 w-22 static flex items-center ml-10'>
          <div className='md:h-40 h-22 md:w-40 my-8 md:my-0 w-22 static flex items-center justify-center'>
            <div className='md:h-40 h-22 md:w-40 w-22 bg-red-600 rounded-full absolute flex items-center justify-center'>
              <img src="LogoTransparenteBlanco.png" alt="logo" className='md:h-36 h-20'/>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end h-fit w-full">
          <p className="footer-txt">©Arnulfo Vargas</p>
          <div className=" flex flex-row md:justify-end justify-evenly gap-5 mt-10">
            <FooterSocialButton name="GitHub" src="/logo-github.svg" link="https://github.com/ArnulfoVargas"/>
            <FooterSocialButton name="LinkedIn" src="/logo-linkedin.svg" link="https://www.linkedin.com/in/arnulfo-vargas-mej%C3%ADa/"/>
            <FooterSocialButton name="Itch.io" src="/itchio-logo-textless-black.svg" link="https://arnulfodev.itch.io/"/>
          </div>
      </div>
    </div>
  )
}

export default Footer