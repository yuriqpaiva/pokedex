// interface TableStatsProps {
//     pokemon:
// }

import { formatName } from "../../functions/format"

export default function TableStats(props) {

    const clasTHead = `
    bg-red-500 border text-center px-10 py-5 
    text-white rounded-t-lg border-2 border-gray-400
    font-semibold border-b-0
    `
    const classTBody = `
    border px-10 py-5
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
                            {formatName(props.pokemon.type)}
                        </td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Altura</td>
                        <td className={classTBody}>
                            {`${props.pokemon.height} m`}
                        </td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Peso</td>
                        <td className={classTBody}>
                            {`${props.pokemon.weight} kg`}
                        </td>
                    </tr>
                    <tr>
                        <td className={classTBody}>Habilidade</td>
                        <td className={classTBody}>
                            {`${formatName(props.pokemon.abilitie)}`}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}