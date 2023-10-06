import { useEffect, useState } from "react";
import uniqid from "uniqid"
import { PokemonType } from "../data/Types";
import LoadingScreen from "../components/pokemon/LoadingScreen";
import Pokemon from "../components/pokemon/Pokemon";
import PokemonData from "../components/pokemon/PokemonData";
import PokeApiInput from "../components/PokeApiInput";
import ChangePokemon from "../components/pokemon/ChangePokemon";

const PokeApi = () => {
  const baseEndPoint = 'https://pokeapi.co/api/v2/pokemon/'
  const [endPoint, setEndPoint] = useState(baseEndPoint + Math.floor(Math.random() * 1017 + 1));
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({} as PokemonType)

  
  const fetchData = async() => {
    setLoading(true)
    try{
      const response = await fetch(endPoint)
      const data = await response.json()

      setPokemon({
        name      : data.name,
        sprite    : data.sprites.front_default,
        abilities : data.abilities,
        types     : data.types,
        id        : data.id,
        shiny     : data.sprites.front_shiny
      } as PokemonType)

      setLoading(false)
    }
    catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    
    fetchData()

    return () => {
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPoint])



  if(loading){
    return (
      <div className="w-full justify-center items-center flex flex-col">
        <div className="h-[50rem] w-full">
          <LoadingScreen/>
        </div>
      </div>
    )
  }
  
  else{
    return (
      <div className="w-full justify-center items-center flex flex-col">

        <div className="flex md:flex-row flex-col w-full md:w-3/4 justify-center items-center my-5 gap-5 md:gap-5">
          <PokeApiInput type="text" placeHolder={pokemon.name} id={uniqid()} setFunction={setEndPoint}/>
          <PokeApiInput type="number" placeHolder={pokemon.id.toString()} id={uniqid()} setFunction={setEndPoint}/>
        </div>

        <div className="md:w-1/2 w-full">
          <Pokemon pokemon={pokemon as PokemonType}/>

          <PokemonData pokemon={pokemon as PokemonType}/>

        </div>

        <div className="flex md:flex-row w-full md:w-3/4 justify-center items-center my-5 gap-5 md:gap-5">
          <ChangePokemon pokemon={pokemon as PokemonType} text="Prev" value={-1} setPokemon={setEndPoint}/>
          <ChangePokemon pokemon={pokemon as PokemonType} text="Next" value={1} setPokemon={setEndPoint}/>
        </div>
      </div>
    )
  }
}

export default PokeApi