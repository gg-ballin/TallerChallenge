import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  navigation?: any;
}
const Contact = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.btn}>
          <Text>Go back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>CONTACTS</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    width: '25%',
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Contact;
