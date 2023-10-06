import uniqid from "uniqid"

interface Props {
    types : [object]
}

const PokemonTypes = (props: Props) => {
    return (
        <div className="md:w-2/3 w-full flex items-center flex-col">
            <h1 className="bg-main-red toony-borders text-white text-2xl font-titles w-fit">Types</h1>
    
            {
                props.types.map((obj) => {
                    return (
                        <p className="font-mono-text text-lg text-secondary-gray m-1"
                            key={uniqid()}>{obj.type.name}</p>
                    )
                })
            }
        </div>
      )
}

export default PokemonTypes