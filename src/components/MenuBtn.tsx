import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { scale } from '../utils/scale';

interface Props {
  title: string;
  selected: boolean;
  onPress: () => void;
}
const MenuBtn = ({title, onPress, selected}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={selected ? styles.containerSelected : {}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  containerSelected: {
    alignItems: 'flex-start',
    backgroundColor: '#F4795E',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: scale(15),
    textAlign: 'left',
  },
});
export default MenuBtn;
