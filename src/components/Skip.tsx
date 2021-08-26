import React from 'react'
import { useScrollData } from '../hook/useScrollData'

interface SkipProps {
    message: string
    direction: string
    scrollFunc: () => void
}

export default function Skip({ message, direction, scrollFunc}: SkipProps) {

    // const handleClick = (e) => {
    //     e.stopPropagation()
    //     e.preventDefault()
    //     direction === 'bottom' ? 
    //      window.scroll({left: 0,top: document.body.scrollHeight, behavior: 'smooth'})
    //     : window.scroll({top: 0,left: 0, behavior: 'smooth'});
    // }

    return (
        <div className={`
            mb-5        
        `}>
            <a
                className={`
                    text-red-500 font-semibold
                    hover:text-red-400
                    cursor-pointer
                `}
                onClick={scrollFunc}
                >
                {message}
            </a>
        </div>
    )
}