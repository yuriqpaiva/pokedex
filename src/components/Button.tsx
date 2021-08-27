interface ButtonProps {
    label: string
    onClick: (value: boolean) => void 
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            bg-red-500 text-white
            sm:p-3 sm:text-base  
            p-2 text-sm
            rounded-lg mt-5 shadow-lg border-2
            hover:shadow-none border-gray-300
        `}
        onClick={() => props.onClick(true)}
        >
            {props.label}
        </button>
    )
}