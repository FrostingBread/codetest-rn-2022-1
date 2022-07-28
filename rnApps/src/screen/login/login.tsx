import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import AppBar from '~/components/general/appBar';
import {Colors} from '~/configure/theme';
import {AppContext, IAppContext} from '~/provider/appsContextProvider';
import RootStackParamList from '~/route/routeType';

enum FieldStatus {
  normal,
  error,
}

type Props = {
  navigation: StackScreenProps<RootStackParamList>['navigation'];
};
type State = {
  username: string | null;
  password: string | null;
  usernameFieldStatus: FieldStatus;
  passwordFieldStatus: FieldStatus;
};

class LoginScreen extends React.Component<Props, State> {
  state: State = {
    username: null,
    password: null,
    usernameFieldStatus: FieldStatus.normal,
    passwordFieldStatus: FieldStatus.normal,
  };

  onChange(value: string, inputName: string) {
    //@ts-ignore
    this.setState({[inputName]: value});
  }

  async onSubmit(context: IAppContext) {
    let status = FieldStatus.normal;
    try {
      //Field validation
      if (!!!this.state.username || !!!this.state.password) {
        this.setState({
          usernameFieldStatus: !!!this.state.username
            ? FieldStatus.error
            : FieldStatus.normal,
          passwordFieldStatus: !!!this.state.password
            ? FieldStatus.error
            : FieldStatus.normal,
        });
        throw 'Field cannot empty';
      }

      try {
        (await context.loginFC(this.state.username, this.state.password)) &&
          this.props.navigation.goBack();
      } catch (e) {
        this.setState({
          usernameFieldStatus: FieldStatus.error,
          passwordFieldStatus: FieldStatus.error,
        });
        throw e;
      }
    } catch (e: any) {
      Snackbar.show({
        text: e.toString(),
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <SafeAreaView style={{flex: 1}}>
            <AppBar {...this.props} isLoginScreen={true} />
            <View style={styles.container}>
              <View>
                <View>
                  <Text
                    style={[
                      styles.label,
                      this.state.usernameFieldStatus != FieldStatus.normal &&
                        styles.errorText,
                    ]}>
                    User Name
                  </Text>
                  <TextInput
                    style={[
                      styles.textFieldUserName,
                      this.state.usernameFieldStatus != FieldStatus.normal &&
                        styles.errorField,
                    ]}
                    autoCapitalize="none"
                    onChangeText={e => this.onChange(e, 'username')}
                  />
                </View>
                <Text
                  style={[
                    styles.label,
                    this.state.passwordFieldStatus != FieldStatus.normal &&
                      styles.errorText,
                  ]}>
                  Password
                </Text>
                <TextInput
                  style={[
                    styles.textFieldPassword,
                    this.state.passwordFieldStatus != FieldStatus.normal &&
                      styles.errorField,
                  ]}
                  autoCapitalize="none"
                  onChangeText={e => this.onChange(e, 'password')}
                  secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => this.onSubmit(context)}>
                  <View style={styles.submitBT}>
                    <Text style={styles.submitBTText}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        )}
      </AppContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginHorizontal: 12,
    color: Colors.lightDark,
  },
  textFieldUserName: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
    color: Colors.lightDark,
  },

  textFieldPassword: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
    color: Colors.lightDark,
  },
  submitBT: {
    borderWidth: 1,
    height: 40,
    marginHorizontal: 12,
    marginVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  submitBTText: {
    color: 'white',
  },

  errorField: {
    borderColor: 'red',
  },
  errorText: {color: 'red'},
});
export default LoginScreen;
