import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { converterPara3Casas } from "../functions/convert";
import { formatName } from "../functions/format";
import PokemonStatsModel from "../model/PokemonStatsModel";
import { usePokemonData } from "./usePokemonData";

export default function usePokemonStats() {
    const { resetPageState } = usePokemonData()

    const router = useRouter()
    const pokemonPathName: string = `${router.query.pokemon}`

    const pokemonName: string = formatName(pokemonPathName)

    const [pokemon, setPokemon] =
        useState<PokemonStatsModel>(PokemonStatsModel.startClass);

    useEffect(() => {
        // setShowShortcut(true)
        if (router.asPath !== router.route) {
            async function loadPokemon() {
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPathName}`)
                const pokemonData = await data.json()
                const pokemonNum = converterPara3Casas(pokemonData.id)
                const pokemonSpriteUrl = await pokemonData.sprites.other['official-artwork'].front_default
                const pokemonType = await pokemonData.types[0].type.name
                const pokemonWeight = 
                await await `${(+pokemonData.weight * 0.10).toFixed(1)}`;
                const pokemonHeight = 
                await `${(+pokemonData.height * 0.10).toFixed(1)}`;
                const pokemonAbilite = await pokemonData.abilities[0].ability.name
                return new PokemonStatsModel(
                    `#${pokemonNum}`,
                    pokemonName,
                    pokemonSpriteUrl,
                    pokemonType,
                    pokemonHeight,
                    pokemonWeight,
                    pokemonAbilite
                )
            }
            loadPokemon().then((pkm) => setPokemon(pkm))
            const page = document.querySelector("body")
            console.log(page.scrollHeight)
        }
    }, [pokemonName, pokemonPathName, router.asPath, router.route])

    function goToMenu() {
        router.push('/')
        resetPageState()
    }

    return {
        router,
        pokemon,
        goToMenu
    }
}