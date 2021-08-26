import Image from 'next/image'
import pokeball from '../../public/images/icone.svg'

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className={`
            flex flex-col justify-center
            w-full text-center py-10 rounded-lg text-5xl
            bg-white shadow-md
        `}
            
        >
            <div className={'flex justify-center'}>
                <Image src={pokeball}
                alt="Pokeball"
                width='42'
                height='42'
                />
                <h1 className='mx-3'>{props.title}</h1>
            </div>
            <p className={`text-base mt-1`}>{props.subtitle}</p>
        </div>
    )
}