import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/screens/home';
import { SCREENS } from './src/navigation/screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.HOME} component={Home} />
        <Stack.Screen name={SCREENS.REACT_NAVIGATION} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
