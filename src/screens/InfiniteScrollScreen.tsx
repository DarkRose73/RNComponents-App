import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';
import {FadeInImage} from '../components/FadeInImage';
import {styles} from '../theme/AppTheme';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
      // <Image
      //   source={{
      //     uri: `https://picsum.photos/id/${item}/500/400`,
      //   }}
      //   style={{
      //     width: '100%',
      //     height: 400,
      //   }}
      // />
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={styles.globalMargin}>
            <HeaderTitle title="Infinite scroll" />
          </View>
        )}
        // Al momento de llegar al fondo se dispara esta funcion
        onEndReached={loadMore}
        // Threshold para disparar la funcion de onEndReached
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                height: 75,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <ActivityIndicator size={25} color="#5856D6" />
            </View>
          );
        }}
      />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});

export default InfiniteScrollScreen;
