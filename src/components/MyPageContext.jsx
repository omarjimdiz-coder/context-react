import { AuthProvider } from '../context/AuthContext';
import { LenguajeProvider } from '../context/LenguajeContext';
import { ThemeProvider } from '../context/ThemeContext';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';

const MyPageContext = () => {

  return (
    <div className='my-page'>
      <ThemeProvider>
        <LenguajeProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext/>
          </AuthProvider>

          <FooterContext />
          
        </LenguajeProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyPageContext