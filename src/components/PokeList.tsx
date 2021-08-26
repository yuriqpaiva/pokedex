/* eslint-disable @next/next/no-img-element */
import { usePokemonData } from "../hook/usePokemonData";

export default function PokeList() {

    const {pokemons} = usePokemonData()

    function listaPokemons(pokemons) {
        return (pokemons.map((pokemon) => {
            const formatedPokemon =
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1);
            
            return (
                <li key={pokemon.number}
                    className={`
                    sm:m-2 sm:my-2 my-4 xl:m-8 bg-gray-100 sm:p-4 rounded-lg border-2
                    border-gray-300 shadow-sm hover:shadow-2xl
                    hover:scale-75 cursor-pointer focus:shadow-none   
                    focus:outline-none hover:border-red-400 
                    focus:border-red-400 
                    `}
                    tabIndex={0}
                >
                    <span className={`
                    block mb-1 text-red-900 font-semibold
                    `}>{`#${pokemon.number}`}</span>
                    <img
                        src={pokemon.url}
                        alt={pokemon.name}
                        className={`
                            sm:w-36 sm:h-36  
                            w-20 h-20 mb-2
                        `}
                    />
                    <span className={`sm:text-xl text-gray-600`}>{`${formatedPokemon}`}</span>
                </li>
            )
        }))
    }

    return (
        <ul>
            <ul className={`
                flex flex-wrap justify-between 
                text-center sm:text-base text-sm 
                `}>
                {listaPokemons(pokemons)}
            </ul>
        </ul>
    )
}