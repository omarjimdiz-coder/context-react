import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LenguajeContext from "../context/LenguajeContext";
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {

  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LenguajeContext);
  const {auth} = useContext(AuthContext);

  return (
    <main className={theme}>
        {auth ? <p>{texts.mainHello}</p> :  <p>{texts.mainWelcome}</p>}        
        <p>{texts.mainContent}</p>
    </main>
  )
}

export default MainContext