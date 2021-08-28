interface ButtonProps {
    label: string
    onClick: (value: boolean) => void 
    className?: string
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            bg-red-500 text-white
            sm:p-3 sm:text-base  
            p-2 text-sm font-semibold
            rounded-lg shadow-md 
            hover:shadow-none 
            ${props.className}
        `}
        onClick={() => props.onClick(true)}
        >
            {props.label}
        </button>
    )
}