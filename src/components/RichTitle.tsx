
interface Props {
    text : string,
    small?:boolean
}

const RichTitle = (props: Props) => {
  return (
    <div className="h-fit w-fit">
          <h1 className={`text-center ${props.small === true? "text-3xl md:text-4xl" :"text-5xl md:text-7xl"} font-titles bg-main-red text-white font-bold toony-borders`}>{props.text}</h1>
      </div>
  )
}

export default RichTitle