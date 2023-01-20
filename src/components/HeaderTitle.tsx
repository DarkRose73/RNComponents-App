import {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/AppTheme';

interface Props {
  title: string;
  marginBottom?: number;
}

export const HeaderTitle = ({title, marginBottom = 20}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20, marginBottom: marginBottom}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
