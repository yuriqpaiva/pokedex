import { usePokemonData } from "../hook/usePokemonData"
import Input from "./Input"
import PokeList from "./PokeList"

export default function Content() {

    const {search} = usePokemonData()

    return (
        <div className={`
        flex flex-col items-center min-h-screen 
        mt-3 w-full sm:px-20  py-5 rounded-lg shadow-sm 
        bg-white`}>
            <Input
                title='Pesquisar:'
                placeholder='Insira o nome do Pokémon'
                onChange={search}
            />
            <hr className={`w-3/4 mb-5 border-gray-300`}/>
            <PokeList />
            <hr className={`w-3/4 mt-5 border-gray-300`}/>
        </div>
    )
}