import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface BurgerMenuBtnProps {
  onPress: () => void;
}

const BurgerMenuBtn = ({onPress}: BurgerMenuBtnProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.grayLine} />
      <View style={styles.grayLine} />
      <View style={styles.grayLine} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  grayLine: {
    width: 30,
    height: 1,
    backgroundColor: 'gray',
  },
});

export default BurgerMenuBtn;
