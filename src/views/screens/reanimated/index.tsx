import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

function ReactNativeReanimated() {
  const progress = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0, {duration: 5000});
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

export default ReactNativeReanimated;
