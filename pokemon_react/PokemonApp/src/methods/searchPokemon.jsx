import React from 'react'
import { Pokemon } from '../Pokemon'

export const searchPokemon=(pokemon,search)=>{
    const searchData=pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()))
    return searchData;
}