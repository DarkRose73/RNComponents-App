import {View, Text, SectionList} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ItemSeparator} from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        // DATA
        sections={casas}
        // Mantener los sectionHeader pegados al hacer scroll
        stickySectionHeadersEnabled
        keyExtractor={(item, index) => item + index}
        // Renderizar secciones de la lista
        // Esto se renderiza por cada seccion de la data
        renderItem={({item, index}) => {
          return <Text>{item}</Text>;
        }}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} marginBottom={5} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle
            title={`Total: ${section.data.length}`}
            marginBottom={0}
          />
        )}
        // Header y Footer del elemento completo
        ListHeaderComponent={() => (
          <HeaderTitle title="Section list" marginBottom={5} />
        )}
        ListFooterComponent={() => (
          <HeaderTitle
            title={`Total de casas: ${casas.length}`}
            marginBottom={40}
          />
        )}
        // Separadores o Dividers
        // Separa por cada item
        ItemSeparatorComponent={() => <ItemSeparator />}
        // Separa por cada seccion
        SectionSeparatorComponent={() => <ItemSeparator />}
        // Ocultar el indicador del scroll
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
