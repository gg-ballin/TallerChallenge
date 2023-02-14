import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Screen_2 = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Second screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Screen_2;
