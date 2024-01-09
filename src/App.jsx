import EmpleadoList from "./Components/EmpleadoList"
import { CssVarsProvider } from '@mui/joy/styles';
import ToggleTheme from "./Components/toggleTheme";


function App() {



  return (
    <>
    <CssVarsProvider>

      <div className="m-5 flex flex-col gap-3 max-w-[25%]">
        <h1 className="text-center">Welcome to our page!</h1>
        <ToggleTheme/>
        <EmpleadoList/>
      </div>
      </CssVarsProvider>
    </>
  )
}

export default App
