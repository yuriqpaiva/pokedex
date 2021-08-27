interface InputProps {
    title: string
    placeholder: string
    onChange: (value: string) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`
            flex items-baseline
        `}>
            <label className={`
                sm:text-base text-sm
                text-gray-600
            `}>
                {props.title}
            </label>
            <input
                type="text"
                placeholder={props.placeholder}
                className={`
                    border-2 rounded-sm
                    mb-5 ml-1 
                    sm:text-base text-sm
                    sm:w-60 w-48
                    hover:shadow-sm
                    outline-none
                    border-gray-300
                    focus:border-red-300
                    text-gray-600
                `}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}