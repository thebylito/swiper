import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={['1', '2']}
          renderCard={(CardE) => {
            return (
              <View style={styles.card}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Spread Calculator
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 50,
                      justifyContent: 'space-around',
                    }}
                  >
                    <Text>Nome da formula</Text>
                    <View>
                      <Text>Lucro</Text>
                      <Text>%</Text>
                    </View>
                  </View>
                  <Text style={{ marginTop: 60, marginLeft: 60 }}>
                    Swipe Left
                  </Text>
                </View>
              </View>
            );
          }}
          infinite
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}
        >
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
