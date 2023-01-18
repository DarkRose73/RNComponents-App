import {View, Text, Button, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Open modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* background transparente */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido del modal */}
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Modal
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 20,
              }}>
              Cuerpo del Modal
            </Text>
            <Button title="close modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
