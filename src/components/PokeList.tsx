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
            if (pokemons.length > 24 && !showAll && index < 24) {
                return (
                    <div key={pokemon.number}>
                        <Card
                            pokemon={pokemon}
                            formatedPokemon={formatedPokemon}
                        />
                    </div>
                )
            } else if (showAll) {
                return (
                    <div key={pokemon.number}>
                        <Card
                            pokemon={pokemon}
                            formatedPokemon={formatedPokemon}
                        />
                    </div>
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