import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: dividerColor,
        marginVertical: 8,
      }}
    />
  );
};
