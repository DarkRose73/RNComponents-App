import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
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
        }}
      />

      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <View style={{marginTop: 20}} />
      <Button title="Fade Out" onPress={fadeOut} />
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
