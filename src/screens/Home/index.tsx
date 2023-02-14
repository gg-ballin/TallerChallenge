import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  navigation: any;
}

const Home = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#1e1e23'}} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Text style={{color: 'white'}}>HOME</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: 10,
    left: 15,
    borderWidth: 1,
    width: '25%',
    marginLeft: 10,
    // marginTop: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
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

export default Home;
