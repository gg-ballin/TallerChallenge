import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation?: any;
}
const Contact = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>HOLAAA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
});

export default Contact;
