/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { formatName } from "../../functions/format";
import { converterPara3Casas } from "../../functions/conversoes";
import Image from 'next/image'
import Line from "../../components/Line";
import Button from "../../components/Button";
import { usePokemonData } from "../../hook/usePokemonData";
import TableStats from "../../components/pkm-stat-page/TableStats";
import BaseInfo from "../../components/pkm-stat-page/BaseInfo";
import PokemonStatsModel from "../../model/PokemonStatsModel";
import LoadingImg from "../../components/LoadingImg";

export default function Pokemon() {

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
                    <BaseInfo pokemon={pokemon}/>
                    <div className={`
                        flex sm:flex-row 
                        flex-col 
                        items-center
                    `}>
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
                        <TableStats pokemon={pokemon}/>
                    </div>
                    <Line className='mt-5' />
                </>
            ) : (
                <div className={'h-screen'}/>
            )}
        </Layout>
    )
}