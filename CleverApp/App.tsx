import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/Home';
import LoginScreen from './src/views/login/Login';

export type RootStackParamList = {
  LoginScreen: undefined,
  HomeScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{title: 'Login'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: 'Juega conmigo'}}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;