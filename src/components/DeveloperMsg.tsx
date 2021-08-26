import { useScrollData } from "../hook/useScrollData"

export default function DeveloperMsg() {

    const {refBottom} = useScrollData()

    return (
        <div className='my-5' ref={refBottom}>
            <p>
                @2021 - Desenvolvido por
                <a
                    className={`
                    
                ml-1
                text-blue-800 font-semibold 
                hover:text-blue-500 bottom
                `}
                    id='bottom'
                    href="https://github.com/yuriqpaiva"
                    rel='noreferrer'
                    target='_blank'
                >
                    yuriqpaiva
                </a>
            </p>
        </div>
    )
}