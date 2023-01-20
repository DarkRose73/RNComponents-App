import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useContext} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
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
          progressBackgroundColor={colors.text}
          // Ciclo de colores del circular progress indicator
          colors={[colors.background]}
          // SOLO IOS
          style={{backgroundColor: 'blue'}}
          tintColor={dark ? 'white' : 'black'}
          title="Refreshing"
          titleColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
