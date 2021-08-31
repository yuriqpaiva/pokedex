import Image from 'next/image'

export default function LoadingImg() {
    return (
        <div>
            <h3 className='sm:text-xl text-base'>Obtendo dados da Pokedéx...</h3>
            <div className={`
                    rounded-xl
                    w-80 h-64
                    sm:w-96 sm:h-80
                `}>
                <Image
                src="/images/loading.gif"
                alt=""
                width='384' height='320'
                />
            </div>
        </div>
    )
}