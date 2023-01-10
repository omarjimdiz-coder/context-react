import { useContext } from "react";
import LenguajeContext from "../context/LenguajeContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {

  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LenguajeContext);

  return (
    <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext