import React from 'react'

interface SkipProps {
    message: string
    scrollFunc: () => void
    className: string
}

export default function Skip({ message, className, scrollFunc}: SkipProps) {

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
                    ${className}
                `}
                onClick={scrollFunc}
                >
                {message}
            </a>
        </div>
    )
}