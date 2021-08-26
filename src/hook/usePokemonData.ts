import { useContext } from "react";
import { PokeDataContext } from "../context/PokeContext";

export const usePokemonData = () => useContext(PokeDataContext)