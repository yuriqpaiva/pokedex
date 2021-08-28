export default function TableStats() {

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
                        <td className={classTBody}>Tipo</td>
                        <td className={classTBody}>Mock</td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Altura</td>
                        <td className={classTBody}>Mock</td>

                    </tr>
                    <tr>
                        <td className={classTBody}>Peso</td>
                        <td className={classTBody}>Mock</td>
                    </tr>
                    <tr>
                        <td className={classTBody}>Região</td>
                        <td className={classTBody}>Mock</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}