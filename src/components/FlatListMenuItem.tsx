import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {name, icon} = menuItem;

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name={icon} color="gray" size={20} />
        <Text style={styles.itemText}>{name}</Text>
        <View style={{flex: 1}} />
        <Icon name={'chevron-forward-outline'} color="gray" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  itemText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
});
