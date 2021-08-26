/* eslint-disable @next/next/no-img-element */
import NotFound from "./NotFound";
import { usePokemonData } from "../hook/usePokemonData";

export default function PokeList() {

    const { pokemons } = usePokemonData()

    function listaPokemons(pokemons) {
        return (pokemons.map((pokemon) => {
            const formatedPokemon =
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1);

            return (
                <li key={pokemon.number}
                    className={`
                    sm:m-2 sm:my-2 my-2 m-2 xl:m-8 bg-gray-100 sm:p-4  rounded-lg border-2
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
                            sm:w-24 sm:h-24  
                            md:w-36 md:h-36
                            w-20 h-20 mb-2
                        `}
                    />
                    <span className={`sm:text-sm md:text-xl text-gray-600`}>{`${formatedPokemon}`}</span>
                </li>
            )
        }))
    }

    return (
        <ul>
            <ul className={`
                flex flex-wrap justify-center 
                text-center sm:text-base text-sm 
                `}>
                {pokemons.length > 0 ? (
                    listaPokemons(pokemons)
                ) : (
                    <NotFound />
                )}
            </ul>
        </ul>
    )
}