/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Pokemon from '../model/Pokemon'
import { createContext } from "react";
import { converterPara3Casas, converterDe3Casas } from "../functions/conversoes";

interface PokemonContext {
    pokemons: [any]
    search: (name: string) => void
}

export const PokeDataContext = createContext<PokemonContext>({
    pokemons: null,
    search: null,
})

interface PokemonDataProps {
    children: any
}

export default function PokemonData(props: PokemonDataProps) {

    const [pokemons, setPokemons] = useState<any>([])
    const [allPokemons, setAllPokemons] = useState<any>([])

    useEffect(() => {
        async function carregarPokemons() {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
            const pokemonsApi = await data.json()

            const pokemonsApiArray =
                await Promise.all(pokemonsApi.results.map(async (pokemon, index) => {
                    const numPokemon = converterPara3Casas(index + 1)
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

    function search(insert: string) {
        const searchArray = allPokemons.filter((pokemon: Pokemon) => {
            return pokemon.name.indexOf(insert) > -1
        })
        setPokemons(searchArray)
        console.log(pokemons)
    }

    return (
        <PokeDataContext.Provider value={{
            pokemons, search
        }}>
            {props.children}
        </PokeDataContext.Provider>
    )
}