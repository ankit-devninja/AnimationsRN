import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const SIZE = 100;

type ContextType = {
  translateX: number;
  translateY: number;
};

function ReanimatedPanGesture() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      console.log('EVENT', event);
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      translateX.value = 0;
      translateY.value = 0;
    },
  });

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.square, rStyles]} />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  square: {
    width: SIZE,
    height: SIZE,
    borderRadius: 15,
    backgroundColor: '#001a72',
  },
});

export default ReanimatedPanGesture;
