import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const translations = {
  es:{
    headerTitle: "Mi aplicación SIN Context Api",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Ocuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenido Invitado",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de página"
  },
  en: {
    headerTitle: "My application WITHOUT Context Api",
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

const MyPage = () => {
  
  const [theme, setTheme] = useState("light");
  const [lenguaje, setLenguaje] = useState("es");
  const [texts, setTexts] = useState(translations[lenguaje]);
  const [auth, setAuth] = useState(null);

  const handleTheme = (e) => {
    if(e.target.value === 'light'){
      setTheme("light");
    }else{
      setTheme("dark");
    }
  }

  const handleLanguaje = (e) => {
    if(e.target.value === 'es'){
      setLenguaje("es");
      setTexts(translations.es);
    }else{
      setLenguaje("en");
      setTexts(translations.en);
    }
  }

  const handleAuth = (e) => {
    if(auth){
      setAuth(null)
    }else{
      setAuth(true);
    }
  }

  return (
    <div className='my-page'>
        <Header 
          theme={theme}
          handleTheme={handleTheme}
          texts={texts}
          handleLanguaje={handleLanguaje}
          auth={auth}
          handleAuth={handleAuth}
        />
        <Main 
          theme={theme}
          texts={texts}
          auth={auth}
        />
        <Footer 
          theme={theme}
          texts={texts}
        />
    </div>
  )
}

export default MyPage