import { useEffect, useState } from "react"
import { PokemonType } from "../../data/Types"

interface Props {
    pokemon : PokemonType
}

const Pokemon = (props: Props) => {
    const showShiny :boolean = localStorage.getItem("shiny") === 's'
    const pokemon = props.pokemon
    const [shiny, setShiny] = useState( () => { if (showShiny != null) return showShiny; else return false;})

    useEffect(() => {
      localStorage.setItem('shiny', shiny ? 's': 'n')
      return () => {}
    }, [shiny])
    

  return (
    <div className="flex flex-col items-center">
        
        <h1 className="bg-main-red toony-borders text-2xl uppercase font-titles text-white">{pokemon.name}</h1>
        <h2 className="font-mono-text text-xl mt-2">ID: {pokemon.id}</h2>
        <img src={shiny ? pokemon.shiny : pokemon.sprite} className="h-96"/>
        <div className="flex items-center justify-center h-12 w-36 bg-main-red toony-borders hover:bg-red-600" onClick={() => {setShiny(!shiny)}}>
          <p className="text-white font-titles text-2xl">{shiny ? "Normal" : "Shiny"}</p>
        </div>
    </div>
  )
}

export default Pokemon