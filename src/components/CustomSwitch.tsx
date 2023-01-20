import {View, Text, Switch, Platform} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View>
      <Switch
        // En android es necesario trackColor para que no se vea invisible el switch
        trackColor={{false: '#D9D9DD', true: colors.primary}}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
