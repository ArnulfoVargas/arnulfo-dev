import uniqid from "uniqid"

type types = {
    type: {
        name: string
    }
}

interface Props {
    types : [object]
}

const PokemonTypes = (props: Props) => {

    const objects : [types] = props.types as [types]

    return (
        <div className="md:w-2/3 w-full flex items-center flex-col">
            <h1 className="bg-main-red toony-borders text-white text-2xl font-titles w-fit">Types</h1>
    
            {
                objects.map((obj) => {
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