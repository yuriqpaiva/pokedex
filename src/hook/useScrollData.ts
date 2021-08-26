import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";


export const useScrollData = () => useContext(ScrollContext)