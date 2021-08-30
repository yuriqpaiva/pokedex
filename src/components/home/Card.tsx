import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

interface CardProps {
    pokemon: any
    formatedPokemon: string
}

export default function Card({ pokemon, formatedPokemon }: CardProps) {

    const router = useRouter()

    function goToStatsPage(e = null) {
        const push = () => {
            router.push
            (`https://pokedex-liard-beta.vercel.app/pokemon/${pokemon.name}`);
        }
        if (e && e.code === 'Enter') {
            push()
        } else if (!e) {
            push()
        }
    }

    return (
        <li onClick={() => goToStatsPage()}
            onKeyUp={(e) => goToStatsPage(e)}
            className={`
                    sm:m-2 sm:my-2 my-2 m-2 xl:m-8 bg-gray-100 sm:p-4  rounded-lg border-2
                    border-gray-300 shadow-sm hover:shadow-xl 
                    cursor-pointer focus:shadow-none   
                    focus:outline-none hover:border-red-400 
                    focus:border-red-400 
                    `}
            tabIndex={0}
        >
            <span className={`
                    block mb-1 text-red-900 font-semibold
                    `}>{`#${pokemon.number}`}</span>
            <div className={`
                                sm:w-24 sm:h-24
                                md:w-36 md:h-36
                                w-20 h-20 mb-2
                            `}>
                <Image
                    src={pokemon.url}
                    alt={pokemon.name}
                    width='144' height='144'
                />
            </div>
            <span className={`sm:text-sm md:text-xl text-gray-600`}>{`${formatedPokemon}`}</span>
        </li>
    )
}