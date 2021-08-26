import { usePokemonData } from "../hook/usePokemonData"
import Input from "./Input"
import PokeList from "./PokeList"
import DeveloperMsg from '../components/DeveloperMsg'
import Skip from "./Skip"
import { useScrollData } from "../hook/useScrollData"

export default function Content() {

    const { search } = usePokemonData()
    const { executeScrollTop, executeScrollBottom } = useScrollData()

    return (
        <div className={`
        flex flex-col items-center 
        mt-3 w-full sm:px-20  py-5 rounded-lg shadow-sm 
        bg-white`}>
            <Skip  message='Ir para o final da página' direction='bottom'
                scrollFunc={executeScrollBottom}
            />
            <Input
                title='Pesquisar:'
                placeholder='Insira o nome do Pokémon'
                onChange={search}
            />
            <hr className={`w-3/4 mb-5 border-gray-300`}/>
            <PokeList />
            <hr className={`w-3/4 mt-5 border-gray-300`}/>
            <DeveloperMsg />
            <Skip message='Ir para o início da página' direction='top'
            scrollFunc={executeScrollTop}
            />
        </div>
    )
}