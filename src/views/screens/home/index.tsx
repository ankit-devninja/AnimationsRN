import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {SCREENS} from '../../../navigation/screens';

type Props = {
  navigation: any;
};

function Home(props: Props) {
  const {navigation} = props;
  return (
    <View>
      <Pressable onPress={() => navigation.navigate(SCREENS.REACT_NAVIGATION)}>
        <Text style={styles.mainText}> REACT NATIVE ANIMATION </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate(SCREENS.REANIMATED)}>
        <Text style={styles.mainText}> REANIMATED </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(SCREENS.REANIMATED_PANGESTURE)}>
        <Text style={styles.mainText}> REANIMATED: PAN GESTURE </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    backgroundColor: 'blue',
    margin: 20,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    padding: 20,
    borderRadius: 5,
  },
});

export default Home;
