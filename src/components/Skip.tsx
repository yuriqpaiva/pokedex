import React from 'react'
import { useScrollData } from '../hook/useScrollData'

interface SkipProps {
    message: string
    direction: string
    scrollFunc: () => void
}

export default function Skip({ message, direction, scrollFunc}: SkipProps) {

    const handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        direction === 'bottom' ? 
         window.scroll(0,document.body.scrollHeight)
        : window.scroll(0, 0);
    }

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