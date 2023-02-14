import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e23',
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

export default Home;
