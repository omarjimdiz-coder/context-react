import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LenguajeContext from "../context/LenguajeContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {

    const {theme, handleTheme} = useContext(ThemeContext);
    const {texts, handleLanguaje} = useContext(LenguajeContext);
    const {auth, handleAuth} = useContext(AuthContext);

  return (
    <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <hr />
        <h3>{texts.headerSubtitle}</h3>
        <select name="lenguaje" onChange={handleLanguaje}>
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
        <input 
            type="radio"
            name="theme"
            id="light-context"
            onClick={handleTheme}
            value="light"
        />
        <label htmlFor="light-context">{texts.headerLight}</label>
        <input 
            type="radio"
            name="theme"
            id="dark-context"
            onClick={handleTheme}
            value="dark"
        />
        <label htmlFor="dark-context">{texts.headerDark}</label>
        <button onClick={handleAuth}>
            {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
    </header>
  )
}

export default HeaderContext