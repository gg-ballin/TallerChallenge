import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Dimensions,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BurgerMenuBtn from '../../components/BurgerMenuBtn';

interface Props {
  navigation?: any;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;

const Start = ({navigation}: Props) => {
  const translateX = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: () => {
      if (translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 55],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [
        {perspective: 100},
        {
          translateX: translateX.value,
        },
        {
          rotateY: `${rotate}deg`,
        },
      ],
    };
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle={'light-content'} backgroundColor={'#1e1e23'} />
      <View style={styles.containerBckgrnd}>
        
        <Text>HOLA</Text>
      </View>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.animatedView, rStyle]}>
          <View style={styles.containerTitle}>
            <BurgerMenuBtn
              onPress={() => {
                if (translateX.value <= THRESHOLD) {
                  translateX.value = withTiming(SCREEN_WIDTH / 2);
                } else {
                  translateX.value = withTiming(0);
                }
              }}
            />
            <Text style={{color: 'gray', fontSize: 20}}>START</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e23',
  },
  containerBckgrnd: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'red',
    marginTop: 50,
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
export default Start;
