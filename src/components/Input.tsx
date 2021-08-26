interface InputProps {
    title: string
    placeholder: string
    onChange: (value: string) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`
            flex 
        `}>
            <label className={`
                sm:text-base text-sm
            `}>
                {props.title}
            </label>
            <input
                type="text"
                placeholder={props.placeholder}
                className={`
                    border-2 rounded-sm
                    mb-5 ml-1 w-60 
                    sm:text-base text-sm
                    outline-none
                    border-gray-300
                    focus:border-red-300
                `}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}