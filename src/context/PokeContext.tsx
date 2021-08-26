/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Pokemon from '../model/Pokemon'
import { createContext } from "react";
import converter3casas from "../functions/converter3casas";

interface PokemonContext {
    pokemons: object
    search: (name: string) => void
}

export const PokeDataContext = createContext<PokemonContext>({
    pokemons: null,
    search: null
})

interface PokemonDataProps {
    children: any
}

export default function PokemonData(props: PokemonDataProps) {

    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
        async function carregarPokemons() {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
            const pokemonsApi = await data.json()

            const pokemonsApiArray =
                await Promise.all(pokemonsApi.results.map(async (pokemon, index) => {
                    const numPokemon = converter3casas(index + 1)
                    const dataImg = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    const pokemonData = await dataImg.json()
                    const pokemonSpriteUrl = await pokemonData.sprites.other['official-artwork'].front_default
                    return new Pokemon(
                        numPokemon,
                        pokemon.name,
                        pokemonSpriteUrl
                    )
                }))

            setPokemons(pokemonsApiArray)
            setAllPokemons(pokemonsApiArray)
        }
        carregarPokemons()
    }, [])

    function search(nameInsert: string) {
        const searchArray = allPokemons.filter((pokemon) => {
            return pokemon.name.indexOf(nameInsert) > -1
        })
        setPokemons(searchArray)
    }

    console.log(pokemons)

    return (
        <PokeDataContext.Provider value={{
            pokemons, search
        }}>
            {props.children}
        </PokeDataContext.Provider>
    )
}