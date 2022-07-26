import {NavigationContainerProps, NavigationProp} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationAction} from '@react-navigation/routers';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RootStackParamList from '../../route/routeType';

type Props = {
  navigation: StackScreenProps<RootStackParamList, 'Home'>['navigation'];
};
type State = {};

class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push('Login');
          }}>
          <View>
            <Text> Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
