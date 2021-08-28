interface LineProps {
    className: string
}

export default function Line({className}: LineProps) {
    return (
        <>
            <hr className={`w-3/4 border-gray-300 ${className}`} />
        </>
    )
}