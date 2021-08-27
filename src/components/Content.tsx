import { usePokemonData } from "../hook/usePokemonData"
import Input from "./Input"
import PokeList from "./PokeList"
import DeveloperMsg from '../components/DeveloperMsg'
import Skip from "./Skip"
import { useScrollData } from "../hook/useScrollData"
import Button from "./Button"

export default function Content() {

    const { search, setShowAll, showAll, showShortcut } = usePokemonData()
    const { executeScrollTop, executeScrollBottom } = useScrollData()

    const classShortcut = showShortcut
        // if
        ? `
    text-green-500 font-semibold
    hover:text-green-400
    cursor-pointer 
    sm:text-base text-xs 
    `
        // else
        : `
    text-gray-300  font-semibold
    cursor-default 
    `

    return (
        <div className={`
        flex flex-col items-center 
        mt-3 w-full sm:px-20  py-5 rounded-lg shadow-sm 
        bg-white`}>
            <Skip message='Ir para o final da página'
                scrollFunc={executeScrollBottom} className={classShortcut}
            />
            <Input
                title='Pesquisar:'
                placeholder='Insira o nome do Pokémon'
                onChange={search}
            />
            <hr className={`w-3/4 mb-5 border-gray-300`} />
            <PokeList />
            {showAll ? false : (
                <Button label='Mostrar Mais' onClick={setShowAll} />
            )}
            <hr className={`w-3/4 mt-5 border-gray-300`} />
            <DeveloperMsg />

            <Skip message='Ir para o início da página'
                scrollFunc={executeScrollTop} className={classShortcut}
            />
        </div>
    )
}