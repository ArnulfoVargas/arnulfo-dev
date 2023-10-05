import { Tecnology } from "../data/Types"

interface Props {
    tecnology : Tecnology
}

const TecnologiesCard = (props: Props) => {

    const {image, name} = props.tecnology;

  return (
    <>
    <div className="h-36 w-24 grid-rows-3 grid justify-center text-center gap-7 my-5">
        <div className="row-span-2">
            <img src={image} alt="" className="w-24 h-24 object-cover"/>
        </div>
        <p className="font-mono-text text-lg">{name}</p>
    </div>
    
    </>
  )
}

export default TecnologiesCard