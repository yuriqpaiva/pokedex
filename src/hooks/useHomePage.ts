import { useEffect, useState } from "react"
import { converterPara3Casas } from "../functions/convert"
import PokemonModel from '../model/Pokemon'

export default function useHomePage() {
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
    }, [showAll, pokemons, showShortcut, loading])

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
        const searchArray: [] 
        = allPokemons.filter((pokemon: PokemonModel) => {
            return pokemon.name.indexOf(insert) > -1
        })

        insert === '' || searchArray.length > 24
            ? setShowAll(false) : setShowAll(true);

        setPokemons(searchArray)
    }

    function resetPageState() {
        setPokemons(allPokemons)
        if (showAll) {
            setShowAll(false)
            setShowShortcut(true)
        }
    }
    return {
        pokemons,
        search,
        loading,
        showAll,
        setShowAll,
        showShortcut,
        setShowShortcut,
        resetPageState
    }
}