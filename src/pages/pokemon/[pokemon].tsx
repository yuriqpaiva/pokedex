import Layout from "../../components/Layout";
import Image from 'next/image'
import Line from "../../components/Line";
import Button from "../../components/Button";
import TableStats from "../../components/stats-page/TableStats";
import BaseInfo from "../../components/stats-page/BaseInfo";
import usePokemonStats from "../../hooks/usePokemonStats";

export default function Pokemon() {

    const { 
        router,
        pokemon,
        goToMenu
     } = usePokemonStats()

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