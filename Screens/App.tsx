import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ColorDetailsScreen from './ColorDetailsScreen';
import FavouriteScreen from './FavouriteScreen';
import UserContextProvider from '../Context/UserContextProvider';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ColorDetailsScreen" component={ColorDetailsScreen} />
          <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContextProvider>
  );
}

export default App;
