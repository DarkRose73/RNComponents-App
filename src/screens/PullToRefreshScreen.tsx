import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useState} from 'react';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('End');
      setRefreshing(false);
      setData('Hello world');
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          // Color del circular progress indicator
          progressBackgroundColor="#5856D6"
          // Ciclo de colores del circular progress indicator
          colors={['white', 'red', 'orange']}
          // SOLO IOS
          style={{backgroundColor: 'blue'}}
          tintColor="white"
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
