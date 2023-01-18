import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';

interface Props {
  title: string;
  marginBottom?: number;
}

export const HeaderTitle = ({title, marginBottom = 20}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: marginBottom}}>
      <Text style={{...styles.title, color: '#5856D6'}}>{title}</Text>
    </View>
  );
};
