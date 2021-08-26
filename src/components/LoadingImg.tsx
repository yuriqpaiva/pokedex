/* eslint-disable @next/next/no-img-element */
export default function LoadingImg() {
    return (
        <div>
            <h3 className='text-xl'>Obtendo dados da Pokedéx...</h3>
            <img 
            src="images/loading.gif" 
            alt="" 
            className={`
                rounded-xl
                w-72 h-64
                sm:w-96 sm:h-80
            `}
            />
        </div>
    )
}