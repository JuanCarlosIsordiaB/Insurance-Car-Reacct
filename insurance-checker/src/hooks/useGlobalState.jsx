import { useContext } from "react";
import { Context } from "../context/GlobalProvider";


export const useGlobalState = () => {
    const data = useContext(Context);
    return data
}