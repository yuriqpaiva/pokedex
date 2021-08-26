import React from 'react'

interface SkipProps {
    message: string
    direction: string
}

export default function Skip({ message, direction }: SkipProps) {''

    const myRef = React.createRef()

    const handleClick = (e, ref) => {
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
                onClick={(e) => handleClick(e, myRef)}
                
                >
                {message}
            </a>
        </div>
    )
}