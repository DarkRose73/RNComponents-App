import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {fadeIn, fadeOut, startMovingPosition, opacity, position} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          marginBottom: 20,
          transform: [{translateY: position}],
          backgroundColor: colors.primary,
        }}
      />

      <Button
        title="Fade In"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <View style={{marginTop: 20}} />
      <Button title="Fade Out" onPress={fadeOut} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
