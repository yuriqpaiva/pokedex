import { usePokemonData } from "../hooks/usePokemonData"
import DeveloperMsg from '../components/DeveloperMsg'
import Skip from "./Skip"
import { useScrollData } from "../hooks/useScrollData"

export default function Content(props) {

    const { showShortcut } = usePokemonData()
    const { executeScrollTop, executeScrollBottom } = useScrollData()

    const classShortcut = showShortcut
        // if
        ? `
    text-green-500 font-semibold
    hover:text-green-400
    cursor-pointer 
    text-base 
    `
        // else
        : `
    text-gray-300  font-semibold
    cursor-default 
    `

    return (
        <div className={`
        flex flex-col items-center 
        mt-3 w-full sm:px-20  py-5 rounded-lg shadow-md
        bg-white`}>
            {props.skip ? (
                <Skip message='Ir para o final da página'
                scrollFunc={executeScrollBottom} className={classShortcut}
            />
            ): false}
            
            {props.children}
            <DeveloperMsg />

            {props.skip ? (
            <Skip message='Ir para o topo da página'
                scrollFunc={executeScrollTop} className={classShortcut}
            />
            ): false}
        </div>
    )
}