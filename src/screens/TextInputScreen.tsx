import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {isSubscribed, form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Phone"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

            {/* Ejemplo */}
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <View style={{height: 30}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
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
