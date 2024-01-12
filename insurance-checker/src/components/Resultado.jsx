



import {useCallback, useMemo, useRef} from 'react'
import { useGlobalState } from '../hooks/useGlobalState';
import { marcas, PLANS } from '../constants/index'

export const Resultado = () => {

    const {resultado,inputValue} = useGlobalState();
    const {marca,plan,year} = inputValue;
    const yearRef = useRef(year);

    const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca) ), [resultado]) ;
    const [nombrePlan] = useCallback(PLANS.filter(p => p.id === Number(plan) ), [resultado]) ;

    if(resultado === 0) return null;

  return (
    <div className='bg-gray-100 text-centeer mt-5 p-5 shadow'>
        <p className='my-2 text-center'>
            <span className='font-bold'>Summary: </span>
            
        </p>
        <p className='my-2 text-center'>
            <span className='font-bold'>Brand: </span>
            {nombreMarca.name}
        </p>
        <p className='my-2 text-center'>
            <span className='font-bold'>Plan: </span>
            {nombrePlan.name}
        </p>
        <p className='my-2 text-center'>
            <span className='font-bold'>Year of the car: </span>
            {yearRef.current}
        </p>
        <h2 className='text-gray-500 font-black text-3xl text-center'>
            Final price: <span className='font-semibold'>{resultado}</span>
        </h2>  
    </div>
  )
}
