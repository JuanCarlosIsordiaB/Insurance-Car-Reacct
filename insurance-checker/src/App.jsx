import { AppSeguros } from "./components/AppSeguros"
import {GlobalProvider} from "./context/GlobalProvider"


const App = () => {
  return (
    <GlobalProvider>
      <AppSeguros />
    </GlobalProvider>
    
  )
}

export default App