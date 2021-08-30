import { createContext } from "react";
import useHomePage from "../hooks/useHomePage";

interface PokemonContext {
    pokemons?: [any]
    search?: (name: string) => void
    loading?: boolean
    showAll?: boolean
    setShowAll?: (value: boolean) => void
    showShortcut?: boolean,
    setShowShortcut?: (value: boolean) => void,
    resetPageState?: () => void
}

export const PokeDataContext = createContext<PokemonContext>({})

interface PokemonDataProps {
    children: any
}

export default function PokemonData(props: PokemonDataProps) {

    const {
        pokemons, search, loading, showAll, setShowAll,
        showShortcut, setShowShortcut, resetPageState
    } = useHomePage()

    return (
        <PokeDataContext.Provider value={{
            pokemons,
            search,
            loading,
            showAll,
            setShowAll,
            showShortcut,
            setShowShortcut,
            resetPageState
        }}>
            {props.children}
        </PokeDataContext.Provider>
    )
}