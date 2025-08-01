import React from 'react'
import poklogo from './assets/poklogo.png';

export const PokemonCard = ({ pokemonData }) => {
    return (
        <li className="group bg-white p-4 cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl">
            <figure className='flex justify-center mb-4 relative '>
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} 
                className='h-25 z-10' />
                <img src={poklogo} alt="" className='absolute opacity-15 group-hover:scale-125 group-hover:opacity-30 duration-300' />
            </figure>
            <h1 className='text-md mb-3'>{pokemonData.name}</h1>
            <div className='flex justify-center'>
                {/* showing multiple types in one line using .join method */}
                <p className='text-center text-sm bg-green-500 rounded-full text-white px-2 py-[2px] mb-6'>{pokemonData.types.map((currType) => currType.type.name).join(", ")}</p>
            </div>


            <div className='grid grid-cols-3 mb-4 text-center gap-1'>
                <p className='flex flex-col lg:flex-row lg:justify-center  text-[12px] lg:text-sm '>
                    <span className='font-semibold text-[12px] lg:text-sm '>Height: </span>{pokemonData.height}
                </p>
                <p className='flex flex-col lg:flex-row lg:justify-center  text-[12px] lg:text-sm '>
                    <span className='font-semibold text-[12px] lg:text-sm '>Weight: </span>{pokemonData.weight}
                </p>
                <p className='flex flex-col lg:flex-row lg:justify-center  text-[12px] lg:text-sm'>
                    <span className='font-semibold text-[12px] lg:text-sm '>speed:</span> {pokemonData.stats[5].base_stat}
                </p>
            </div>


            <div className='grid grid-cols-3'>
                <p className='flex flex-col items-center text-[12px] lg:text-sm'>
                    {pokemonData.base_experience}<span className='font-semibold lg:text-sm'>Experience</span>
                </p>
                <p className='flex flex-col items-center text-[12px] lg:text-sm'>
                    {pokemonData.stats[1].base_stat}<span className='font-semibold lg:text-sm'>Attack</span>
                </p>
                <p className='flex flex-col items-center justify-center text-[12px] lg:text-sm max-w-[100px]  group'>
                    <span className='truncate block group-hover:overflow-visible'>{pokemonData.abilities.map((curr) => curr.ability.name).slice(0, 1).join(", ")}</span>
                    <span className='font-semibold text-[12px] lg:text-sm'>Abilities</span>
                </p>
            </div>
        </li>

    )
}
