import {View, Button, Alert} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const showPrompt = () => {
    // SOLO en IOS
    // Alert.prompt(
    //   'Prompt Title',
    //   'Promt message',
    //   (value: string) => console.log(`info: ${value}`),
    //   'default',
    //   'Hello world',
    //   'number-pad',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show prompt" onPress={showPrompt} />
    </View>
  );
};
