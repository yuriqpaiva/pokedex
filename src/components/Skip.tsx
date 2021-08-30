import React from 'react'

interface SkipProps {
    message: string
    scrollFunc: () => void
    className: string
}

export default function Skip({ message, className, scrollFunc}: SkipProps) {
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