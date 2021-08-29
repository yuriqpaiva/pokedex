/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import PokemonModel from '../model/Pokemon'
import { createContext } from "react";
import { converterPara3Casas, converterDe3Casas } from "../functions/conversoes";

interface PokemonContext {
    pokemons: [any]
    search: (name: string) => void
    loading: boolean
    showAll: boolean
    setShowAll: (value: boolean) => void
    showShortcut: boolean,
    setShowShortcut: (value: boolean) => void,
    handleShortcut: () => void
}

export const PokeDataContext = createContext<PokemonContext>({
    pokemons: null,
    search: null,
    loading: null,
    showAll: null,
    setShowAll: null,
    showShortcut: null,
    setShowShortcut: null,
    handleShortcut: null
})

interface PokemonDataProps {
    children: any
}

export default function PokemonData(props: PokemonDataProps) {

    const [pokemons, setPokemons] = useState<any>([])
    const [allPokemons, setAllPokemons] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [showAll, setShowAll] = useState<boolean>(true)
    const [showShortcut, setShowShortcut] = useState<boolean>(false)

    useEffect(() => {
        async function loadPokemons() {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
            const pokemonsApi = await data.json()

            const pokemonsApiArray =
                await Promise.all(pokemonsApi.results.map(async (pokemon) => {
                    // const numPokemon = converterPara3Casas(index + 1)
                    const dataImg = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    const pokemonData = await dataImg.json()
                    const numPokemon = converterPara3Casas(pokemonData.id)
                    const pokemonSpriteUrl = await pokemonData.sprites.other['official-artwork'].front_default
                    return new PokemonModel(
                        numPokemon,
                        pokemon.name,
                        pokemonSpriteUrl
                    )
                }))
            setTimeout(() => {
                setLoading(false)
                setShowAll(false)
            }, 3000);
            setPokemons(pokemonsApiArray)
            setAllPokemons(pokemonsApiArray)
        }
        
        loadPokemons()
    }, [])

    useEffect(() => {
        handleShortcut()
    }, [showAll])

    function handleShortcut() {
        const page = document.querySelector("body")
        if (page.scrollHeight > 1001) {
            setShowShortcut(true)
        } else {
            setShowShortcut(false)
        }
    }

    function search(insertValue) {
        let insert = insertValue.toLowerCase()
        const searchArray: [] = allPokemons.filter((pokemon: PokemonModel) => {
            return pokemon.name.indexOf(insert) > -1
        })

        insert === '' || searchArray.length > 24
            ? setShowAll(false) : setShowAll(true);

        setPokemons(searchArray)
    }

    // function resetPageState() {
    //     setPokemons(allPokemons)
    //     setShowShortcut(true)
    //     setShowAll(true)
    // }

    return (
        <PokeDataContext.Provider value={{
            pokemons,
            search,
            loading,
            showAll,
            setShowAll,
            showShortcut,
            setShowShortcut,
            handleShortcut
        }}>
            {props.children}
        </PokeDataContext.Provider>
    )
}