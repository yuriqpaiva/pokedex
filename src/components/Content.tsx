/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import converter3casas from "../functions/converter3casas"
import Pokemon from '../model/Pokemon'

interface ContentProps {
    title: string
}

export default function Content(props: ContentProps) {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function carregarPokemons() {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
            const pokemonsApi = await data.json()

            const pokemonsApiArray =
                await Promise.all(pokemonsApi.results.map(async (pokemon) => {
                    const dataImg = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    const pokemonData = await dataImg.json()
                    const pokemonSpriteUrl = await pokemonData.sprites.other['official-artwork'].front_default
                    return new Pokemon(pokemon.name, pokemonSpriteUrl)
                }))

            setPokemons(pokemonsApiArray)
        }

        carregarPokemons()
    }, [])

    function listaPokemons(pokemons) {
        return (pokemons.map((pokemon, index) => {
            const formatedPokemon =
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1);
            const numPokemon = converter3casas(index + 1)
            return (
                <li key={numPokemon}
                    className={`
                    sm:m-3 my-4 xl:m-8 bg-gray-100 sm:p-4 rounded-lg border-2
                    border-gray-300 shadow-sm hover:shadow-xl 
                    hover:scale-75 cursor-pointer focus:shadow-xl   
                    focus:outline-none hover:border-red-400 
                    focus:border-red-400
                    `}  
                    tabIndex={0}
                    >
                    <span className={`
                    block mb-1 text-red-900 font-semibold
                    `}>{`#${numPokemon}`}</span>
                    <img
                        src={pokemon.url}
                        alt={pokemon.name}
                        className={`sm:w-36 sm:h-36 w-24 h-24 mb-2`}
                    />                    
                    <span className={`sm:text-xl text-gray-700`}>{`${formatedPokemon}`}</span>
                </li>
            )
        }))
    }

    console.log(pokemons)

    return (
        <div className={`
        flex flex-col items-center 
        min-h-screen 
        mt-5 w-full sm:px-20 px-10 py-8 rounded-lg shadow-sm 
        bg-white `}>
            <h2>{props.title}</h2>
                <ul className={`
                flex flex-wrap justify-between 
                text-center sm:text-base text-sm 
                `}>
                    {listaPokemons(pokemons)}
                </ul>
        </div>
    )
}