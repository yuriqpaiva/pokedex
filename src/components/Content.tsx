import { usePokemonData } from "../hook/usePokemonData"
import Input from "./Input"
import PokeList from "./PokeList"

export default function Content() {

    const {search} = usePokemonData()

    return (
        <div className={`
        flex flex-col items-center min-h-screen 
        mt-5 w-full sm:px-20 px-10 py-5 rounded-lg shadow-sm 
        bg-white`}>
            <Input
                title='Pesquisar:'
                placeholder='Insira o nome do Pokémon'
                onChange={search}
            />
            <PokeList />
        </div>
    )
}