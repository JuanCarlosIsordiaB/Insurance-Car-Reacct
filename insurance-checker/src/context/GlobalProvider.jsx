import { createContext, useContext, useState } from "react"
import { calcularMarca, obtenerDiferenciaYear ,calcularPlan, formatearDinero} from "../helpers";

export const Context = createContext();

export const GlobalProvider = ({children}) => {

    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);
    const [inputValue, setInputValue] = useState({
        marca : '',
        year: '',
        plan: ''
    })

    const handleChangeDatos = e => {
        setInputValue({
         ...inputValue,
         [e.target.name]: e.target.value
        })
        setError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.marca === '' || inputValue.year === '' || inputValue.plan === '') {
            setError(true);
            return;
        }

        cotizarSeguro(inputValue);
    }

    const cotizarSeguro = (datos) => {
        //base
        let resultado  = 2000;

        const diferencia = obtenerDiferenciaYear(datos.year);

        resultado -= ((diferencia * 3 )* resultado ) / 100;

        resultado *= calcularMarca(datos.marca);


        resultado *= calcularPlan(datos.plan);

        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
        

    }


  return (
    <Context.Provider value={{
        handleChangeDatos,
        inputValue,
        handleSubmit,
        error,
        cotizarSeguro,
        resultado,
        cargando
    }}>
        {children}
    </Context.Provider>

  )
}
