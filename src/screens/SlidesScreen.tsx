import {
  View,
  Text,
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useContext} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Title 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Title 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Title 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const {opacity, fadeIn} = useAnimation();
  const {navigate} = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const updateIndex = (index: number) => {
    setActiveIndex(index);
    if (index === items.length - 1) {
      setShowButton(true);
      fadeIn();
    }
  };

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{...styles.title, color: colors.text}}>{item.title}</Text>
        <Text style={{...styles.subTitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          updateIndex(index);
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        {showButton && (
          <Animated.View
            style={{
              opacity: opacity,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                width: 150,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}
              onPress={() => {
                navigate('Home' as never);
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                }}>
                Home
              </Text>

              <Icon name="chevron-forward-outline" color={'white'} size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
