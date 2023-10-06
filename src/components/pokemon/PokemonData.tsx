import PokemonAbilities from "./PokemonAbilities"
import PokemonTypes from "./PokemonTypes"
import {PokemonType} from "../../data/Types"

interface Props {
    pokemon : PokemonType
}

const PokemonData = (props: Props) => {

    const {types, abilities} = props.pokemon

  return (
    <div className="flex md:flex-row flex-col w-full mx-auto my-5 md:gap-0 gap-5 mt-10">
        <PokemonAbilities abilities={abilities}/>
        <PokemonTypes types={types}/>
    </div>
  )
}

export default PokemonData