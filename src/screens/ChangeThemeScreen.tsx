import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);

  const switchTheme = () => {
    currentTheme === 'dark' ? setLightTheme() : setDarkTheme();
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Themes" />
      <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity
          onPress={switchTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Light / Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
