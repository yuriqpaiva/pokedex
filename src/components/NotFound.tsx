/* eslint-disable @next/next/no-img-element */
import { pikachuImg } from "../../public/images/pikachuImg";
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className={`
                    flex flex-col items-center
                    
                `}>
            <h2 className={`
                text-red-700 text-xl font-semibold
            `}>Ops!</h2>
            <div className={`
                                sm:h-56 sm:w-56
                                h-40 w-40
                                mt-5
                            `}>
                <Image
                    src='/images/error.png'
                    alt=""
                    width='224' height='224'
                />
            </div>
            <p className='text-red-700 mt-5 '>Não conseguimos achar seu Pokémon</p>
        </div>
    )
}