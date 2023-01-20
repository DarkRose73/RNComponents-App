import {
  View,
  Text,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, {useContext} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
          }}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoad={() => {
          finishLoading();
        }}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
