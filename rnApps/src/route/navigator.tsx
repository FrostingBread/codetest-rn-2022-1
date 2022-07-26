import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import * as React from 'react';
import HomeScreen from '../screen/home/home';
import LoginScreen from '../screen/login/login';
import RootStackParamList from './routeType';

const RootStack: React.FC = (props: any) => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            presentation: 'transparentModal',
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardStyle: {backgroundColor: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
