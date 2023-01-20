import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {isActive, isHappy, isHungry} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          Is Active
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          Is Hungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          Is Happy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
