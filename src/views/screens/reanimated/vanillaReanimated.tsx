import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const SIZE = 80.0;

// Creating Worklets that are unique JS func that can be called from UI thread
const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

function VanillaReanimated() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
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
  box: {
    width: 80,
    height: 80,
    margin: 50,
    borderRadius: 15,
    backgroundColor: '#001a72',
  },
});

export default VanillaReanimated;
