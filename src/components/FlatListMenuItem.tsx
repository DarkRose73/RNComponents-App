import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {name, icon, component} = menuItem;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={20} />
        <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>
        <View style={{flex: 1}} />
        <Icon
          name={'chevron-forward-outline'}
          color={colors.primary}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  itemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
