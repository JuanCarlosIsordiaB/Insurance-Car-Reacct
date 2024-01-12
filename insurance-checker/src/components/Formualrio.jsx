

import React, { Fragment, useContext } from 'react'
import { PLANS, YEARS, marcas } from '../constants'
import { Context } from '../context/GlobalProvider';
import { useGlobalState } from '../hooks/useGlobalState';




export const Formualrio = () => {

   const {error, handleSubmit,inputValue, handleChangeDatos} = useGlobalState();
   

  
    
  return (
    <>
        <form 
            action=""
            className='text-center'
            onSubmit={handleSubmit}
        >
            {
                error && (
                    <p className='bg-red-400 py-3 rounded-md text-white font-bold'>ERROR - All fields are required</p>
                )
            }
           
            
            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>
                    Brand 
                </label>
                <select 
                    name="marca" 
                    id="marca" 
                    className='w-full bg-white border-gray-200'
                    onChange={handleChangeDatos}
                    value={inputValue.marca}
                >
                    <option value="" className='text-center ' disabled>--- Select the brand ---</option>
                    {
                        marcas.map(marca => 
                            <option 
                                className='text-center'
                                key={marca.id}
                                value={marca.id}
                            >{marca.name}</option>
                        )
                    }
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="year" className='block mb-3 font-bold text-gray-400 uppercase'>
                    Year 
                </label>
                <select 
                    name="year" 
                    id="year" 
                    className='w-full bg-white border-gray-200'
                    onChange={(e)=>handleChangeDatos(e)} 
                    value={inputValue.year}  
                >
                    <option value="" className='text-center' disabled>--- Select the year ---</option>
                    {
                        YEARS.map(year => 
                            <option 
                                className='text-center'
                                key={year}
                                value={year}
                            >{year}</option>
                        )
                    }
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>
                   Choose a Plan 
                </label>
                <div className='flex gap-3 justify-center '>
                    {
                        PLANS.map(plan => 
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.name}
                                </label>
                                <input 
                                    type="radio"
                                    name='plan'
                                    value={plan.id}
                                    onChange={(e)=>handleChangeDatos(e)}
                                    
                                 />
                            </Fragment>
                        )
                    }
                </div>
            </div>
            <input
                type="submit" 
                className='w-full bg-indigo-400 py-2 rounded uppercase font-bold text-white text-xl hover:bg-indigo-900 transition-all cursor-pointer'
            />
        </form>
    </>
  )
}
