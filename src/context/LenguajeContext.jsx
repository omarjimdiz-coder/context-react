import { createContext, useState } from "react";

const LenguajeContext = createContext();

const translations = {
    es:{
      headerTitle: "Mi aplicación CON Context Api",
      headerSubtitle: "Mi cabecera",
      headerLight: "Claro",
      headerDark: "Oscuro",
      buttonLogin: "Iniciar Sesión",
      buttonLogout: "Cerrar Sesión",
      mainWelcome: "Bienvenido Invitado",
      mainHello: "Hola usuario",
      mainContent: "Mi contenido principal",
      footerTitle: "Mi pie de página"
    },
    en: {
      headerTitle: "My application WITH Context Api",
      headerSubtitle: "My Header",
      headerLight: "Sure",
      headerDark: "Dark",
      buttonLogin: "Login",
      buttonLogout: "Logout",
      mainWelcome: "Welcome",
      mainHello: "Hello user",
      mainContent: "My main content",
      footerTitle: "My footer"
    }
}

const LenguajeProvider = ({children}) => {
    
  const [lenguaje, setLenguaje] = useState("es");
  const [texts, setTexts] = useState(translations[lenguaje]);

  const handleLanguaje = (e) => {
    if(e.target.value === 'es'){
      setLenguaje("es");
      setTexts(translations.es);
    }else{
      setLenguaje("en");
      setTexts(translations.en);
    }
  }

  const data = {texts, handleLanguaje};
    
    return(
        <LenguajeContext.Provider
            value={data}
        >
            {children}
        </LenguajeContext.Provider>
    )
}


export {LenguajeProvider};
export default LenguajeContext;