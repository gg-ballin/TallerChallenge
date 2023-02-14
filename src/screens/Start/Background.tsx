import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MenuBtn from '../../components/MenuBtn';
import {isAndroid, IS_X} from '../../utils/constants';
import { scale } from '../../utils/scale';

interface Props {
  navigation?: any;
}
const Background = ({navigation}: Props) => {
  return (
    <View style={styles.containerBckgrnd}>
      <View style={styles.separator} />
      <Text style={styles.title}>Beka</Text>
      <MenuBtn title="Start" onPress={() => {}} selected={true} />
      <MenuBtn
        title="Your cart (Home)"
        onPress={() => navigation.navigate('Home')}
        selected={false}
      />
      <MenuBtn
        title="Favourites (Contact)"
        onPress={() => navigation.navigate('Contacts')}
        selected={false}
      />
      <MenuBtn title="Your orders" onPress={() => {}} selected={false} />
      <View style={styles.grayLine} />
      <MenuBtn title="Sign Out" onPress={() => {}} selected={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerBckgrnd: {
    height: '80%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: isAndroid ? '40%' : '50%',
  },
  separator: {height: IS_X ? 35 : 20},
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: scale(23),
    marginBottom: 40,
  },
  grayLine: {
    width: '80%',
    alignSelf: 'center',
    height: 1,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: 'gray',
  },
});
export default Background;

// Start, your cart, favourites, your orders, sign out
