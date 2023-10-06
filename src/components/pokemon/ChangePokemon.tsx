import React from 'react'
import { PokemonType } from '../../data/Types'

interface Props {
    text: string,
    pokemon: PokemonType,
    setPokemon: React.Dispatch<React.SetStateAction<string>>,
    value: number,
}

const ChangePokemon = (props: Props) => {
    const baseEndPoint = 'https://pokeapi.co/api/v2/pokemon/'

    const {setPokemon, value, pokemon, text} = props

    const onClickEvent = () => {
        let num : number= pokemon.id
        num += value;

        if(num >= 1017)
            num = 1017
        else if(num <=0)
            num = 0

        const url = baseEndPoint + num

        setPokemon(url)
    }

  return (
    <div className="h-12 md:w-96 w-10/12 md:p-0 grid-cols-3 grid toony-borders">
        <div className='col-span-3 bg-main-red hover:bg-red-600 flex items-center justify-center' onClick={onClickEvent}>
            <p className='text-2xl font-titles text-white'>
                {text}
            </p>
        </div>
    </div>
  )
}

export default ChangePokemon