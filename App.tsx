import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// Creacion de un custom theme
// const customTheme: Theme = {
// propiedad para evaluar si es tema oscuro o no
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
// Propiedades necesarias de los colors

// primary: string;
// background: 'grey',
// card: string;
// text: string;
// border: string;
// notification: string;
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
