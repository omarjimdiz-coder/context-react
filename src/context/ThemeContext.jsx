import { createContext, useState } from "react";

//Creamos el contexto
const ThemeContext = createContext();

//Función del proveedor 
//Se pasa toda la lógica 
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const handleTheme = (e) => {
        if(e.target.value === 'light'){
        setTheme("light");
        }else{
        setTheme("dark");
        }
    }

    const data = {theme, handleTheme}

    return(
        <ThemeContext.Provider
            value={data}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;