import {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeState, themeReducer, lightTheme, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  // Aplicar tema en base al tema del dispositivo
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );
  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('SetDarkTheme');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('SetLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        setLightTheme,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
