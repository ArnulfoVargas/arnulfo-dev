
interface Props {
    src: string,
    name: string,
    link?: string
}

const FooterSocialButton = (props: Props) => {
  return (
    <a href={props.link}>
        <div className="grid-rows-2 justify-center items-center text-center">
            <img src={props.src} className=" w-20 h-20 opacity-30" />
            <p className="footer-txt">{props.name}</p>
        </div>
    </a>
  )
}

export default FooterSocialButton;