import uniqid from "uniqid"

type ab = {
    ability : {
        name : string
    }
}

interface Props {
    abilities : [object]
}

const PokemonAbilities = (props: Props) => {

    const abilities : [ab] = props.abilities as [ab]

  return (
    <div className="md:w-2/3 w-full flex items-center flex-col">
        <h1 className="bg-main-red toony-borders text-white text-2xl font-titles w-fit">Abilities</h1>
        {
            abilities.map((obj) => {
                return (
                    <p className="font-mono-text text-lg text-secondary-gray m-1" key={uniqid()}>{obj.ability.name}</p>
                )
            })
        }
    </div>
  )
}

export default PokemonAbilities