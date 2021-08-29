interface BaseInfoProps {
    pokemon: {
        number?: string,
        name?: string
    }
}

export default function BaseInfo({pokemon}: BaseInfoProps) {
    return (
        <div className='mb-2 '>
            <h2 className={`
                            text-red-900 font-semibold
                            sm:text-xl text-lg text-center
                        `}>
                {pokemon.number}
            </h2>
            <h1 className={`
                            text-lg font-semibold
                            sm:text-xl
                            text-gray-600
                        `}>
                {pokemon.name}
            </h1>
        </div>
    )
}