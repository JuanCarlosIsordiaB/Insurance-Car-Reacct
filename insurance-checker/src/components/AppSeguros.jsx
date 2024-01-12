

import { useGlobalState } from '../hooks/useGlobalState'
import { Formualrio } from './Formualrio'
import { Resultado } from './Resultado';
import { Spinner } from './Spinner';


export const AppSeguros = () => {

  const {resultado, cargando } = useGlobalState();
  
  return (
    <>
      <header className='my-10'>
        
        <h1 className='text-white text-center text-4xl font-black'>Car Insurance Checker</h1>
      </header>
       <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-md p-10'>
            
        <Formualrio />
        {
          cargando  
            ? <div className='text-center'><Spinner /> </div>
            : <Resultado resultado={resultado} />
        }
      </main>
    </>
  )
}
