import { useContext } from "react";
import { PokeDataContext } from "../contexts/PokeContext";

export const usePokemonData = () => useContext(PokeDataContext)