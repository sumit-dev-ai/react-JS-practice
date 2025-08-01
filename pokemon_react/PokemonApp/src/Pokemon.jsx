import React, { useEffect } from 'react';
import "./index.css";
import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { searchPokemon } from './methods/searchPokemon';


export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [Error, setError] = useState("")
    const [Search, setSearch] = useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100"
    //fetch pokemon
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (currPokemon) => {
                const res = await fetch(currPokemon.url)
                const data = await res.json()
                return data;
            })

            const detailedResponses = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponses)
            console.log(detailedResponses)

        } catch (err) {
            console.log(err);
            setError(Error)
        } finally {
            setLoading(false)
        }
    }
    const searchData = searchPokemon(pokemon, Search);
    useEffect(() => {
        fetchPokemon();
    }, []);
    //loading
    if (loading) {
        return <h1>Loading</h1>
    }
    if (Error) {
        { Error && <p className="text-red-500 text-center">{Error.message}</p> }
    }
    return (
        <div className='bg-gray-100 max-w-[1640px] w-full lg:p-15'>
            <header className='flex justify-center'>
                <h1 className='text-5xl mt-2 flex items-center'>Lets Catch Pokemon <svg className='h-10' viewBox="0 0 512 512" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="256" cy="256" r="248" fill="#f44336" stroke="black" strokeWidth="16" />
                    <path d="M8 256h496" stroke="black" strokeWidth="32" />
                    <circle cx="256" cy="256" r="80" fill="white" stroke="black" strokeWidth="16" />
                    <circle cx="256" cy="256" r="40" fill="#d1d1d1" stroke="black" strokeWidth="8" />
                </svg></h1>
            </header>
            <div className='flex justify-center py-4 mt-6'>
                <input type="text" placeholder='Search Pokemon' className='border-b-2 outline-none border-red-500 px-2'
                    value={Search} onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                <ul className='grid lg:grid-cols-4 gap-4 mx-4 grid-cols-2 md:grid-cols-2'>
                    {
                        searchData.map((currPokemon) => (
                            <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
