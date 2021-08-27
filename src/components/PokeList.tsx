/* eslint-disable @next/next/no-img-element */
import NotFound from "./NotFound";
import { usePokemonData } from "../hook/usePokemonData";
import LoadingImg from "./LoadingImg";
import Card from "./Card";

export default function PokeList() {

    const { pokemons, loading, showAll } = usePokemonData()

    function listaPokemons(pokemons) {
        return (pokemons.map((pokemon, index) => {
            const formatedPokemon =
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1);
            if (index < 24 && !showAll) {
                return (
                    <Card
                        pokemon={pokemon}
                        formatedPokemon={formatedPokemon}

                    />
                )
            } else if (showAll) {
                return (
                    <Card
                        pokemon={pokemon}
                        formatedPokemon={formatedPokemon}

                    />
                )
            }
        }))
    }

    return (
        <ul>
            <ul className={`
                flex flex-wrap justify-center 
                text-center sm:text-base text-sm 
                `}>
                {pokemons.length > 0 && !loading ? (
                    listaPokemons(pokemons)
                ) : (
                    loading ? (
                        <LoadingImg />
                    ) : (
                        <NotFound />
                    )
                )}
            </ul>
        </ul>
    )
}