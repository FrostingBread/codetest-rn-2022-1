import React from 'react';
import {Text, View} from 'react-native';

type Props = {};
type State = {};

class LoginScreen extends React.Component<Props, State> {
  state: State = {
    value: 0,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default LoginScreen;
