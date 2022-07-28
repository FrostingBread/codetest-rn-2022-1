import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import * as React from 'react';
import HomeScreen from '../screen/home/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screen/login/login';
import RootStackParamList from './routeType';
import CustomDrawerContent from '~/components/drawer';

const RootStack: React.FC = (props: any) => {
  const Stack = createStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator();

  const MainNav = () => (
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
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          swipeEnabled: false,
        }}
        initialRouteName="main">
        <Drawer.Screen name="main" component={MainNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
