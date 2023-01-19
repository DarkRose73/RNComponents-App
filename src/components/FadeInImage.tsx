import {View, Text, Animated, ActivityIndicator} from 'react-native';
import React from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';

interface Props {
  uri: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

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
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoad={() => {
          finishLoading();
        }}
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>
  );
};
