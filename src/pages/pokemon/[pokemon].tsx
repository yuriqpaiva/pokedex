/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { formatPokemonName } from "../../functions/format";
import PokemonModel from '../../model/Pokemon'
import { converterPara3Casas } from "../../functions/conversoes";
import Image from 'next/image'
import Line from "../../components/Line";
import Button from "../../components/Button";
import { usePokemonData } from "../../hook/usePokemonData";
import TableStats from "../../components/TableStats";

export default function Pokemon() {

    const { setShowShortcut } = usePokemonData()

    const router = useRouter()
    const pokemonPathName = `${router.query.pokemon}`

    const pokemonName = formatPokemonName(pokemonPathName)

    const [pokemon, setPokemon] =
        useState<PokemonModel>(PokemonModel.startClass);

    useEffect(() => {
        setShowShortcut(true)
        if (router.asPath !== router.route) {
            async function loadPokemon() {
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPathName}`)
                const pokemonData = await data.json()
                const numPokemon = converterPara3Casas(pokemonData.id)
                const pokemonSpriteUrl = await pokemonData.sprites.other['official-artwork'].front_default
                return new PokemonModel(
                    `#${numPokemon}`,
                    pokemonName,
                    pokemonSpriteUrl
                )
            }

            loadPokemon().then((pkm) => setPokemon(pkm))
        }
    }, [pokemonName, pokemonPathName, router, setShowShortcut])

    function goToMenu() {
        router.push('/')
    }

    return (
        <Layout>
            {router.asPath !== router.route && pokemon.url ? (
                <>
                    <Button
                        label='Voltar ao Menu'
                        onClick={goToMenu}
                        className='mb-5 '
                    />
                    <Line className='mb-5' />
                    <div className='mb-2 '>
                        <h2 className={`
                            text-red-900 font-semibold
                            sm:text-xl text-lg
                        `}>
                            {pokemon.number}
                        </h2>
                        <h1 className={`
                            text-lg font-semibold
                            sm:text-xl
                            text-gray-600
                        `}>
                            {pokemonName}
                        </h1>
                    </div>
                    <div className={`
                        sm:h-64 sm:w-64
                        h-48 w-48 
                    `}>
                        <Image alt=''
                            width='256'
                            height='256'
                            src={pokemon.url}
                        />
                    </div>
                    <TableStats />
                    <Line className='mt-5' />
                </>
            ) : false}
        </Layout>
    )
}