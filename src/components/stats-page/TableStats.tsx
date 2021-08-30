interface TableStatsProps {
    pokemon: {
        type: string,
        height: string,
        weight: string
        abilitie: string
    }
}

import { formatName } from "../../functions/format"

export default function TableStats({pokemon}: TableStatsProps) {

    const clasTHead = `
    bg-red-500 border text-center 
    sm:px-10 sm:py-5 px-5 py-3
    text-white rounded-t-lg border-2 border-gray-400
    font-semibold border-b-0
    `
    const classTBody = `
    border
    sm:px-10 sm:py-5 px-4 py-2
    border-gray-400
    `

    return (
        <div className={`
            mx-10 my-5 

        `}>
            <div className={clasTHead}>
                Dados do Pokémon
            </div>
            <table className='table-auto'>
                <tbody>
                    <tr>
                        <td className={classTBody} >Tipo</td>
                        <td className={classTBody}>
                            {formatName(pokemon.type)}
                        </td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Altura</td>
                        <td className={classTBody}>
                            {`${pokemon.height} m`}
                        </td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Peso</td>
                        <td className={classTBody}>
                            {`${pokemon.weight} kg`}
                        </td>
                    </tr>
                    <tr>
                        <td className={classTBody}>Habilidade</td>
                        <td className={classTBody}>
                            {`${formatName(pokemon.abilitie)}`}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}